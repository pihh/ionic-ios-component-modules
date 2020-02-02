import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { PihhIonicComponentsModule } from "pihh-ionic-components";
import { AppsPageRoutingModule } from "./apps-routing.module";

import { AppsPage } from "./apps.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PihhIonicComponentsModule,
    AppsPageRoutingModule
  ],
  declarations: [AppsPage]
})
export class AppsPageModule {}
