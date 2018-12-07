import { InMemoryDbService } from "angular-in-memory-web-api";

export class MockApiService implements InMemoryDbService {
  createDb() {
    let employees = [
      {
        id: 1,
        name: "Yessica Diaz",
        company: "Yuxi Glogal",
        age: 21,
        birthday: "31/12/1997",
        color: "red",
        projectId: "Smart Table"
      },
      {
        id: 2,
        name: "Eliana Lopez",
        company: "Yuxi Glogal",
        age: 23,
        birthday: "31/10/1995",
        color: "blue",
        projectId: "Smart Table"
      },
      {
        id: 3,
        name: "Juan Hernandez",
        company: "Yuxi Glogal",
        age: 24,
        birthday: "27/06/1994",
        color: "green",
        projectId: "IMS"
      },
      {
        id: 4,
        name: "Laura Ciro",
        company: "Yuxi Glogal",
        age: 18,
        birthday: "15/03/2000",
        color: "yellow",
        projectId: "Lunar Journey"
      },
      {
        id: 5,
        name: "Alejandro Medina",
        company: "Yuxi Glogal",
        age: 23,
        birthday: "28/02/1995",
        color: "pink",
        projectId: "Atlas"
      },  {
        id: 6,
        name: "Juan Orozco",
        company: "Yuxi Glogal",
        age: 28,
        birthday: "28/02/1995",
        color: "green",
        projectId: "Atlas"
      }

    ];

    let projects = [
      { id: 1, name: "Smart Table", teamSize: 2, clientName: "Apex" },
      { id: 2, name: "IMS", teamSize: 1, clientName: "Apex" },
      { id: 3, name: "Lunar Journey", teamSize: 1, clientName: "Apex" },
      { id: 4, name: "Atlas", teamSize: 1, clientName: "Apex" }
    ];

    return { employees, projects };
  }
}
