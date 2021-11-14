import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-calculator';


  numbers: Tile[] = [{
    col:1,
    row:1,
    value: '7',
    type: TypeButton.VALUE

  },{
    col:1,
    row:1,
    value: '8',
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '9',    
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '4',    
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '5',    
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '6',    
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '1',    
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '2',    
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '3',    
    type: TypeButton.VALUE
  },
  {
    col:2,
    row:1,
    value: '0',    
    type: TypeButton.VALUE
  },
  {
    col:1,
    row:1,
    value: '.',    
    type: TypeButton.VALUE
  }];
  operators: Tile[] = [
  {
    col:1,
    row:1,
    value: 'x',
    type: TypeButton.OPERATOR
  },
  {
    col:1,
    row:1,
    value: '-',
    type: TypeButton.OPERATOR
  },
  {
    col:1,
    row:1,
    value: '+',
    type: TypeButton.OPERATOR
  },
  {
    col:1,
    row:1,
    value: '=',
    type: TypeButton.OPERATOR
  }
];
  other: Tile[] = [{
    col:1,
    row:1,
    value: 'AC',
    name: "reinit",
    type: TypeButton.OTHER
  },
  {
    col:1,
    row:1,
    value: '+/-',
    name: "inverse",
    type: TypeButton.OTHER
  },
  {
    col:1,
    row:1,
    value: '%',
    name: "modulo",
    type: TypeButton.OTHER
  }];
  divide: Tile = {
    col:1,
    row:1,
    value: "/",
    type: TypeButton.OPERATOR
  };
  result = 0;

  expression = ""; 
  experssionNumber: Array<Entry> = []; 

  // TODO refactor 
  handleClickNumber($event: Tile): void{
 if(this.experssionNumber.length > 0 && this.experssionNumber[this.experssionNumber.length - 1].type == TypeButton.VALUE){
        let el  = this.experssionNumber.pop(); 
        this.experssionNumber.push({
          type: TypeButton.VALUE,
          value: el?.value+$event.value
        });
   }
   else {
    this.experssionNumber.push({
      type: TypeButton.VALUE,
      value: $event.value
    });
  }
  this.expression = this.expression + $event.value; 
  
  console.table(this.experssionNumber);
  }

  handleOperatorClick($event: Tile){
    if($event.value != "="){
      this.experssionNumber.push({
        type: TypeButton.OPERATOR,
        value: $event.value
      });
      this.expression = this.expression + " " + $event.value + " "; 
    } else {
      this.calculate();

    }

  }


private calculate(): void{
  console.log("calculate ");
  console.log();
  let res = eval(this.expression.replace("x", "*"));
  this.experssionNumber = [];
  this.result = res;
}

executeOther($event: Tile): void{
  if($event.name=="reinit"){
    this.experssionNumber= [];
    this.expression="";
    this.result= 0;
  }
}

}


export interface Entry{
  type: TypeButton,
  value: string
}

export interface Tile{
  col: number,
  row: number,
  value : string,
  type: TypeButton,
  exec?: any,
  name?: string
}

export enum TypeButton {
    OPERATOR = 'OPERATOR',
    VALUE = 'VALUE',
    OTHER = 'OTHER'

}