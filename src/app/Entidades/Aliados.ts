import { Empresa } from "./Empresa";

export interface Aliados{
    secuencial:number;
    tipoAlianza:string; 
    fechaInicio:Date;
    fechaFin:Date;
    estado:string;
    descripcion:string;
    contratoUrl:string;
    empresa:Empresa;
}