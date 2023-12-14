export interface IFormulario {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
  info:Iinfo
}

interface Iinfo{
  nombre:string,
  cumple:string,
  edad:number,
}