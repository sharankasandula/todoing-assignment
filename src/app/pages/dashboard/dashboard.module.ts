import { NgModule } from '@angular/core';
import {NbCardModule, NbLayoutModule} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbLayoutModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
