import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import * as AOS from 'aos';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  inputString = '';
  occurancyToCheck = 3; 
  resultsArray: any[] = []; // 
  alreadyCheckedDigits: any[] = []; 
  constructor(private toastr: ToasterService,) { }

  ngOnInit(): void {
    this.findOccurancyWanted()
  }

  findOccurancyWanted() {
    const inputStringIntoArray = Array.from(this.inputString);

    inputStringIntoArray.forEach((digit) => {
      if (!this.alreadyCheckedDigits.includes(digit)) {
      const occurancyCounter = this.inputString.split(digit).length - 1; 

      this.alreadyCheckedDigits.push(digit); 

      if (occurancyCounter >= this.occurancyToCheck) {
        this.resultsArray.push(digit);
      }
      else{
        this.toastr.pop('error', 'Error', '');
       console.log('error')
      }

    }
    });
  }
  
   
}
