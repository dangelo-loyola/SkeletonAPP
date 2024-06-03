import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
})
export class MedicosPage {

  medicos = [
    {
      nombre: 'Dr. Luis Martínez',
      especialidad: 'Cardiología',
      foto: 'assets/imagenes/hombre1.webp',
      valoracion: '★★★★★' // Valoración de 5 estrellas
    },
    {
      nombre: 'Dr. Juan Rodríguez',
      especialidad: 'Dermatología',
      foto: 'assets/imagenes/hombre2.webp',
      valoracion: '★★★★' // Valoración de 4 estrellas
    },
    {
      nombre: 'Dra. Ana Gómez',
      especialidad: 'Pediatría',
      foto: 'assets/imagenes/mujer1.jpg',
      valoracion: '★★★★★' // Valoración de 5 estrellas
    },
    {
      nombre: 'Dra. Laura González',
      especialidad: 'Ginecología',
      foto: 'assets/imagenes/mujer2.jpg',
      valoracion: '★★★★' // Valoración de 4 estrellas
    },
    {
      nombre: 'Dr. Roberto Pérez',
      especialidad: 'Neurología',
      foto: 'assets/imagenes/hombre3.webp',
      valoracion: '★★★★★' // Valoración de 5 estrellas
    },
    {
      nombre: 'Dr. Miguel Sánchez',
      especialidad: 'Psicología',
      foto: 'assets/imagenes/medico5.png',
      valoracion: '★★★★★' // Valoración de 5 estrellas
    },
    {
      nombre: 'Dra. Marta Jiménez',
      especialidad: 'Oftalmología',
      foto: 'assets/imagenes/mujer3.jpg',
      valoracion: '★★★★★' // Valoración de 5 estrellas
    }
  ];

  constructor(private router: Router) { }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

}
