import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  socialsite = {};

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.socialsite = this.getSocialsite();
  }

  getSocialsite(){
    return this.config.getConfig().socialsite;
  }

}
