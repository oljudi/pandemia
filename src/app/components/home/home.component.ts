import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  

  ngOnInit() {
    var Mailchimp = require('mailchimp-api-v3')
 
var mailchimp = new Mailchimp('6548947e8958e62652b6ecc737ad9c29-us3');
 
//Callback style
mailchimp.post('/lists/id/members', {
  email_address : email,
  status : 'subscribed'
  
})
.then(function(results) {
  ...
})
.catch(function (err) {
  ...
});

}
}
