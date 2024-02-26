import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {authGuard} from "./guard/auth.guard";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: '', component: HeaderComponent, canActivate: [authGuard]},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
