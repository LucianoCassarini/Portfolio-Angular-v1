import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Work } from "./work.model";

@Injectable({
    providedIn: 'root'
})

export class WorkServicio{
    expURL = 'http://localhost:8080/explab/';

    constructor(private httpClient: HttpClient){
        
    }

    public lista():Observable<Work[]>{
        return this.httpClient.get<Work[]>(this.expURL + 'lista');
    }

    public detail(id : number): Observable<Work>{
        return this.httpClient.get<Work>(this.expURL + `detail/${id}`);
    }

    public save(experiencia : Work):Observable<any>{
        return this.httpClient.post<any>(this.expURL + 'create', experiencia);
    }

    public update(id:number, experiencia:Work): Observable<any>{
        return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
    }

    public delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
    }
}