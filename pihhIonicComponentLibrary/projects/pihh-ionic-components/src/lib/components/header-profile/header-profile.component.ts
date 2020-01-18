import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PihhIonicComponentsDateService } from "../../services/date.service";

@Component({
  selector: "pic-header-profile",
  templateUrl: "./header-profile.component.html",
  styleUrls: ["./header-profile.component.css"]
})
export class HeaderProfileComponent implements OnInit {
  @Input() title: string = "Header Simple";
  @Input() topSubtitle: string = "";
  @Input() avatar: string = "/assets/icons/ionic/svg/ios/ios-contact.svg";

  @Output() onAvatarClicked = new EventEmitter();

  constructor(private dateService: PihhIonicComponentsDateService) {}

  get _topSubtitle() {
    try {
      const topSubtitle = this.topSubtitle.trim();
      if (topSubtitle === "") {
        return this.dateService.headerTitleDate();
      }
      return topSubtitle;
    } catch (ex) {
      return this.dateService.headerTitleDate();
    }
  }

  ngOnInit() {}

  avatarClicked($event) {
    this.onAvatarClicked.emit($event);
  }
}
