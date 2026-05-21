// ═══ CONFIG ═══
const SUPABASE_URL = 'Https://hlmawofzyljxfoklrjrh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_tfIZOHhqkqNNRIPxMGrBUQ_eiVdXbo5';

let _sb = null;
function sb() { if (!_sb) _sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY); return _sb; }

// ═══ i18n ═══
const LANG = {
  az: {
    'login.title':'Rəhbər girişi','login.sub':'Email və ID kodunuzu daxil edin',
    'login.email':'Korporativ email','login.email.ph':'emailiniz@sirket.az',
    'login.code':'ID kod','login.code.ph':'ID kodunuz',
    'login.btn':'Daxil ol','login.hint':'ID kodu işçi kartının üzərində qeyd olunub. Misal: A1234 \n\n Profilə daxil olduqda qarşınıza çıxan işçi siyahısı ən son struktur yenilənmələri əsasında formalaşdırılmışdır.\n Hər hansı yanlışlıqla qarşılaşdığınız halda isə HR komandası ilə əlaqə saxlamağınızı xahiş edirik — məsələ operativ şəkildə yoxlanılıb düzəliş ediləcək.',
    'login.err.empty':'Email və ID kod daxil edin','login.err.invalid':'Email və ya ID kod yanlışdır',
    'login.err.notmgr':'Bu hesab rəhbər kimi qeydiyyatda deyil','login.err.server':'Server xətası',
    'hipo.title':'Yüksək Potensial Namizədlik Formu',
    'hipo.subtitle':'Yüksək Potensiallı İşçi Profili İcmalı',
    'hipo.desc':'Yüksək potensiallı işçi mürəkkəb və qeyri-müəyyən situasiyalarda effektiv fəaliyyət göstərmək bacarığını davamlı şəkildə nümayiş etdirir, natamam məlumatları aydın istiqamət və konkret fəaliyyətə çevirir. O, gələcək yönümlü düşünərək qərarları daha geniş biznes prioritetləri və uzunmüddətli təsirlərlə əlaqələndirir, dəyişən şəraitdə yüksək məsuliyyət və adaptasiya qabiliyyəti göstərir. Geri bildirimlərə açıq yanaşır — bilik boşluqlarını açıq şəkildə qəbul edir, geribildirim əsasında davranışını görünən şəkildə dəyişir və səhvləri uğursuzluq kimi deyil, öyrənmə üçün məlumat mənbəyi kimi qiymətləndirir.\n\nƏn önəmlisi isə, komandalar arasında əməkdaşlıq və uyğunlaşmanı təmin edərək proseslərin irəliləməsinə təsir göstərir, insanları yönləndirir və nəticələrin əldə olunmasına töhfə verir"',
    'hipo.instruction':'Hər bir əməkdaş üçün bir seçim edin:',
    'hipo.question':'Bu əməkdaş Azərconnect tərəfindən müəyyən edilmiş meyarlara uyğun olaraq Yüksək Potensiallı İşçi (HiPo) xüsusiyyətlərini nümayiş etdirən əməkdaş kimi qiymətləndirilirmi?',
    'hipo.yes':'BƏLİ – Yüksək Potensiallı İşçi (HiPo)',
    'hipo.no':'XEYR – Yüksək Potensiallı İşçi deyil (hazırda)',
    'hipo.yes.1':'Qeyri-müəyyən vəziyyətləri rəhbərlik gözləmədən aydın istiqamət və fəaliyyət planına çevirir',
    'hipo.yes.2':'Qərar qəbul edərkən qabaqcadan düşünür və riskləri nəzərə alır',
    'hipo.yes.3':'Rol çərçivəsindən kənara çıxaraq məsuliyyət götürür, inkişaf etdirici və çətin tapşırıqları proaktiv şəkildə üzərinə alır',
    'hipo.yes.4':'Geribildirim əsasında davranışını uyğunlaşdırır və inkişafını görünən şəkildə nümayiş etdirir',
    'hipo.yes.5':'Formal səlahiyyəti olmadan belə, komandalar arasında uyğunlaşma və fəaliyyətin irəliləməsini təmin edərək nəticələrə təsir göstərir',
    'hipo.no.1':'Hərəkətə keçməzdən əvvəl tam aydınlıq gözləyir, bu isə qeyri-müəyyən situasiyalarda effektivliyi məhdudlaşdırır',
    'hipo.no.2':'Daha çox cari işinə fokuslanır və fəaliyyətlərini geniş biznes təsiri ilə məhdud şəkildə əlaqələndirir',
    'hipo.no.3':'Əsasən müəyyən edilmiş məsuliyyət çərçivəsində fəaliyyət göstərir, rolundan kənar sahiblik və təşəbbüskarlıq məhduddur',
    'hipo.no.4':'Geribildirimi qeyri-sabit şəkildə tətbiq edir və davranışda görünən dəyişiklik məhdud olur',
    'hipo.no.5':'Öz fəaliyyət sahəsindən kənarda təsiri məhduddur və komandalararası təsir göstərməkdə çətinlik yaşayır',
    'hipo.note1':'Yalnız bu davranışlar davamlı şəkildə müşahidə olunursa, "BƏLİ" seçin.',
    'hipo.note2':'Əmin deyilsinizsə, "XEYR" seçin.',
    'btn.yes':'BƏLİ','btn.no':'XEYR',
    'dash.progress':'İrəliləyiş','dash.evaluated':'əməkdaş qiymətləndirilib',
    'dash.loading':'Yüklənir...','dash.empty':'Sizə tabe əməkdaş tapılmadı',
    'dash.submit':'Qiymətləndirməni göndər','dash.left':'əməkdaş qaldı',
    'dash.sending':'Göndərilir...','dash.ok':'Qiymətləndirmə uğurla yadda saxlanıldı!',
    'dash.err':'Xəta baş verdi','dash.fill':'Bütün əməkdaşları qiymətləndirin',
    'dash.saved':'dəyişiklik var','logout':'Çıxış',
  },
  en: {
    'login.title':'Manager login','login.sub':'Enter your email and ID code',
    'login.email':'Corporate email','login.email.ph':'you@company.com',
    'login.code':'ID code','login.code.ph':'Your ID code',
    'login.btn':'Sign in','login.hint':"Contact HR if you don't know your ID code",
    'login.err.empty':'Enter email and ID code','login.err.invalid':'Invalid email or ID code',
    'login.err.notmgr':'This account is not registered as a manager','login.err.server':'Server error',
    'hipo.title':'High Potential Nomination Form',
    'hipo.subtitle':'High Potential Employee Profile Summary',
    'hipo.desc':'A high-potential employee consistently demonstrates the ability to perform effectively in complex and uncertain situations, turning incomplete information into clear direction and concrete action. They think ahead, aligning decisions with broader business priorities and long-term impact, and show high accountability and adaptability in changing conditions. They are open to feedback — openly acknowledging knowledge gaps, visibly changing behavior based on feedback, and treating mistakes as learning opportunities rather than failures.\n\nMost importantly, they drive alignment and progress across teams, influence people, and contribute to achieving results — even without formal authority.',
    'hipo.instruction':'Make one selection for each employee:',
    'hipo.question':'Is this employee assessed as demonstrating High Potential (HiPo) characteristics according to criteria defined by Azerconnect?',
    'hipo.yes':'YES – High Potential Employee (HiPo)',
    'hipo.no':'NO – Not High Potential (currently)',
    'hipo.yes.1':'Turns ambiguous situations into clear direction and action plans without waiting for leadership',
    'hipo.yes.2':'Thinks ahead when making decisions and considers risks',
    'hipo.yes.3':'Steps beyond role boundaries, proactively takes on developmental and challenging assignments',
    'hipo.yes.4':'Adapts behavior based on feedback and visibly demonstrates growth',
    'hipo.yes.5':'Drives alignment and progress across teams, influencing outcomes even without formal authority',
    'hipo.no.1':'Waits for full clarity before taking action, limiting effectiveness in ambiguous situations',
    'hipo.no.2':'Focuses more on current work, with limited connection of activities to broader business impact',
    'hipo.no.3':'Operates mainly within defined responsibilities, with limited ownership and initiative beyond role',
    'hipo.no.4':'Applies feedback inconsistently, with limited visible change in behavior',
    'hipo.no.5':'Limited influence beyond own area, struggles to drive cross-team impact',
    'hipo.note1':'Select "YES" only if these behaviors are consistently observed.',
    'hipo.note2':'If you are not confident, select "NO".',
    'btn.yes':'YES','btn.no':'NO',
    'dash.progress':'Progress','dash.evaluated':'employees evaluated',
    'dash.loading':'Loading...','dash.empty':'No subordinates found',
    'dash.submit':'Submit assessment','dash.left':'employees remaining',
    'dash.sending':'Submitting...','dash.ok':'Assessment saved successfully!',
    'dash.err':'An error occurred','dash.fill':'Evaluate all employees',
    'dash.saved':'changes pending','logout':'Sign out',
  }
};

const getLang=()=>localStorage.getItem('lang')||'az';
const t=k=>LANG[getLang()]?.[k]||LANG.az[k]||k;
function setLang(l){localStorage.setItem('lang',l);applyLang();}
function applyLang(){
  const l=getLang();
  document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
  document.querySelectorAll('[data-tp]').forEach(e=>e.placeholder=t(e.dataset.tp));
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
}

const getTheme=()=>localStorage.getItem('theme')||'light';
function toggleTheme(){setTheme(getTheme()==='dark'?'light':'dark');}
function setTheme(th){localStorage.setItem('theme',th);applyTheme();}
function applyTheme(){
  const th=getTheme();
  document.documentElement.setAttribute('data-theme',th);
  document.querySelectorAll('.theme-btn').forEach(b=>{
    b.innerHTML=th==='dark'
      ?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      :'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  });
}

const getSession=()=>{try{return JSON.parse(sessionStorage.getItem('s'));}catch{return null;}};
const setSession=d=>sessionStorage.setItem('s',JSON.stringify(d));
const clearSession=()=>sessionStorage.removeItem('s');
function requireAuth(){const s=getSession();if(!s){window.location.href='index.html';return null;}return s;}

// ═══ API ═══
async function doLogin(email,idCode){
  const{data:emp,error:e1}=await sb().from('employees').select('*').eq('id_code',idCode.trim()).single();
  if(e1||!emp)return{ok:false,err:'invalid'};
  const{count,error:e2}=await sb().from('employees').select('*',{count:'exact',head:true}).ilike('manager_mail',email.trim());
  if(e2||count===0)return{ok:false,err:'notmgr'};
  return{ok:true,email:email.trim().toLowerCase(),name:emp.full_name};
}

async function loadTeam(mgr){
  const{data:team,error}=await sb().from('employees').select('*').ilike('manager_mail',mgr).order('full_name');
  if(error)throw error;
  return(team||[]).map(e=>({...e,idCode:e.id_code,fullName:e.full_name,jobTitle:e.job_title}));
}

async function loadExistingVotes(mgr){
  const{data,error}=await sb().from('hipo_assessments').select('employee_idcode,is_hipo').ilike('evaluator_email',mgr);
  if(error)throw error;
  const map={};
  (data||[]).forEach(a=>{map[a.employee_idcode]=a.is_hipo;});
  return map;
}

async function submitVotes(mgr,mgrName,team,votes){
  // Delete existing
  await sb().from('hipo_assessments').delete().ilike('evaluator_email',mgr);
  // Insert all
  const rows=Object.entries(votes).map(([idCode,isHipo])=>{
    const emp=team.find(e=>e.idCode===idCode);
    return{
      evaluator_email:mgr,evaluator_name:mgrName,
      employee_idcode:idCode,employee_name:emp?.fullName||'',
      department:emp?.department||'',job_title:emp?.jobTitle||'',
      is_hipo:isHipo,submitted_at:new Date().toISOString()
    };
  });
  const{error}=await sb().from('hipo_assessments').insert(rows);
  if(error)throw error;
}

// ═══ UTILS ═══
function getInitials(n){if(!n)return'?';return n.split(' ').filter(Boolean).slice(0,2).map(p=>p[0]).join('').toUpperCase();}
function showToast(msg,err){
  let el=document.getElementById('toast');
  if(!el){el=document.createElement('div');el.id='toast';document.body.appendChild(el);}
  el.textContent=msg;el.className=`toast ${err?'toast-err':'toast-ok'}`;
  setTimeout(()=>el.classList.add('hide'),3500);
}
function initPage(){applyTheme();applyLang();}
