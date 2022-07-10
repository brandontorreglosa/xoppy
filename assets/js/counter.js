// XOPPY Is A Trademark Of XOPBOT.inc And XOPBOT© More At https://xopbot.glitch.me/ 🔥🔥🔥
function Test(){var count;var body=document.body;var button=document.getElementById("user-click");var display=document.getElementById("user-followers");if(window.localStorage.getItem('followCount')){count=window.localStorage.getItem('followCount');}else{count=0;}
display.innerHTML=count;button.onclick=function(){count++;window.localStorage.setItem('followCount',count);display.innerHTML=count;}}
