import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares : Celular[] = [
    {id : 1, nome: "Celular XYZ", descricao: "Um celular grande", esgotado: false},
    {id : 1, nome: "Celular ABC", descricao: "Um celular normal", esgotado: false},
    {id : 1, nome: "Celular DEF", descricao: "", esgotado: false},
    {id : 1, nome: "Celular GHI", descricao: "Um celular pequeno", esgotado: false},
    {id : 1, nome: "Celular JKL", descricao: "Um celular mini", esgotado: true},
  ]
}
