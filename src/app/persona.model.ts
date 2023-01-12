export class Persona {
  nombre: string;
  apellido: string;
  descripcion: string;
  correo: string;
  telefono: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  urlcv: string;
  img: string;
  usuario: string;
  contrasena: string;

  constructor(nombre: string,
    apellido: string,
    descripcion: string,
    correo: string,
    telefono: string,
    linkedin: string,
    twitter: string,
    instagram: string,
    urlcv: string,
    img: string,
    usuario: string,
    contrasena: string,){
    
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.correo = correo;
        this.telefono = telefono;
        this.linkedin = linkedin;
        this.twitter = twitter;
        this.instagram = instagram;
        this.urlcv = urlcv;
        this.img = img;
        this.usuario = usuario;
        this.contrasena = contrasena;
  }
}
