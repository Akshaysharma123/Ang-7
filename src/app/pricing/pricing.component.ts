import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  Pricing = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.Pricing = this.getPricing();
  }

  getPricing(){
    return this.config.getConfig().pricing;
  }
}
