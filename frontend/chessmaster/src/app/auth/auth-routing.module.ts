import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthmainComponent } from './authmain/authmain.component';

const routes: Routes = [{ path: '', component: AuthmainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}