import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAsigPageRoutingModule } from './info-asig-routing.module';

import { InfoAsigPage } from './info-asig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAsigPageRoutingModule
  ],
  declarations: [InfoAsigPage]
})
export class InfoAsigPageModule {}
