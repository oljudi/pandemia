import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

  blogIDDiego = '5568244772758701372';
  ApiKeyDiego = 'AIzaSyB2R4JyED2HV3c2Id95OhL8TEcRHM-rSb8';

  blogID = '2075395070383193462';
  ApiKey = 'AIzaSyB2R4JyED2HV3c2Id95OhL8TEcRHM-rSb8';

  public url = `https://www.googleapis.com/blogger/v3/blogs/${ this.blogID }/posts?fetchImages=true&orderBy=published&key=${ this.ApiKey }`;

  constructor(protected http: HttpClient) { }

  getPosts() {
    return this.http.get( this.url );
  }

}
