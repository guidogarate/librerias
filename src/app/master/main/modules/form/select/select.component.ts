import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginModels } from "./login.models";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  usuario: LoginModels = new LoginModels("", "", "", null);
  databases = [
    {
      id: 1,
      nombre: "sagesoft"
    },
    {
      id: 2,
      nombre: "sagedesa"
    }
  ];

  constructor() {}

  ngOnInit() {}

  ingresar(form: NgForm) {
    console.log(this.usuario);
    console.log(form);
  }
}
