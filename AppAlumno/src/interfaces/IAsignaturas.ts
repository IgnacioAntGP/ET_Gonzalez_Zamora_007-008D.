//GET, PUT, DELETE
export interface Asignaturas{
    id: string,
    nombre: string,
    imagen: string,
    docente: string,
    descripcion: string
}

//POST
export interface Asignatura{
    nombre: string,
    imagen: string,
    docente: string,
    descripcion: string
}