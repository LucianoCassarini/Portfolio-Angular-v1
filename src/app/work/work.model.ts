
export class Work{
    id? : number;
    nombreE : string;
    descripcionE : string;
    fecha : string;
    urlImagenE : string;
    
    constructor(nombreE:string, descripcionE:string, fecha:string, urlImagenE:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fecha = fecha;
        this.urlImagenE = urlImagenE;
    }
}