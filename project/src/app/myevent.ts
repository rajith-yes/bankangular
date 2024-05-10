export class Myevent {
    id!: number;
    members!: string;
    createdAt!:string;
    updatedAt!:string ;
    leaderid!: number;
    leader!: {
      id: number; // Corrected property name from "iyd" to "id"
      leader: string; // Corrected property name from "leaderr" to "leader"
      eventname: string;
    };
  }
