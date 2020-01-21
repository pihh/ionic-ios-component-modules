import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppsPageRoutingModule } from './apps-routing.module';

import { AppsPage } from './apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppsPageRoutingModule
  ],
  declarations: [AppsPage]
})
export class AppsPageModule {}
