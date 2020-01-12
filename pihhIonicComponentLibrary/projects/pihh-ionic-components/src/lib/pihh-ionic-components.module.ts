import { NgModule } from "@angular/core";
import { PihhIonicComponentsComponent } from "./pihh-ionic-components.component";
import { TestCardComponent } from "./test-card/test-card.component";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";

const sharedDeclarations = [PihhIonicComponentsComponent, TestCardComponent];

@NgModule({
  declarations: sharedDeclarations,
  imports: [IonicModule, CommonModule],
  exports: sharedDeclarations
})
export class PihhIonicComponentsModule {}
