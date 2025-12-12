import { Noticia } from "./Noticia";

export interface ImagenNoticia{
    id:number;
    url:string;
    descripcion:string;
    textoAlternativo:string; // Para accesibilidad (alt)
    esPortada:boolean; // true = imagen principal, false = imagen secundaria
    orden:number; // Para ordenar las imágenes en la noticia
    fechaSubida:Date;
    estado:number; // 1=Activo, 2=Inactivo
    noticia:Noticia;
}