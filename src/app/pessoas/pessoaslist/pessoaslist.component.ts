import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss'],
})
export class PessoaslistComponent {
  lista: Pessoa[] = [];
  filter = new FormControl('');

  filteredLista$: Observable<Pessoa[]>;

  constructor() {
    this.lista.push(new Pessoa('Pedro', 22));
    this.lista.push(new Pessoa('Maria', 25));
    this.lista.push(new Pessoa('João', 30));

    this.filteredLista$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => this.filterLista(text || '')) // Provide an empty string as a default value
    );
  }

  filterLista(text: string): Pessoa[] {
    return this.lista.filter((pessoa) => {
      return pessoa.nome.toLowerCase().includes(text.toLowerCase());
    });
  }
}
