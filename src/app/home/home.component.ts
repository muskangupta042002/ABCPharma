import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  whyUs:string="Good health is indeed the most valuable thing for everyone. And for more than 100 years, we are with the people of the world for laying the foundation of vibrant lives. Today, as the world’s largest and most extended healthcare company, we are bound to use our reach and size for good. We diligently attempt to improve access and affordability, create healthier communities, and help people attain their best health at every life stage.";

  vision:string="To be one of the world’s most innovative, best doing, and committed pharmaceutical company.";

  mission:string="To provide the best quality products to people of the world. To commit ourselves for humanity's search for longer, healthier, happier lives through innovation in medicines.";

  constructor() { }

  ngOnInit() {
  }

}
