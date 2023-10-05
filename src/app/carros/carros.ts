export class Carros {
  nome!: string;
  ano!: number;

  constructor(nome: string = '', ano: number = 0) {
    this.nome = nome;
    this.ano = ano;
  }
}
