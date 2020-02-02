import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { PihhIonicComponentsModule } from "pihh-ionic-components";
import { GamesPageRoutingModule } from "./games-routing.module";

import { GamesPage } from "./games.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesPageRoutingModule,
    PihhIonicComponentsModule
  ],
  declarations: [GamesPage]
})
export class GamesPageModule {}
