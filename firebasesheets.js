/**
 * ═══════════════════════════════════════════════════════
 * VALPS RESIDENCE — Firebase → Google Sheets
 * 
 * COMO INSTALAR:
 * 1. Abra sua planilha no Google Drive
 * 2. Menu: Extensões → Apps Script
 * 3. Cole este código inteiro substituindo o que tiver
 * 4. Clique em Salvar (💾)
 * 5. Execute a função "instalarGatilho" UMA VEZ
 * 6. Autorize as permissões quando solicitado
 * 
 * Depois, sempre que uma reserva chegar no Firebase,
 * ela aparecerá automaticamente na planilha!
 * ═══════════════════════════════════════════════════════
 */

// ── CONFIGURAÇÕES — altere apenas estes valores ──────────────────────────
const FIREBASE_PROJECT_ID = 'valps-residence';
const FIREBASE_API_KEY    = 'AIzaSyBxj1heAgzKm5G--GVCT35j7iMXcb5AjHY';
const NOME_ABA            = 'Reservas Firebase'; // nome da aba na planilha

// ── Cabeçalhos das colunas ───────────────────────────────────────────────
const CABECALHOS = [
  'ID', 'Data/Hora', 'Nome', 'Telefone', 'E-mail',
  'Apartamento', 'Check-in', 'Check-out', 'Hóspedes',
  'Mensagem', 'Canal', 'Status'
];

// ── Busca reservas do Firebase e sincroniza com a planilha ───────────────
function sincronizarReservas() {
  const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/reservas?key=${FIREBASE_API_KEY}&pageSize=500`;
  
  const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  const data = JSON.parse(response.getContentText());
  
  if (!data.documents) {
    Logger.log('Nenhuma reserva encontrada ainda.');
    return;
  }
  
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let aba     = ss.getSheetByName(NOME_ABA);
  
  // Criar aba se não existir
  if (!aba) {
    aba = ss.insertSheet(NOME_ABA);
    // Formatar cabeçalho
    const cabRow = aba.getRange(1, 1, 1, CABECALHOS.length);
    cabRow.setValues([CABECALHOS]);
    cabRow.setBackground('#C9A84C');
    cabRow.setFontColor('#000000');
    cabRow.setFontWeight('bold');
    aba.setFrozenRows(1);
    CABECALHOS.forEach((_, i) => aba.setColumnWidth(i + 1, 150));
  }
  
  // Pegar IDs já existentes na planilha
  const dados     = aba.getDataRange().getValues();
  const idsExist  = new Set(dados.slice(1).map(r => r[0]).filter(Boolean));
  
  let novas = 0;
  
  data.documents.forEach(doc => {
    const id     = doc.name.split('/').pop();
    if (idsExist.has(id)) return; // já existe, pula
    
    const f      = doc.fields || {};
    const ts     = doc.createTime ? new Date(doc.createTime).toLocaleString('pt-BR') : '';
    
    const linha = [
      id,
      ts,
      f.nome        ? f.nome.stringValue        : '',
      f.telefone    ? f.telefone.stringValue     : '',
      f.email       ? f.email.stringValue        : '',
      f.apartamento ? f.apartamento.stringValue  : '',
      f.checkin     ? f.checkin.stringValue      : '',
      f.checkout    ? f.checkout.stringValue     : '',
      f.hospedes    ? f.hospedes.stringValue     : '',
      f.mensagem    ? f.mensagem.stringValue     : '',
      f.canal       ? f.canal.stringValue        : 'site',
      f.status      ? f.status.stringValue       : 'pendente',
    ];
    
    aba.appendRow(linha);
    novas++;
  });
  
  Logger.log(`Sincronização concluída: ${novas} nova(s) reserva(s) adicionada(s).`);
  
  if (novas > 0) {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      `${novas} nova(s) reserva(s) adicionada(s) do Firebase!`,
      '✅ Valps Residence',
      5
    );
  }
}

// ── Instala gatilho para rodar a cada hora automaticamente ───────────────
function instalarGatilho() {
  // Remove gatilhos antigos para evitar duplicatas
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  
  // Novo gatilho: roda a cada hora
  ScriptApp.newTrigger('sincronizarReservas')
    .timeBased()
    .everyHours(1)
    .create();
  
  Logger.log('✅ Gatilho instalado! A planilha sincronizará com o Firebase a cada 1 hora.');
  SpreadsheetApp.getActiveSpreadsheet().toast(
    'Sincronização automática ativada! Dados chegam a cada 1 hora.',
    '✅ Firebase conectado',
    8
  );
  
  // Roda imediatamente uma vez
  sincronizarReservas();
}

// ── Botão manual de sincronização (opcional) ─────────────────────────────
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🔥 Firebase')
    .addItem('Sincronizar agora', 'sincronizarReservas')
    .addItem('Ativar automático (1h)', 'instalarGatilho')
    .addToUi();
}