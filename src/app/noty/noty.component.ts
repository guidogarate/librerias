import { Component, OnInit } from "@angular/core";
import * as Noty from "src/assets/global_assets/js/plugins/notifications/noty.min.js";

@Component({
  selector: "app-noty",
  templateUrl: "./noty.component.html",
  styleUrls: ["./noty.component.css"]
})
export class NotyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  errorm() {
    new Noty({
      theme: "limitless",
      layout: "topRight",
      type: "error",
      timeout: 2500,
      text: "Change a few things up and try submitting again.",
      modal: true,
      closeWith: ["button"]
    }).show();
  }
  succesm() {
    new Noty({
      theme: "limitless",
      layout: "bottomRight",
      type: "success",
      timeout: 5000,
      text: "Change a few things up and try submitting again.",
      closeWith: ["button"]
    }).show();
  }
  warninm() {
    new Noty({
      layout: "topRight",
      type: "warning",
      timeout: 2500,
      theme: " alert bg-info text-white alert-styled-left p-0",
      text: "This alert needs your attention, but it's not super important.",
      progressBar: true,
      closeWith: ["button"]
    }).show();
  }
  infom() {
    console.log("sussces");
    new Noty({
      theme: " alert alert-success alert-styled-left p-0 bg-white",
      layout: "topRight",
      type: "info",
      timeout: 2500,
      text: "Change a few things up and try submitting again."
    }).show();
  }
  alertm() {
    console.log("sussces");
    new Noty({
      theme: " alert alert-danger alert-styled-right p-0 bg-white",
      layout: "topRight",
      type: "alert",
      timeout: 2500,
      text: "Change a few things up and try submitting again."
    }).show();
  }
}
