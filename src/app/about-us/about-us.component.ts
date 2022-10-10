import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  aboutUsDetail="Became a public company in 1987 and is well known for its cost-effective manufacturing capabilities and a bunch  of customers. The company also entered the high margin specialty generic formulations segment. The formulation  business is regularly organized with a divisional structure and has a focused team for international markets.  The formulations are designed to meet the requirements of both advanced as well as emerging market  opportunities.Being in the top 2 Pharmaceutical companies in India for the consolidated revenues. XYZPharma exports to over 124 countries across the world with around 92% of revenues acquired from international operations.";
  
  awards:string[]=["Conferred with the Pharmaproficient Gold Award for New Chemical Entities 2000","WPF crowns XYZPharma as the 'Best Pharma Company in Emerging Market' ar World Pharmaceutical Awards 2012 in London","XYZPharma receives the Indian Chamber of Commerce and Industry Civic Award 2016","Indian Medicament Manufacturers’ Association (IMMA) Corporate Citizen Award 2019 To XYZPharma"];
  
  ngOnInit() {
  }
}
