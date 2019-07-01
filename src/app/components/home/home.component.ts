import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
  email: string;
  tel: string;
  nom: string;
  status: string;
  tipo: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
correo: string;
Tel: string;
nombre: string;
Tipo: string;
ngOnInit() {
}
}
/*  submit({value}: {value: MailChimpResponse}) {
    //Folio y tipo de servicio
        value.email = this.correo;
        value.tipo = this.Tipo;
        value.tel = this.Tel;
        value.nom = this.nombre;
       // var Mailchimp = require('mailchimp-api-v3')
 
var mailchimp = new Mailchimp('6548947e8958e62652b6ecc737ad9c29-us3');

  }

  
}
//"https://hotmail.us3.list-manage.com/subscribe/post?u=076eb09f333c5f0533346ed64&amp;id=26ca01b10f"
*/