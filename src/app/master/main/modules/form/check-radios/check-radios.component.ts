import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as Switchery from "src/assets/global_assets/js/plugins/forms/styling/switchery.min.js";

declare function init_check();

@Component({
  selector: "app-check-radios",
  templateUrl: "./check-radios.component.html",
  styleUrls: ["./check-radios.component.css"]
})
export class CheckRadiosComponent implements OnInit {
  // @ViewChild("elemeh2") txtmacc: ElementRef;

  constructor() {
    const eleh2: any = document.getElementsByName("element-h2-prueba")[0];
    console.log(eleh2);

    const ele = document.querySelector(".form-check-macc-switchery");
    const switchery = new Switchery(ele, {
      disabled: true,
      disabledOpacity: 0.75
    });
    console.log(ele);
    // console.log(switchery);
  }

  ngOnInit() {
    setTimeout(() => {
      init_check();
    }, 1000);
  }
}
