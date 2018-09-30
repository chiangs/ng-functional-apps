import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SimpleCounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
