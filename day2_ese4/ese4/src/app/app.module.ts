import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HighlightDirective } from './higlights-particular-event.directive';
import { LocationPipe } from './location.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HighlightDirective,
    LocationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
