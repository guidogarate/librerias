import { Component, OnInit } from "@angular/core";

declare function init_check();

@Component({
  selector: "app-check-radios",
  templateUrl: "./check-radios.component.html",
  styleUrls: ["./check-radios.component.css"]
})
export class CheckRadiosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      init_check();
    }, 1000);
  }
}
