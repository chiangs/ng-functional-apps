import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { CalCounterComponent } from './cal-counter/cal-counter.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'simple-calc' },
  { path: 'simple-calc', component: SimpleCounterComponent },
  { path: 'cal-count', component: CalCounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
