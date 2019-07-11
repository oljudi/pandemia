import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
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
  buttons: boolean;
  topbutton: boolean;
 
  public ngOnInit() {
    this.buttons = true;
    this.topbutton = false; 
    $(document).ready(function() {
      $('#myCarousel').on('slide.bs.carousel', function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $('.carousel-item').length;
    
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == 'left') {
              $('.carousel-item')
                .eq(i)
                .appendTo('.carousel-inner');
            } else {
              $('.carousel-item')
                .eq(0)
                .appendTo($(this).find('.carousel-inner'));
            }
          }
        }
      });
    });

  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.buttons = false;
    this.topbutton = true;
    if (window.pageYOffset < 100) {
      this.buttons = true;
      this.topbutton = false; 

    }

  } 
}