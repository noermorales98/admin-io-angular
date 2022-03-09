export class Tareas{
  constructor(
    public idTarea: bigint,
    public nombreTarea: string,
    public descripcion: string,
    public importancia: string,
    public proceso: string,
    public fecha_inicio: Date,
    public fecha_final: Date,
  )
  {}
}
