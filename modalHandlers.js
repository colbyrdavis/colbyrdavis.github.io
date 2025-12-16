document.addEventListener("DOMContentLoaded",()=>{
  const o=document.getElementById("openMissilePN");
  const m=document.getElementById("missilePN");
  const c=document.getElementById("closeMissilePN");
  if(o&&m&&c){
    o.onclick=()=>m.classList.remove("hidden");
    c.onclick=()=>m.classList.add("hidden");
  }
});
