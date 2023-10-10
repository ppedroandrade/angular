import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss'],
})
export class PessoasdetailsComponent {
  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  pessoaService = inject(PessoaService);

  constructor() {}

  salvar() {
    this.pessoaService.save(this.pessoa).subscribe({
      next: (pessoa) => {
        this.retorno.emit(pessoa);
      },
      error: (erro) => {
        alert('Observe o erro no console!');
        console.error(erro);
      },
    });
  }
}
