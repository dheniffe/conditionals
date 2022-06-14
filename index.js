//console.log("EXERCÍCIO 1")
const age = 22;
console.log("age", age);

if (age > 18) {
  console.log("quase lá.. falta só mais uma etapa :)");
} else {
  console.log("parado aí, você não pode entrar!");
}


//console.log("EXERCÍCIO 2");
const ageHuman = 22;
const human = true;

if (ageHuman > 18 && human === true) {
  console.log("agora sim, pode entrar :D");
} else {
  console.log("infelizmente você não cumpre os requisitos mínimos para que possamos liberar seu acesso");
}

//console.log("EXERCÍCIO 3");
const birthday = "dezembro";

if (birthday === "janeiro" || birthday === "dezembro") {
  console.log("parabéns, temos um presente para você!");
} else {
  console.log("não temos nada para você. nasça de novo!");
}

//console.log("EXERCÍCIO 4");
const lastNameRLetterFirst = "Rodrigues";
console.log(lastNameRLetterFirst.length);

if (lastNameRLetterFirst[0] === "R"){
  console.log("todos os critérios foram atendido. sobrenome aprovado!");
} else {
  console.log("sobrenome negado. tente novamente");
}

//console.log("EXERCÍCIO 5");
const lastName = "End"; //(usando os dados da variável acima)
const lastNameToLower = lastName.toLowerCase();

if (lastNameToLower.length > 6 || lastNameToLower[0] === "e"){
  console.log("ao menos um dos critérios foi atendido. sobrenome aprovado!");
} else {
  console.log("sobrenome negado. tente novamente");
}