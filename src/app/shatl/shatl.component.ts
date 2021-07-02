import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-shatl',
  templateUrl: './shatl.component.html',
  styleUrls: ['./shatl.component.css']
})
export class ShatlComponent implements OnInit {

  toggle: boolean;

  constructor() { }

  ngOnInit(): void {

  }
   ontoggle() {

   this.toggle= !this.toggle
  }

}
