import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{titulo}}</h1>

    <!--suma-->
    <!--<button (click)=" numero = numero+1; ">+1</button>-->
    <button (click)=" acumular(+2) ">+2</button>
    <span> {{ numero }} </span>
    <button (click)=" acumular(-2)">-2</button>
    <!--base-->
    <br>
    <h1>La base es : <strong>{{ base }}</strong></h1>
    <button (click)=" acumular(base) ">+{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)=" acumular(-base)">-{{ base }}</button>
    `
})


export class contadorComponent{
  titulo: string = 'Contador App';
  numero: number = 10; 
  base: number = 5;

  acumular(valor: number){
    this.numero += valor;
  }
}