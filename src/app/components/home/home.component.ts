import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { BloggerService } from 'src/app/servicios/blogger.service';
import { PanchoService } from '../../servicios/pancho.service';
import { Testimonio } from '../../models/testimonio';

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

  posts: any[] = [];
  testimonios: Testimonio[] = [];

  posts1: any[] = [];
  posts2: any[] = [];

  testimonios1: any[] = [];
  testimonios2: any[] = [];

  blog2: any[] = [];

  activeCarusel2 = false;

  numpost: number;

  constructor(
    protected blogger: BloggerService,
    protected pancho: PanchoService
  ) {}

  public ngOnInit() {

    document.querySelectorAll('a[href^="#blog"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
    document.querySelectorAll('a[href^="#contacto"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    });


    this.blogger.getPosts()
        .subscribe(
          (data: any) => {
            this.posts = data.items;
            if ( this.posts.length ) {
              for (let index = 0; index <= 3; index++) {
                if ( this.posts[index] != null ) {
                  this.posts1.push(this.posts[index]);
                } else {
                  console.log('No se creo arreglo 1.' + index);
                }
              }
              for (let index = 4; index <= 7; index++) {
                if ( this.posts[index] != null ) {
                  this.activeCarusel2 = true;
                  this.posts2.push(this.posts[index]);
                } else {
                  console.log('No se creo arreglo 2.' + index);

                }
              }
            } else {
              console.log('no hay nada en el blog');
            }

          },
        (error) => {
          console.error(error);
        }
    );

    this.pancho.getTestimonial().subscribe( (data:any) => {
      this.testimonios = data;
      console.log('Testimonios', this.testimonios );
      if ( this.testimonios.length ) {
        for (let index = 0; index < 1; index++) {
          this.testimonios1.push(this.testimonios[index]);
        }
        for (let index = 1; index < this.testimonios.length; index++) {
          this.testimonios2.push(this.testimonios[index]);
        }
      } else {
        console.log('no hay data');
      }
    });

    console.log('Testimonios afuera:', this.testimonios1 );


    this.buttons = true;
    this.topbutton = false;
    $(document).ready(function() {
        $('#myCarousel').on('slide.bs.carousel', function(e) {
          let $e = $(e.relatedTarget);
          let idx = $e.index();
          let itemsPerSlide = 3;
          let totalItems = $('.carousel-item').length;

          if (idx >= totalItems - (itemsPerSlide - 1)) {
            let it = itemsPerSlide - (totalItems - idx);
            for (let i = 0; i < it; i++) {
              // append slides to end
              if (e.direction === 'left') {
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
    

    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
      this.buttons = false;
      this.topbutton = true;
      if (window.pageYOffset < 100) {
        this.buttons = true;
        this.topbutton = false;
      }
    }
  }