let anedotas = JSON.parse(anedotas_json);
let autores = JSON.parse(autores_json);

let your_anedota_here = document.querySelector('p[name=anedota]');

function get_anedota() {
  let anedota = anedotas.give_me_a_random_one_please();
  let autor = autores.give_me_a_random_one_please();

  your_anedota_here.innerText = "\"" + anedota + "\"" + "\nenviada por " + autor;
}

Array.prototype.give_me_a_random_one_please = function() {
  return this[Math.floor(Math.random() * this.length)];
}
