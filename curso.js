const Aluno = require('./aluno');
const alunos = require('./estudantes');

const Curso = {
    nomedoCurso: "Programação Imperativa",
    notadeAprovação: 7,
    faltasMáximas: 3,
    listaDeEstudantes: alunos,
    estudantesAprovados: [],
    adicionarAluno: function(nome, faltas, notas) {
        this.listaDeEstudantes.push(new Aluno(nome, faltas, notas));
    },
    AlunoAprovadoOuReprovado: function(estudante) {
        const media = estudante.calcularMedia();
        const faltas = estudante.faltas;
        if (media < this.notadeAprovação) {
            return false 
        } else if (faltas > this.faltasMáximas) {
            return false
        } else if ((faltas === this.faltasMáximas) 
        && 
        (media < this.notadeAprovação * 1.1)) {
            return false;
        } 
        return "sim"
    },
    percorrerAlunos: function() {
        this.listaDeEstudantes.forEach((estudante) => {
            if (this.AlunoAprovadoOuReprovado(estudante)) 
            this.estudantesAprovados.push({
                nome: estudante.nome,
                aprovado: this.AlunoAprovadoOuReprovado(estudante),
            });
        });
    },

}

Curso.percorrerAlunos();
console.log(Curso.listaDeEstudantes)
console.log(Curso.estudantesAprovados)

