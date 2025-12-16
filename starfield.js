const c = document.getElementById("space");
const x = c.getContext("2d");

function resize() {
  c.width = innerWidth;
  c.height = innerHeight;
}
resize();

let stars = Array.from({length:200}, () => ({
  x: Math.random()*c.width,
  y: Math.random()*c.height,
  r: Math.random()*1.5,
  vx:(Math.random()-.5)*.2,
  vy:(Math.random()-.5)*.2,
  o: Math.random()
}));

function animate() {
  x.fillStyle = "rgba(3,7,18,0.1)";
  x.fillRect(0,0,c.width,c.height);

  stars.forEach(s => {
    s.x += s.vx;
    s.y += s.vy;
    if (s.x<0||s.x>c.width) s.vx*=-1;
    if (s.y<0||s.y>c.height) s.vy*=-1;

    x.beginPath();
    x.arc(s.x,s.y,s.r,0,6.28);
    x.fillStyle = `rgba(139,233,253,${s.o})`;
    x.fill();
  });

  requestAnimationFrame(animate);
}
animate();
onresize = resize;
