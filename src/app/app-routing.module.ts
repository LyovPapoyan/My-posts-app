import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/modules/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/posts/modules/posts.module').then((m) => m.PostsModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
