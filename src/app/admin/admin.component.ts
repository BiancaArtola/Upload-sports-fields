import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public isAdmin = false;
  public formulario;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    if (this.formulario.valid) {
      if (formData.usuario == 'bartola' && formData.password == '456**cami'){
        this.isAdmin = true;
      }else
        console.log("sada");


    }
  }

}
