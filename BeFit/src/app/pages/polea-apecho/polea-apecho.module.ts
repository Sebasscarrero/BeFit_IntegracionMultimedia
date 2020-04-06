import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoleaAPechoPageRoutingModule } from './polea-apecho-routing.module';

import { PoleaAPechoPage } from './polea-apecho.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoleaAPechoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PoleaAPechoPage]
})
export class PoleaAPechoPageModule {}
