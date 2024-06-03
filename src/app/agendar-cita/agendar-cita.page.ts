import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.page.html',
  styleUrls: ['./agendar-cita.page.scss'],
})
export class AgendarCitaPage {

  especialidades: string[] = ['Cardiología', 'Dermatología', 'Pediatría', 'Ginecología', 'Neurología', 'Psicología', 'Oftalmología'];
  medicos = [
    { nombre: 'Dr. Luis Martínez', especialidad: 'Cardiología' },
    { nombre: 'Dr. Juan Rodríguez', especialidad: 'Dermatología' },
    { nombre: 'Dra. Ana Gómez', especialidad: 'Pediatría' },
    { nombre: 'Dra. Laura González', especialidad: 'Ginecología' },
    { nombre: 'Dr. Roberto Pérez', especialidad: 'Neurología' },
    { nombre: 'Dr. Miguel Sánchez', especialidad: 'Psicología' },
    { nombre: 'Dra. Marta Jiménez', especialidad: 'Oftalmología' }
  ];

  especialidadSeleccionada: string = '';
  medicoSeleccionado: string = '';
  fechaHoraSeleccionada: string = '';

  constructor(private router: Router) { }

  agendarCita() {
    // Aquí puedes implementar la lógica para agendar la cita con el médico seleccionado
    console.log('Cita agendada con:', this.medicoSeleccionado);
    
    // Navegar a la página de VerCita y pasar los datos de la cita como parámetros de la URL
    this.router.navigate(['/ver-cita'], { queryParams: { cita: JSON.stringify({
      especialidad: this.especialidadSeleccionada,
      medico: this.medicoSeleccionado,
      fechaHora: this.fechaHoraSeleccionada
    }) }});
  }
}

