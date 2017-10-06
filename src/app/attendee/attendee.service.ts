import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Attendee } from './attendee';

@Injectable()
export class AttendeeService {

  private apiUrl = 'https://avenger.cilabs.net/v1/conferences/ws17/attendances';

  constructor(private http: Http) { }

  getAttendees(): Observable<any> {
    return this.http.get(this.apiUrl).map(res => res.json());
  }
}

