import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearComponent } from './year/year.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  {path : 'home' , component : YearComponent},
  {path : 'results/:id' , component: ResultsComponent},
  {path : '**' , component : YearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
