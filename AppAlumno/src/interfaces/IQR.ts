//GET
export interface QRs{
    id:string,
    qrCode:string,
    rut_alumno:string,
    id_curso:string
}

//POST
export interface QR{
    qrCode:string,
    rut_alumno:string,
    id_curso:string
}