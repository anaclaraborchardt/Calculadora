import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BotaoModule } from './botao/botao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BotaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
