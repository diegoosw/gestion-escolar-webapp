import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import {SHARED_IMPORTS} from '../../shared/shared.imports';
import { MatRadioChange } from '@angular/material/radio';
import { AuthServices } from '../../services/auth-services';

@Component({
  selector: 'app-registro-usuarios-screen',
  imports: [],
  templateUrl: './registro-usuarios-screen.html',
  styleUrl: './registro-usuarios-screen.scss',
})
export class RegistroUsuariosScreen implements OnInit {
  public username: string = 'registro-usuarios';
  public user:any ={};
  public editar: boolean = false;
  public rol:string = "";
  public idUser:number = 0;

//banderas para el tipo de usuario
public isAdmin:boolean = false;
public isProfesor:boolean = false;
public isAlumno:boolean = false;

constructor(
  private location: Location,
  public authService: AuthServices
) { }

ngOnInit(): void {
  
}

public radioChange(event: MatRadioChange) {
  if(event.value === 'administrador'){
    this.isAdmin = true;
    this.isProfesor = false;
    this.isAlumno = false;
  }else if(event.value === 'profesor'){
    this.isAdmin = false;
    this.isProfesor = true;
    this.isAlumno = false;
  }else if(event.value === 'alumno'){
    this.isAdmin = false;
    this.isProfesor = false;
    this.isAlumno = true;
  }
}
}
