import { RedirectCommand, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
    path: 'login',
    loadComponent: () => import('./screens/login-screen/login-screen').then(m => m.LoginScreen),
    },

    {
        path: 'registro-usuarios',//esta línea define el nombre de la ruta, es decir, lo que va después del localhost:4200/ en la url
        loadComponent: () => import('./screens/registro-usuarios-screen/registro-usuarios-screen').then(m => m.RegistroUsuariosScreen),
    },
    { path: '**', redirectTo: 'login' },
];
