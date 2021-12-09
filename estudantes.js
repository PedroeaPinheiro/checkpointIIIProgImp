const Aluno = require("./aluno")

let alunos = [];

const aluno1 = new Aluno("Pedro", 3, [8, 7, 9]);
const aluno2 = new Aluno("Larissa", 2, [9, 8, 10]);
const aluno3 = new Aluno("Clara", 1, [10, 6, 8]);
const aluno4 = new Aluno("José", 1, [8, 3, 5]);
const aluno5 = new Aluno("Marina", 2, [7, 3, 6]);
aluno1.calcularMedia();
aluno1.adicionarFalta();
aluno2.adicionarFalta();
aluno3.adicionarFalta();
aluno4.adicionarFalta();
aluno5.adicionarFalta();

alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5);
module.exports = alunos;

