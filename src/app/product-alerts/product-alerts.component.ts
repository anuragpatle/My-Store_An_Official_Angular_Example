import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSms } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  faSms = faSms;

  /* The @Input() decorator indicates 
  that the property value passes in from the component's parent, 
  the product list component. */
  @Input() product;

  /* Recall that it's the parent, product list component—not the product alerts component—that 
  acts when the child raises the event. In product-list.component.ts, define an onNotify() method */
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
