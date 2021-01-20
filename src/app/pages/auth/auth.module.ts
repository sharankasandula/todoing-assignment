import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {
  NbAlertModule, NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../../@core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  declarations: [AuthComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbIconModule,
    RouterModule,
    NbCheckboxModule,
    NbAlertModule,
    FormsModule,
    NbInputModule,
    ReactiveFormsModule,
    NbCardModule,
    NbLayoutModule,
    ThemeModule.forRoot(),
    NbButtonModule,
  ],
})
export class AuthModule { }
