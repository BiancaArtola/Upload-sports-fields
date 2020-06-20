import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app;
  db;

  constructor(private firestore: AngularFirestore) { }
  // if (!firebase.apps.length) {
  //   this.app = firebase.initializeApp(environment.firebase);
  //   this.db = firebase.firestore(this.app);
  // }


  setCancha(formData) {
    return new Promise((resolve, reject) => {

      this.firestore.collection("canchas")
        .add({
          id: 6,
          nombre: formData.nombre,
          ubicacion: formData.ubicacion,
          telefono: formData.telefono,
          precio: formData.precio,
          icono: formData.icono,
          imagen: formData.imagen,
          descripcion: formData.descripcion,
          deporte: formData.sport,
          coordenadas: [formData.latitud, formData.longitud],
          comentarios: [],
          techada: formData.techada,
          piso: formData.material,
          cantJugadores: formData.cantidadJugadores,
          tipoCancha: formData.tipoCancha
        })
        .then(function () {
          console.log("Se agrego correctamente");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    });
  }

}
