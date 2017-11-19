import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  URL_BUSQUEDA : string = "https://api.spotify.com/v1/search?";
  URL_ARTISTA: string = "https://api.spotify.com/v1/artists/";
  TOKEN = "BQA6gWPj5fLaSTDBDce7MdpszZPwmAdwHXaA7pc87TXr9kwAtjrh3JNSRBkC-eOEN64SQqVagYLjeFbCmJ_22Q";

  constructor(private _http:Http) { }

  getArtistas(termino:string){
    //Headers, son las cabeceras que se mandan para realizar la petición
    let headers = new Headers();
    headers.append('authorization', `Bearer ${ this.TOKEN }`);
    let query = `q=${ termino }&type=artist`;
    let url = this.URL_BUSQUEDA + query;

    return this._http.get(url, {headers}).map( res =>{
      this.artistas = res.json().artists.items;
      return this.artistas;
    });
    
  }

  getArtista(id:string){
    //6lRYM7KyQHxdWZqypW0Y4K"
    let headers = new Headers();
    headers.append('authorization', `Bearer ${ this.TOKEN }`);
    
    let url = this.URL_ARTISTA + id;

    return this._http.get(url, {headers}).map( res =>{
      console.log("artista", res.json());
      return res.json();
    });
  }

  getTop(id:string){
    //6lRYM7KyQHxdWZqypW0Y4K"
    let headers = new Headers();
    headers.append('authorization', `Bearer ${ this.TOKEN }`);
    
    let query = `${ id }/top-tracks?country=US`;
    let url = this.URL_ARTISTA + query;

    return this._http.get(url, {headers}).map( res =>{
      console.log(res.json().tracks);
      return res.json().tracks;
    });
  }
}
