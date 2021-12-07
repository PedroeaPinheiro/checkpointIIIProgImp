class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    }
    calcularMedia = function() {
        const media = (this.notas[0] + this.notas[1] + this.notas[2]) / this.notas.length;
        return media;
    }
    adicionarFalta = function() {
        this.faltas = this.faltas + 1;
    }
}
module.exports = Aluno
