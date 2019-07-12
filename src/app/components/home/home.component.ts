import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BloggerService } from 'src/app/servicios/blogger.service';
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


  Titulo1: string;
  Titulo2: string;
  Titulo3: string;
  Titulo4: string;
  Titulo5: string;
  Titulo6: string;
  Titulo7: string;
  Titulo8: string;

  parr1: string;
  parr2: string;
  parr3: string;
  parr4: string;
  parr5: string;
  parr6: string;
  parr7: string;
  parr8: string;

  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;


  blog: any[] = []; 

  blog2: any[] = []; 

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
       
        this.Titulo1 = data.items[0].title;
        this.img1 = data.items[0].images[0].url;
        this.parr1 = data.items[0].published + " " + data.items[0].url;

        this.Titulo2 = data.items[1].title;
        this.img2 = data.items[1].images[0].url;
        this.parr2 = data.items[1].published + " " + data.items[1].url ;

        this.Titulo3 = data.items[2].title;
        this.img3 = data.items[2].images[0].url;
        this.parr3 = data.items[2].published + " " + data.items[2].url;

        this.Titulo4 = data.items[3].title;
        this.img4 = data.items[3].images[0].url;
        this.parr4 = data.items[3].published + " " + data.items[3].url;

        this.Titulo5 = data.items[4].title;
        this.img5 = data.items[4].images[0].url;
        this.parr5 = data.items[4].published + " " + data.items[4].url;

        this.Titulo6 = data.items[5].title;
        this.img6 = data.items[5].images[0].url;
        this.parr6 = data.items[5].published + " " + data.items[5].url;
        
        this.Titulo7 = data.items[6].title;
        this.img7 = data.items[6].images[0].url;
        this.parr7 = data.items[6].published + " " + data.items[6].url;

        this.Titulo8 = data.items[7].title;
        this.img8 = data.items[7].images[0].url;
        this.parr8 = data.items[7].published + " " + data.items[7].url;

  
                

      
    /*    <div id="content"></div>
        <script>
          function handleResponse(response) {
            document.getElementById("content").innerHTML += "<h1>" + response.title + "</h1>" + response.content;
          }
        </script>
        <script
        src="https://www.googleapis.com/blogger/v2/blogs/3213900/posts/8398240586497962757?callback=handleResponse&key=YOUR-API-KEY"></script>
  */
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
  