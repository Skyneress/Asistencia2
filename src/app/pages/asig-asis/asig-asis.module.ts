import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsigAsisPageRoutingModule } from './asig-asis-routing.module';

import { AsigAsisPage } from './asig-asis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsigAsisPageRoutingModule
  ],
  declarations: [AsigAsisPage]
})
export class AsigAsisPageModule {}
