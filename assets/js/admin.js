// Admin tools for me to use on the website //
function setCookie(cname,cvalue,exdays){const d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){let name=cname+"=";let decodedCookie=decodeURIComponent(document.cookie);let ca=decodedCookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return""};
var a_e = "Trixer";
var a_n = "Brandon";
var a_t = "Tactical Pizza";
var admin = getCookie('username');
var ico = document.getElementById("s_ico");
var ban = document.querySelector('.ban');
var scan = document.querySelector('.scan');
var mute = document.querySelector('.mute');
var report = document.querySelector('.report');
var toolbox = document.querySelector('.admin-toolbox');
var tools = document.querySelector('.admin-tools');
if(admin.includes(a_n) || admin.includes(a_t) || admin.includes(a_e)){toolbox.style.display="block";toolbox.addEventListener('click',()=>{if(tools.classList.contains('active')){tools.style.display="none";ico.style.animation="spinout 1s ease-in-out"}else{tools.style.display="block";ico.style.animation="spin 1s ease-in-out"};tools.classList.toggle('active');})}
ban.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t) || admin.includes(a_e)){var ban_data=prompt(admin + ' enter a username to ban:');}else{alert('403 Access Forbidden');}})
scan.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t) || admin.includes(a_e)){alert('Scanning for suspicious content...');}else{alert('403 Access Forbidden');}})
mute.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t) || admin.includes(a_e)){var mute_data=prompt(admin + ' enter a username to mute:');}else{alert('403 Access Forbidden');}})
report.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t) || admin.includes(a_e)){var report_data=prompt(admin + ' enter a username to report:');}else{alert('403 Access Forbidden');}})