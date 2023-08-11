import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../service/date-util.service';

@Component({
  selector: 'app-timesline-app',
  templateUrl: './timesline-app.component.html',
  styleUrls: ['./timesline-app.component.css']
})
export class TimeslineAppComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }
  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
