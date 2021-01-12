import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './pages/auth/login-form/login-form.component';
import {AuthComponent} from './pages/auth/auth.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent,
  // },
  // {
  //   path: 'login',
  //   component: LoginFormComponent,
  // },
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'register',
    component: LoginFormComponent,
  },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
