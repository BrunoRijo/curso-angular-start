import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})

export class CicloDeVidaComponent {
  horario = new Date();
  timer : any = null;

  @Input() texto = "";

  ngOnInit(): void{
    console.log('O evento onInit disparou');
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
}
