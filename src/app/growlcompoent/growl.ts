import { Component, OnInit, ViewChild, EventEmitter, OnDestroy, Output } from '@angular/core';
@Component({
  selector: 'app-growl-show',
  templateUrl: './growl-show.component.html',
  styleUrls: ['./growl-show.component.css']
})
export class GrowlShowComponent implements OnInit, OnDestroy {
  @ViewChild('snackbar') snack;
  showGrowl: any;
  summary: any;
  detail: any;
  icon: any;
  constructor() { }

  ngOnInit() {
  }

  myFunction(data) {
    this.summary = data.summary;
    this.detail = data.detail;
    if ( data.severity === 'success' ) {
      this.snack.nativeElement.style.backgroundColor = '#34A835';
      this.snack.nativeElement.style.border = '1px solid #34A835';
      this.icon = 'fa fa-check';
    } else if ( data.severity === 'error') {
      this.snack.nativeElement.style.backgroundColor = '#e91224';
      this.snack.nativeElement.style.border = '1px solid #e91224';
      this.icon = 'fa fa-times';
    } else if (data.severity === 'warn') {
      this.snack.nativeElement.style.backgroundColor = '#ffba01';
      this.snack.nativeElement.style.border = '1px solid #ffba01';
      this.icon = 'fa fa-exclamation-triangle';
    }
    this.snack.nativeElement.classList.add('show');
    setTimeout( () => {
      this.snack.nativeElement.classList.remove('show');
    }, 3000);
  }
  close() {
    this.snack.nativeElement.classList.remove('show');
  }
  ngOnDestroy() {}
}
