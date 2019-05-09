import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  time;
  arr = [
    { item: "12-12-1999 12:13:13 : Ashish" },
    { item: "12-12-1999 12:13:13 : Ashish1" },
    { item: "12-12-1999 12:13:13 : Ashish2" },
  ];
  val = '';
  @ViewChild('input1') inputEl: ElementRef;
  addFlag = false;

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }
  onAdd(e) {
    this.time = this.datePipe.transform(new Date(), 'dd-MM-yyyy  hh:mm:ss', 'dd-MM-yyyy  hh:mm:ss');
    this.inputEl.nativeElement.focus();
    this.addFlag = true;
  }
  onSave(textVal) {
    console.log(textVal.value);
    if (textVal.value === '') {
      this.time = this.datePipe.transform(new Date(), 'dd-MM-yyyy  hh:mm:ss');
      this.addFlag = false;
      if (window.confirm('Format is incorrect!')) {
        console.log('yes');
        this.inputEl.nativeElement.focus();
        this.time = this.datePipe.transform(new Date(), 'dd-MM-yyyy  hh:mm:ss');
      }
      else {
        console.log('no');
      }
    } else {
      if (this.time === textVal.value) {
        if (window.confirm('Please enter comment!')) {
          console.log('yes');
          this.inputEl.nativeElement.focus();
          this.time = this.datePipe.transform(new Date(), 'dd-MM-yyyy  hh:mm:ss');
        }
        else {
          console.log('no');
        }
      }
    }
  }
}
