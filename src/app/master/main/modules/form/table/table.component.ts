import { Component, OnInit } from "@angular/core";

declare function init_table();
declare function init_check();
declare function init_input();

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    init_table();

    setTimeout(() => {
      init_check();
      init_input();
    }, 1000);
  }
}
