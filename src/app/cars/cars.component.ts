import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  now: Date = new Date()

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  visibleElem:boolean = false;


  constructor() { }

  ngOnInit() {
    this.name = 'opel';
    this.speed = 240;
    this.model = 'zafira';
    this.colors = {
      car: 'silver',
      salon: 'grey',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Cruise control', 'Parc Tronic'];
  }

 editCarOpt(){
this.visibleElem =!this.visibleElem;
  }

  addOpt(message){
    this.options.unshift(message)
    return false;
  }
  deleteOpt(ind_opt){
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == ind_opt) {
      this.options.splice(i,1)
      break;
    }
}
  }

  carSelect(carName) {
    if (carName == 'tesla') {
      this.name = 'Tesla';
      this.speed = 320;
      this.model = 'Y';
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'silver'
      }
      this.options = ['ABS', 'Cruise control', 'Parc Tronic', 'Avtopilot', 'Big battery'];
    }
    else if (carName == 'byuick') {
      this.name = 'Byuick';
      this.speed = 270;
      this.model = 'Z';
      this.colors = {
        car: 'brovn',
        salon: 'bezh',
        wheels: 'black'
      }
      this.options = ['ABS', 'Cruise control', 'Parc Tronic', '7 places'];
    }
    if (carName == 'opel'){

    this.name = 'Opel';
    this.speed = 240;
    this.model = 'zafira';
    this.colors = {
      car: 'silver',
      salon: 'grey',
      wheels: 'silver'
    }
    this.options = ['ABS', 'Cruise control', 'Parc Tronic',];
  }
  };
  }


interface Colors {
  car: string,
  salon: string,
  wheels: string
}
