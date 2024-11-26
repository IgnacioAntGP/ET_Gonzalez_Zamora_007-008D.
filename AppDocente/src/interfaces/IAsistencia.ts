//POST
export interface Asistencias{
    estado: boolean,
    fecha: string,
    asignatura: string,
    docente: string,
    email_alumno: string,
    rut_alumno: string,
    id_curso: string
}

//GET, PUT
export interface Asistencia{
    id:string,
    estado: boolean,
    fecha: string,
    asignatura: string,
    docente: string,
    email_alumno: string,
    rut_alumno: string,
    id_curso: string
}
