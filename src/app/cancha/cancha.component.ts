import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.component.html',
  styleUrls: ['./cancha.component.css']
})
export class CanchaComponent {

  public deporteModelo;
  public deportes = ['basket', 'futbol', 'voley', 'pinpon', 'padel', 'tennis', 'hockey'];
  public cantidadJugadores = [5, 7, 9, 11];
  public materialPiso = ['Sintetico', 'Pasto', 'Ladrillo'];
  public tipoCancha = ['Futbol 5', 'Futbol 7', 'Futbol 9', 'Futbol 11'];

  public formulario;

  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService, private router: Router,) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([
        Validators.required
      ])],
      sport: ['', Validators.compose([
        Validators.required
      ])],
      descripcion: ['', Validators.compose([
        Validators.required
      ])],
      telefono: ['', Validators.compose([
        Validators.required
      ])],
      ubicacion: ['', Validators.compose([
        Validators.required
      ])],
      latitud: ['', Validators.compose([
        Validators.required
      ])],
      longitud: ['', Validators.compose([
        Validators.required
      ])],
      precio: ['', Validators.compose([
        Validators.required
      ])],
      imagen: ['', Validators.compose([
        Validators.required
      ])],
      icono: ['', Validators.compose([
        Validators.required
      ])],
      techada: [''],
      material: ['', Validators.compose([
        Validators.required
      ])],
      tipoCancha: [''],
      cantidadJugadores: [''],
    })
  }

  onSubmit(formData) {
    if (this.formulario.valid) {
      this.firebaseService.setCancha(formData).then(()=>{
        this.formulario.reset();
      });
    }
  }

  login(){
    this.router.navigate(['/admin']);

  }

}
