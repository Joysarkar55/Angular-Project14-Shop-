import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GETComponent } from './get/get.component';

const routes: Routes = [
  {path:'id', component: GETComponent},
{path: 'title', component: GETComponent},
{path: 'price', component: GETComponent},
{path: 'description', component: GETComponent},
{path: 'category', component: GETComponent},
{path: 'image', component: GETComponent},
{path: 'rating', component: GETComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
