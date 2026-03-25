import { Component, Input, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.imports';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-admin',
  imports: [...SHARED_IMPORTS],
  templateUrl: './registro-admin.html',
  styleUrl: './registro-admin.scss',
})
export class RegistroAdmin implements OnInit {

  @Input() rol:string = "";
  @Input() datos_user:any = {};

  public admin:any ={};
  public errors:any = {};
  public editar:boolean = false;
  public iduser:any = null;

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

}
