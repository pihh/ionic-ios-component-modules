import { NgModule } from "@angular/core";
import { MomentModule } from "ngx-moment";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";

import { PihhIonicComponentsComponent } from "./pihh-ionic-components.component";
import { TestCardComponent } from "./components/test-card/test-card.component";
import { HeaderSimpleComponent } from "./components/header-simple/header-simple.component";
import { HeaderProfileComponent } from "./components/header-profile/header-profile.component";
import { CardFeatureComponent } from "./components/card-feature/card-feature.component";

const sharedDeclarations = [
  PihhIonicComponentsComponent,
  TestCardComponent,
  HeaderSimpleComponent,
  HeaderProfileComponent,
  CardFeatureComponent
];

@NgModule({
  declarations: sharedDeclarations,
  imports: [IonicModule, CommonModule, MomentModule],
  exports: sharedDeclarations
})
export class PihhIonicComponentsModule {}
