import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() text: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.onClick.emit();
  }

}
