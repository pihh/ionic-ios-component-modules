import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { HeaderSimpleComponent } from "./header-simple/header-simple.component";

@NgModule({
  declarations: [HeaderSimpleComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderSimpleComponent]
})
export class ComponentsModule {}
