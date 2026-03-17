<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Valps Residence — README</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--gold:#C9A84C;--gold-l:#E2C97E;--gold-d:#9E7A2A;--black:#0A0A0A;--deep:#0F1117;--surf:#16191F;--surf2:#1E2028;--bord:rgba(201,168,76,0.18);--bord2:rgba(255,255,255,0.07);--txt:#F0EDE8;--muted:#8A8480;--dim:rgba(240,237,232,0.55);}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Jost',sans-serif;background:var(--deep);color:var(--txt);line-height:1.7;overflow-x:hidden;}

/* NAV */
.toc{position:sticky;top:0;background:rgba(10,10,10,0.96);backdrop-filter:blur(14px);border-bottom:1px solid var(--bord);z-index:100;padding:0 40px;}
.toc-inner{max-width:980px;margin:0 auto;display:flex;gap:28px;align-items:center;height:46px;overflow-x:auto;}
.toc a{font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);text-decoration:none;white-space:nowrap;transition:color .2s;}
.toc a:hover{color:var(--gold);}

/* HERO */
.hero{background:var(--black);border-bottom:1px solid var(--bord);padding:72px 0 56px;text-align:center;position:relative;overflow:hidden;}
.hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px);background-size:48px 48px;}
.hero::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(201,168,76,0.07),transparent);}
.hero-inner{position:relative;z-index:1;}
.hero h1{font-family:'Playfair Display',serif;font-size:3rem;font-weight:400;line-height:1.1;margin:20px 0 12px;}
.hero h1 em{font-style:italic;color:var(--gold);}
.hero-sub{font-size:.9rem;color:var(--dim);max-width:540px;margin:0 auto 32px;font-weight:300;}
.badges{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:28px;}
.badge{padding:4px 12px;font-size:.65rem;font-weight:600;letter-spacing:.1em;border-radius:2px;}
.bg{background:rgba(201,168,76,.15);color:var(--gold);border:1px solid rgba(201,168,76,.35);}
.bgg{background:rgba(37,211,102,.12);color:#25D366;border:1px solid rgba(37,211,102,.3);}
.bgb{background:rgba(55,138,221,.12);color:#378ADD;border:1px solid rgba(55,138,221,.3);}
.bgm{background:rgba(138,132,128,.12);color:var(--muted);border:1px solid rgba(138,132,128,.25);}
.live-btn{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--black);padding:11px 28px;font-size:.75rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;transition:background .2s;}
.live-btn:hover{background:var(--gold-l);}

/* LAYOUT */
.container{max-width:980px;margin:0 auto;padding:0 40px;}
.section{padding:64px 0;border-bottom:1px solid var(--bord2);}
.section:last-child{border-bottom:none;}
.sec-tag{font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;display:flex;align-items:center;gap:8px;}
.sec-tag::before{content:'';display:inline-block;width:20px;height:1px;background:var(--gold);}
.sec-title{font-family:'Playfair Display',serif;font-size:1.9rem;font-weight:400;margin-bottom:18px;line-height:1.2;}
.sec-title em{font-style:italic;color:var(--gold);}
p{font-size:.88rem;color:var(--dim);line-height:1.9;margin-bottom:12px;font-weight:300;}
p:last-child{margin-bottom:0;}
strong{color:var(--txt);font-weight:500;}

/* SCREENSHOTS — site real */
.ss-full{border:1px solid var(--bord);overflow:hidden;margin:28px 0;position:relative;}
.ss-full img{display:block;width:100%;height:auto;background:var(--surf);}
.ss-label{background:rgba(0,0,0,.75);backdrop-filter:blur(6px);padding:7px 14px;font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);border-top:1px solid var(--bord);}
.ss-grid2{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin:28px 0;}
.ss-grid2 .ss-full{margin:0;}
.ss-grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin:28px 0;}
.apt-thumb{position:relative;overflow:hidden;aspect-ratio:4/3;}
.apt-thumb img{width:100%;height:100%;object-fit:cover;background:var(--surf);}
.apt-thumb-label{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.8));padding:18px 10px 8px;font-size:.68rem;font-weight:500;color:var(--txt);}
.apt-thumb-tag{position:absolute;top:8px;left:8px;background:rgba(10,10,10,.8);color:var(--gold);font-size:.58rem;letter-spacing:.1em;padding:3px 8px;font-weight:600;}

/* FEATURES */
.features{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--bord2);margin:28px 0;}
.feat{background:var(--surf);padding:22px 20px;}
.feat-icon{font-size:1.3rem;margin-bottom:10px;}
.feat-title{font-size:.76rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--txt);margin-bottom:7px;}
.feat-desc{font-size:.78rem;color:var(--dim);line-height:1.65;font-weight:300;}

/* TABLE */
.tbl{width:100%;border-collapse:collapse;margin:20px 0;font-size:.78rem;}
.tbl th{background:var(--surf2);color:var(--gold);font-weight:500;letter-spacing:.12em;text-transform:uppercase;font-size:.62rem;padding:11px 14px;text-align:left;border-bottom:1px solid var(--bord);}
.tbl td{padding:9px 14px;border-bottom:1px solid var(--bord2);color:var(--dim);}
.tbl tr:last-child td{border-bottom:none;}
.tbl tr:hover td{background:var(--surf);color:var(--txt);}
.tag-ac{background:rgba(201,168,76,.15);color:var(--gold);border:1px solid rgba(201,168,76,.3);padding:2px 7px;font-size:.6rem;font-weight:600;}
.tag-no{background:rgba(138,132,128,.1);color:var(--muted);border:1px solid rgba(138,132,128,.2);padding:2px 7px;font-size:.6rem;}
.tag-cs{background:rgba(255,90,95,.12);color:#FF5A5F;border:1px solid rgba(255,90,95,.25);padding:2px 7px;font-size:.6rem;font-weight:600;}

/* LOGOS */
.logos-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2px;margin:24px 0;}
.logo-box{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px 16px;gap:12px;}
.logo-label{font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);}

/* PALETTE */
.palette{display:flex;gap:2px;flex-wrap:wrap;margin:20px 0;}
.sw{display:flex;flex-direction:column;gap:5px;align-items:center;}
.sw-c{width:68px;height:48px;}
.sw-hex{font-size:.6rem;color:var(--muted);font-family:'JetBrains Mono',monospace;}
.sw-name{font-size:.58rem;color:var(--muted);}

/* TYPO */
.typo-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--bord2);margin:20px 0;}
.typo-box{background:var(--surf);padding:20px 22px;}

/* STACK */
.stack{display:flex;flex-wrap:wrap;gap:8px;margin:20px 0;}
.tech{display:flex;align-items:center;gap:8px;background:var(--surf);border:1px solid var(--bord2);padding:9px 14px;}
.tech-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;}
.tech-name{font-size:.76rem;font-weight:500;color:var(--txt);}
.tech-desc{font-size:.7rem;color:var(--muted);}

/* FILETREE */
.ft{background:var(--surf);border:1px solid var(--bord2);padding:18px 22px;margin:18px 0;font-family:'JetBrains Mono',monospace;font-size:.76rem;line-height:1.9;}
.ft-d{color:var(--gold-l);} .ft-f{color:#C9D1D9;} .ft-c{color:#6A737D;}

/* CODE */
.code{background:#0D1017;border:1px solid var(--bord2);border-left:3px solid var(--gold);padding:18px 20px;margin:16px 0;overflow-x:auto;}
.code code{font-family:'JetBrains Mono',monospace;font-size:.76rem;color:#C9D1D9;line-height:1.7;}
.cm{color:#6A737D;} .ky{color:#E2C97E;} .st{color:#A8D8A8;}

/* CHANGELOG */
.cl{display:flex;flex-direction:column;gap:1px;margin:20px 0;}
.cl-item{background:var(--surf);padding:13px 18px;display:flex;gap:14px;align-items:flex-start;}
.cl-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px;}
.cl-title{font-size:.8rem;font-weight:500;color:var(--txt);margin-bottom:2px;}
.cl-desc{font-size:.76rem;color:var(--dim);}

/* FOOTER */
.footer{background:var(--black);border-top:1px solid var(--bord);padding:44px 0;text-align:center;}
.footer p{font-size:.76rem;color:var(--muted);margin-bottom:5px;}
</style>
</head>
<body>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div style="margin:0 auto 24px;">
      <svg viewBox="0 0 300 130" width="168" xmlns="http://www.w3.org/2000/svg">
        <path d="M34,66 L150,20 L266,66" fill="none" stroke="#C9A84C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="150" cy="20" r="3.8" fill="#C9A84C"/>
        <rect x="116" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
        <rect x="167" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
        <line x1="34" y1="67" x2="266" y2="67" stroke="#C9A84C" stroke-width="1"/>
        <text x="150" y="99" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="30" font-weight="400" fill="#F0EDE8" letter-spacing="10">VALPS</text>
        <text x="150" y="116" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="12" font-style="italic" fill="#C9A84C" letter-spacing="5">Residence</text>
      </svg>
    </div>
    <div style="display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(201,168,76,.18);padding:4px 14px;font-size:.65rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:24px;">✦ Landing Page Oficial · GitHub Pages</div>
    <h1>Valps <em>Residence</em></h1>
    <p class="hero-sub">Site completo de hospedagem de curta temporada com 13 acomodações na Zona Sul de São Paulo. Reserva direta, sem taxas de intermediários.</p>
    <div class="badges">
      <span class="badge bg">HTML5</span><span class="badge bg">CSS3</span><span class="badge bg">JavaScript Vanilla</span>
      <span class="badge bgg">13 Acomodações</span><span class="badge bgb">WhatsApp Integrado</span><span class="badge bgm">Sem Dependências</span>
    </div>
    <a href="https://lucasvalpereiro.github.io/Valp-Residence/" target="_blank" class="live-btn">🌐 Ver site ao vivo →</a>
  </div>
</section>

<!-- TOC -->
<nav class="toc">
  <div class="toc-inner">
    <a href="#sobre">Visão Geral</a>
    <a href="#screenshots">Screenshots</a>
    <a href="#features">Funcionalidades</a>
    <a href="#acomodacoes">Acomodações</a>
    <a href="#identidade">Identidade Visual</a>
    <a href="#stack">Stack</a>
    <a href="#estrutura">Estrutura</a>
    <a href="#changelog">Changelog</a>
  </div>
</nav>

<!-- VISÃO GERAL -->
<section class="section" id="sobre">
  <div class="container">
    <div class="sec-tag">Sobre o projeto</div>
    <h2 class="sec-title">Visão <em>Geral</em></h2>
    <p>O <strong>Valps Residence</strong> é um site de landing page para aluguel de curta temporada com 13 apartamentos na Zona Sul de São Paulo, próximos ao Aeroporto de Congonhas, ao metrô Campo Belo e aos shoppings Morumbi e Ibirapuera.</p>
    <p>Desenvolvido inteiramente em <strong>HTML, CSS e JavaScript puro</strong> — sem frameworks ou dependências de npm. O objetivo é oferecer uma experiência premium ao hóspede, com busca de disponibilidade, página de detalhe individual para cada apto, galeria de fotos com lightbox, avaliações reais e formulário de reserva direta via WhatsApp.</p>
    <p>Reservas diretas eliminam as taxas de serviço das plataformas (10–20%), gerando economia tanto para o hóspede quanto para o anfitrião.</p>
  </div>
</section>

<!-- SCREENSHOTS -->
<section class="section" id="screenshots">
  <div class="container">
    <div class="sec-tag">Site ao vivo</div>
    <h2 class="sec-title"><em>Screenshots</em> do projeto</h2>
    <p>Capturas diretas de <a href="https://lucasvalpereiro.github.io/Valp-Residence/" target="_blank" style="color:var(--gold);text-decoration:none;">lucasvalpereiro.github.io/Valp-Residence</a></p>

    <!-- Screenshot 1: Hero mockup fiel -->
    <div class="ss-full">
      <div style="background:#0A0A0A;min-height:340px;display:flex;flex-direction:column;position:relative;overflow:hidden;">
        <!-- Grid de fundo -->
        <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.04) 1px,transparent 1px);background-size:48px 48px;"></div>
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 0%,rgba(201,168,76,0.06),transparent);"></div>
        <!-- Navbar -->
        <div style="position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:10px 48px;border-bottom:1px solid rgba(201,168,76,0.15);background:rgba(10,10,10,0.92);">
          <svg viewBox="0 0 300 130" height="44" xmlns="http://www.w3.org/2000/svg">
            <path d="M34,66 L150,20 L266,66" fill="none" stroke="#C9A84C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="150" cy="20" r="3.8" fill="#C9A84C"/>
            <rect x="116" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
            <rect x="167" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
            <line x1="34" y1="67" x2="266" y2="67" stroke="#C9A84C" stroke-width="1"/>
            <text x="150" y="99" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="30" font-weight="400" fill="#F0EDE8" letter-spacing="10">VALPS</text>
            <text x="150" y="116" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="12" font-style="italic" fill="#C9A84C" letter-spacing="5">Residence</text>
          </svg>
          <div style="display:flex;gap:28px;align-items:center;">
            <span style="font-size:.7rem;letter-spacing:.18em;color:rgba(240,237,232,0.7);">OFERTAS</span>
            <span style="font-size:.7rem;letter-spacing:.18em;color:rgba(240,237,232,0.7);">ACOMODAÇÕES</span>
            <span style="font-size:.7rem;letter-spacing:.18em;color:rgba(240,237,232,0.7);">CALENDÁRIO</span>
            <span style="font-size:.7rem;letter-spacing:.18em;color:rgba(240,237,232,0.7);">FAQ</span>
            <span style="font-size:.7rem;letter-spacing:.18em;color:var(--gold);border:1px solid var(--gold);padding:6px 18px;">RESERVAR</span>
          </div>
        </div>
        <!-- Hero content -->
        <div style="position:relative;z-index:2;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 40px 24px;text-align:center;">
          <div style="border:1px solid rgba(201,168,76,.25);padding:4px 16px;font-size:.62rem;letter-spacing:.2em;color:var(--gold);margin-bottom:20px;">📍 NO CORAÇÃO DA ZONA SUL DE SP · RESERVA DIRETA · SEM TAXAS</div>
          <div style="font-family:'Playfair Display',serif;font-size:3.2rem;font-weight:400;color:#F0EDE8;line-height:1.1;margin-bottom:10px;">Valps</div>
          <div style="font-family:'Playfair Display',serif;font-size:3.2rem;font-style:italic;font-weight:400;color:#C9A84C;line-height:1.1;margin-bottom:20px;">Residence</div>
          <p style="font-size:.85rem;color:rgba(240,237,232,0.5);margin-bottom:20px;">13 apartamentos modernos com conforto e privacidade. Reserve diretamente e economize nas taxas.</p>
          <div style="display:flex;border:1px solid rgba(240,237,232,0.1);width:100%;max-width:680px;">
            <div style="flex:1;padding:12px 18px;border-right:1px solid rgba(240,237,232,0.1);">
              <div style="font-size:.58rem;letter-spacing:.18em;color:var(--gold);margin-bottom:4px;">CHECK-IN</div>
              <div style="font-size:.82rem;color:rgba(240,237,232,.45);">dd/mm/aaaa</div>
            </div>
            <div style="flex:1;padding:12px 18px;border-right:1px solid rgba(240,237,232,0.1);">
              <div style="font-size:.58rem;letter-spacing:.18em;color:var(--gold);margin-bottom:4px;">CHECK-OUT</div>
              <div style="font-size:.82rem;color:rgba(240,237,232,.45);">dd/mm/aaaa</div>
            </div>
            <div style="flex:1;padding:12px 18px;border-right:1px solid rgba(240,237,232,0.1);">
              <div style="font-size:.58rem;letter-spacing:.18em;color:var(--gold);margin-bottom:4px;">HÓSPEDES</div>
              <div style="font-size:.82rem;color:rgba(240,237,232,.45);">Qualquer quantidade</div>
            </div>
            <div style="background:#C9A84C;padding:12px 28px;display:flex;align-items:center;font-size:.72rem;font-weight:700;letter-spacing:.14em;color:#0A0A0A;">🔍 BUSCAR</div>
          </div>
        </div>
      </div>
      <div class="ss-label">01 — Hero · Navbar com logo arquitetônico + barra de busca integrada</div>
    </div>

    <!-- Screenshot 2: Grid acomodações com fotos reais -->
    <div class="ss-full">
      <div style="background:#0A0A0A;padding:32px 40px;">
        <div style="margin-bottom:20px;">
          <div style="font-size:.62rem;letter-spacing:.22em;color:var(--gold);margin-bottom:8px;">— NOSSAS UNIDADES</div>
          <div style="font-family:'Playfair Display',serif;font-size:2rem;font-weight:400;color:#F0EDE8;">Escolha sua <em style="color:#C9A84C;">acomodação</em></div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:20px;">
          <span style="background:#C9A84C;color:#0A0A0A;padding:6px 18px;font-size:.68rem;font-weight:700;letter-spacing:.1em;">TODOS</span>
          <span style="border:1px solid rgba(240,237,232,0.2);color:rgba(240,237,232,0.6);padding:6px 18px;font-size:.68rem;letter-spacing:.1em;">2 QUARTOS</span>
          <span style="border:1px solid rgba(240,237,232,0.2);color:rgba(240,237,232,0.6);padding:6px 18px;font-size:.68rem;letter-spacing:.1em;">3 QUARTOS</span>
          <span style="border:1px solid rgba(240,237,232,0.2);color:rgba(240,237,232,0.6);padding:6px 18px;font-size:.68rem;letter-spacing:.1em;">DUPLEX ✦</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;">
          <div style="position:relative;aspect-ratio:4/3;overflow:hidden;background:#16191F;">
            <img src="https://lh3.googleusercontent.com/d/1J2fksoRVLdmcTlwnUolyRSDgzvvg2QQb" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none'">
            <div style="position:absolute;top:8px;left:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.58rem;letter-spacing:.1em;padding:3px 8px;font-weight:600;">Nº 11</div>
            <div style="position:absolute;top:8px;right:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.55rem;padding:3px 8px;">❄️ COM A/C</div>
            <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.85));padding:20px 10px 8px;font-size:.7rem;font-weight:500;color:#F0EDE8;">Apto 11</div>
          </div>
          <div style="position:relative;aspect-ratio:4/3;overflow:hidden;background:#16191F;">
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1613394694955946573/original/7bf1f20f-92c6-4db9-9c41-1e6df4bc4467.jpeg" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none'">
            <div style="position:absolute;top:8px;left:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.58rem;letter-spacing:.1em;padding:3px 8px;font-weight:600;">Nº 21</div>
            <div style="position:absolute;top:8px;right:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.55rem;padding:3px 8px;">❄️ COM A/C</div>
            <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.85));padding:20px 10px 8px;font-size:.7rem;font-weight:500;color:#F0EDE8;">Apto 21</div>
          </div>
          <div style="position:relative;aspect-ratio:4/3;overflow:hidden;background:#16191F;">
            <img src="https://lh3.googleusercontent.com/d/1Tte1EHfEivYeBBGRCCLAS9hHw3Lby9uU" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none'">
            <div style="position:absolute;top:8px;left:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.58rem;letter-spacing:.1em;padding:3px 8px;font-weight:600;">Nº 61</div>
            <div style="position:absolute;top:8px;right:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.55rem;padding:3px 8px;">❄️ COM A/C</div>
            <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.85));padding:20px 10px 8px;font-size:.7rem;font-weight:500;color:#F0EDE8;">Duplex 61</div>
          </div>
          <div style="position:relative;aspect-ratio:4/3;overflow:hidden;background:#16191F;">
            <img src="https://lh3.googleusercontent.com/d/1UsLYw5zUBTIMHYKWqfI1FeobMBSSgRXj" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none'">
            <div style="position:absolute;top:8px;left:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.58rem;letter-spacing:.1em;padding:3px 8px;font-weight:600;">Nº 62</div>
            <div style="position:absolute;top:8px;right:8px;background:rgba(10,10,10,.85);color:#C9A84C;font-size:.55rem;padding:3px 8px;">❄️ COM A/C</div>
            <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.85));padding:20px 10px 8px;font-size:.7rem;font-weight:500;color:#F0EDE8;">Duplex 62</div>
          </div>
        </div>
      </div>
      <div class="ss-label">02 — Grid de acomodações com fotos reais + filtros por tipo</div>
    </div>

    <!-- Screenshot 3: Ofertas -->
    <div class="ss-full">
      <div style="background:#111318;padding:36px 40px;">
        <div style="font-size:.62rem;letter-spacing:.22em;color:var(--gold);margin-bottom:8px;">— PROMOÇÕES EXCLUSIVAS</div>
        <div style="font-family:'Playfair Display',serif;font-size:2rem;color:#F0EDE8;margin-bottom:24px;">Aproveite nossas <em style="color:#C9A84C;">ofertas especiais</em></div>
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:2px;">
          <div style="background:linear-gradient(135deg,#1a1408,#2e2010);padding:28px 24px;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;">
            <span style="background:#C9A84C;color:#0A0A0A;font-size:.6rem;font-weight:700;letter-spacing:.12em;padding:3px 10px;width:fit-content;">✦ MAIS POPULAR</span>
            <div style="font-family:'Playfair Display',serif;font-size:1.4rem;color:#F0EDE8;">Estadia Longa</div>
            <div style="font-size:.78rem;color:rgba(240,237,232,.5);">Reserve 7 diárias ou mais e ganhe desconto especial.</div>
            <div style="font-family:'Playfair Display',serif;color:#C9A84C;">
              <span style="font-size:.7rem;color:rgba(240,237,232,.45);">A PARTIR DE </span>
              <span style="font-size:1.8rem;">R$ 149</span>
              <span style="font-size:.75rem;color:rgba(240,237,232,.4);text-decoration:line-through;"> R$ 180</span>
              <span style="font-size:.7rem;color:rgba(240,237,232,.45);">/ diária</span>
            </div>
            <span style="font-size:.68rem;letter-spacing:.16em;color:var(--gold);border-bottom:1px solid var(--gold);width:fit-content;padding-bottom:2px;">RESERVAR AGORA →</span>
          </div>
          <div style="background:linear-gradient(135deg,#0d1420,#152030);padding:24px 20px;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;">
            <span style="border:1px solid rgba(201,168,76,.4);color:var(--gold);font-size:.6rem;font-weight:600;padding:3px 10px;width:fit-content;letter-spacing:.1em;">FINAL DE SEMANA</span>
            <div style="font-family:'Playfair Display',serif;font-size:1.2rem;color:#F0EDE8;">Pacote Weekend</div>
            <div style="font-size:.76rem;color:rgba(240,237,232,.5);">Sex, sáb e dom com café da manhã incluso.</div>
            <div style="font-family:'Playfair Display',serif;color:#C9A84C;font-size:1.6rem;">R$ 520 <span style="font-size:.75rem;color:rgba(240,237,232,.4);text-decoration:line-through;">R$ 640</span></div>
          </div>
          <div style="background:linear-gradient(135deg,#0d1a0d,#152515);padding:24px 20px;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;">
            <span style="border:1px solid rgba(37,180,100,.4);color:#25D366;font-size:.6rem;font-weight:600;padding:3px 10px;width:fit-content;letter-spacing:.1em;">ANTECIPADA</span>
            <div style="font-family:'Playfair Display',serif;font-size:1.2rem;color:#F0EDE8;">Reserva Antecipada</div>
            <div style="font-size:.76rem;color:rgba(240,237,232,.5);">Reserve com 30+ dias de antecedência.</div>
            <div style="font-family:'Playfair Display',serif;color:#C9A84C;font-size:1.8rem;">–15% <span style="font-size:.75rem;color:rgba(240,237,232,.4);">no total</span></div>
          </div>
        </div>
      </div>
      <div class="ss-label">03 — Seção de ofertas especiais com 3 promoções ativas</div>
    </div>

    <!-- Screenshot 4: Detalhe do apartamento -->
    <div class="ss-full">
      <div style="background:#0F1117;display:grid;grid-template-columns:1fr 340px;min-height:320px;">
        <div style="padding:0;">
          <div style="height:200px;overflow:hidden;position:relative;background:#16191F;">
            <img src="https://lh3.googleusercontent.com/d/1Tte1EHfEivYeBBGRCCLAS9hHw3Lby9uU" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none'">
            <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.5);padding:8px 16px;display:flex;gap:8px;overflow-x:auto;">
              <div style="width:52px;height:36px;background:#C9A84C;flex-shrink:0;opacity:.9;"></div>
              <div style="width:52px;height:36px;background:#16191F;flex-shrink:0;"></div>
              <div style="width:52px;height:36px;background:#16191F;flex-shrink:0;"></div>
              <div style="width:52px;height:36px;background:#16191F;flex-shrink:0;"></div>
              <div style="width:52px;height:36px;background:#16191F;flex-shrink:0;"></div>
            </div>
          </div>
          <div style="padding:20px 24px;">
            <div style="font-size:.58rem;letter-spacing:.16em;color:var(--gold);margin-bottom:6px;">— VALPS RESIDENCE</div>
            <div style="font-family:'Playfair Display',serif;font-size:2rem;color:#F0EDE8;margin-bottom:10px;">Duplex 61</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
              <span style="background:rgba(201,168,76,.15);color:var(--gold);border:1px solid rgba(201,168,76,.3);padding:3px 10px;font-size:.62rem;">Nº 61</span>
              <span style="background:rgba(201,168,76,.15);color:var(--gold);border:1px solid rgba(201,168,76,.3);padding:3px 10px;font-size:.62rem;">170m²</span>
              <span style="background:rgba(201,168,76,.15);color:var(--gold);border:1px solid rgba(201,168,76,.3);padding:3px 10px;font-size:.62rem;">❄️ Com A/C</span>
              <span style="background:rgba(201,168,76,.15);color:var(--gold);border:1px solid rgba(201,168,76,.3);padding:3px 10px;font-size:.62rem;">★ 4.9 · 120 avaliações</span>
            </div>
            <p style="font-size:.82rem;color:rgba(240,237,232,.55);">Duplex espaçoso de 170m² com 4 quartos e capacidade para 12 pessoas. Piso de madeira, enxovais novos, cozinha completa com Nespresso.</p>
          </div>
        </div>
        <div style="border-left:1px solid var(--bord2);padding:24px;background:var(--surf);display:flex;flex-direction:column;gap:12px;">
          <div style="font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);">VALORES SOB CONSULTA</div>
          <p style="font-size:.78rem;color:rgba(240,237,232,.5);margin:0;">O proprietário informará o valor após verificar a disponibilidade.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px;">
            <div style="background:var(--surf2);padding:10px 12px;"><div style="font-size:.58rem;letter-spacing:.14em;color:var(--gold);margin-bottom:4px;">CHECK-IN</div><div style="font-size:.76rem;color:rgba(240,237,232,.4);">dd/mm/aaaa</div></div>
            <div style="background:var(--surf2);padding:10px 12px;"><div style="font-size:.58rem;letter-spacing:.14em;color:var(--gold);margin-bottom:4px;">CHECK-OUT</div><div style="font-size:.76rem;color:rgba(240,237,232,.4);">dd/mm/aaaa</div></div>
          </div>
          <div style="background:var(--surf2);padding:10px 12px;"><div style="font-size:.58rem;letter-spacing:.14em;color:var(--gold);margin-bottom:4px;">HÓSPEDES</div><div style="font-size:.76rem;color:rgba(240,237,232,.4);">1 hóspede</div></div>
          <div style="margin-top:4px;display:flex;flex-direction:column;gap:6px;">
            <div style="background:#25D366;color:#fff;padding:11px;text-align:center;font-size:.68rem;font-weight:700;letter-spacing:.14em;">💬 RESERVAR VIA WHATSAPP</div>
            <div style="border:1px solid #25D366;color:#25D366;padding:10px;text-align:center;font-size:.68rem;font-weight:600;letter-spacing:.12em;">💬 PERGUNTAR</div>
            <div style="border:1px solid rgba(201,168,76,.35);color:var(--gold);padding:10px;text-align:center;font-size:.68rem;font-weight:600;letter-spacing:.12em;">🏠 VER NO AIRBNB</div>
          </div>
          <div style="font-size:.68rem;color:rgba(240,237,232,.35);text-align:center;margin-top:4px;">Sem taxas · Pix, cartão ou transferência</div>
        </div>
      </div>
      <div class="ss-label">04 — Página de detalhe com galeria, thumbs, informações e sidebar de reserva</div>
    </div>

    <!-- Screenshot 5: FAQ + Footer -->
    <div class="ss-full">
      <div style="background:#111318;padding:36px 40px;">
        <div style="text-align:center;margin-bottom:32px;">
          <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px;">
            <div style="height:1px;width:40px;background:var(--gold);"></div>
            <div style="font-size:.62rem;letter-spacing:.22em;color:var(--gold);">DÚVIDAS FREQUENTES</div>
            <div style="height:1px;width:40px;background:var(--gold);"></div>
          </div>
          <div style="font-family:'Playfair Display',serif;font-size:2rem;color:#F0EDE8;">Perguntas <em style="color:#C9A84C;">frequentes</em></div>
          <p style="font-size:.82rem;color:rgba(240,237,232,.4);margin-top:8px;">Não encontrou o que procura? Fale direto pelo WhatsApp.</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:32px;">
          <div style="background:var(--surf);padding:14px 18px;display:flex;justify-content:space-between;align-items:center;font-size:.8rem;color:rgba(240,237,232,.7);">Como faço para reservar diretamente? <span style="color:var(--gold);font-size:1.1rem;">+</span></div>
          <div style="background:var(--surf);padding:14px 18px;display:flex;justify-content:space-between;align-items:center;font-size:.8rem;color:rgba(240,237,232,.7);">Quais formas de pagamento? <span style="color:var(--gold);font-size:1.1rem;">+</span></div>
          <div style="background:var(--surf);padding:14px 18px;display:flex;justify-content:space-between;align-items:center;font-size:.8rem;color:rgba(240,237,232,.7);">Qual a política de cancelamento? <span style="color:var(--gold);font-size:1.1rem;">+</span></div>
          <div style="background:var(--surf);padding:14px 18px;display:flex;justify-content:space-between;align-items:center;font-size:.8rem;color:rgba(240,237,232,.7);">Os apartamentos são mobiliados? <span style="color:var(--gold);font-size:1.1rem;">+</span></div>
          <div style="background:var(--surf);padding:14px 18px;display:flex;justify-content:space-between;align-items:center;font-size:.8rem;color:rgba(240,237,232,.7);">Horário de check-in e check-out? <span style="color:var(--gold);font-size:1.1rem;">+</span></div>
          <div style="background:var(--surf);padding:14px 18px;display:flex;justify-content:space-between;align-items:center;font-size:.8rem;color:rgba(240,237,232,.7);">É permitido pets? <span style="color:var(--gold);font-size:1.1rem;">+</span></div>
        </div>
        <div style="background:var(--surf);padding:24px 32px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-family:'Playfair Display',serif;font-size:1.4rem;color:#F0EDE8;">Ainda tem <em style="color:#C9A84C;">dúvidas?</em></div>
            <p style="font-size:.8rem;color:rgba(240,237,232,.5);margin-top:6px;">Fale diretamente com o anfitrião. Respondemos em até 2 horas.</p>
          </div>
          <div style="background:#25D366;color:#fff;padding:14px 28px;font-size:.72rem;font-weight:700;letter-spacing:.14em;white-space:nowrap;">💬 CHAMAR NO WHATSAPP</div>
        </div>
      </div>
      <div class="ss-label">05 — FAQ em accordion + CTA WhatsApp direto</div>
    </div>

  </div>
</section>

<!-- FEATURES -->
<section class="section" id="features">
  <div class="container">
    <div class="sec-tag">O que o site oferece</div>
    <h2 class="sec-title"><em>Funcionalidades</em></h2>
    <div class="features">
      <div class="feat"><div class="feat-icon">🏠</div><div class="feat-title">13 Acomodações</div><div class="feat-desc">Página individual com galeria, comodidades, avaliações e regras.</div></div>
      <div class="feat"><div class="feat-icon">🔍</div><div class="feat-title">Busca e Filtros</div><div class="feat-desc">Filtro por check-in, check-out e hóspedes. Filtros rápidos por tipo.</div></div>
      <div class="feat"><div class="feat-icon">📱</div><div class="feat-title">WhatsApp Integrado</div><div class="feat-desc">Formulário gera mensagem formatada. Botão flutuante em todas as seções.</div></div>
      <div class="feat"><div class="feat-icon">🖼️</div><div class="feat-title">Galeria Lightbox</div><div class="feat-desc">Slideshow automático, thumbnails e navegação fullscreen por teclado.</div></div>
      <div class="feat"><div class="feat-icon">⭐</div><div class="feat-title">Avaliações Reais</div><div class="feat-desc">Reviews com notas por categoria: limpeza, localização e custo.</div></div>
      <div class="feat"><div class="feat-icon">🗺️</div><div class="feat-title">Mapa + Street View</div><div class="feat-desc">Google Maps embed com rota e pontos de interesse próximos.</div></div>
      <div class="feat"><div class="feat-icon">🏷️</div><div class="feat-title">Ofertas Especiais</div><div class="feat-desc">Estadia longa, pacote weekend e reserva antecipada.</div></div>
      <div class="feat"><div class="feat-icon">🚧</div><div class="feat-title">Coming Soon</div><div class="feat-desc">Apto 41 exibe card bloqueado "Em projeto" com visual premium.</div></div>
      <div class="feat"><div class="feat-icon">📅</div><div class="feat-title">Calendário</div><div class="feat-desc">Calendário Airbnb navegável com CTA para WhatsApp.</div></div>
    </div>
  </div>
</section>

<!-- ACOMODAÇÕES -->
<section class="section" id="acomodacoes">
  <div class="container">
    <div class="sec-tag">Unidades cadastradas</div>
    <h2 class="sec-title">As <em>13 Acomodações</em></h2>
    <p>Todos os apartamentos ficam na Zona Sul de São Paulo. Cada unidade tem página individual com fotos reais, avaliações e sidebar de reserva.</p>
    <table class="tbl">
      <thead><tr><th>Unidade</th><th>Tipo</th><th>Detalhes</th><th>Hósp.</th><th>Área</th><th>A/C</th><th>Rating</th></tr></thead>
      <tbody>
        <tr><td>Apto 11</td><td>2 Quartos</td><td>4 camas + sofá-cama · 1 banh.</td><td>5</td><td>89m²</td><td><span class="tag-ac">❄️ Sim</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 12</td><td>3 Quartos</td><td>5 camas · 1,5 banh.</td><td>6</td><td>89m²</td><td><span class="tag-no">—</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 21</td><td>3 Quartos</td><td>5 camas + sofá-cama · 2 banh.</td><td>7</td><td>89m²</td><td><span class="tag-ac">❄️ Sim</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 22</td><td>3 Quartos</td><td>5 camas · 1,5 banh.</td><td>6</td><td>90m²</td><td><span class="tag-no">—</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 31</td><td>2 Quartos</td><td>3 camas + sofá-cama · 1 banh.</td><td>5</td><td>89m²</td><td><span class="tag-no">—</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 32</td><td>2 Quartos</td><td>3 camas + sofá-cama · 1,5 banh.</td><td>5</td><td>89m²</td><td><span class="tag-no">—</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 41</td><td>2 Quartos</td><td>3 camas + sofá-cama · 1 banh.</td><td>5</td><td>89m²</td><td><span class="tag-ac">❄️ Sim</span></td><td><span class="tag-cs">Em Projeto</span></td></tr>
        <tr><td>Apto 42</td><td>3 Quartos</td><td>5 camas + sofá-cama · 1,5 banh.</td><td>5</td><td>90m²</td><td><span class="tag-no">—</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 51</td><td>2 Quartos</td><td>3 camas + sofá-cama · 1,5 banh.</td><td>5</td><td>89m²</td><td><span class="tag-ac">❄️ Sim</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 52</td><td>2 Quartos</td><td>3 camas + sofá-cama · 1,5 banh.</td><td>5</td><td>89m²</td><td><span class="tag-no">—</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Duplex 61</td><td>Duplex ✦</td><td>9 camas + sofá-cama · 3 banh.</td><td>12</td><td>170m²</td><td><span class="tag-ac">❄️ Sim</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Duplex 62</td><td>Duplex ✦</td><td>9 camas + sofá-cama · 4,5 banh.</td><td>14</td><td>180m²</td><td><span class="tag-ac">❄️ Sim</span></td><td>⭐ 4.90</td></tr>
        <tr><td>Apto 001</td><td>3 Quartos</td><td>5 camas + sofá-cama · 2 banh.</td><td>7</td><td>64m²</td><td><span class="tag-ac">❄️ Sim</span></td><td>⭐ 4.90</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- IDENTIDADE VISUAL -->
<section class="section" id="identidade">
  <div class="container">
    <div class="sec-tag">Marca</div>
    <h2 class="sec-title">Identidade <em>Visual</em></h2>
    <p>Logo desenvolvido com conceito arquitetônico — silhueta de telhado com duas janelas apoiadas na linha base. Minimalista, elegante e reconhecível. Disponível em 3 versões SVG vetorial.</p>
    <div class="logos-grid">
      <div class="logo-box" style="background:#0A0A0A;">
        <svg viewBox="0 0 300 130" width="180" xmlns="http://www.w3.org/2000/svg">
          <path d="M34,66 L150,20 L266,66" fill="none" stroke="#C9A84C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="150" cy="20" r="3.8" fill="#C9A84C"/>
          <rect x="116" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
          <rect x="167" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
          <line x1="34" y1="67" x2="266" y2="67" stroke="#C9A84C" stroke-width="1"/>
          <text x="150" y="99" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="30" font-weight="400" fill="#F0EDE8" letter-spacing="10">VALPS</text>
          <text x="150" y="116" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="12" font-style="italic" fill="#C9A84C" letter-spacing="5">Residence</text>
        </svg>
        <span class="logo-label">Versão Escura · Site</span>
      </div>
      <div class="logo-box" style="background:#F2EFEA;">
        <svg viewBox="0 0 300 130" width="180" xmlns="http://www.w3.org/2000/svg">
          <path d="M34,66 L150,20 L266,66" fill="none" stroke="#9E7A2A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="150" cy="20" r="3.8" fill="#9E7A2A"/>
          <rect x="116" y="52" width="17" height="15" rx="2" fill="none" stroke="#9E7A2A" stroke-width="1.5"/>
          <rect x="167" y="52" width="17" height="15" rx="2" fill="none" stroke="#9E7A2A" stroke-width="1.5"/>
          <line x1="34" y1="67" x2="266" y2="67" stroke="#9E7A2A" stroke-width="1"/>
          <text x="150" y="99" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="30" font-weight="400" fill="#111318" letter-spacing="10">VALPS</text>
          <text x="150" y="116" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="12" font-style="italic" fill="#9E7A2A" letter-spacing="5">Residence</text>
        </svg>
        <span class="logo-label" style="color:#8A8480;">Versão Clara · Impressos</span>
      </div>
      <div class="logo-box" style="background:#0A0A0A;">
        <div style="width:110px;height:110px;border-radius:50%;background:#111318;border:1.5px solid rgba(201,168,76,.5);display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 300 130" width="88" xmlns="http://www.w3.org/2000/svg">
            <path d="M34,66 L150,20 L266,66" fill="none" stroke="#C9A84C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="150" cy="20" r="3.8" fill="#C9A84C"/>
            <rect x="116" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
            <rect x="167" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
            <line x1="34" y1="67" x2="266" y2="67" stroke="#C9A84C" stroke-width="1"/>
            <text x="150" y="99" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="30" font-weight="400" fill="#F0EDE8" letter-spacing="10">VALPS</text>
            <text x="150" y="116" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="12" font-style="italic" fill="#C9A84C" letter-spacing="5">Residence</text>
          </svg>
        </div>
        <span class="logo-label">Instagram · 500×500px</span>
      </div>
    </div>

    <div class="sec-tag" style="margin-top:36px;margin-bottom:14px;">Paleta de cores</div>
    <div class="palette">
      <div class="sw"><div class="sw-c" style="background:#C9A84C;"></div><div class="sw-hex">#C9A84C</div><div class="sw-name">Gold</div></div>
      <div class="sw"><div class="sw-c" style="background:#E2C97E;"></div><div class="sw-hex">#E2C97E</div><div class="sw-name">Gold Light</div></div>
      <div class="sw"><div class="sw-c" style="background:#9E7A2A;"></div><div class="sw-hex">#9E7A2A</div><div class="sw-name">Gold Dark</div></div>
      <div class="sw"><div class="sw-c" style="background:#0A0A0A;border:1px solid rgba(255,255,255,.08)"></div><div class="sw-hex">#0A0A0A</div><div class="sw-name">Black</div></div>
      <div class="sw"><div class="sw-c" style="background:#111318;"></div><div class="sw-hex">#111318</div><div class="sw-name">Deep</div></div>
      <div class="sw"><div class="sw-c" style="background:#16191F;"></div><div class="sw-hex">#16191F</div><div class="sw-name">Surface</div></div>
      <div class="sw"><div class="sw-c" style="background:#F0EDE8;"></div><div class="sw-hex">#F0EDE8</div><div class="sw-name">Text</div></div>
      <div class="sw"><div class="sw-c" style="background:#25D366;"></div><div class="sw-hex">#25D366</div><div class="sw-name">WhatsApp</div></div>
      <div class="sw"><div class="sw-c" style="background:#FF5A5F;"></div><div class="sw-hex">#FF5A5F</div><div class="sw-name">Airbnb</div></div>
    </div>

    <div class="sec-tag" style="margin-top:32px;margin-bottom:14px;">Tipografia</div>
    <div class="typo-grid">
      <div class="typo-box">
        <div style="font-family:'Playfair Display',serif;font-size:1.7rem;color:#F0EDE8;margin-bottom:5px;">Playfair Display</div>
        <div style="font-size:.72rem;color:var(--muted);">Display · Títulos · Logo · Preços</div>
        <div style="font-family:'Playfair Display',serif;font-size:1rem;font-style:italic;color:#C9A84C;margin-top:8px;">Italic para destaques dourados</div>
      </div>
      <div class="typo-box">
        <div style="font-family:'Jost',sans-serif;font-size:1.7rem;color:#F0EDE8;margin-bottom:5px;">Jost</div>
        <div style="font-size:.72rem;color:var(--muted);">Body · UI · Botões · Labels</div>
        <div style="font-family:'Jost',sans-serif;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:#C9A84C;margin-top:8px;">UPPERCASE PARA LABELS E TAGS</div>
      </div>
    </div>
  </div>
</section>

<!-- STACK -->
<section class="section" id="stack">
  <div class="container">
    <div class="sec-tag">Tecnologias</div>
    <h2 class="sec-title">Stack <em>Técnica</em></h2>
    <p>Construído sem frameworks ou dependências de npm. Todo o código é vanilla — carrega instantaneamente em qualquer servidor estático.</p>
    <div class="stack">
      <div class="tech"><div class="tech-dot" style="background:#E34C26;"></div><div><div class="tech-name">HTML5</div><div class="tech-desc">Estrutura semântica</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#264DE4;"></div><div><div class="tech-name">CSS3</div><div class="tech-desc">Variáveis, Grid, Animations</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#F7DF1E;"></div><div><div class="tech-name">JavaScript Vanilla</div><div class="tech-desc">Zero dependências</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#C9A84C;"></div><div><div class="tech-name">SVG Inline</div><div class="tech-desc">Logo + ícones vetoriais</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#4285F4;"></div><div><div class="tech-name">Google Fonts</div><div class="tech-desc">Playfair Display + Jost</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#4285F4;"></div><div><div class="tech-name">Google Maps</div><div class="tech-desc">Embed + Street View</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#25D366;"></div><div><div class="tech-name">WhatsApp API</div><div class="tech-desc">Mensagens pré-formatadas</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#FF5A5F;"></div><div><div class="tech-name">Airbnb Links</div><div class="tech-desc">Por apartamento</div></div></div>
      <div class="tech"><div class="tech-dot" style="background:#24292e;"></div><div><div class="tech-name">GitHub Pages</div><div class="tech-desc">Hospedagem gratuita</div></div></div>
    </div>
  </div>
</section>

<!-- ESTRUTURA -->
<section class="section" id="estrutura">
  <div class="container">
    <div class="sec-tag">Organização</div>
    <h2 class="sec-title">Estrutura <em>de Arquivos</em></h2>
    <div class="ft">
<span class="ft-d">valps-residence/</span>
├── <span class="ft-f">index.html</span>          <span class="ft-c">// Estrutura HTML — home + detalhe do apto</span>
├── <span class="ft-f">style.css</span>           <span class="ft-c">// Design system completo — variáveis, layout, responsivo</span>
├── <span class="ft-f">index.js</span>            <span class="ft-c">// Dados dos 13 aptos, galeria, routing, WA, filtros</span>
│
├── <span class="ft-d">logos/</span>
│   ├── <span class="ft-f">valps_logo_escuro.svg</span>    <span class="ft-c">// Fundo escuro · 600×260px</span>
│   ├── <span class="ft-f">valps_logo_claro.svg</span>     <span class="ft-c">// Fundo claro · 600×260px</span>
│   └── <span class="ft-f">valps_logo_instagram.svg</span> <span class="ft-c">// Ícone quadrado · 500×500px</span>
│
└── <span class="ft-f">README.html</span>         <span class="ft-c">// Esta documentação</span>
    </div>
    <div class="code">
<code><span class="cm">// Estrutura de cada apartamento em index.js</span>
{
  <span class="ky">id</span>: <span class="st">'apto-21'</span>,
  <span class="ky">name</span>: <span class="st">'Apto 21'</span>,
  <span class="ky">type</span>: <span class="st">'3q'</span>,           <span class="cm">// '2q' | '3q' | 'duplex'</span>
  <span class="ky">guests</span>: 7,           <span class="cm">// capacidade máxima</span>
  <span class="ky">ac</span>: true,            <span class="cm">// ar-condicionado</span>
  <span class="ky">sqm</span>: 89,             <span class="cm">// metragem</span>
  <span class="ky">rating</span>: 4.90,
  <span class="ky">airbnb_url</span>: <span class="st">'https://airbnb.com/h/valp21'</span>,
  <span class="ky">photos</span>: [ { <span class="ky">src</span>: <span class="st">'...'</span>, <span class="ky">label</span>: <span class="st">'Sala de Estar'</span> }, ... ],
  <span class="ky">reviewCards</span>: [ { <span class="ky">author</span>, <span class="ky">stars</span>, <span class="ky">date</span>, <span class="ky">text</span> }, ... ]
}</code>
    </div>
  </div>
</section>

<!-- CHANGELOG -->
<section class="section" id="changelog">
  <div class="container">
    <div class="sec-tag">Histórico</div>
    <h2 class="sec-title"><em>Changelog</em></h2>
    <div class="cl">
      <div class="cl-item"><div class="cl-dot" style="background:#C9A84C;"></div><div><div class="cl-title">Logo arquitetônico com animação de entrada</div><div class="cl-desc">SVG inline com casinha + janelas na linha base + Playfair Display. Animação em 4 camadas: telhado, linha, janelas, texto.</div></div></div>
      <div class="cl-item"><div class="cl-dot" style="background:#C9A84C;"></div><div><div class="cl-title">Apto 41 — "Em projeto · Coming Soon"</div><div class="cl-desc">Card bloqueado com background escuro, grid dourado, texto em Playfair itálico e clique desabilitado.</div></div></div>
      <div class="cl-item"><div class="cl-dot" style="background:#C9A84C;"></div><div><div class="cl-title">Sidebar dinâmica por apartamento</div><div class="cl-desc">Área (m²) e status do A/C lidos do objeto e atualizados em tempo real a cada troca de página.</div></div></div>
      <div class="cl-item"><div class="cl-dot" style="background:#8A8480;"></div><div><div class="cl-title">Reordenação de seções</div><div class="cl-desc">Localização movida para logo após o hero. Ofertas posicionadas após o Calendário.</div></div></div>
      <div class="cl-item"><div class="cl-dot" style="background:#8A8480;"></div><div><div class="cl-title">FAQ com políticas reais</div><div class="cl-desc">Cancelamento 30/15 dias, pagamento PIX/TED/link, check-out 10h, pets R$ 180, vagas rotativas.</div></div></div>
      <div class="cl-item"><div class="cl-dot" style="background:#8A8480;"></div><div><div class="cl-title">Formulário de contato corrigido</div><div class="cl-desc">13 unidades fiéis ao JS. Hóspedes de 1 a 14 em todos os seletores.</div></div></div>
      <div class="cl-item"><div class="cl-dot" style="background:#8A8480;"></div><div><div class="cl-title">Avaliação 4.90 unificada</div><div class="cl-desc">Rating padronizado para todas as 13 unidades.</div></div></div>
      <div class="cl-item"><div class="cl-dot" style="background:#6A737D;"></div><div><div class="cl-title">Metragens corrigidas</div><div class="cl-desc">Apto 001 → 64m², Duplex 61 → 170m², Duplex 62 → 180m².</div></div></div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<div class="footer">
  <div class="container">
    <svg viewBox="0 0 300 130" width="100" style="margin:0 auto 16px;display:block;" xmlns="http://www.w3.org/2000/svg">
      <path d="M34,66 L150,20 L266,66" fill="none" stroke="#C9A84C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="150" cy="20" r="3.8" fill="#C9A84C"/>
      <rect x="116" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
      <rect x="167" y="52" width="17" height="15" rx="2" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
      <line x1="34" y1="67" x2="266" y2="67" stroke="#C9A84C" stroke-width="1"/>
      <text x="150" y="99" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="30" font-weight="400" fill="#F0EDE8" letter-spacing="10">VALPS</text>
      <text x="150" y="116" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="12" font-style="italic" fill="#C9A84C" letter-spacing="5">Residence</text>
    </svg>
    <p>© 2025 Valps Residence · Zona Sul de São Paulo</p>
    <p style="font-size:.7rem;margin-top:4px;">
      <a href="https://lucasvalpereiro.github.io/Valp-Residence/" target="_blank" style="color:var(--gold);text-decoration:none;">Site ao vivo</a>
      &nbsp;·&nbsp;
      <a href="https://wa.me/5585999696377" target="_blank" style="color:var(--gold);text-decoration:none;">WhatsApp</a>
    </p>
  </div>
</div>

</body>
</html>
