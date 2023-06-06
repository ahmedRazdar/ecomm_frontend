import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellerAuthComponent } from './pages/seller-auth/seller-auth.component';
import { SellerDashboardComponent } from './components/seller-dashboard/seller-dashboard.component';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-dashboard',
    component:SellerDashboardComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
