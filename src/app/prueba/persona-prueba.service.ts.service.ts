import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaPrueba } from './persona-prueba.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaPruebaService {
  URL = "http://localhost:8080/personas/";
  
  constructor(private http:HttpClient) { }

  public getPersona() : Observable<PersonaPrueba>{
    return this.http.get<PersonaPrueba>(this.URL + 'traer/perfil');
  }
}
