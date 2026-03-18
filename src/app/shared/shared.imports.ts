import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';


/* =========================
  Router
   ========================= */

import { RouterModule } from '@angular/router';
/* elementos de angular material */
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


/**
* SHARED_IMPORTS
* ---------------------------------------------------------
* Colección de módulos/directivas reutilizables en
* componentes standalone.
*
* Se importa así:
* imports: [...SHARED_IMPORTS, HeaderApp, FooterApp]
*/

export const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgOptimizedImage,
  RouterModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatCardModule

];