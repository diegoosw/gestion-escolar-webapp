import { Component, Input, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.imports';

@Component({
  selector: 'app-registro-maestros',
  imports: [...SHARED_IMPORTS],
  templateUrl: './registro-maestros.html',
  styleUrl: './registro-maestros.scss',
})
export class RegistroMaestros implements OnInit {

  @Input() rol:string = "";
  @Input() datos_user:any = {};

  constructor() { }

  ngOnInit() {
  } 

}
