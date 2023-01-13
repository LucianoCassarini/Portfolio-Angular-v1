import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proyecto } from "./proyecto.model";

@Injectable({
    providedIn: 'root'
})
export class ProyectoServicios{
    URL = 'https://portfoliolgc.onrender.com/proyectos/';

    constructor(private httpClient:HttpClient){}

    public lista():Observable<Proyecto[]>{
        return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
    }

    public detail(id : number): Observable<Proyecto>{
        return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);
    }

    public save(experiencia : Proyecto):Observable<any>{
        return this.httpClient.post<any>(this.URL + 'create', experiencia);
    }

    public update(id:number, experiencia:Proyecto): Observable<any>{
        return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
    }

    public delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }
}