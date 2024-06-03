import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    fecha_nacimiento: '',
    password: ''
  };

  constructor(private router: Router, private alertController: AlertController) {}

  login() {
    // Validar que los campos no estén vacíos
    if (!this.user.nombre || !this.user.apellido || !this.user.email || !this.user.telefono || !this.user.fecha_nacimiento || !this.user.password) {
      this.presentAlert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    // Guardar los datos del usuario en localStorage (excepto contraseña por seguridad)
    localStorage.setItem('user', JSON.stringify(this.user));

    // Redirigir al Home
    this.router.navigateByUrl('/home');
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
