import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  editMode: boolean = false;

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    // Obtener los datos del usuario desde localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        fecha_nacimiento: ''
      };
    }
  }

  async saveProfile() {
    // Guardar los datos actualizados en localStorage
    localStorage.setItem('user', JSON.stringify(this.user));
    // Mostrar una alerta confirmando que los cambios fueron guardados
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Los cambios han sido guardados.',
      buttons: ['OK']
    });

    await alert.present();
    this.toggleEditMode(); // Deshabilitar la edición después de guardar
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  goToHomePage() {
    // Redirigir a la página de inicio
    window.history.back();
  }
}
