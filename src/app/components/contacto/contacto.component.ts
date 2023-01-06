import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nuevoUsuario: NuevoUsuario = new NuevoUsuario();

  onSubmit(formTemplate: NgForm){
   
  }
}
