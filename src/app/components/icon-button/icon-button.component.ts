import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() icon: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.onClick.emit();
  }

}
