function emblem(s){
  var id='e'+s+Math.floor(Math.random()*9999);

  return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 200 200">'
  +'<circle cx="100" cy="100" r="96" fill="none" stroke="#1BA94C" stroke-width="8" stroke-dasharray="14 10"/>'
  +'<path d="M 18,100 A 82,82 0 0 1 182,100" stroke="#1BA94C" stroke-width="26" fill="none"/>'
  +'<path d="M 18,100 A 82,82 0 0 0 182,100" stroke="#8DC63F" stroke-width="26" fill="none"/>'
  +'<circle cx="100" cy="100" r="64" fill="#fff"/>'
  +'<defs>'
  +'<path id="t'+id+'" d="M 26,100 A 74,74 0 0 1 174,100"/>'
  +'<path id="b'+id+'" d="M 12,100 A 88,88 0 0 0 188,100"/>'
  +'</defs>'
  +'<text font-size="11" fill="#fff" font-weight="700" letter-spacing="1">'
  +'<textPath href="#t'+id+'" startOffset="50%" text-anchor="middle">'
  +'PABNA TEXTILE ENGINEERING COLLEGE'
  +'</textPath></text>'
  +'<text font-size="6.5" fill="#14320f" font-weight="600" letter-spacing=".4">'
  +'<textPath href="#b'+id+'" startOffset="50%" text-anchor="middle">'
  +'GOVERNMENT OF THE PEOPLE\'S REPUBLIC OF BANGLADESH'
  +'</textPath></text>'
  +'<g stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round">'
  +'<line x1="100" y1="46" x2="100" y2="38"/>'
  +'<line x1="88" y1="48" x2="83" y2="41"/>'
  +'<line x1="112" y1="48" x2="117" y2="41"/>'
  +'<line x1="78" y1="54" x2="71" y2="49"/>'
  +'<line x1="122" y1="54" x2="129" y2="49"/>'
  +'</g>'
  +'<path d="M100 50 l8 18 q0 10 -8 12 q-8 -2 -8 -12 z" fill="#1BA94C"/>'
  +'<circle cx="100" cy="66" r="2.5" fill="#D32F2F"/>'
  +'<path d="M68 96 q16 -7 30 0 q14 -7 30 0 v34 q-16 -6 -30 0 q-14 -6 -30 0 z" fill="#fff" stroke="#1c2430" stroke-width="3"/>'
  +'<line x1="98" y1="96" x2="98" y2="130" stroke="#1c2430" stroke-width="2"/>'
  +'<text x="100" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#111">Estd.-2006</text>'
  +'</svg>';
}

function logoErr(img,s){
  var t=document.createElement('template');
  t.innerHTML=emblem(s);
  img.replaceWith(t.content.firstChild);
}
