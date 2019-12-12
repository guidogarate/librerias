import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { LoginModels } from "./login.models";
import { DeviceDetectorService } from "ngx-device-detector";
declare function init_select();

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  isMobile = this.deviceService.isMobile();
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

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    setTimeout(() => {
      init_select();
    }, 1000);
  }

  ingresar(form: NgForm) {
    console.log(this.usuario);
    console.log(form);
  }
}
