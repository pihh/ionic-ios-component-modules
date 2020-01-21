import { Component, OnInit } from "@angular/core";
import {
  NativePageTransitions,
  NativeTransitionOptions
} from "@ionic-native/native-page-transitions/ngx";
@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"]
})
export class TabsPage implements OnInit {
  public tabIndex: number;
  private currentIndex: number;
  private headerHeight: number;
  private loaded: boolean;
  private tabs: string[] = ["tab1", "tab2"];
  constructor(private nativePageTransitions: NativePageTransitions) {
    this.tabIndex = 0;
    this.currentIndex = 0;
    this.headerHeight = 0;
  }

  ngOnInit() {}

  ionViewWillLeave() {
    let options: NativeTransitionOptions = {
      direction: "left",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };

    this.nativePageTransitions.slide(options);
  }

  private getTabIndex(tab: string) {
    return this.tabs.indexOf(tab);
  }

  private getAnimationDirection(tab: string): string {
    var index = this.getTabIndex(tab);
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true) {
      case currentIndex < index:
        return "left";
      case currentIndex > index:
        return "right";
    }
  }

  public transition(e: any): void {
    let options: NativeTransitionOptions = {
      direction: this.getAnimationDirection(e.tab),
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }
}
