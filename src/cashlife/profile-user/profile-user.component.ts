import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardTitle} from "@angular/material/card";
import {MatProgressBar} from "@angular/material/progress-bar";
import {ToolbarComponent} from "../../../../Saifu-FrontEnd/src/shared/components/toolbar/toolbar.component";

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatInput,
    MatButton,
    MatCard,
    MatProgressBar,
    MatCardTitle,
    ToolbarComponent,
    MatCardActions
  ],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent {

  user = {
    name: '',
    email: '',
    familyMembers: 5,
    password: ''
  };

  actualizar() {
    console.log('Perfil actualizado', this.user);
  }

  eliminar() {
    console.log('Perfil eliminado');
  }

}
