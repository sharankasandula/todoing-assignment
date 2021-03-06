import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginFormComponent} from './pages/auth/login-form/login-form.component';
import {PagesComponent} from './pages/pages.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: '',
    component: PagesComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin},

  },
  {
    path: 'login',
    redirectTo: 'auth/login',
  },
  {
    path: 'register',
    redirectTo: 'auth/register',
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
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
