import { Component, OnInit } from '@angular/core';
import {SHARED_IMPORTS} from '../../shared/shared.imports';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  imports: [...SHARED_IMPORTS, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.scss',
})
export class LoginScreen implements OnInit {/* usar ctrl + . para buscar ayuda en los errores */
  /* aquí van las variables globales */
  public username: string = '';
  public password: string = '';
  public load: boolean = false;
  public errors: any={};
  public type: string = 'password';


  constructor(
    public router: Router/* ctrl + . para agregar la importación con ayuda */
  ) { }

  ngOnInit() {
  }

  public login(){

  }

  public registrar(){

  }

  public showPassword(){
    
  }

}
