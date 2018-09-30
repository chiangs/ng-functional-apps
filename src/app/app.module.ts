import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { SharedModule } from './shared/shared.module';
import { CalCounterComponent } from './cal-counter/cal-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCounterComponent,
    CalCounterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
