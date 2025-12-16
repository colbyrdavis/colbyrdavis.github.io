const openMissilePN = document.getElementById("openMissilePN");
const missilePN = document.getElementById("missilePN");
const closeMissilePN = document.getElementById("closeMissilePN");

openMissilePN.onclick = () => missilePN.classList.remove("hidden");
closeMissilePN.onclick = () => missilePN.classList.add("hidden");
