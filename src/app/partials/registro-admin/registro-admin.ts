import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-registro-admin',
  imports: [],
  templateUrl: './registro-admin.html',
  styleUrl: './registro-admin.scss',
})
export class RegistroAdmin {
  @Input() rol:string = "";
  @Input() datos_user:any = {};
  
}
