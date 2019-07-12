import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

  constructor(protected http: HttpClient) { }
  getUsers() {
    return this.http.get('https://www.googleapis.com/blogger/v3/blogs/4087514801239065989/posts?fetchImages=true&orderBy=published&key=AIzaSyDaUvpKswFphlKWBAdQOF-AqpCCaaDRSjk');
  }
  getpost(){

  }
 // GET https://www.googleapis.com/blogger/v3/blogs/4087514801239065989/posts/6104770190469866754?view=READER&fields=content&key=AIzaSyDaUvpKswFphlKWBAdQOF-AqpCCaaDRSjk
}