import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';

import { AttendeeListComponent } from './attendee/list/attendee-list.component';
import { AttendeeListResolver } from './attendee/list/attendee-list.resolver';
import { AttendeeService } from './attendee/attendee.service';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [
    AttendeeService,
    AttendeeListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
