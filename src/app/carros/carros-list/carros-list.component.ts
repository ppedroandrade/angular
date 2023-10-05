import { Component } from '@angular/core';
import { Carros } from './../carros';

@Component({
  selector: 'app-carros-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.css'],
})
export class CarrosListComponent {
  lista: Carros[] = [];

  constructor() {
    this.lista.push(new Carros('HB20', 2020));
    this.lista.push(new Carros('HB20', 2020));
    this.lista.push(new Carros('HB20', 2020));
    this.lista.push(new Carros('HB20', 2020));
    this.lista.push(new Carros('HB20', 2020));
    this.lista.push(new Carros('HB20', 2020));
    this.lista.push(new Carros('HB20', 2020));
  }
}
