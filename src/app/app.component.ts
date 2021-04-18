import { Component } from '@angular/core';

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
    value: 'X',
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
    type: TypeButton.OTHER
  },
  {
    col:1,
    row:1,
    value: '+/-',
    type: TypeButton.OTHER
  },
  {
    col:1,
    row:1,
    value: '%',
    type: TypeButton.OTHER
  }];
  divide: Tile = {
    col:1,
    row:1,
    value: "/",
    type: TypeButton.OPERATOR
  };
  result = 0;







}




export interface Tile{
  col: number,
  row: number,
  value : string,
  type: TypeButton
}

export enum TypeButton {
    OPERATOR = 'OPERATOR',
    VALUE = 'VALUE',
    OTHER = 'OTHER'

}