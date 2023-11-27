export enum GameEstatus {
    Disponible = 'Disponible',
    Vendido = 'Vendido',
    Apartado = 'Apartado',
    Negociacion = 'Negociación',
  }
  
  export interface Game {
    id: number;
NameGame:string,
Price:number,
Status:GameEstatus

  }
  