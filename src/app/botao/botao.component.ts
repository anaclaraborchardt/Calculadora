import {Component, Output, EventEmitter, Input } from "@angular/core"

@Component({
    selector:"app-botao",
    templateUrl:'./botao.component.html'
})

export class BotaoComponent{
   
  @Output() 
  clickBotao = new EventEmitter();
  @Output() 
  clickNumero = new EventEmitter<string>();
  @Input() 
  digitar: string;

  numero1: number = 0;
  numero2: number = 0;
  operacao: string = "";
  resultado: number = 0;

  botaoClick(numero: string): void {
    if (!this.digitar) {
      this.digitar = numero;
    } else {
      this.digitar += numero;
    }
    this.clickNumero.emit(this.digitar);
    console.log(numero);
  }

  numeroClick(numero: number): void {
    if (this.operacao === "") {
      this.numero1 = this.numero1 * 10 + numero;
    } else {
      this.numero2 = this.numero2 * 10 + numero;
    }
    this.botaoClick(numero.toString());
  }

  adicionarOperacao(operacao: string) {
    this.operacao = operacao;
    if (!this.digitar) {
      this.digitar = operacao;
    } else {
      this.digitar += operacao;
    }
    this.clickNumero.emit(this.digitar);
    console.log(operacao);
    
  }

  calculoClick() {
    switch (this.operacao) {
      case "+":
        console.log(this.operacao);
        this.resultado = this.numero1 + this.numero2;
        break;
      case "-":
        this.resultado = this.numero1 - this.numero2;
        break;
      case "*":
        this.resultado = this.numero1 * this.numero2;
        break;
      case "/":
        this.resultado = this.numero1 / this.numero2;
        break;
    }
  }

  limpar() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.operacao = "";
    this.resultado = 0;
    this.digitar = "";
  }

  igual() {
    this.calculoClick();
    this.digitar = this.resultado.toString();
    this.numero1 = this.resultado;
    this.numero2 = 0;
    this.operacao = "";
  }
}


