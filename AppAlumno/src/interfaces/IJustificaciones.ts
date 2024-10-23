//GET, PUT, DELETE
export interface Justificaciones{
    id:string,
    alumno:string,
    asignatura:string,
    docente:string,
    descripcion:string,
    imagen:string,
    fecha:string
}

//POST
export interface Justificacion{
    alumno:string,
    asignatura:string,
    docente:string,
    descripcion:string,
    imagen:string,
    fecha:string
}