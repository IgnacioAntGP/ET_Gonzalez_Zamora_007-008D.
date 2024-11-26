export interface Users{
    id:string,
    rut_docente:string,
    nombre:string,
    username:string,
    password:string,
    email:string,
    isactive:boolean,
}

export interface UserNuevo{
    rut_docente:string,
    nombre:string,
    username:string,
    password:string,
    email:string,
    isactive:boolean,
}