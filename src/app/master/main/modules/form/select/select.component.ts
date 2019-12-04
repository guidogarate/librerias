import { Component, OnInit } from "@angular/core";
declare function init_select();
@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      init_select();
    }, 1000);
  }
}
