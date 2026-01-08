import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../Entidades/Empresa';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpresaService } from '../../servicio/servicio-empresa.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresa-componente',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './empresa-componente.component.html',
  styleUrl: './empresa-componente.component.css'
})
export class EmpresaComponenteComponent  implements OnInit {
  empresa!: Empresa;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private empresaService: ServicioEmpresaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarEmpresa(1);
    console.log(this.empresa+"hola");
  }

  cargarEmpresa(id: number) {
    this.empresaService.obtener(id).subscribe({
      next: (data) => {
        console.log('Empresa JSON:', JSON.stringify(data));
        this.empresa = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar empresa', err);
        this.cargando = false;
      }
    });
  }

  guardarCambios() {
    this.empresaService.editar(this.empresa.secuencial, this.empresa).subscribe({
      next: () => {
        alert('Empresa actualizada correctamente');
        this.router.navigate(['/empresa']);
      },
      error: (err) => {
        console.error('Error al editar', err);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/empresa']);
  }
}
