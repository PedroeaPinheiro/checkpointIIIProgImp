const listaDeEstudantes = require('../estudantes');

const curso = {
    nomedoCurso: "Programação Imperativa",
    notadeAprovação: 7,
    faltasMáximas: 3,
    listadeEstudantes: listaDeEstudantes,
    adicionarAluno: function(nome, faltas, notas) {
        this.listadeEstudantes.push(new Aluno(nome, faltas, notas));
    },
    AlunoAprovadoOuReprovado: function(aluno) {
        const faltas = aluno.faltas;
        const media = aluno.calcularMedia();

        if (media < this.notadeAprovação) {
            return false 
        } 
        if (faltas > this.faltasMáximas) {
            return false
        };
        if((faltas === this.faltasMáximas) 
        && 
        (media >= this.notadeAprovação * 1.1)) {
            return true;
        }
            return false;
        }
    }
}

console.log(curso.AlunoAprovadoOuReprovado(listaDeEstudantes))