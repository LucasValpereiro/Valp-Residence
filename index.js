/* ════════════════════════════════════════════════
   VALPS RESIDENCE — proposta v3 "Fio de Ouro"
   Pinheiro profundo · Creme · Dourado
════════════════════════════════════════════════ */
:root{
  --pine:#0A110D;          /* página escura */
  --moss:#0F1812;          /* superfície escura */
  --moss2:#17231B;         /* hover escuro */
  --cream:#F2EBDA;         /* seções claras */
  --paper:#E9E0CA;         /* superfície clara */
  --inkg:#15211A;          /* texto sobre claro */
  --gold:#C9A84C;
  --goldb:#E3C87D;
  --golddeep:#8F722C;
  --txt:#F0EAD9;
  --mut:#8FA08F;           /* apagado sobre escuro */
  --mutl:#6B755F;          /* apagado sobre claro */
  --line:rgba(201,168,76,.22);
  --linesoft:rgba(240,234,217,.09);
  --linelight:rgba(21,33,26,.14);
  --disp:'Fraunces',Georgia,serif;
  --sans:'Hanken Grotesk',system-ui,sans-serif;
  --mono:'Spline Sans Mono',monospace;
  --px:clamp(20px,6vw,96px);
  --ease:cubic-bezier(.22,1,.36,1);
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:var(--sans);background:var(--pine);color:var(--txt);overflow-x:hidden;-webkit-font-smoothing:antialiased;}
::selection{background:rgba(201,168,76,.35);}
:focus-visible{outline:1.5px solid var(--gold);outline-offset:3px;}
img{display:block;max-width:100%;}
button{font-family:inherit;}
a{-webkit-tap-highlight-color:transparent;}

/* grão */
body::after{content:'';position:fixed;inset:0;z-index:1900;pointer-events:none;opacity:.05;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}

/* ── BARRA DE PROGRESSO (topo) ── */
#progress{position:fixed;top:0;left:0;height:2px;width:100%;z-index:500;background:transparent;}
#progress i{display:block;height:100%;width:100%;background:linear-gradient(90deg,var(--golddeep),var(--gold),var(--goldb));transform-origin:left;transform:scaleX(0);}

/* ── O FIO (linha que acompanha o scroll) ── */
#thread{position:absolute;top:0;left:0;width:100%;z-index:60;pointer-events:none;overflow:visible;mix-blend-mode:normal;}
#thread .t-base{stroke:rgba(201,168,76,.13);}
#thread .t-draw{stroke:url(#goldgrad);filter:drop-shadow(0 0 6px rgba(201,168,76,.45));}
#thread path{fill:none;stroke-width:1.6;stroke-linecap:round;}
#thread .t-tip{fill:var(--goldb);filter:drop-shadow(0 0 8px rgba(227,200,125,.9));}
#thread .t-tip2{fill:none;stroke:var(--gold);stroke-width:1;opacity:.5;}
.t-node{fill:none;stroke:var(--gold);stroke-width:1.4;}
@media(max-width:960px){#thread{display:none;}}

/* ── NAV ── */
nav{position:fixed;top:0;left:0;right:0;z-index:400;display:flex;align-items:center;justify-content:space-between;
  padding:14px var(--px);transition:all .4s var(--ease);}
nav.solid{background:rgba(10,17,13,.88);backdrop-filter:blur(16px);border-bottom:1px solid var(--linesoft);padding:8px var(--px);}
.nav-logo{cursor:pointer;display:flex;}
.nav-logo svg{height:54px;display:block;transition:height .35s var(--ease);}
nav.solid .nav-logo svg{height:44px;}
nav ul{list-style:none;display:flex;gap:34px;align-items:center;}
nav ul a{position:relative;text-decoration:none;font-size:.7rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--mut);cursor:pointer;transition:color .25s;padding:4px 0;}
nav ul a:not(.cta)::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:1px;background:var(--gold);transform:scaleX(0);transform-origin:right;transition:transform .35s var(--ease);}
nav ul a:not(.cta):hover{color:var(--cream);}
nav ul a:not(.cta):hover::after{transform:scaleX(1);transform-origin:left;}
nav ul a.cta{background:var(--gold);color:var(--pine);padding:11px 26px;transition:all .3s var(--ease);}
nav ul a.cta:hover{background:var(--goldb);letter-spacing:.24em;}
@media(max-width:960px){nav ul{display:none;}}
.burger{display:none;appearance:none;background:none;border:1px solid var(--line);width:46px;height:46px;cursor:pointer;flex-direction:column;align-items:center;justify-content:center;gap:5px;transition:border-color .25s;}
.burger:hover{border-color:var(--gold);}
.burger i{display:block;width:18px;height:1.5px;background:var(--gold);}
@media(max-width:960px){.burger{display:flex;}}
#mnav{position:fixed;inset:0;z-index:950;background:rgba(7,12,9,.97);backdrop-filter:blur(12px);display:none;flex-direction:column;align-items:center;justify-content:center;gap:4px;}
#mnav.open{display:flex;animation:fadeIn .25s ease;}
#mnav a{font-family:var(--disp);font-size:1.6rem;font-weight:300;color:var(--cream);text-decoration:none;padding:9px 16px;cursor:pointer;transition:color .2s;}
#mnav a:hover{color:var(--goldb);}
#mnav a em{font-style:italic;color:var(--goldb);}
#mnav .cta-m{margin-top:22px;background:var(--gold);color:var(--pine);font-family:var(--sans);font-size:.76rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;padding:17px 42px;}
#mnav .mclose{position:absolute;top:18px;right:20px;width:44px;height:44px;border-radius:50%;background:none;border:1px solid var(--line);color:var(--cream);font-size:1.1rem;cursor:pointer;}
#mnav .mfoot{position:absolute;bottom:30px;font-family:var(--mono);font-size:.58rem;letter-spacing:.26em;text-transform:uppercase;color:var(--mut);}

/* ── WA FLOAT ── */
.wa-float{position:fixed;bottom:30px;right:30px;z-index:450;width:56px;height:56px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 32px rgba(37,211,102,.38);text-decoration:none;transition:transform .3s var(--ease);}
.wa-float:hover{transform:scale(1.1) rotate(8deg);}

/* ── HERO ── */
#hero{position:relative;min-height:100svh;display:flex;flex-direction:column;justify-content:center;padding:150px var(--px) 90px;overflow:hidden;}
.hero-bg{position:absolute;inset:0;background:
  radial-gradient(ellipse 90% 70% at 75% 0%,#15251A 0%,transparent 55%),
  radial-gradient(ellipse 70% 55% at 12% 100%,#121F16 0%,transparent 60%),
  var(--pine);}
.hero-bg::before{content:'';position:absolute;inset:0;
  background-image:repeating-linear-gradient(90deg,rgba(201,168,76,.045) 0 1px,transparent 1px 140px);
  mask-image:linear-gradient(to bottom,transparent,black 25%,black 80%,transparent);
  -webkit-mask-image:linear-gradient(to bottom,transparent,black 25%,black 80%,transparent);}
.hero-bg::after{content:'';position:absolute;right:-12vw;top:50%;transform:translateY(-50%);width:46vw;aspect-ratio:1;border:1px solid rgba(201,168,76,.12);border-radius:50%;
  background:radial-gradient(circle at 38% 32%,rgba(201,168,76,.07),transparent 65%);}
.hero-inner{position:relative;z-index:2;max-width:1280px;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:14px;font-family:var(--mono);font-size:.66rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:34px;}
.hero-eyebrow::before{content:'';width:46px;height:1px;background:var(--gold);}
.hero-h1{font-family:var(--disp);font-weight:300;font-size:clamp(2.6rem,7.2vw,6.4rem);line-height:1.02;letter-spacing:-.015em;}
.hero-h1 em{font-style:italic;font-weight:400;color:var(--goldb);}
.hero-row{display:flex;align-items:flex-end;justify-content:space-between;gap:48px;margin-top:46px;flex-wrap:wrap;}
.hero-sub{font-size:1.04rem;font-weight:300;line-height:1.85;color:var(--mut);max-width:46ch;}
.hero-sub b{color:var(--cream);font-weight:500;}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap;}
.btn{display:inline-flex;align-items:center;gap:12px;text-decoration:none;cursor:pointer;border:none;
  font-size:.74rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;padding:18px 34px;transition:all .3s var(--ease);}
.btn-gold{background:var(--gold);color:var(--pine);}
.btn-gold:hover{background:var(--goldb);transform:translateY(-2px);box-shadow:0 14px 36px rgba(201,168,76,.25);}
.btn-ghost{background:transparent;color:var(--cream);border:1px solid var(--line);}
.btn-ghost:hover{border-color:var(--gold);color:var(--gold);}
.btn-wa{background:#25D366;color:#fff;}
.btn-wa:hover{background:#1EBF5A;transform:translateY(-2px);box-shadow:0 14px 36px rgba(37,211,102,.25);}
.hero-stats{position:relative;z-index:2;display:flex;gap:0;margin-top:72px;border-top:1px solid var(--linesoft);padding-top:34px;flex-wrap:wrap;}
.hstat{padding-right:56px;margin-right:56px;border-right:1px solid var(--linesoft);}
.hstat:last-child{border-right:none;}
.hstat-n{font-family:var(--mono);font-size:2rem;color:var(--goldb);}
.hstat-l{font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--mut);margin-top:6px;}
.scroll-cue{position:absolute;bottom:30px;right:var(--px);left:auto;z-index:2;display:flex;flex-direction:column;align-items:center;gap:10px;font-family:var(--mono);font-size:.56rem;letter-spacing:.34em;text-transform:uppercase;color:var(--mut);}
.scroll-cue i{width:1px;height:52px;background:linear-gradient(to bottom,var(--gold),transparent);display:block;animation:cue 2.2s var(--ease) infinite;}
@keyframes cue{0%{transform:scaleY(0);transform-origin:top;}45%{transform:scaleY(1);transform-origin:top;}55%{transform:scaleY(1);transform-origin:bottom;}100%{transform:scaleY(0);transform-origin:bottom;}}

/* ── MARQUEE ── */
.marquee{overflow:hidden;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--moss);padding:16px 0;position:relative;z-index:2;}
.mq-track{display:flex;width:max-content;animation:mq 36s linear infinite;}
.marquee:hover .mq-track{animation-play-state:paused;}
.mq-track span{font-family:var(--mono);font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--mut);white-space:nowrap;padding:0 30px;position:relative;}
.mq-track span::after{content:'◆';position:absolute;right:-6px;top:2px;font-size:.5rem;color:var(--gold);}
.mq-track b{color:var(--goldb);font-weight:400;}
@keyframes mq{to{transform:translateX(-50%);}}

/* ── SEÇÕES ── */
section{position:relative;padding:130px var(--px);z-index:2;}
section.light{background:var(--cream);color:var(--inkg);}
section.light .sec-kicker{color:var(--golddeep);}
section.light .sec-kicker::before{background:var(--golddeep);}
section.light .sec-h em{color:var(--golddeep);}
section.light .sec-p{color:var(--mutl);}
.sec-kicker{font-family:var(--mono);font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);display:flex;align-items:center;gap:14px;margin-bottom:22px;}
.sec-kicker::before{content:'';width:40px;height:1px;background:var(--gold);}
.sec-h{font-family:var(--disp);font-weight:300;font-size:clamp(2.1rem,4.4vw,3.9rem);line-height:1.06;letter-spacing:-.01em;margin-bottom:22px;}
.sec-h em{font-style:italic;font-weight:400;color:var(--goldb);}
.sec-p{font-size:.97rem;font-weight:300;line-height:1.9;color:var(--mut);max-width:56ch;}
.sec-top{display:flex;justify-content:space-between;align-items:flex-end;gap:40px;margin-bottom:64px;flex-wrap:wrap;}

/* ── EDIFÍCIO (corte do prédio) ── */
#edificio{background:var(--pine);}
.building{max-width:980px;margin:0 auto;border:1px solid var(--line);background:linear-gradient(170deg,var(--moss),var(--pine) 70%);position:relative;}
.building::before{content:'';position:absolute;left:50%;top:-44px;transform:translateX(-50%);width:0;height:0;
  border-left:120px solid transparent;border-right:120px solid transparent;border-bottom:44px solid transparent;
  border-bottom-color:rgba(201,168,76,0);}
.b-roof{display:flex;justify-content:center;padding:26px 0 8px;}
.b-roof svg{width:200px;overflow:visible;}
.b-head{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 20px;border-bottom:1px solid var(--linesoft);}
.b-head-l{font-family:var(--mono);font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);}
.b-head-r{font-family:var(--disp);font-style:italic;font-size:.84rem;color:var(--mut);}
.b-floor{display:grid;grid-template-columns:120px 1fr;border-bottom:1px solid var(--linesoft);}
.b-floor:last-child{border-bottom:none;}
.b-label{display:flex;align-items:center;gap:10px;padding:0 0 0 30px;font-family:var(--mono);font-size:.66rem;letter-spacing:.2em;text-transform:uppercase;color:var(--mut);border-right:1px solid var(--linesoft);}
.b-label b{font-size:1.2rem;font-weight:400;color:var(--cream);}
.b-units{display:flex;}
.b-unit{flex:1;appearance:none;background:none;border:none;border-left:1px solid var(--linesoft);cursor:pointer;
  display:flex;flex-direction:column;align-items:flex-start;gap:5px;padding:24px 28px;text-align:left;position:relative;overflow:hidden;
  transition:background .3s;}
.b-unit:first-child{border-left:none;}
.b-unit::before{content:'';position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(201,168,76,.1) 50%,transparent 70%);transform:translateX(-110%);transition:transform .7s var(--ease);}
.b-unit:hover::before{transform:translateX(110%);}
.b-num{font-family:var(--mono);font-size:1.3rem;color:var(--cream);letter-spacing:.08em;transition:color .25s;}
.b-meta{font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);transition:color .25s;}
.b-unit:hover{background:rgba(201,168,76,.05);}
.b-unit:hover .b-num{color:var(--goldb);}
.b-unit:hover .b-meta{color:var(--gold);}
.b-unit.soon{cursor:default;opacity:.45;}
.b-unit.soon::before{display:none;}
.b-unit.soon:hover{background:none;}
.b-unit.soon:hover .b-num{color:var(--cream);}
.b-unit.soon:hover .b-meta{color:var(--mut);}
.b-ground{padding:14px 30px;font-family:var(--mono);font-size:.58rem;letter-spacing:.26em;text-transform:uppercase;color:var(--mut);border-top:1px solid var(--line);background:rgba(201,168,76,.04);text-align:center;}
@media(max-width:700px){
  .b-floor{grid-template-columns:74px 1fr;}
  .b-label{padding-left:16px;}
  .b-unit{padding:18px 16px;}
  .b-head{padding:10px 16px 16px;flex-direction:column;gap:4px;align-items:flex-start;}
}

/* ── UNIDADES (claro) ── */
#unidades.light .filtros{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:48px;}
.fbtn{background:transparent;border:1px solid var(--linelight);color:var(--mutl);padding:11px 26px;font-size:.68rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:all .25s;}
.fbtn:hover{border-color:var(--golddeep);color:var(--golddeep);}
.fbtn.on{background:var(--inkg);border-color:var(--inkg);color:var(--cream);}
.ugrid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.ucard{cursor:pointer;background:transparent;border:none;text-align:left;padding:0;font-family:inherit;color:inherit;}
.uimg{position:relative;aspect-ratio:4/3;overflow:hidden;background:linear-gradient(150deg,#DCD2B8,#CBBE9D);}
.uimg img{width:100%;height:100%;object-fit:cover;transition:transform 1.1s var(--ease),filter .5s;}
.ucard:hover .uimg img{transform:scale(1.06);}
.uimg::after{content:'';position:absolute;inset:0;box-shadow:inset 0 0 0 1px rgba(21,33,26,.12);pointer-events:none;}
.uplq{position:absolute;top:14px;left:14px;z-index:2;background:rgba(21,33,26,.85);backdrop-filter:blur(6px);color:var(--goldb);font-family:var(--mono);font-size:.64rem;letter-spacing:.16em;padding:7px 13px;}
.utag{position:absolute;top:14px;right:14px;z-index:2;font-size:.56rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:6px 11px;backdrop-filter:blur(6px);}
.utag.ac{background:rgba(201,168,76,.92);color:var(--pine);}
.utag.noac{background:rgba(242,235,218,.88);color:var(--inkg);}
.uinfo{padding:20px 4px 0;}
.uname{font-family:var(--disp);font-weight:400;font-size:1.45rem;display:flex;align-items:baseline;justify-content:space-between;gap:12px;}
.uname i{font-style:normal;font-family:var(--mono);font-size:.66rem;letter-spacing:.1em;color:var(--mutl);}
.udet{font-size:.8rem;color:var(--mutl);margin-top:6px;}
.ulink{display:inline-flex;align-items:center;gap:10px;margin-top:14px;font-size:.66rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--golddeep);border-bottom:1px solid rgba(143,114,44,.4);padding-bottom:3px;transition:gap .25s var(--ease);}
.ucard:hover .ulink{gap:18px;}
.ucard.hide{display:none;}
.uimg .ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;}
.uimg .ph svg{opacity:.25;}
@media(max-width:1100px){.ugrid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.ugrid{grid-template-columns:1fr;gap:36px;}}

/* ── LOCALIZAÇÃO ── */
#local{background:var(--pine);}
.loc-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:64px;align-items:start;}
.loc-addr{display:flex;align-items:center;gap:12px;padding:17px 20px;margin-bottom:16px;background:var(--moss);border-left:2px solid var(--gold);font-family:var(--mono);font-size:.86rem;letter-spacing:.05em;color:var(--txt);}
.loc-map{position:relative;border:1px solid var(--line);overflow:hidden;}
.loc-map iframe{display:block;width:100%;height:420px;border:none;filter:grayscale(40%) sepia(10%) contrast(1.05);}
.loc-map::after{content:'';position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 70px rgba(10,17,13,.55);}
.loc-actions{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap;}
.loc-actions .btn{padding:13px 22px;font-size:.66rem;}
.loc-feats{list-style:none;margin-top:34px;}
.loc-feats li{display:flex;align-items:center;gap:18px;padding:19px 0;border-bottom:1px solid var(--linesoft);font-size:1.05rem;color:var(--txt);font-weight:300;}
.loc-feats li:first-child{border-top:1px solid var(--linesoft);}
.loc-feats li b{font-family:var(--mono);font-size:.88rem;color:var(--goldb);font-weight:400;letter-spacing:.05em;min-width:86px;}
.poi-block{margin-top:48px;}
.poi-cat{font-family:var(--mono);font-size:.74rem;letter-spacing:.26em;text-transform:uppercase;color:var(--gold);margin:34px 0 8px;padding-bottom:12px;border-bottom:1px solid var(--line);}
.poi-row{display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:17px 0;border-bottom:1px solid var(--linesoft);text-decoration:none;transition:padding .25s var(--ease);}
.poi-row:hover{padding-left:10px;}
.poi-nm{font-size:1.12rem;color:var(--cream);font-weight:600;}
.poi-nm small{display:block;font-size:.84rem;color:var(--mut);font-weight:300;margin-top:4px;letter-spacing:.02em;}
.poi-d{font-family:var(--mono);font-size:.86rem;color:var(--goldb);white-space:nowrap;}
.poi-go{font-size:.72rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);white-space:nowrap;transition:color .2s;}
.poi-row:hover .poi-go{color:var(--gold);}
@media(max-width:1000px){.loc-grid{grid-template-columns:1fr;gap:44px;}}

/* ── OFERTAS (claro) ── */
.of-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;}
.of-card{position:relative;border:1px solid var(--linelight);background:var(--paper);padding:48px 44px;overflow:hidden;transition:transform .35s var(--ease),box-shadow .35s;}
.of-card.dk{background:linear-gradient(160deg,#13211A,#0A110D 75%);border-color:var(--pine);color:var(--cream);}
.of-card.dk .of-name{color:var(--cream);}
.of-card.dk .of-desc{color:var(--mut);}
.of-card.dk .of-pill{background:var(--gold);color:var(--pine);}
.of-card.dk .of-amount{color:var(--goldb);}
.of-card.dk .of-amount small{color:var(--mut);}
.of-card.dk .of-link{color:var(--goldb);border-color:rgba(227,200,125,.5);}
.of-card.dk .of-link:hover{color:var(--gold);border-color:var(--gold);}
.of-card.dk::after{border-color:rgba(201,168,76,.3);}
.of-card.gd{background:linear-gradient(160deg,#D9B85C,#C9A84C 60%,#B5933A);border-color:#B5933A;color:var(--pine);}
.of-card.gd .of-name{color:var(--pine);}
.of-card.gd .of-desc{color:rgba(21,33,26,.75);}
.of-card.gd .of-pill{background:var(--pine);color:var(--goldb);}
.of-card.gd .of-amount{color:var(--pine);}
.of-card.gd .of-amount small{color:rgba(21,33,26,.65);}
.of-card.gd .of-link{color:var(--pine);border-color:rgba(21,33,26,.55);}
.of-card.gd .of-link:hover{color:#070C09;border-color:#070C09;}
.of-card.gd::after{border-color:rgba(21,33,26,.25);}
.of-card:hover{transform:translateY(-5px);box-shadow:0 28px 60px rgba(21,33,26,.14);}
.of-card::after{content:'';position:absolute;right:-60px;bottom:-60px;width:200px;height:200px;border:1px solid rgba(143,114,44,.25);border-radius:50%;}
.of-pill{display:inline-block;font-family:var(--mono);font-size:.58rem;letter-spacing:.22em;text-transform:uppercase;background:var(--inkg);color:var(--goldb);padding:7px 15px;margin-bottom:22px;}
.of-name{font-family:var(--disp);font-weight:400;font-size:1.9rem;margin-bottom:10px;}
.of-desc{font-size:.9rem;color:var(--mutl);line-height:1.75;max-width:40ch;margin-bottom:20px;}
.of-amount{font-family:var(--disp);font-style:italic;font-size:2.5rem;color:var(--golddeep);line-height:1;}
.of-amount small{font-family:var(--mono);font-style:normal;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--mutl);display:block;margin-top:8px;}
.of-link{display:inline-flex;align-items:center;gap:10px;margin-top:26px;font-size:.7rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--inkg);border-bottom:1px solid var(--inkg);padding-bottom:3px;text-decoration:none;transition:gap .25s var(--ease),color .2s,border-color .2s;}
.of-link:hover{gap:18px;color:var(--golddeep);border-color:var(--golddeep);}
.avail{margin-top:28px;border:1px dashed rgba(143,114,44,.4);padding:30px 34px;display:flex;align-items:center;justify-content:space-between;gap:26px;flex-wrap:wrap;background:rgba(233,224,202,.5);}
.avail p{font-size:.88rem;color:var(--mutl);line-height:1.75;max-width:62ch;}
.avail p b{color:var(--inkg);}
@media(max-width:880px){.of-grid{grid-template-columns:1fr;}}

/* ── PAGAMENTOS ── */
#pag{background:var(--pine);}
.pay-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-bottom:22px;}
.pay-card{border:1px solid var(--linesoft);background:var(--moss);padding:38px 32px;display:flex;flex-direction:column;gap:14px;transition:border-color .3s,transform .3s var(--ease);}
.pay-card:hover{border-color:var(--line);transform:translateY(-4px);}
.pay-ic{width:46px;height:46px;border:1px solid var(--line);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--goldb);}
.pay-t{font-family:var(--disp);font-weight:400;font-size:1.35rem;}
.pay-d{font-size:.88rem;color:var(--mut);line-height:1.8;font-weight:300;flex:1;}
.pay-a{display:inline-flex;align-items:center;gap:9px;width:fit-content;font-size:.66rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--pine);background:var(--gold);padding:11px 19px;text-decoration:none;transition:background .2s,transform .2s var(--ease);}
.pay-a:hover{background:var(--goldb);transform:translateX(4px);}
.crypto{border:1px solid var(--line);background:linear-gradient(150deg,var(--moss),var(--pine) 70%);padding:46px;position:relative;overflow:hidden;}
.crypto::before{content:'';position:absolute;right:-80px;top:-80px;width:260px;height:260px;border:1px solid rgba(201,168,76,.16);border-radius:50%;}
.crypto-h{font-family:var(--disp);font-weight:300;font-size:2.2rem;margin-bottom:10px;}
.crypto-h em{font-style:italic;color:var(--goldb);}
.crypto-s{font-size:1rem;color:var(--mut);font-weight:300;margin-bottom:38px;max-width:72ch;line-height:1.8;}
.crypto-g{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.c-card{background:rgba(10,17,13,.55);border:1px solid var(--linesoft);padding:34px 30px;display:flex;align-items:center;gap:24px;transition:border-color .25s,transform .3s var(--ease);}
.c-card:hover{transform:translateY(-3px);}
.c-card:hover{border-color:var(--line);}
.c-logo{width:68px;height:68px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;}
.c-n{font-family:var(--disp);font-size:1.5rem;}
.c-tk{font-family:var(--mono);font-size:.78rem;letter-spacing:.24em;color:var(--goldb);margin:4px 0 10px;}
.c-a{font-size:.74rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);text-decoration:none;border-bottom:1px solid rgba(201,168,76,.35);padding-bottom:3px;}
.c-a:hover{color:var(--goldb);}
.crypto-note{margin-top:28px;font-family:var(--mono);font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--mut);display:flex;align-items:center;gap:10px;}
.crypto-note::before{content:'';width:26px;height:1px;background:var(--gold);}
@media(max-width:980px){.pay-grid,.crypto-g{grid-template-columns:1fr;}.crypto{padding:30px 22px;}}

/* ── CALENDÁRIO ── */
#calendario{background:var(--pine);border-top:1px solid var(--linesoft);}
.cal-wrap{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:26px;}
.cal-panel{border:1px solid var(--line);background:var(--moss);padding:30px;}
.cal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;}
.cal-mname{font-family:var(--disp);font-style:italic;font-size:1.25rem;color:var(--cream);text-transform:capitalize;}
.cal-navs{display:flex;gap:8px;}
.cal-nv{width:34px;height:34px;border:1px solid var(--linesoft);background:none;color:var(--mut);cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:all .2s;}
.cal-nv:hover{border-color:var(--gold);color:var(--gold);}
.cal-dow{display:grid;grid-template-columns:repeat(7,1fr);text-align:center;font-family:var(--mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--mut);margin-bottom:10px;}
.cal-days{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;}
.cal-d{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:.86rem;color:var(--txt);transition:background .15s;}
.cal-d.free:hover{background:var(--moss2);}
.cal-d.occ{background:rgba(201,168,76,.18);color:var(--goldb);text-decoration:line-through;text-decoration-color:rgba(227,200,125,.5);}
.cal-d.today{border:1px solid var(--gold);color:var(--goldb);}
.cal-d.empty{visibility:hidden;}
.cal-legend{display:flex;gap:26px;align-items:center;margin-top:18px;padding-top:16px;border-top:1px solid var(--linesoft);font-size:.74rem;color:var(--mut);flex-wrap:wrap;}
.cal-legend i{display:inline-block;width:13px;height:13px;margin-right:8px;vertical-align:-2px;}
.cal-legend .lg-occ i{background:rgba(201,168,76,.18);border:1px solid rgba(201,168,76,.4);}
.cal-legend .lg-free i{border:1px solid var(--linesoft);}
.cal-note{border:1px dashed rgba(201,168,76,.4);background:rgba(201,168,76,.04);padding:28px 32px;display:flex;align-items:center;justify-content:space-between;gap:26px;flex-wrap:wrap;}
.cal-note p{font-size:.92rem;color:var(--mut);line-height:1.85;max-width:64ch;}
.cal-note p b{color:var(--goldb);font-weight:600;}
@media(max-width:880px){.cal-wrap{grid-template-columns:1fr;}#cal-p2{display:none;}}

/* ── FAQ (claro) ── */
#faq.light .faq-wrap{max-width:860px;margin:0 auto;}
.fq{border-bottom:1px solid var(--linelight);cursor:pointer;padding:28px 6px;transition:padding .25s var(--ease);}
.fq:first-of-type{border-top:1px solid var(--linelight);}
.fq:hover{padding-left:16px;}
.fq-q{display:flex;justify-content:space-between;align-items:center;gap:20px;font-family:var(--disp);font-weight:400;font-size:1.18rem;color:var(--inkg);}
.fq-i{width:30px;height:30px;border:1px solid rgba(143,114,44,.45);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--golddeep);flex-shrink:0;transition:transform .4s var(--ease),background .25s;font-size:1rem;font-family:var(--sans);}
.fq.open .fq-i{transform:rotate(45deg);background:rgba(143,114,44,.12);}
.fq-a{max-height:0;overflow:hidden;transition:max-height .5s var(--ease),margin-top .3s;font-size:.92rem;color:var(--mutl);line-height:1.85;font-weight:300;max-width:70ch;}
.fq.open .fq-a{max-height:280px;margin-top:16px;}

/* ── CONTATO ── */
#contato{background:var(--pine);}
.ct-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:72px;align-items:start;}
.ct-side .sec-p{margin-bottom:34px;}
.ct-wa{display:flex;align-items:center;gap:18px;padding:24px;border:1px solid var(--linesoft);background:var(--moss);text-decoration:none;transition:border-color .25s;}
.ct-wa:hover{border-color:rgba(37,211,102,.5);}
.ct-wa-ic{width:50px;height:50px;border-radius:50%;background:rgba(37,211,102,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.ct-wa-t{font-size:.95rem;font-weight:600;color:var(--cream);}
.ct-wa-s{font-size:.74rem;color:var(--mut);margin-top:3px;}
.ct-form{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--linesoft);border:1px solid var(--line);}
.fg{background:var(--moss);padding:20px 24px;display:flex;flex-direction:column;gap:7px;transition:background .25s;position:relative;}
.fg:focus-within{background:var(--moss2);}
.fg.full{grid-column:1/-1;}
.fg label{font-family:var(--mono);font-size:.56rem;letter-spacing:.24em;text-transform:uppercase;color:var(--gold);}
.fg input,.fg select,.fg textarea{background:none;border:none;outline:none;color:var(--txt);font-family:var(--sans);font-size:.92rem;width:100%;}
.fg input::placeholder,.fg textarea::placeholder{color:var(--mut);}
.fg select option{background:var(--moss);}
.fg textarea{resize:vertical;min-height:84px;}
.fg input[type="date"]{color-scheme:dark;}
.ct-submit{grid-column:1/-1;background:var(--gold);color:var(--pine);border:none;padding:21px;font-size:.76rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;transition:background .25s,letter-spacing .3s var(--ease);}
.ct-submit:hover{background:var(--goldb);letter-spacing:.3em;}
@media(max-width:1000px){.ct-grid{grid-template-columns:1fr;gap:44px;}}
@media(max-width:640px){.ct-form{grid-template-columns:1fr;}}

/* ── FOOTER ── */
footer{background:#070C09;border-top:1px solid var(--line);padding:64px var(--px) 44px;position:relative;z-index:2;}
.ft-top{display:flex;justify-content:space-between;align-items:flex-start;gap:40px;flex-wrap:wrap;padding-bottom:40px;border-bottom:1px solid var(--linesoft);}
.ft-addr{font-family:var(--mono);font-size:.66rem;letter-spacing:.1em;color:var(--mut);line-height:2;}
.ft-links{display:flex;gap:30px;}
.ft-links a{font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--mut);text-decoration:none;transition:color .2s;}
.ft-links a:hover{color:var(--gold);}
.ft-bottom{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-top:26px;font-size:.72rem;color:var(--mut);flex-wrap:wrap;}
@media(max-width:700px){.ft-top,.ft-bottom{flex-direction:column;align-items:center;text-align:center;}}

/* ── MODAL DA UNIDADE ── */
#modal{position:fixed;inset:0;z-index:1500;display:none;}
#modal.open{display:block;}
.m-back{position:absolute;inset:0;background:rgba(7,12,9,.9);backdrop-filter:blur(8px);animation:fadeIn .3s ease;}
.m-panel{position:absolute;top:0;right:0;bottom:0;width:min(1080px,100%);background:var(--pine);border-left:1px solid var(--line);overflow-y:auto;overflow-x:hidden;animation:slideIn .5s var(--ease);}
@keyframes slideIn{from{transform:translateX(60px);opacity:0;}to{transform:translateX(0);opacity:1;}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
.m-close{position:sticky;top:0;z-index:5;display:flex;justify-content:space-between;align-items:center;padding:18px 30px;background:rgba(10,17,13,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--linesoft);}
.m-close b{font-family:var(--mono);font-size:.66rem;letter-spacing:.26em;text-transform:uppercase;color:var(--gold);font-weight:400;}
.m-x{appearance:none;background:none;border:1px solid var(--line);color:var(--cream);width:38px;height:38px;border-radius:50%;cursor:pointer;font-size:1rem;transition:all .25s;}
.m-x:hover{background:var(--gold);color:var(--pine);transform:rotate(90deg);}
.m-gal{position:relative;height:46vh;min-height:300px;background:var(--moss);overflow:hidden;}
.m-gal img{width:100%;height:100%;object-fit:cover;}
.m-gal-nav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;background:rgba(10,17,13,.6);backdrop-filter:blur(6px);border:1px solid var(--line);color:var(--goldb);font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .25s;}
.m-gal-nav:hover{background:var(--gold);color:var(--pine);}
.m-gal-nav.p{left:18px;}.m-gal-nav.n{right:18px;}
.m-gal-ct{position:absolute;top:16px;right:18px;font-family:var(--mono);font-size:.64rem;letter-spacing:.14em;color:var(--goldb);background:rgba(10,17,13,.7);border:1px solid var(--line);padding:6px 12px;}
.m-gal-lb{position:absolute;bottom:16px;left:18px;font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--cream);background:rgba(10,17,13,.7);padding:6px 12px;}
.m-thumbs{display:flex;gap:6px;padding:12px 18px;overflow-x:auto;background:var(--moss);border-bottom:1px solid var(--linesoft);scrollbar-width:thin;}
.m-th{width:62px;height:44px;flex-shrink:0;cursor:pointer;opacity:.5;border:1px solid transparent;transition:all .2s;background-size:cover;background-position:center;background-color:var(--moss2);}
.m-th.on{opacity:1;border-color:var(--gold);}
.m-th:hover{opacity:1;}
.m-body{padding:40px;display:grid;grid-template-columns:1.2fr .8fr;gap:44px;}
.m-body>*{min-width:0;}
.m-bk .fg input,.m-bk .fg select,.fg input,.fg select{min-width:0;max-width:100%;}
.m-name{font-family:var(--disp);font-weight:300;font-size:2.4rem;margin-bottom:10px;}
.m-badges{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px;}
.m-bdg{font-size:.66rem;letter-spacing:.08em;padding:7px 13px;border:1px solid var(--linesoft);color:var(--mut);}
.m-bdg.g{border-color:var(--line);color:var(--goldb);}
.m-desc{font-size:.94rem;font-weight:300;line-height:1.9;color:var(--mut);margin-bottom:30px;}
.m-sub{font-family:var(--disp);font-size:1.2rem;font-weight:400;margin:28px 0 16px;padding-top:26px;border-top:1px solid var(--linesoft);}
.m-hl{display:flex;flex-direction:column;gap:10px;}
.m-hl div{padding:13px 16px;background:var(--moss);border-left:2px solid var(--gold);font-size:.86rem;color:var(--mut);}
.m-rooms{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;}
.m-room{background:var(--moss);border:1px solid var(--linesoft);padding:15px;overflow:hidden;}
.m-rph{height:140px;margin:-15px -15px 13px;background-size:cover;background-position:center;cursor:pointer;position:relative;transition:filter .3s;}
.m-rph:hover{filter:brightness(1.12);}
.m-fullgal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
.mfg{aspect-ratio:4/3;background-size:cover;background-position:center;background-color:var(--moss2);cursor:pointer;border:1px solid var(--linesoft);position:relative;overflow:hidden;transition:transform .3s var(--ease),border-color .25s;}
.mfg:hover{transform:scale(1.02);border-color:var(--line);z-index:1;}
.mfg:first-child{grid-column:span 2;grid-row:span 2;}
.mfg i{position:absolute;left:8px;bottom:8px;font-style:normal;font-family:var(--mono);font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:var(--cream);background:rgba(10,17,13,.72);padding:4px 9px;opacity:0;transition:opacity .25s;}
.mfg:hover i{opacity:1;}
.m-room b{display:block;font-family:var(--mono);font-size:.58rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);font-weight:400;margin-bottom:6px;}
.m-room span{font-size:.8rem;color:var(--mut);}
.m-amen{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.m-amen div{font-size:.8rem;color:var(--mut);padding:11px 13px;background:var(--moss);border:1px solid var(--linesoft);}
.m-rev{background:var(--moss);border:1px solid var(--linesoft);padding:20px;margin-bottom:10px;}
.m-rev b{font-size:.84rem;color:var(--cream);}
.m-rev .st{color:var(--goldb);font-size:.72rem;letter-spacing:.12em;margin:4px 0 8px;}
.m-rev p{font-size:.82rem;color:var(--mut);line-height:1.7;font-weight:300;}
.m-aside{position:sticky;top:90px;align-self:start;border:1px solid var(--line);background:var(--moss);padding:28px;}
.m-rate{display:flex;align-items:baseline;gap:10px;margin-bottom:6px;}
.m-rate b{font-family:var(--disp);font-style:italic;font-size:2rem;color:var(--goldb);font-weight:400;}
.m-rate span{font-size:.74rem;color:var(--mut);}
.m-price-note{font-size:.78rem;color:var(--mut);line-height:1.7;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid var(--linesoft);}
.m-aside .btn{width:100%;justify-content:center;margin-bottom:10px;padding:16px;}
.btn-abnb{background:transparent;color:#FF5A5F;border:1px solid rgba(255,90,95,.55);}
.btn-abnb:hover{background:rgba(255,90,95,.1);border-color:#FF5A5F;transform:translateY(-2px);}
.m-bk{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--linesoft);border:1px solid var(--linesoft);margin-bottom:14px;}
.m-bk .fg{padding:13px 15px;}
.m-bk .fg.full{grid-column:1/-1;}
.m-feats{margin-top:18px;padding-top:18px;border-top:1px solid var(--linesoft);display:flex;flex-direction:column;gap:9px;}
.m-feats span{font-size:.78rem;color:var(--mut);display:flex;gap:10px;align-items:center;}
.m-feats span::before{content:'✓';color:var(--gold);font-size:.7rem;}
@media(max-width:880px){.m-body{grid-template-columns:1fr;padding:26px 20px;}.m-aside{position:static;}.m-name{font-size:1.8rem;}}

/* ── REVEAL SYSTEM ── */
.rv{opacity:0;transform:translateY(42px);transition:opacity .9s var(--ease),transform .9s var(--ease);transition-delay:var(--d,0s);}
.rv.in{opacity:1;transform:none;}
.rv-l{opacity:0;transform:translateX(-46px);transition:opacity .9s var(--ease),transform .9s var(--ease);transition-delay:var(--d,0s);}
.rv-l.in{opacity:1;transform:none;}
.rv-r{opacity:0;transform:translateX(46px);transition:opacity .9s var(--ease),transform .9s var(--ease);transition-delay:var(--d,0s);}
.rv-r.in{opacity:1;transform:none;}
.rv-clip{clip-path:inset(0 0 100% 0);transition:clip-path 1.1s var(--ease);transition-delay:var(--d,0s);}
.rv-clip.in{clip-path:inset(0 0 0% 0);}
.rv-scale{opacity:0;transform:scale(.94);transition:opacity .9s var(--ease),transform .9s var(--ease);transition-delay:var(--d,0s);}
.rv-scale.in{opacity:1;transform:scale(1);}
.rv-line{transform:scaleX(0);transform-origin:left;transition:transform 1.1s var(--ease);transition-delay:var(--d,0s);}
.rv-line.in{transform:scaleX(1);}

@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;}
  html{scroll-behavior:auto;}
  .rv,.rv-l,.rv-r,.rv-scale{opacity:1;transform:none;}
  .rv-clip{clip-path:none;}
  .rv-line{transform:none;}
  .mq-track{animation:none;}
  #thread{display:none;}
}
