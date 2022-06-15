import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: '', component: CustomLayoutComponent,
  //   children: [
  //     { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  //     { path: 'commons-config', loadChildren: () => import('./commons-config/commons-config.module').then(m => m.CommonsConfigModule) }
  //   ],
  //   // canActivate: [AuthGuard]
  // },
  { path: 'authentication', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'van-calculation', loadChildren: () => import('./modules/van-calculation/van-calculation.module').then(m => m.VanCalculationModule) }
  // { path: 'notpermitted', component: NotFoundComponent },

  // // Handle all other routes
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
