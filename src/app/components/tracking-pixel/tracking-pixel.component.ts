import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tracking-pixel',
  templateUrl: './tracking-pixel.component.html',
  styleUrls: ['./tracking-pixel.component.scss']
})
export class TrackingPixelComponent implements OnInit {

  @Input() trackingUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
