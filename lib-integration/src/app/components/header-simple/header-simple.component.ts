import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header-simple",
  templateUrl: "./header-simple.component.html",
  styleUrls: ["./header-simple.component.scss"]
})
export class HeaderSimpleComponent implements OnInit {
  @Input() title: string = "Header Simple";
  @Input() topSubtitle: string = "MONDAY, JUNE 5";
  @Input() avatar: string = "/assets/icons/ionic/svg/ios/ios-contact.svg";

  @Output() onAvatarClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  avatarClicked($event) {
    this.onAvatarClicked.emit($event);
  }
}
