import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Attendee } from '../attendee';
import { AttendeeService } from '../attendee.service';

import * as _ from "lodash";

@Component({
  selector: 'attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.scss']
})
export class AttendeeListComponent implements OnInit {
  attendees: Attendee[];
  selectedAttendee: Attendee;
  idxToStartLoading: number;
  numbOfElemsToLoad: number;

  constructor(
    private attendeeService: AttendeeService,
    private router: Router,
    private route: ActivatedRoute) {
    this.idxToStartLoading = 0;
    this.numbOfElemsToLoad = 20;
    this.attendees = [];
  }

  ngOnInit(): void {
    this.loadNextAttendees();
  }

  loadNextAttendees() {
    if (this.route.snapshot.data['attendees'].data.length - this.attendees.length >= 0) {
      const attendeesToAdd = _.slice(this.route.snapshot.data['attendees'].data, this.idxToStartLoading,
                                    this.idxToStartLoading + this.numbOfElemsToLoad);
      this.attendees = _.concat(this.attendees, attendeesToAdd);
      this.idxToStartLoading += this.numbOfElemsToLoad;
    }
  }

  onScroll() {
    this.loadNextAttendees();
  }
}
