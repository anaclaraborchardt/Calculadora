import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "protractor";
import { BotaoComponent } from "./botao.component";

@NgModule({
    imports:[
        CommonModule,
    ],
    declarations:[
        BotaoComponent

    ],
    exports:[
        BotaoComponent
    ]

})
export class BotaoModule{

}