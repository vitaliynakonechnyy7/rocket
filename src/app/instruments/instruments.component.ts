import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }




  title = 'raketa';
  timer = 5;
  palivo = 70;
  ekipazh = 4;
  shluzi = false;
  dvigatel = '';
  vzlet = '';
  //sledit = this.start();


   public start() {
    setTimeout(() => {
      //this.toggle=false;
      console.log(this.start)
    }, 3000);
} ;

}
