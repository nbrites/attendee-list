import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendeeListComponent } from './attendee-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AttendeeService } from '../attendee.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        InfiniteScrollModule,
        HttpModule
      ],
      declarations: [
        AttendeeListComponent
      ],
      providers: [
        AttendeeService
      ]
    }).compileComponents();
  }));
  it('should create the attendee list component', async(() => {
    const fixture = TestBed.createComponent(AttendeeListComponent);
    const attendeeListComponent = fixture.debugElement.componentInstance;
    expect(attendeeListComponent).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AttendeeListComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Meet our 2017 attendees');
  }));
});
