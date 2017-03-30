let anedotas = JSON.parse(data);
let your_anedota_here = document.querySelector('p[name=anedota]');

function get_anedota() {
  let anedota = anedotas.give_me_a_random_one_please();
  your_anedota_here.innerText = anedota;
}

Array.prototype.give_me_a_random_one_please = function() {
  return this[Math.floor(Math.random() * this.length)];
}
