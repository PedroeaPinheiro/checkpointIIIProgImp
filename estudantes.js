const Aluno = require("./checkpointIIIProgImp/aluno")
let alunos = [];

const aluno1 = new Aluno("Pedro", 3, [8, 7, 9]);
const aluno2 = new Aluno("Larissa", 2, [9, 8, 6]);
const aluno3 = new Aluno("Clara", 1, [10, 6, 8]);

alunos.push(aluno1, aluno2, aluno3);

module.exports = alunos;

