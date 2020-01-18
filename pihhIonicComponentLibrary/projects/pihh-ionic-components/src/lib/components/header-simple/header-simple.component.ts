import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PihhIonicComponentsDateService } from "../../services/date.service";
@Component({
  selector: "pic-header-simple",
  templateUrl: "./header-simple.component.html",
  styleUrls: ["./header-simple.component.css"]
})
export class HeaderSimpleComponent implements OnInit {
  @Input() title: string = "Header Simple";

  constructor() {}

  ngOnInit() {}
}
