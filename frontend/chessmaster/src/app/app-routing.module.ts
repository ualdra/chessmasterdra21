import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth', loadChildren: () =>import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {path: 'eco', loadChildren: () => import('./eco/eco.module').then(m => m.EcoModule) },
  {
    path: 'top100', loadChildren: () => import('./top100/top100.module').then( m => m.Top100Module)
  },
  {
    path:'', redirectTo: '', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
