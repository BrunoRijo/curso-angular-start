import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})

export class SegundoComponenteComponent {
  nome = "Bruno";
  datanasc = "1994-06-24";
  urlImagem = "/assets/galaxia.jpg";

  mostrarDataNascimento(){
    alert('A data de nascimento é:'+ this.datanasc)
  }
}
