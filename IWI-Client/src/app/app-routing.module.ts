import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './main/history/history.component';
import { DressComponent } from './main/dress/dress.component';
import { LocationComponent } from './main/location/location.component';
import { ConfirmationComponent } from './main/confirmation/confirmation.component';
import { IndexComponent } from './main/index/index.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: IndexComponent,
  },
  {
    path: 'historia',
    component: HistoryComponent,
  },
  {
    path: 'codigovestuario',
    component: DressComponent,
  },
  {
    path: 'ubicacion',
    component: LocationComponent,
  },
  {
    path: 'confirmar',
    component: ConfirmationComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
