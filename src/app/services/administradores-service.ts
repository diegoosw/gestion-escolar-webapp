import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdministradoresService {

  constructor() { }

  public esquemaAdmin(){
    return {
      'rol':'',
      'clave_admin':'',
      'first_name':'',
      'last_name':'',
      'email':'',
      'password':'',
      'confirmar_password':'',
      'telefono':'',
      'rfc':'',
      'edad':'',
      'ocupacion':'',

    }

  }

  public validarAdmin(data: any, editar: boolean){
    let error: any = {};
    return error;
  }
  
}
