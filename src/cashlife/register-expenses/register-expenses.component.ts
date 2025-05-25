import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {ToolbarComponent} from "../../../../Saifu-FrontEnd/src/shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-register-expenses',
  standalone: true,
  imports: [
    MatCard,
    MatSlideToggle,
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    MatIcon,
    NgIf,
    ToolbarComponent
  ],
  templateUrl: './register-expenses.component.html',
  styleUrl: './register-expenses.component.css'
})
export class RegisterExpensesComponent {
  ingresos: number = 0;
  egresos: number = 0;
  alertasActivas: boolean = true;
  mostrarAlerta: boolean = false;

  verificarAlertas(): void {
    if (this.alertasActivas && this.egresos > this.ingresos) {
      this.mostrarAlerta = true;
    } else {
      this.mostrarAlerta = false;
    }
  }

}
