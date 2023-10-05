import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from '../carros';

@Component({
  selector: 'app-carros-details',
  templateUrl: './carros-details.component.html',
  styleUrls: ['./carros-details.component.css'],
})
export class CarrosDetailsComponent {
  roteador = inject(ActivatedRoute);
  carros!: Carros;

  constructor() {
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }
}
