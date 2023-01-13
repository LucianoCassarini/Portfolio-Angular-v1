export class Proyecto{
    id? : number;
    nombre : string;
    descripcion : string;
    urlHost : string;
    urlGit : string;
    urlImagen : string;

    constructor(
    nombre : string,
    descripcion : string,
    urlHost : string,
    urlGit : string,
    urlImagen : string,
    ){
        this.nombre = nombre;
        this.descripcion =  descripcion;
        this.urlHost = urlHost;
        this.urlGit = urlGit;
        this.urlImagen = urlImagen;
    }
}