import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './shared/guards/auth.guard';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: 'main',
        loadChildren: () =>
          import('./features/features.module').then(
            (m) => m.FeaturesModule
          ),
          // canActivate: [AuthGuard],
      },
      {
        path: '**',
        redirectTo: 'auth/login',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
