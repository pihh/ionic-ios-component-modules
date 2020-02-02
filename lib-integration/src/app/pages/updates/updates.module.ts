import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { PihhIonicComponentsModule } from "pihh-ionic-components";
import { UpdatesPageRoutingModule } from "./updates-routing.module";

import { UpdatesPage } from "./updates.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PihhIonicComponentsModule,
    UpdatesPageRoutingModule
  ],
  declarations: [UpdatesPage]
})
export class UpdatesPageModule {}
