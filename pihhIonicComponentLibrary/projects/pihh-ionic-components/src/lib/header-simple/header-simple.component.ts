import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pic-header-simple",
  templateUrl: "./header-simple.component.html",
  styleUrls: ["./header-simple.component.css"]
})
export class HeaderSimpleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document
      .querySelector("ion-header > ion-toolbar > ion-toolbar")
      .shadowRoot.querySelector("div.toolbar-container")
      .setAttribute("style", "margin:0px; padding: 0px");
  }
}
