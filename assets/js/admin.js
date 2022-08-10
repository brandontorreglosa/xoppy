// Admin tools for me to use on the website //
function setCookie(cname,cvalue,exdays){const d=new Date();d.setTime(d.getTime()+exdays*24*60*60*1000);let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){let name=cname+"=";let decodedCookie=decodeURIComponent(document.cookie);let ca=decodedCookie.split(";");for(let i=0;i<ca.length;i++){let c=ca[i];while(c.charAt(0)==" "){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return""};
var admin = getCookie('username');
var a_n = "Brandon";var a_t = "Tactical Pizza";
var ban = document.querySelector('.ban');
var scan = document.querySelector('.scan');
var mute = document.querySelector('.mute');
var report = document.querySelector('.report');
var toolbox = document.querySelector('.admin-toolbox');
var tools = document.querySelector('.admin-tools');
if(admin.includes(a_n) || admin.includes(a_t)){toolbox.style.display="block";toolbox.addEventListener('click',()=>{if(tools.classList.contains('active')){tools.style.display="none";}else{tools.style.display="block";};tools.classList.toggle('active');})}
ban.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t)){var ban_data=prompt(admin + ' enter a username to ban:');}else{alert('403 Access Forbidden');}})
scan.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t)){alert('Scanning for suspicious content...');}else{alert('403 Access Forbidden');}})
mute.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t)){var mute_data=prompt(admin + ' enter a username to mute:');}else{alert('403 Access Forbidden');}})
report.addEventListener('click',()=>{if(admin.includes(a_n) || admin.includes(a_t)){var report_data=prompt(admin + ' enter a username to report:');}else{alert('403 Access Forbidden');}})