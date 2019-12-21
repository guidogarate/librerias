import { Component, OnInit } from "@angular/core";
declare function init_select();
@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  newDatabase = [
    {
      id: 1,
      nombre: "base de datos pruebas"
    },
    {
      id: 3,
      nombre: "base de datos 1"
    }
  ];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      init_select();
    }, 1000);
  }
}
