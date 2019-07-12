import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { BloggerService } from 'src/app/servicios/blogger.service';
import { Post } from 'src/app/models/post';

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

  post: Post = {
  autor: "",
  contenido: "",
  fechapub: "",
  imagen: "",
  resumen: "",
  titulo: ""
  };

  blog: any[] = []; 

  blog2: any[] = []; 
  numpost:number;

  constructor(
    protected blogger: BloggerService
  ) {
  }
  public ngOnInit() {

    document.querySelectorAll('a[href^="#blog"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  document.querySelectorAll('a[href^="#contacto"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
       
  
        });
    });


    this.blogger.getUsers()
    .subscribe(
      (data: any) => {
         this.blog = data['results'];
       this.numpost = data.items.length;
        for(var i=0; i <= this.numpost ;i++){
          this.post[i] = data.items[i].title;
          // this.Titulo[i] = data.items[i].title;
          // this.img[i] = data.items[i].images[0].url;
          // this.res[i] = data.items[i].author.displayName + data.items[i].published;
          // this.pas[i] = data.items[i].content;
          // var contenido = this.pas[i];
          // var texto = $(contenido).text();
          // var someText = texto.replace(/(\r\n\r\n|\n\n|\r\r)/gm, "");
          // var caract = someText.length;
          // if (caract>120) {
          //   var someText2 = someText.substring(0,120);
          //   this.parr[i] = someText2+"...";
          // }else{
          //   var someText2 = someText.substring(0,caract);
          //   this.parr[i] = someText2+"...";
          // }
        }
       },
    (error) => {
      console.error(error);
    }
    );
  
  
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
  