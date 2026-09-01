
var GROUPS={YE:'Yarn Engineering',FE:'Fabric Engineering',WPE:'Wet Process Engineering',AE:'Apparel Engineering',YF:'Yarn + Fabric Engineering',WA:'Wet + Apparel Engineering'};
var DEPT_ICON={YE:'🧵',FE:'🧶',WPE:'🎨',AE:'🪡',YF:'🧵🧶',WA:'🎨'};
var LEVEL_META={
1:{sub:'1st Year · Foundation'},
2:{sub:'2nd Year · Core Basics'},
3:{sub:'3rd Year · Dept Core'},
4:{sub:'Final Year · Viva & Project'}};
/* ✅ Book-stack icon generator — Lab Reports = teal, Q-Bank = yellow */
var PAL_TEAL={d:'#0f766e',m:'#0d9488',l:'#14b8a6',p:'#ccfbf1'};
var PAL_GOLD={d:'#b45309',m:'#d97706',l:'#f59e0b',p:'#fef3c7'};
function bookSVG(l,c){
if(l===1)return '<svg viewBox="0 0 48 48"><rect x="10" y="19" width="28" height="9" rx="3" fill="'+c.l+'"/><rect x="31" y="21.5" width="5" height="4" rx="1.5" fill="'+c.p+'"/></svg>';
if(l===2)return '<svg viewBox="0 0 48 48"><rect x="11" y="13" width="26" height="8" rx="3" fill="'+c.m+'"/><rect x="30" y="15" width="5" height="4" rx="1.5" fill="'+c.p+'"/><rect x="9" y="23" width="30" height="9" rx="3" fill="'+c.l+'"/><rect x="32" y="25.5" width="5" height="4" rx="1.5" fill="'+c.p+'"/></svg>';
if(l===3)return '<svg viewBox="0 0 48 48"><rect x="13" y="8" width="22" height="7" rx="3" fill="'+c.d+'"/><rect x="28" y="10" width="5" height="3.5" rx="1.5" fill="'+c.p+'"/><rect x="11" y="16" width="26" height="8" rx="3" fill="'+c.m+'"/><rect x="30" y="18" width="5" height="4" rx="1.5" fill="'+c.p+'"/><rect x="9" y="25" width="30" height="9" rx="3" fill="'+c.l+'"/><rect x="32" y="27.5" width="5" height="4" rx="1.5" fill="'+c.p+'"/></svg>';
return '<svg viewBox="0 0 48 48"><path d="M24 2 L40 8.5 L24 15 L8 8.5 Z" fill="'+c.d+'"/><rect x="18" y="11" width="12" height="5" rx="2" fill="'+c.m+'"/><line x1="38" y1="9" x2="38" y2="15" stroke="'+c.d+'" stroke-width="2"/><circle cx="38" cy="16" r="2" fill="'+c.l+'"/><rect x="11" y="19" width="26" height="8" rx="3" fill="'+c.m+'"/><rect x="30" y="21" width="5" height="4" rx="1.5" fill="'+c.p+'"/><rect x="9" y="28" width="30" height="9" rx="3" fill="'+c.l+'"/><rect x="32" y="30.5" width="5" height="4" rx="1.5" fill="'+c.p+'"/></svg>';}
var TERMS=[['1-1','Level-1, Term-I','📐','gr1'],['1-2','Level-1, Term-II','🧪','gr2'],['2-1','Level-2, Term-I','🧵','gr3'],['2-2','Level-2, Term-II','🧶','gr4'],['3-1','Level-3, Term-I','🎨','gr5'],['3-2','Level-3, Term-II','🪡','gr6'],['4-1','Level-4, Term-I','🛡️','gr7'],['4-2','Level-4, Term-II','🎓','gr8']];

var NOTES={
'1-1':{
YF:['Math-I','Phy-I','Chem-I','BCE','NTF'],
WA:['Math-I','Phy-I','Chem-I','PSE','CP']},
'1-2':{
YF:['Math-II','Phy-II','Chem-II','PSE','EM','CP'],
WA:['Math-II','Phy-II','Chem-II','BCE','NTF']},
'2-1':{
AE:['AP-I','TP','Marketing','FEEE','WP-I'],
YE:['FYT','MMTF','SSS-I','FM-I','FME','Stat'],
FE:['Stat','FYT','MMTF','YM-I','WPP','FME'],
WPE:['WPrep','CTCA','AM-I','TP','Marketing','FEEE']},
'2-2':{
AE:['Stat','YM-I','FM-I','MMTF','TTQC','FME'],
YE:['SSS-II','TP','WP-I','AM-I','Marketing','FEEE'],
FE:['TP','WV-I','WP-I','AM-I','Marketing','FEEE'],
WPE:['YM-I','FM-I','TTQC','MMTF','FME','Stat']},
'3-1':{
AE:['AP-II','FSD','QM','ACM','ACE'],
YE:['Eco','LSS','FM-II','AM-II','WP-II','IM'],
FE:['Eco','YM-II','Knit-I','WP-II','AM-II','IM'],
WPE:['TC-I','ACWP','CDP','TCP','FSD','ACM','ACE']},
'3-2':{
AE:['AWDP','YM-II','FM-II','WP-II','IM','Eco'],
YE:['ACYM','PCS','FSD','UM','ACM','ACE'],
FE:['ACFM','FSD','WV-II','ACM','ACE'],
WPE:['WPM','YM-II','FM-II','AM-II','Eco','IM']},
'4-1':{
AE:['Merch','CIAB','APPC','ACAM','CC','ES'],
YE:['Eco','MYM','SYM','FTQC','TAM','Soc'],
FE:['Soc','FTQC','KFA (Pr)','Knit-II','SFP','TAM'],
WPE:['TC-II','TF','TFT','ES','TAM','PPC']},
'4-2':{
AE:['SAP','IEAP','CAI','Soc','AE Industrial Attachment','AE Project Work','AE Comprehensive Viva'],
YE:['TT','ES','PPC','EPD','YE Industrial Attachment','YE Project Work','YE Comprehensive Viva'],
FE:['NW','TT','ES','PPC','FE Industrial Attachment','FE Project Work','FE Comprehensive Viva'],
WPE:['SWP','TQCFT','Soc','WPE Industrial Attachment','WPE Project Work','WPE Comprehensive Viva']}};

var REPORTS={
1:['Phy-I (Pr)','Phy-II (Pr)','Chem-I (Pr)','Chem-II (Pr)','BCE (Pr)','ED (Pr)','MSP (Pr)','CP (Pr)'],
2:['AP-I (Pr)','PM-I (Pr)','FEEE (Pr)','WP-I (Pr)','YM-I (Pr)','FM-I (Pr)','TTQC (Pr)','FME (Pr)','FYT (Pr)','SSS-I (Pr)','WPP (Pr)','AM-I (Pr)','WPrep (Pr)'],
3:['AP-II (Pr)','PM-II (Pr)','FSD (Pr)','LSS (Pr)','FM-II (Pr)','AM-II (Pr)','WP-II (Pr)','TC-I (Pr)','ACWP (Pr)','Knit-I (Pr)','YM-II (Pr)','WPM (Pr)'],
4:['PM-IV (Pr)','ACAM (Pr)','MYM (Pr)','FTQC (Pr)','KFA (Pr)','Knit-II (Pr)','SFP (Pr)','NW (Pr)','TC-II (Pr)','TF (Pr)','TQCFT (Pr)','AWDP (Pr)','PM-III (Pr)']
};
var QBANK={1:['All QB (Level-1)'],2:['All QB (Level-2)','QB Till 2019','Online (2021)'],3:['All QB (Level-3)','QB 2021'],4:['QB','QB-IPE (2022)']};

var FILES={
'2-2|AE|MMTF':[
{t:'MMTF by AAR',u:'https://drive.google.com/file/d/1UfvbAKMz44EF0KHV0WtPXSHwwBunmQo2/view?usp=sharing'},
{t:'MMTF (Lingkon Dey – CTEC-14)',u:'https://drive.google.com/file/d/1WElSvq9UbJrHNq1yYBlVdLXALIotTzIv/view?usp=sharing'},
{t:'MMTF ~ Nishat Vhai',u:'https://drive.google.com/file/d/18dNv4JqrsGA3GomnXIpNbZZv3Av-s02c/view?usp=sharing'}]
};

var NOTICES=[{t:'Level-2 Term-1 class routine published',d:'Aug 20, 2026'},{t:'Wet Process Dept: lab batch division',d:'Aug 18, 2026'},{t:'Library opening hours updated',d:'Aug 10, 2026'},{t:'Mid-term exam schedule released',d:'Aug 5, 2026'}];
var ROUTINES=[{t:'Exam Schedule-2026: Level-2 Term-2',d:'Aug 19, 2026'},{t:'Level-3 Term-1 Exam Routine',d:'Jun 30, 2026'},{t:'Level-1 Term-2 Exam Routine',d:'Jun 30, 2026'}];
var RESULTS=[{t:'Result: BSc Textile (Yarn) L-2 T-1',d:'Aug 20, 2026'},{t:'Result: BSc Textile (Fabric) L-3 T-1',d:'Aug 18, 2026'},{t:'Revised Result L-1 T-2',d:'Aug 4, 2026'}];
var PHONES=[
{n:'মোঃ ছোলাইমান',p:'অধ্যক্ষ',ph:'01686907490',c:'teacher'},{n:'মোঃ ফরহাদ ইবনে আল ইমাম',p:'সহকারী অধ্যাপক',ph:'01720962222',c:'teacher'},{n:'মোঃ কামাল হোসেন',p:'সহকারী অধ্যাপক',ph:'01725469614',c:'teacher'},{n:'মোঃ আমিনুল ইসলাম',p:'প্রভাষক',ph:'01717486348',c:'teacher'},{n:'মোঃ মোস্তাফিজুর রহমান',p:'প্রভাষক',ph:'01747477878',c:'teacher'},{n:'মোঃ আব্দুর রহিম',p:'ইন্সট্রাক্টর',ph:'01730960028',c:'teacher'},{n:'মোঃ মোন্তাজ আলী',p:'প্রভাষক',ph:'01712998582',c:'teacher'},{n:'মোঃ জাহিদ মাহমুদ',p:'প্রভাষক',ph:'01767586247',c:'teacher'},{n:'রেজওয়ানা পারভীন',p:'প্রভাষক',ph:'01749868446',c:'teacher'},{n:'মোঃ আশরাফুল আমান',p:'প্রভাষক',ph:'01685727419',c:'teacher'},{n:'মোছাঃ মাহফুজা আক্তার',p:'প্রভাষক',ph:'01756811899',c:'teacher'},{n:'আসিফ হাসান',p:'ইন্সট্রাক্টর',ph:'01911232585',c:'teacher'},{n:'শাহ্ মোঃ নুরুল আহসান',p:'ইন্সট্রাক্টর',ph:'01818506055',c:'teacher'},{n:'মোছাঃ মুনমুন মোস্তফা',p:'সহকারী ইন্সট্রাক্টর',ph:'01719025305',c:'teacher'},{n:'মোঃ মেহেদী হাসান',p:'জুনিয়র ইন্সট্রাক্টর',ph:'01716131415',c:'teacher'},{n:'মোঃ নাজমুল আহসান',p:'জুনিয়র ইন্সট্রাক্টর',ph:'01747896065',c:'teacher'},{n:'জুবায়ের আল নোমান',p:'জুনিয়র ইন্সট্রাক্টর',ph:'01635848879',c:'teacher'},{n:'মোঃ আব্দুল মজিদ',p:'রেজিস্ট্রার',ph:'01712639207',c:'staff'},{n:'মোঃ আবুল কালাম আজাদ',p:'ফোরমান',ph:'01712607349',c:'staff'},{n:'মোঃ আতিকুজ্জামান',p:'ফোরমান',ph:'01714958456',c:'staff'},{n:'প্রভাত চন্দ্র রায়',p:'ফটো টেকনিশিয়ান',ph:'01757991055',c:'support'},{n:'মোঃ আল মাসুদ খাঁন',p:'ফিজিক্যাল ইন্সট্রাক্টর',ph:'01723455894',c:'staff'},{n:'মোঃ হাসিবুর রহমান',p:'কম্পিউটার অপারেটর',ph:'01758516174',c:'staff'},{n:'আব্দুল করিম',p:'টেইলার মাস্টার',ph:'01715483142',c:'support'},{n:'মোঃ কামরুজ্জামান',p:'হিসাব রক্ষক',ph:'01741539090',c:'staff'},{n:'মোঃ আরিফুল ইসলাম',p:'উচ্চমান সহকারী',ph:'01914868990',c:'staff'},{n:'মোঃ রহমত আলী',p:'স্টোর কিপার',ph:'01714865461',c:'staff'},{n:'আলমগীর হোসেন',p:'আর্টিস্ট ডিজাইনার',ph:'01744982483',c:'support'},{n:'মোঃ কামরুজ্জামান',p:'ইলেক্ট্রিশিয়ান',ph:'01714923666',c:'support'},{n:'মোঃ আশরাফুল ইসলাম',p:'টেকনিক্যাল এ্যাসিসটেন্ট',ph:'01729979602',c:'support'},{n:'মোছাঃ সোহেলা আক্তার',p:'টেকনিক্যাল এ্যাসিসটেন্ট',ph:'01718050827',c:'support'},{n:'মোছাঃ রাবেয়া খাতুন',p:'টেকনিক্যাল এ্যাসিসটেন্ট',ph:'01737552331',c:'support'},{n:'মোঃ আতিকুল ইসলাম',p:'বয়লার অপারেটর',ph:'01635377220',c:'support'},{n:'মোঃ শাহীন আক্তার',p:'ড্রাইভার',ph:'01720332827',c:'support'},{n:'মোঃ আব্দুল্লাহ আল হাদি',p:'লাইব্রেরি এ্যাসিসটেন্ট',ph:'01816651660',c:'staff'},{n:'মোঃ আবুল কালাম আজাদ',p:'লাইব্রেরি এ্যাসিসটেন্ট',ph:'01571782008',c:'staff'},{n:'ইকবাল হোসেন',p:'অফিস সহায়ক',ph:'01790439983',c:'support'},{n:'মোছাঃ হাসনা হেনা',p:'অফিস সহায়ক',ph:'01714332282',c:'support'},{n:'মোঃ মাহে আলম খাঁন',p:'পাম্প অপারেটর',ph:'01711968710',c:'support'},{n:'মোঃ জাকির হোসেন',p:'নিরাপত্তা প্রহরী',ph:'01785463668',c:'support'},{n:'মোঃ আলমগীর হোসেন',p:'নিরাপত্তা প্রহরী',ph:'01785463668',c:'support'},{n:'মোঃ সাইফুল ইসলাম',p:'নিরাপত্তা প্রহরী',ph:'01714332283',c:'support'},{n:'মোঃ মোকলেছুর রহমান',p:'নিরাপত্তা প্রহরী',ph:'01736947074',c:'support'},{n:'মোঃ নাসির উদ্দিন',p:'বাবুর্চি',ph:'01729486553',c:'support'},{n:'মোঃ তোতা মিয়া',p:'সহকারী বাবুর্চি',ph:'01749148812',c:'support'},{n:'সালেহা বেগম',p:'মালি',ph:'01747583846',c:'support'}];
var JOKES=['Why did the yarn break up with the fabric? — Too much tension in the relationship!','What do you call a weaver who is great at maths? A loom-atician!','Teacher: Why are you sleeping in class? Student: Sir, testing the fabric handle… in my dream!','Why don\'t textile students get lost? They always follow the warp way!'];
var TEXKB=[{k:['cotton'],a:'Cotton = natural cellulose fibre (Gossypium). Breathable, absorbent, comfortable — king of natural fibres.'},{k:['ne','count','english'],a:'Ne = number of 840-yd hanks per lb of yarn. Indirect system: higher Ne = finer. Ne × Tex ≈ 590.5.'},{k:['tex'],a:'Tex = grams per 1000 m of yarn. Direct system: higher Tex = coarser. Tex ≈ 590.5 / Ne.'},{k:['warp'],a:'Warp = lengthwise yarns, held on beam, usually stronger & more twisted.'},{k:['weft','filling'],a:'Weft = crosswise yarn inserted across the warp during weaving.'},{k:['weaving'],a:'Weaving = interlacing warp & weft at right angles. Basic weaves: plain, twill, satin.'},{k:['knitting'],a:'Knitting = interlooping of yarns → stretchy fabric. Types: weft & warp knitting.'},{k:['mercer'],a:'Mercerization = cotton treated with strong NaOH under tension → lustre, strength & dye uptake increase.'},{k:['carding'],a:'Carding = opening tufts into thin web & forming sliver; removes short fibres/impurities.'}];
var INFO={library:{h:'🏛️ Library',e:'🏛️',c:[{t:'📚 E-Book Corner',b:'Sample card.'},{t:'🗞️ Past Papers',b:'Old question papers.'},{t:'🪑 Reading Room',b:'Library hours.'}]},courses:{h:'🎁 Free Courses',e:'🍎',c:[{t:'🎁 Start Learning Today',b:'Free curated playlists.'},{t:'🧵 Basic Spinning',b:'Sample.'},{t:'🧶 Weaving Basics',b:'Sample.'},{t:'🎨 Dyeing & Finishing Intro',b:'Sample.'}]}};
var SUBMIT_FORM_URL='';

var app=document.getElementById('app'),stack=[],cur={v:'home'},pins=JSON.parse(localStorage.getItem('ptec_pins')||'[]'),ji=0,cnt=0,lastCtx=null;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1});
/* =========================================================
   PTEC NOTEBOT — FINAL URL ROUTING SYSTEM
   Clean URLs + Direct Links + Refresh + Back/Forward
   Netlify SPA compatible
   ========================================================= */

function slugify(s){
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/&/g,'and')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'');
}

function termKeyFromPath(s){
  var m=String(s||'').match(/^L(\d+)T(\d+)$/i);
  return m ? (Number(m[1])+'-'+Number(m[2])) : null;
}

function termPath(k){
  var a=String(k||'').split('-');
  return a.length===2 ? '/notes/L'+a[0]+'T'+a[1] : '/notes';
}

function routeFromView(v,p){
  p=p||{};

  if(v==='home') return '/';
  if(v==='notes') return '/notes';

  if(v==='dept' && p.k) return termPath(p.k);

  if(v==='subjects' && p.k && p.g){
    return termPath(p.k)+'/'+encodeURIComponent(p.g);
  }

  if(v==='files' && p.k && p.g && p.s){
    return termPath(p.k)+'/'+encodeURIComponent(p.g)+'/'+encodeURIComponent(slugify(p.s));
  }

  /* Lab Reports */
  if(v==='levels' && p.kind==='reports') return '/reports';
  if(v==='rsubs' && p.kind==='reports' && p.level) return '/reports/L'+p.level;
  if(v==='files' && p.kind==='reports' && p.level && p.s){
    return '/reports/L'+p.level+'/'+encodeURIComponent(slugify(p.s));
  }

  /* Q-Bank */
  if(v==='levels' && p.kind==='qbank') return '/qbank';
  if(v==='rsubs' && p.kind==='qbank' && p.level) return '/qbank/L'+p.level;
  if(v==='files' && p.kind==='qbank' && p.level && p.s){
    return '/qbank/L'+p.level+'/'+encodeURIComponent(slugify(p.s));
  }

  /* Syllabus */
  if(v==='syllabus') return '/syllabus';
  if(v==='syldept' && p.batch){
    return '/syllabus/'+encodeURIComponent(p.batch);
  }
  if(v==='files' && p.syllabus && p.batch && p.dept){
    return '/syllabus/'+encodeURIComponent(p.batch)+'/'+encodeURIComponent(slugify(p.dept));
  }

  /* Updates */
  if(v==='list') return '/'+(p.kind||'notice');

  /* Other pages */
  if(v==='search') return '/search';
  if(v==='info' && p.page) return '/'+encodeURIComponent(p.page);
  if(v==='texgpt') return '/tex-gpt';
  if(v==='submit') return '/submit-notes';
  if(v==='phone') return '/phone-book';
  if(v==='koto') return '/count-koto';
  if(v==='jokes') return '/jokes';

  /* Games */
  if(v==='games') return '/games';
  if(v==='ttt') return '/games/tic-tac-toe';
  if(v==='rps') return '/games/stone-paper-scissors';
  if(v==='mem') return '/games/memory';

  return '/';
}

function parseRoute(){
  var path=window.location.pathname||'/';
  path=path.replace(/\/+$/,'');
  if(!path) path='/';

  if(path==='/') return {v:'home',p:{}};

  var parts=path.replace(/^\/+/, '').split('/').filter(Boolean).map(function(x){
    try{return decodeURIComponent(x);}catch(e){return x;}
  });

  /* NOTES */
  if(parts[0]==='notes'){
    if(parts.length===1) return {v:'notes',p:{}};

    var key=termKeyFromPath(parts[1]);
    if(key){
      if(parts.length===2) return {v:'dept',p:{k:key}};
      if(parts.length===3) return {v:'subjects',p:{k:key,g:parts[2]}};

      var subjectSlug=parts.slice(3).join('-');
      var subjectList=(NOTES[key] && NOTES[key][parts[2]]) || [];
      var subject=subjectList.find(function(s){return slugify(s)===subjectSlug;});

      return {v:'files',p:{
        k:key,
        g:parts[2],
        s:subject || parts.slice(3).join('/')
      }};
    }
    return {v:'notes',p:{}};
  }

  /* REPORTS */
  if(parts[0]==='reports'){
    if(parts.length===1) return {v:'levels',p:{kind:'reports'}};
    var rl=String(parts[1]).match(/^L(\d+)$/i);
    if(rl){
      var level=Number(rl[1]);
      if(parts.length===2) return {v:'rsubs',p:{kind:'reports',level:level}};
      var slug=parts.slice(2).join('-');
      var arr=REPORTS[level]||[];
      var found=arr.find(function(s){return slugify(s)===slug;});
      return {v:'files',p:{kind:'reports',level:level,s:found||parts.slice(2).join('/')}};
    }
  }

  /* Q-BANK */
  if(parts[0]==='qbank'){
    if(parts.length===1) return {v:'levels',p:{kind:'qbank'}};
    var ql=String(parts[1]).match(/^L(\d+)$/i);
    if(ql){
      var qlevel=Number(ql[1]);
      if(parts.length===2) return {v:'rsubs',p:{kind:'qbank',level:qlevel}};
      var qslug=parts.slice(2).join('-');
      var qarr=QBANK[qlevel]||[];
      var qfound=qarr.find(function(s){return slugify(s)===qslug;});
      return {v:'files',p:{kind:'qbank',level:qlevel,s:qfound||parts.slice(2).join('/')}};
    }
  }

  /* SYLLABUS */
  if(parts[0]==='syllabus'){
    if(parts.length===1) return {v:'syllabus',p:{}};
    if(parts.length===2) return {v:'syldept',p:{batch:parts[1]}};
    if(parts.length>=3){
      var batch=parts[1];
      var deptSlug=parts.slice(2).join('-');
      var depts=['Yarn Engineering','Fabric Engineering','Wet Process Engineering','Apparel Engineering'];
      var dept=depts.find(function(d){return slugify(d)===deptSlug;}) || parts.slice(2).join(' ');
      return {v:'files',p:{s:dept+' Syllabus',batch:batch,dept:dept,syllabus:true}};
    }
  }

  /* UPDATES / TOOLS / INFO */
  if(parts[0]==='search') return {v:'search',p:{}};
  if(parts[0]==='notice') return {v:'list',p:{kind:'notice'}};
  if(parts[0]==='routine') return {v:'list',p:{kind:'routine'}};
  if(parts[0]==='result') return {v:'list',p:{kind:'result'}};
  if(parts[0]==='library') return {v:'info',p:{page:'library'}};
  if(parts[0]==='courses') return {v:'info',p:{page:'courses'}};
  if(parts[0]==='tex-gpt') return {v:'texgpt',p:{}};
  if(parts[0]==='submit-notes') return {v:'submit',p:{}};
  if(parts[0]==='phone-book') return {v:'phone',p:{}};
  if(parts[0]==='count-koto') return {v:'koto',p:{}};
  if(parts[0]==='jokes') return {v:'jokes',p:{}};

  /* GAMES */
  if(parts[0]==='games'){
    if(parts.length===1) return {v:'games',p:{}};
    if(parts[1]==='tic-tac-toe') return {v:'ttt',p:{}};
    if(parts[1]==='stone-paper-scissors') return {v:'rps',p:{}};
    if(parts[1]==='memory') return {v:'mem',p:{}};
  }

  return {v:'home',p:{}};
}

function show(v,p){
  p=p||{};
  cur={v:v,p:p};

  var path=routeFromView(v,p);
  try{history.pushState({ptec:1,v:v,p:p},'',path);}catch(e){}

  closeDrawer();
  paint();
  updateBnav();
}

function back(){
  if(window.location.pathname!=='/' && window.history.length>1){
    history.back();
  }else{
    goHome();
  }
}

function goHome(){
  closeDrawer();
  cur={v:'home',p:{}};
  try{history.pushState({ptec:1,v:'home',p:{}},'','/');}catch(e){}
  paint();
  updateBnav();
}

window.addEventListener('popstate',function(){
  cur=parseRoute();
  paint();
  updateBnav();
});

cur=parseRoute();
try{
  history.replaceState(
    {ptec:1,v:cur.v,p:cur.p||{}},
    '',
    window.location.pathname
  );
}catch(e){}

function paint(){var r=render(cur);app.innerHTML=r.h;document.getElementById('backBtn').style.display=(window.location.pathname!=='/'&&window.location.pathname!=='')?'flex':'none';
 var els=app.querySelectorAll('.rv');for(var i=0;i<els.length;i++){els[i].style.setProperty('--d',Math.min(i,12)*60+'ms');io.observe(els[i]);}
 if(cur.v==='ttt')tttInit();if(cur.v==='mem')memInit();if(cur.v==='rps')rpsRenderScore();window.scrollTo(0,0);}
function toast(m){var t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('show');},2500);}
function shareItem(x){if(navigator.share){navigator.share({text:x}).catch(function(){});}else if(navigator.clipboard){navigator.clipboard.writeText(x);toast('✓ Copied to clipboard');}}
function openDrawer(){document.getElementById('drawer').classList.add('open');document.getElementById('scrim').classList.add('show');}
function closeDrawer(){document.getElementById('drawer').classList.remove('open');document.getElementById('scrim').classList.remove('show');}
function openHelp(){document.getElementById('modal').classList.add('show');}
function closeHelp(){document.getElementById('modal').classList.remove('show');}
function toggleTheme(){var h=document.documentElement,d=h.getAttribute('data-theme')==='dark'?'light':'dark';h.setAttribute('data-theme',d);localStorage.setItem('ptec_theme',d);document.getElementById('themeBtn').textContent=d==='dark'?'☀️':'🌙';}
/* ===== OPTION A: Reset theme back to follow system ===== */
function resetTheme(){
  localStorage.removeItem('ptec_theme');
  var d = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', d);
  document.getElementById('themeBtn').textContent = d === 'dark' ? '☀️' : '🌙';
  toast('🔄 Now following system theme');
}
function scrollToSec(id){var e=document.getElementById(id);if(e)e.scrollIntoView({behavior:'smooth'});}
function isPinned(id){return pins.some(function(p){return p.id===id;});}
function togglePin(id,label,v,p){var i=pins.findIndex(function(x){return x.id===id;});if(i>=0){pins.splice(i,1);toast('📌 Unpinned '+label);}else{pins.push({id:id,label:label,v:v,p:p});toast('📌 Pinned '+label);}localStorage.setItem('ptec_pins',JSON.stringify(pins));paint();}
function openPin(i){var q=pins[i];if(q)show(q.v,q.p);}
function tile(onclick,em,lb,gr,extra){return '<div class="tile rv '+(extra||'')+'" onclick="'+onclick+'"><span class="tic '+gr+'">'+em+'</span><span class="tlb">'+lb+'</span></div>';}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function deptsFor(k){return (k==='1-1'||k==='1-2')?['YF','WA']:['YE','FE','WPE','AE'];}
var tttB=null,tttOver=false,tttScore={Y:0,C:0,D:0};
function tttLines(){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];}
function tttWin(b,p){return tttLines().some(function(l){return b[l[0]]===p&&b[l[1]]===p&&b[l[2]]===p;});}
function tttInit(){tttB=['','','','','','','','',''];tttOver=false;tttRender();var s=document.getElementById('tttStatus');if(s)s.textContent='Your turn — you are ❌';}
function tttRender(){var g=document.getElementById('tttGrid');if(!g)return;g.innerHTML=tttB.map(function(v,i){return '<button class="ttt-cell '+(v==='X'?'x':v==='O'?'o':'')+'" onclick="tttPlay('+i+')">'+(v==='X'?'❌':v==='O'?'⭕':'')+'</button>';}).join('');var sc=document.getElementById('tttScore');if(sc)sc.innerHTML='<span class="score-pill">You '+tttScore.Y+'</span><span class="score-pill">Draw '+tttScore.D+'</span><span class="score-pill">CPU '+tttScore.C+'</span>';}
function tttPlay(i){if(tttOver||tttB[i])return;tttB[i]='X';tttRender();if(tttEndCheck())return;var s=document.getElementById('tttStatus');if(s)s.textContent='🤖 CPU thinking…';setTimeout(tttCpu,380);}
function tttCpuPick(b){var i;for(i=0;i<9;i++){if(!b[i]){b[i]='O';if(tttWin(b,'O')){b[i]='';return i;}b[i]='';}}for(i=0;i<9;i++){if(!b[i]){b[i]='X';if(tttWin(b,'X')){b[i]='';return i;}b[i]='';}}if(!b[4])return 4;var c=[0,2,6,8].filter(function(x){return !b[x];});if(c.length)return c[Math.floor(Math.random()*c.length)];var e=[];for(i=0;i<9;i++)if(!b[i])e.push(i);return e[Math.floor(Math.random()*e.length)];}
function tttCpu(){if(tttOver)return;var m=tttCpuPick(tttB);tttB[m]='O';tttRender();if(tttEndCheck())return;var s=document.getElementById('tttStatus');if(s)s.textContent='Your turn — you are ❌';}
function tttEndCheck(){var s=document.getElementById('tttStatus');if(tttWin(tttB,'X')){tttOver=true;tttScore.Y++;if(s)s.textContent='🎉 You win!';tttRender();toast('🎉 You won the round!');return true;}if(tttWin(tttB,'O')){tttOver=true;tttScore.C++;if(s)s.textContent='🤖 CPU wins!';tttRender();toast('🤖 CPU won this round');return true;}if(tttB.every(function(v){return v;})){tttOver=true;tttScore.D++;if(s)s.textContent='🤝 Draw!';tttRender();return true;}return false;}
var rpsScore={Y:0,C:0};
function rpsRenderScore(){var sc=document.getElementById('rpsScore');if(sc)sc.innerHTML='<span class="score-pill">You '+rpsScore.Y+'</span><span class="score-pill">CPU '+rpsScore.C+'</span>';}
function rpsPlay(y){var opt=['✊','✋','✌️'];var c=Math.floor(Math.random()*3);var res;if(y===c)res='🤝 Draw!';else if((y===0&&c===2)||(y===1&&c===0)||(y===2&&c===1)){res='🎉 You win!';rpsScore.Y++;}else{res='🤖 CPU wins!';rpsScore.C++;}var r=document.getElementById('rpsRes');if(r)r.innerHTML='You '+opt[y]+' vs CPU '+opt[c]+' — '+res;rpsRenderScore();}
var memDeck=null,memUp=-1,memLock=false,memMoves=0,memOk=0;
var emojis=['🧵','🧶','🎨','🪡','📏','⚙️','🧪','📐'];
function memInit(){var arr=emojis.concat(emojis).map(function(e){return{e:e,st:0};});for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=arr[i];arr[i]=arr[j];arr[j]=t;}memDeck=arr;memUp=-1;memLock=false;memMoves=0;memOk=0;memRender();memInfo();}
function memRender(){var g=document.getElementById('memGrid');if(!g)return;g.innerHTML=memDeck.map(function(c,i){var cls=c.st===2?'mem-card ok':c.st===1?'mem-card up':'mem-card';return '<button class="'+cls+'" onclick="memFlip('+i+')">'+(c.st>0?c.e:'')+'</button>';}).join('');}
function memInfo(){var m=document.getElementById('memInfo');if(m)m.textContent='Moves: '+memMoves+(memOk===8?' · 🎉 Completed!':'');}
function memFlip(i){if(memLock||memDeck[i].st>0)return;memDeck[i].st=1;memRender();if(memUp===-1){memUp=i;return;}var a=memUp;memUp=-1;memMoves++;if(memDeck[a].e===memDeck[i].e){memDeck[a].st=2;memDeck[i].st=2;memOk++;memRender();memInfo();if(memOk===8)toast('🎉 Completed in '+memMoves+' moves!');}else{memLock=true;memRender();memInfo();setTimeout(function(){memDeck[a].st=0;memDeck[i].st=0;memLock=false;memRender();},750);}}
function toggleNotif(e){e.stopPropagation();var m=document.getElementById('notifMenu');m.classList.toggle('show');}
document.addEventListener('click',function(e){if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifMenu'))document.getElementById('notifMenu').classList.remove('show');});
function buildNotif(){var all=NOTICES.concat(ROUTINES).concat(RESULTS).slice(0,5);document.getElementById('notifList').innerHTML=all.map(function(x){return '<div class="notif-item" onclick="closeNotifAndGo(\''+x.t.replace(/'/g,"\\'")+'\')"><div class="dot"></div><div style="flex:1"><div class="t">'+x.t+'</div><small>'+x.d+'</small></div></div>';}).join('');}
function closeNotifAndGo(t){document.getElementById('notifMenu').classList.remove('show');var n=NOTICES.find(function(x){return x.t===t;});if(n){show('list',{kind:'notice'});return;}var r=ROUTINES.find(function(x){return x.t===t;});if(r){show('list',{kind:'routine'});return;}show('list',{kind:'result'});}
function updateBnav(ov){document.querySelectorAll('#bnav button').forEach(function(b){b.classList.remove('active');});var v=ov||cur.v;var map={home:'home',search:'search',notes:'notes',dept:'notes',subjects:'notes',files:'notes',tools:'tools',games:'tools',ttt:'tools',rps:'tools',mem:'tools'};var target=map[v]||'home';var btn=document.querySelector('#bnav button[data-view="'+target+'"]');if(btn)btn.classList.add('active');}
function bnavGo(v){if(v==='home'){goHome();}else if(v==='search'){show('search');}else if(v==='notes'){show('notes');}else if(v==='tools'){goHome();updateBnav('tools');setTimeout(function(){scrollToSec('secTools');},120);}}
var ticking = false;

window.addEventListener('scroll', function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      var h = document.documentElement;
      var sc = document.getElementById('scrollBar');

      if (sc) {
        var p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        sc.style.transform = 'scaleX(' + (p / 100) + ')';
      }

      document.getElementById('hdr').classList.toggle('scrolled', window.scrollY > 10);
      ticking = false;
    });

    ticking = true;
  }
}, { passive: true });
function render(c){var p=c.p||{};
if(c.v==='home')return{h:homeHTML()};
if(c.v==='notes')return{h:notesHTML()};
if(c.v==='search')return{h:'<h2 class="sec rv">🔍 Quick Search</h2><div class="card rv"><input class="search" id="globalSearch" placeholder="Search any subject, term, department..." autofocus oninput="globalSearch(this.value)"></div><div id="gsResults" class="rv"><div class="card small">Start typing to search across all subjects and terms.</div></div>'};
if(c.v==='dept'){var t=TERMS.find(function(x){return x[0]===p.k;});var gs=deptsFor(p.k);return{h:'<div class="crumb rv"><span onclick="goHome()">Home</span> › <span onclick="show(\'notes\')">Notes</span> › <b>'+t[1]+'</b></div><h2 class="sec rv">⚙️ Select Your Department <small>4 departments</small></h2>'+gs.map(function(g){return '<div class="dcard rv" onclick="show(\'subjects\',{k:\''+p.k+'\',g:\''+g+'\'})"><span style="font-size:22px">'+DEPT_ICON[g]+'</span><span class="dname">'+GROUPS[g]+'</span><span class="chev">›</span></div>';}).join('')+'<span class="bigem rv">'+t[2]+'</span>'};}
if(c.v==='subjects'){lastCtx=p;var tt=TERMS.find(function(x){return x[0]===p.k;});return{h:'<div class="crumb rv"><span onclick="goHome()">Home</span> › <span onclick="show(\'notes\')">Notes</span> › <span onclick="show(\'dept\',{k:\''+p.k+'\'})">'+tt[1]+'</span> › <b>'+GROUPS[p.g]+'</b></div>'+'<input class="search" placeholder="Search subjects..." oninput="filterSubjects(this.value)"><div class="list" id="subjList">'+subjRows(p.k,p.g,'')+'</div>'};}
if(c.v==='files')return{h:filesHTML(p)};
/* ✅ Level page — reports=teal, qbank=yellow book icons */
if(c.v==='levels'){var kindName=({reports:'Lab Reports',qbank:'Q-Bank'})[p.kind];var kindIcon=({reports:'📋',qbank:'🗂️'})[p.kind];var pal=(p.kind==='qbank')?PAL_GOLD:PAL_TEAL;
 return{h:'<div class="crumb rv"><span onclick="goHome()">Home</span> › <b>'+kindName+'</b></div>'
 +'<h2 class="sec rv">'+kindIcon+' Choose a level</h2>'
 +'<p class="page-sub rv">'+kindName+', by level and subject</p>'
 +'<div class="lvl-grid">'+[1,2,3,4].filter(function(l){return (p.kind==='reports'?REPORTS:QBANK)[l];}).map(function(l){var m=LEVEL_META[l];return '<div class="dcard rv" style="margin:0" onclick="show(\'rsubs\',{kind:\''+p.kind+'\',level:'+l+'})"><span class="lvl-ic2">'+bookSVG(l,pal)+'</span><span class="dname">Level '+l+'<small style="display:block;color:var(--mut);font-weight:500;font-size:12px">'+m.sub+'</small></span><span class="chev">›</span></div>';}).join('')+'</div>'};}
if(c.v==='rsubs'){lastCtx=p;var lm=LEVEL_META[p.level];var pal2=(p.kind==='qbank')?PAL_GOLD:PAL_TEAL;return{h:'<div class="crumb rv"><span onclick="goHome()">Home</span> › <span onclick="show(\'levels\',{kind:\''+p.kind+'\'})">'+({reports:'Lab Reports',qbank:'Q-Bank'})[p.kind]+'</span> › <b>Level '+p.level+'</b></div><div class="dcard rv" style="cursor:default"><span class="lvl-ic2">'+bookSVG(p.level,pal2)+'</span><span class="dname">Level '+p.level+'<small style="display:block;color:var(--mut);font-weight:500;font-size:12px">'+lm.sub+'</small></span></div><input class="search" placeholder="Search..." oninput="filterSubjects(this.value)"><div class="list" id="subjList">'+rRows(p.kind,p.level,'')+'</div>'};}
if(c.v==='syllabus')return{h:'<h2 class="sec rv">📝 Choose Your Batch</h2>'+['Batch 2024-25','Batch 2025-26'].map(function(b){return '<div class="dcard rv" onclick="show(\'syldept\',{batch:\''+b+'\'})"><span style="font-size:22px">🎓</span><span class="dname">'+b+'</span><span class="chev">›</span></div>';}).join('')};
if(c.v==='syldept')return{h:'<div class="crumb rv"><span onclick="goHome()">Home</span> › <b>'+p.batch+'</b></div><h2 class="sec rv">🏛️ Select Department</h2>'+['Yarn Engineering','Fabric Engineering','Wet Process Engineering','Apparel Engineering'].map(function(d){return '<div class="dcard rv" onclick="show(\'files\',{s:\''+d+' Syllabus\',batch:\''+p.batch+'\',dept:\''+d+'\',syllabus:true})"><span style="font-size:22px">📁</span><span class="dname">'+d+'</span><span class="chev">›</span></div>';}).join('')};
if(c.v==='list'){var D={notice:NOTICES,routine:ROUTINES,result:RESULTS}[p.kind];return{h:'<h2 class="sec rv">'+({notice:'📢 Notices',routine:'🗓️ Routines',result:'📊 Results'})[p.kind]+'</h2><div class="list">'+D.map(function(x){return '<div class="row rv"><span class="rname"><b>'+x.t+'</b><br><span class="small">'+x.d+'</span></span><button class="ib" onclick="shareItem(\''+x.t+' — '+x.d+'\')">🔗</button></div>';}).join('')+'</div>'};}
if(c.v==='info'){var I=INFO[p.page];return{h:'<h2 class="sec rv">'+I.h+'</h2>'+I.c.map(function(x){return '<div class="card rv"><h3>'+x.t+'</h3><p>'+x.b+'</p></div>';}).join('')+'<span class="bigem rv">'+I.e+'</span>'};}
if(c.v==='games')return{h:'<h2 class="sec rv">🎮 Games</h2><p class="small rv">Exam break? একটু refresh হয়ে নাও! 😄</p>'+'<div class="dcard rv" onclick="show(\'ttt\')"><span style="font-size:22px">❌⭕</span><span class="dname">Tic Tac Toe <small style="display:block;color:var(--mut);font-weight:500">vs CPU</small></span><span class="chev">›</span></div>'+'<div class="dcard rv" onclick="show(\'rps\')"><span style="font-size:22px">✊✋️</span><span class="dname">Stone Paper Scissors <small style="display:block;color:var(--mut);font-weight:500">vs CPU</small></span><span class="chev">›</span></div>'+'<div class="dcard rv" onclick="show(\'mem\')"><span style="font-size:22px">🧠</span><span class="dname">Memory Match <small style="display:block;color:var(--mut);font-weight:500">textile emoji pairs</small></span><span class="chev">›</span></div>'+'<span class="bigem rv">🎮</span>'};
if(c.v==='ttt')return{h:'<h2 class="sec rv">❌ Tic Tac Toe</h2><div class="score-row rv" id="tttScore"></div><div class="ttt-grid rv" id="tttGrid"></div><p class="rps-res rv" id="tttStatus"></p><div style="text-align:center" class="rv"><button class="btn" onclick="tttInit()">🔄 New Round</button></div>'};
if(c.v==='rps')return{h:'<h2 class="sec rv">✊✋️ Stone Paper Scissors</h2><div class="score-row rv" id="rpsScore"></div><div class="rps-row rv"><button class="rps-btn" onclick="rpsPlay(0)">✊</button><button class="rps-btn" onclick="rpsPlay(1)">✋</button><button class="rps-btn" onclick="rpsPlay(2)">✌️</button></div><p class="rps-res rv" id="rpsRes">Tap to play!</p>'};
if(c.v==='mem')return{h:'<h2 class="sec rv">🧠 Memory Match</h2><p class="rps-res rv" id="memInfo"></p><div class="mem-grid rv" id="memGrid"></div><div style="text-align:center" class="rv"><button class="btn" onclick="memInit()">🔄 Restart</button></div>'};
if(c.v==='texgpt')return{h:'<h2 class="sec rv">🤖 Tex-GPT</h2><div class="chat rv" id="chat"><div class="bub bot">Hi! I am <b>Tex-GPT</b> 🤖 — your tiny offline revision buddy. Try asking about: cotton, Ne, tex, warp, weft, weaving, knitting, mercerization, carding.</div></div><div class="chatbar rv"><input id="gin" placeholder="Ask a textile question…" onkeydown="if(event.key===\'Enter\')sendChat()"><button class="btn" onclick="sendChat()">➤</button></div>'};
if(c.v==='submit')return{h:'<h2 class="sec rv">📤 Submit Notes</h2><div class="card rv"><h3>Share your knowledge</h3><p>Upload scanned notes / question banks — help your juniors! 🙌</p></div>'+(SUBMIT_FORM_URL?'<button class="btn" onclick="window.open(SUBMIT_FORM_URL,\'_blank\')">Open Submission Form</button>':'<div class="card rv"><label class="small">Your name</label><input class="search" type="text"><label class="small">Level / Term</label><input class="search" type="text"><label class="small">Subject</label><input class="search" type="text"><label class="small">File (PDF/scan)</label><input class="search" type="file"><button class="btn" onclick="toast(\'✓ Thanks! Demo mode\')">Submit</button></div>')};
if(c.v==='phone')return{h:'<h2 class="sec rv">☎️ Phone Book</h2><input class="search" placeholder="Search name, position, phone..." oninput="filterPhone(this.value)"><div class="phone-grid" id="phoneGrid">'+phoneGrid('')+'</div>'};
if(c.v==='koto')return{h:'<h2 class="sec rv">🧶 Count Koto</h2><div class="card rv"><h3>Stitch / Row Counter</h3><div class="bignum" id="cnt">'+cnt+'</div><div style="display:flex;gap:8px"><button class="btn" onclick="addCnt(1)">➕ Add</button><button class="btn ghost" onclick="addCnt(-1)">➖</button><button class="btn ghost" onclick="resetCnt()">🔄 Reset</button></div></div><div class="card rv"><h3>🔢 Ne ↔ Tex Converter</h3><label class="small">Ne (English count)</label><input class="search" type="number" id="ne" oninput="convNe()" placeholder="e.g. 30"><label class="small">Tex</label><input class="search" type="number" id="tex" oninput="convTex()" placeholder="e.g. 19.7"><div class="small">Formula: <b>Tex ≈ 590.5 ÷ Ne</b> (exam favourite ✅)</div></div>'};
if(c.v==='jokes')return{h:'<h2 class="sec rv">😄 Jokes</h2><div class="card rv" id="jokeCard" style="font-size:16px;line-height:1.6">'+JOKES[ji]+'</div><button class="btn" onclick="nextJoke()">Once More !</button><span class="bigem rv">😂</span>'};
return{h:homeHTML()};}
function homeHTML(){var pinChips=pins.length?pins.map(function(p,i){return '<span class="chip" onclick="openPin('+i+')">📌 '+p.label+'</span>';}).join(''):'<span class="small">Nothing pinned yet — tap 📌 beside any subject.</span>';
return '<section class="hero"><div class="hero-in">'+'<div class="rv"><img src="/logo.png" class="logo-big" alt="PTEC NoteBOT" onerror="logoErr(this,110)"></div><h1 class="rv">PTEC NoteBOT</h1><p class="tag rv">Your trusted partner for exam preparation 🎯</p>'+'<div class="hero-cta rv"><button class="btn" onclick="scrollToSec(\'secNotes\')">📚 Browse Notes</button></div></div></section>'+'<h2 class="sec rv" id="secNotes">📚 Study Materials</h2><div class="grid">'+tile('show(\'notes\')','📘','Notes<small>'+TERMS.length+' semesters</small>','','big')+tile('show(\'levels\',{kind:\'reports\'})','📋','Lab Reports','gr6')+tile('show(\'levels\',{kind:\'qbank\'})','🗂️','Q-Bank','gr3')+tile('show(\'syllabus\')','📖','Syllabus','gr5')+tile('show(\'submit\')','📤','Submit Notes','gr2')+tile('show(\'info\',{page:\'courses\'})','🎁','Free Courses','gr1')+'</div>'+'<h2 class="sec rv">📢 Updates</h2><div class="grid">'+tile('show(\'list\',{kind:\'notice\'})','📢','Notice','gr4')+tile('show(\'list\',{kind:\'routine\'})','🗓️','Routine','gr1')+tile('show(\'list\',{kind:\'result\'})','📊','Result','gr2')+'</div>'+'<h2 class="sec rv" id="secTools">⚡ Tools & Fun</h2><div class="grid">'+tile('show(\'texgpt\')','🤖','Tex-GPT','gr1')+tile('show(\'info\',{page:\'library\'})','🏛️','Library','gr4')+tile('show(\'phone\')','☎️','Phone Book ('+PHONES.length+')','gr3')+tile('show(\'koto\')','🧶','Count Koto','gr5')+tile('show(\'jokes\')','😄','Jokes','gr7')+tile('show(\'games\')','🎮','Games','gr8')+'</div>';}
function notesHTML(){return '<div class="notes-head rv"><span class="icon">📘</span><div><h2>Notes (Theory)</h2><p>All 8 semesters · 4 departments · BSc in Textile Engineering</p></div></div>'+'<div class="crumb rv"><span onclick="goHome()">Home</span> › <b>📘 Notes</b></div>'+'<h2 class="sec rv">📚 Choose Semester<small>'+TERMS.length+' terms</small></h2>'+'<div class="grid">'+TERMS.map(function(t){return tile('show(\'dept\',{k:\''+t[0]+'\'})',t[2],t[1],t[3]);}).join('')+'</div>';}
function subjRows(k,g,q){q=(q||'').toLowerCase();var L=(NOTES[k][g]||NOTES[k].YF||NOTES[k].YE||[]);return L.filter(function(s){return s.toLowerCase().indexOf(q)>-1;}).map(function(s){var id=k+'|'+g+'|'+s;return '<div class="row"><span class="fic">📁</span><span class="rname" onclick="show(\'files\',{k:\''+k+'\',g:\''+g+'\',s:\''+s+'\'})">'+s+'</span><button class="ib '+(isPinned(id)?'on':'dim')+'" onclick="event.stopPropagation();togglePin(\''+id+'\',\''+s.replace(/'/g,"\\'")+'\',\'files\',{k:\''+k+'\',g:\''+g+'\',s:\''+s.replace(/'/g,"\\'")+'\'})">📌</button><span>›</span></div>';}).join('')||'<div class="row">No subject found.</div>';}
function filterSubjects(q){var p=lastCtx;if(!p)return;document.getElementById('subjList').innerHTML=(p.kind?rRows(p.kind,p.level,q):subjRows(p.k,p.g,q));}
function rRows(kind,level,q){q=(q||'').toLowerCase();var L=(kind==='reports'?REPORTS:QBANK)[level];return L.filter(function(s){return s.toLowerCase().indexOf(q)>-1;}).map(function(s){var id=kind+'|'+level+'|'+s;return '<div class="row"><span class="fic">📁</span><span class="rname" onclick="show(\'files\',{kind:\''+kind+'\',level:'+level+',s:\''+s+'\'})">'+s+'</span><button class="ib '+(isPinned(id)?'on':'dim')+'" onclick="event.stopPropagation();togglePin(\''+id+'\',\''+s.replace(/'/g,"\\'")+'\',\'files\',{kind:\''+kind+'\',level:'+level+',s:\''+s.replace(/'/g,"\\'")+'\'})">📌</button><span>›</span></div>';}).join('')||'<div class="row">Nothing found.</div>';}
function filesHTML(p){var key=(p.k?p.k+'|'+(p.g||'')+'|':'')+(p.kind?p.kind+'|'+p.level+'|':'')+p.s;var real=!!FILES[key];var list=FILES[key]||[{t:p.s+' – Sample PDF',u:'#'}];var info=real?'✅ '+list.length+' note(s) available':'👉 Demo — add Drive link in FILES';return '<div class="crumb rv"><span onclick="goHome()">Home</span> › <span onclick="show(\'notes\')">Notes</span> › <b>'+p.s+'</b></div><div class="card rv"><h3>📂 '+p.s+'</h3><p class="small">'+info+'</p></div><div class="list">'+list.map(function(f){return '<div class="row rv"><span class="fic">📄</span><span class="rname">'+f.t+'</span><button class="ib" onclick="openFile(\''+f.u+'\')">⬇️</button><button class="ib" onclick="shareItem(\''+f.t+'\')">🔗</button></div>';}).join('')+'</div>';}
function openFile(u){if(u==='#'){toast('ℹ️ Sample item — add Drive link in FILES.');}else{window.open(u,'_blank');}}
function phoneGrid(q){q=(q||'').toLowerCase();var filtered=PHONES.filter(function(x){return x.n.toLowerCase().indexOf(q)>-1||x.p.toLowerCase().indexOf(q)>-1||x.ph.indexOf(q)>-1;});if(!filtered.length)return '<div class="card small" style="grid-column:1/-1">Not found.</div>';var cats={teacher:'Teachers',staff:'Staff',support:'Support'};var grouped={teacher:[],staff:[],support:[]};filtered.forEach(function(x){grouped[x.c].push(x);});var html='';Object.keys(grouped).forEach(function(cat){if(!grouped[cat].length)return;html+='<div style="grid-column:1/-1;margin-top:16px;margin-bottom:8px"><h3 style="margin:0;font-size:15px;color:var(--mut);font-weight:600">'+cats[cat]+' ('+grouped[cat].length+')</h3></div>';grouped[cat].forEach(function(x){html+='<div class="phone-card rv" onclick="window.open(\'tel:'+x.ph+'\')"><span class="phone-cat cat-'+x.c+'">'+cats[x.c]+'</span><div class="phone-name">'+x.n+'</div><div class="phone-pos">'+x.p+'</div><div class="phone-num">📞 '+x.ph+'</div></div>';});});return html;}
function filterPhone(q){document.getElementById('phoneGrid').innerHTML=phoneGrid(q);}
function sendChat(){var i=document.getElementById('gin'),q=i.value.trim();if(!q)return;i.value='';var ch=document.getElementById('chat');ch.innerHTML+='<div class="bub me">'+esc(q)+'</div>';ch.scrollTop=ch.scrollHeight;ch.innerHTML+='<div class="bub bot" id="typingBub"><div class="typing"><span></span><span></span><span></span></div></div>';ch.scrollTop=ch.scrollHeight;var low=q.toLowerCase(),hit=TEXKB.find(function(e){return e.k.some(function(k){return low.indexOf(k)>-1;});});var a=hit?hit.a:'Sorry! Small offline bot 🤖';setTimeout(function(){var tb=document.getElementById('typingBub');if(tb){tb.outerHTML='<div class="bub bot">'+a+'</div>';}ch.scrollTop=ch.scrollHeight;},800);}
function addCnt(n){cnt=Math.max(0,cnt+n);var e=document.getElementById('cnt');if(e)e.textContent=cnt;}
function resetCnt(){cnt=0;var e=document.getElementById('cnt');if(e)e.textContent=0;}
function convNe(){var v=parseFloat(document.getElementById('ne').value);document.getElementById('tex').value=v>0?(590.5/v).toFixed(2):'';}
function convTex(){var v=parseFloat(document.getElementById('tex').value);document.getElementById('ne').value=v>0?(590.5/v).toFixed(2):'';}
function nextJoke(){ji=(ji+1)%JOKES.length;document.getElementById('jokeCard').innerHTML=JOKES[ji];}
function globalSearch(q){q=(q||'').toLowerCase().trim();var r=document.getElementById('gsResults');if(!q){r.innerHTML='<div class="card small">Start typing to search...</div>';return;}var res=[];TERMS.forEach(function(t){if(t[1].toLowerCase().indexOf(q)>-1)res.push({t:'📘 '+t[1],a:'show(\'notes\')',k:'Term'});});Object.keys(NOTES).forEach(function(k){Object.keys(NOTES[k]).forEach(function(g){(NOTES[k][g]||[]).forEach(function(s){if(s.toLowerCase().indexOf(q)>-1)res.push({t:'📁 '+s+' ('+TERMS.find(function(x){return x[0]===k;})[1]+', '+GROUPS[g]+')',a:'show(\'files\',{k:\''+k+'\',g:\''+g+'\',s:\''+s+'\'})',k:'Subject'});});});});PHONES.forEach(function(x){if(x.n.toLowerCase().indexOf(q)>-1||x.p.toLowerCase().indexOf(q)>-1)res.push({t:'👤 '+x.n+' — '+x.p,a:'show(\'phone\')',k:'Person'});});if(!res.length){r.innerHTML='<div class="card small">No results found.</div>';return;}r.innerHTML='<div class="list">'+res.slice(0,20).map(function(x){return '<div class="row" onclick="'+x.a+'"><span class="fic">'+({Term:'📘',Subject:'📁',Person:'👤'}[x.k]||'🔍')+'</span><span class="rname">'+x.t+'</span><span>›</span></div>';}).join('')+'</div>';}
document.getElementById('drawerItems').innerHTML=[['goHome()','🏠 Home'],['show(\'notes\')','📘 Notes'],['show(\'search\')','🔍 Search'],['show(\'levels\',{kind:\'reports\'})','📋 Lab Reports'],['show(\'levels\',{kind:\'qbank\'})','🗂️ Q-Bank'],['show(\'syllabus\')','📖 Syllabus'],['show(\'list\',{kind:\'notice\'})','📢 Notice'],['show(\'list\',{kind:\'routine\'})','🗓️ Routine'],['show(\'list\',{kind:\'result\'})','📊 Result'],['show(\'info\',{page:\'library\'})','🏛️ Library'],['show(\'info\',{page:\'courses\'})','🎁 Free Courses'],['show(\'texgpt\')','🤖 Tex-GPT'],['show(\'submit\')','📤 Submit Notes'],['show(\'phone\')','☎️ Phone Book'],['show(\'koto\')','🧶 Count Koto'],['show(\'jokes\')','😄 Jokes'],['show(\'games\')','🎮 Games'],['resetTheme()','🔄 System Theme']].map(function(x){return '<div class="ditem" onclick="closeDrawer();'+x[0]+'">'+x[1]+'</div>';}).join('');
/* ===== SMART THEME: respects system preference + remembers user choice ===== */
var savedTheme = localStorage.getItem('ptec_theme');
var systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
var initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', initialTheme);
document.getElementById('themeBtn').textContent = initialTheme === 'dark' ? '☀️' : '🌙';
// Auto-update theme if user changes their device theme (only if they haven't manually chosen)
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('ptec_theme')) {
            var newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            document.getElementById('themeBtn').textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
    });
}
buildNotif();paint();
window.addEventListener('load',function(){setTimeout(function(){document.getElementById('splash').classList.add('hide');},900);});
