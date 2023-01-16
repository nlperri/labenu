// Exercício 1

const estudante = {
  nome: "Natália",
  sobrenome: "Perri",
  matricula: 290,
  notas: [10, 9, 7.5],
};

estudante.modulo = "Módulo 1"; //notação de ponto
// estudante["modulo"] = "Módulo 1"; //notação de colchete

console.log(`nome: ${estudante.nome}
segunda nota: ${estudante.notas[1]}
módulo: ${estudante.modulo}`);

const novoEstudante = {
  ...estudante,
  nome: "Astrodev",
  notas: [...estudante.notas, 9],
  modulo: "Módulo 2",
};

novoEstudante.notas.push(10);

console.log(novoEstudante);

const estudantesLabenu = [estudante];
estudantesLabenu.push(novoEstudante);
