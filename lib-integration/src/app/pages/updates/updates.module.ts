import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatesPageRoutingModule } from './updates-routing.module';

import { UpdatesPage } from './updates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatesPageRoutingModule
  ],
  declarations: [UpdatesPage]
})
export class UpdatesPageModule {}
