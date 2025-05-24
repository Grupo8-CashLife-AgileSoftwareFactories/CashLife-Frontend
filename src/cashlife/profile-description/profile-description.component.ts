import { Component } from '@angular/core';
import {ToolbarComponent} from "../../../../Saifu-FrontEnd/src/shared/components/toolbar/toolbar.component";
import {MatCard, MatCardActions} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatList, MatListItem} from "@angular/material/list";
import {RouterLink} from "@angular/router";
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'app-profile-description',
  standalone: true,
  imports: [
    ToolbarComponent,
    MatCard,
    MatIcon,
    NgStyle,
    MatProgressBar,
    MatButton,
    NgForOf,
    MatListItem,
    MatList,
    MatCardActions,
    RouterLink,
    MatLine,
    MatMiniFabButton
  ],
  templateUrl: './profile-description.component.html',
  styleUrl: './profile-description.component.css'
})
export class ProfileDescriptionComponent {
  logros = [
    {
      titulo: 'Eres un ganador!',
      descripcion: 'Alcanzó nivel 01',
      progreso: 100,
      color: '#ffcccb',
      icono: 'assets/win-icon.png'
    },
    {
      titulo: 'Celebra a lo grande!',
      descripcion: 'Alcanzó nivel 02',
      progreso: 100,
      color: '#fce4ec',
      icono: 'assets/celebrate-icon.jpg'
    }
  ];

  miembros = [
    {
      nombre: 'María Chavez Palacios',
      rol: 'Administrador',
    },
    {
      nombre: 'Luis Chavez Palacios',
      rol: 'Editor',
    },
    {
      nombre: 'Juan Palacios Vasquez',
      rol: 'Miembro',
    }
  ];
}
