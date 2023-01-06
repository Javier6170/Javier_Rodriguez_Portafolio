import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullpageComponent } from './components/fullpage/fullpage.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: FullpageComponent },
  { path: '**', component: FullpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
