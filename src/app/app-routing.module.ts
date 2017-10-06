import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendeeListComponent } from './attendee/list/attendee-list.component';
import { AttendeeListResolver } from './attendee/list/attendee-list.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/attendee-list', pathMatch: 'full' },
  {
    path: 'attendee-list',
    component: AttendeeListComponent,
    resolve: {
      attendees: AttendeeListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
