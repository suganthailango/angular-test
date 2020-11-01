import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';


const routes: Routes = [{path:"home",component:HomeComponent},
{path:"link",component:LinkComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
