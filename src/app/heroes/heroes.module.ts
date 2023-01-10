import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
   declarations: [
    HeroeComponent,
    ListadoComponent
   ], 
   exports:[
      ListadoComponent,
      HeroeComponent
   ],
   imports:[
      CommonModule//ofrece directivas como el ngif, ngfor, entre otras cosas
   ]

})

export class HeroesModule{

}