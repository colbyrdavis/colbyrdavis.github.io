const c=document.getElementById("space"),x=c.getContext("2d");
function r(){c.width=innerWidth;c.height=innerHeight;} r();
let s=Array.from({length:200},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.5,vx:(Math.random()-.5)*.2,vy:(Math.random()-.5)*.2,o:Math.random()}));
function a(){x.fillStyle="rgba(3,7,18,0.1)";x.fillRect(0,0,c.width,c.height);
s.forEach(t=>{t.x+=t.vx;t.y+=t.vy;if(t.x<0||t.x>c.width)t.vx*=-1;if(t.y<0||t.y>c.height)t.vy*=-1;
x.beginPath();x.arc(t.x,t.y,t.r,0,6.28);x.fillStyle=`rgba(139,233,253,${t.o})`;x.fill();});
requestAnimationFrame(a);} a();
onresize=r;
