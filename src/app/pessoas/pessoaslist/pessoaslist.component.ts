import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss'],
})
export class PessoaslistComponent {
  lista: Pessoa[] = [];

  constructor() {
    this.lista.push(new Pessoa('Pedro', 22));
    this.lista.push(new Pessoa('Pedro', 22));
    this.lista.push(new Pessoa('Pedro', 22));
    this.lista.push(new Pessoa('Pedro', 22));
    this.lista.push(new Pessoa('Pedro', 22));
    this.lista.push(new Pessoa('Pedro', 22));
  }
}
