import { CellType } from "dataTypes/CellType";

export class Cell{
    id?:number;
    code:string;
    position: number;
    shelf: string;
    type: CellType;
}