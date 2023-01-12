export class Acreditation{
    id? : number;
    nombreEdu : string;
    descripcionEdu : string;
    fechaEdu : string;
    urlImagenEdu : string;


    constructor(nombreEdu:string, descripcionEdu:string, fechaEdu:string, urlImagenEdu:string){
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.fechaEdu = fechaEdu;
        this.urlImagenEdu = urlImagenEdu;
    }
}