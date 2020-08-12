import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
  selector: 'nw-magic-string',
  template: `
  <input type="text" (keydown.enter)="markText($event.target.value)" >
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>

    <div [innerHTML]="controlledContent" ></div>

  `,
  styles: [`.mark { background-color: green}`],
  encapsulation: ViewEncapsulation.None

})
export class MagicStringComponent implements OnInit {

  @ViewChild('content', null) content: ElementRef;

  originalContent: string;
  controlledContent: string;


  constructor() { }

  ngOnInit() {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }

  markText(value: any) {
    console.log(value);
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(
      new RegExp(value, 'g'), `<span class="mark">${value} </span> `
    );
  }

}
