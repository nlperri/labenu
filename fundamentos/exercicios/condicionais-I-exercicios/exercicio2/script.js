function personInfo(age, graduate, college) {
  if (age >= 18) {
    console.log("Você é maior de idade");
  } else {
    console.log("Você é menor de idade");
  }

  if (graduate === true) {
    console.log("Você terminou o ensino médio");
  } else {
    console.log("Você não terminou o ensino médio");
  }

  if (college === true) {
    console.log("Você está cursando uma faculdade");
  } else {
    console.log("Você não está cursando uma faculdade");
  }
}

personInfo(18, true, false);
