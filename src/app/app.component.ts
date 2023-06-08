import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //index.html dice app-root
  templateUrl:'app.component.html'//ruta del html
})

export class AppComponent implements ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log('cambio we');
 } 
}
/*

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
}
*/