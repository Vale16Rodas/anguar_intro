import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[]=['Spidermán','Iroman','Hulk', 'Thor', 'Cap'];//arreglo de strings
  heroeBorrado: string ='';
  

  borrarHeroe(){//formas de borrar elemento del arreglo
    console.log("borrando...")
    this.heroeBorrado = this.heroes.shift()|| '';//this.heroes.pop();//     
   
  }
 
}
