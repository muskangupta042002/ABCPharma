import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quarterinfo } from './Quarterinfo';
import { InvestorsService } from './investors.service';
import {CheckcasingPipe} from './checkcasing.pipe';
@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css'],
  providers:[InvestorsService]
})
export class InvestorsComponent implements OnInit {
  quaterFor!: FormGroup;
  quaterDetails!:any;
  showTable: boolean = false;
  selectedQDetails!: string;
  errorMessage!: string;
  showError: boolean = false;

 //Inject the FormBuilder and investorsService, InvestorsService and CheckcasingPipe objects to the constructor
 constructor(private formBuilder: FormBuilder, private investorsService: InvestorsService, private pipe:CheckcasingPipe) { }

 ngOnInit() {
   //Initialize the variable quaterForm with a FormBuilder group method containing the below mentioned form control.
   this.quaterFor=this.formBuilder.group({
    quater:['',Validators.required],
    fyear:['',Validators.required]
   });
   //quater: required validation
   //fyear: required validation
 }//ngOninit

 //Implement getQDetails method that takes in value from input field and display the details of the quater asked for
 getQDetails() {
  let q=this.quaterFor.controls["quater"].value;
  let year=this.quaterFor.controls["fyear"].value;
  
    //initialize selectedQDetails to the call of the customPipe transform method to convert quater in uppercase and then combine the quater and year entered
  this.selectedQDetails= this.pipe.transform(q,year) ;   
        
  this.investorsService.getQDetails().subscribe((data)=>
  {
    this.quaterDetails=data;
    let g:boolean=false;
    data.forEach((element)=>
    {
      if(this.selectedQDetails==element.quater){
        this.quaterDetails=element;
        this.showTable=true;
        this.showError=false;
        g=true;
      }
      if(!g){
        this.showTable=false;
        this.showError=true;
        this.errorMessage="Only the above mentioned quater details are available";
      }
    })
   })
   
 }
}
