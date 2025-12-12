import { Autor } from "./Autor";
import { Categoria } from "./Categoria";
import { ImagenNoticia } from "./ImagenNoticia";

    export interface Noticia{
        id:number;
        titulo:string;
        contenido:string;
        resumen:string;
        fechaPublicacion:Date;
        fechaCreacion:Date;
        fechaActualizacion:Date;
        estado:number; // 1=Activo, 2=Inactivo, 3=Borrador, 4=Archivado, etc.
        categoria:Categoria;
        autor:Autor;
        imagennoticia:ImagenNoticia[];
    }