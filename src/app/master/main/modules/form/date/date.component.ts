import { Component, OnInit } from "@angular/core";
declare function init_date();
@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      init_date();
    }, 1000);
  }
}
