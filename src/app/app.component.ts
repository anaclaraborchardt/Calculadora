import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  appBotaoClick(): void{
    console.log('AppComponent -> appBotaoClick')
  }

  appClicarNumero(): void{
    console.log("AppComponent -> appClicarNumero")
  }

  appClicarOperacao(): void{
    console.log("AppComponent -> appClicarOperacao")
  }
}

