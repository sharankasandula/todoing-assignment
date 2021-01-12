import { NgModule } from '@angular/core';
import {NbLayoutModule, NbMenuModule, NbSidebarModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {LoginFormComponent} from './auth/login-form/login-form.component';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
