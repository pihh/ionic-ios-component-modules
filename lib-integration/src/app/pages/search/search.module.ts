import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { PihhIonicComponentsModule } from "pihh-ionic-components";
import { SearchPageRoutingModule } from "./search-routing.module";

import { SearchPage } from "./search.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PihhIonicComponentsModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
