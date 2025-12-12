import { Aliados } from "./Aliados";

export interface Empresa{
    secuencial:number;
    nombre:string;
    direccion:string;
    telefono:string;
    correo:string;
    slogan:string;
    urlLogo:string;
    sitioWeb:string;
    tipoEmpresa:string;
    estadoActivo:boolean;
    fechaCreacion:Date;
    ultimaActualizacion:Date;
    aliados:Aliados[];
}