import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { PihhIonicComponentsModule } from "pihh-ionic-components";
import { ComponentsModule } from "./components/components.module";
import { NativePageTransitions } from "@ionic-native/native-page-transitions/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    PihhIonicComponentsModule,
    ComponentsModule,
    IonicModule.forRoot({
      mode: "ios"
    }),
    AppRoutingModule
  ],
  exports: [],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
