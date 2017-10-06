import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AttendeeService } from '../attendee.service';
import { Attendee } from '../attendee';

@Injectable()
export class AttendeeListResolver implements Resolve<Attendee> {

  constructor(private contactsService: AttendeeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactsService.getAttendees();
  }
}
