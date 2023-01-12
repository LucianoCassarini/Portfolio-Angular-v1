import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Acreditation } from './acreditations.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService implements OnInit {
  URL = environment.URL + 'educacion/';
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
      
  }

  public lista(): Observable<Acreditation[]>{
    return this.httpClient.get<Acreditation[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<Acreditation>{
    return this.httpClient.get<Acreditation>(this.URL + `detail/${id}`);
  }

  public save(educacion : Acreditation): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id:number, educacion:Acreditation): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
