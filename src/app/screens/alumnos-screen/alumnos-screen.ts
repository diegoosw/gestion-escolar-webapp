import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared.imports';
import { MatTableDataSource } from '@angular/material/table';
import { DatosAlumno } from '../../interfaces/usuarios-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlumnosService} from '../../services/alumnos-service';
import { NotificationService } from '../../services/tools/notification-service';
import { AuthServices } from '../../services/auth-services';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-alumnos-screen',
  imports: [...SHARED_IMPORTS],
  templateUrl: './alumnos-screen.html',
  styleUrl: './alumnos-screen.scss',
})





export class AlumnosScreen implements OnInit, AfterViewInit{

  public name_user: string = '';
  public rol: string = '';
  public lista_alumnos: any[] = [];

  //Declaramos las columnas que se mostrarán en la tabla
  public displayedColumns: string[] = [
    'matricula',
    'nombre',
    'email',
    'fecha_nacimiento',
    'telefono',
    'curp',
    'rfc',
    'edad',
    'ocupacion',
    'editar',
    'eliminar'
  ];

  dataSource = new MatTableDataSource<DatosAlumno>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private authService: AuthServices,
    private alumnosService: AlumnosService,
    private notificationService: NotificationService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.name_user = this.authService.getUserCompleteName();
    this.rol = this.authService.getUserGroup();
    this.obtenerAlumnos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //Función para obtener la lista de alumnos registrados
  public obtenerAlumnos(): void {
    this.alumnosService.obtenerListaAlumnos().subscribe({
      next: (response) => {
        this.lista_alumnos = response;

        if (this.lista_alumnos.length > 0) {
          this.lista_alumnos.forEach((usuario) => {
            usuario.first_name = usuario.user.first_name;
            usuario.last_name = usuario.user.last_name;
            usuario.email = usuario.user.email;         
          });
        }

        
        // inyectamos los datos al dataSource que ya existe.
        // Así no perdemos la configuración del paginador y el sort.
        this.dataSource.data = this.lista_alumnos as DatosAlumno[];

        //llamamos a la configuración --->
        this.configurarFiltroYOrdenamiento();
      },
      error: () => {
        this.notificationService.error('No se pudo obtener la lista de alumnos');
      }
    });
  }

  public goEditar(idUser: number) {
    this.router.navigate(['/registro-usuarios', 'alumno', idUser]);
  }

  public delete(idUser: number) {

  }

  configurarFiltroYOrdenamiento() {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const fullName = `${data.first_name} ${data.last_name}`.toLowerCase();
      return fullName.includes(filter);
    };

    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      switch(property) {
        case 'nombre': return item.first_name + ' ' + item.last_name;
        default: return item[property];
      }
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

