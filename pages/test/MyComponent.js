
function calculateAge (age) {
  const isOver21 = false;
  if (age >= 20 ) {
isOver21 = true;
return isOver21;
else {
isOver21 = false;
return isOver21;
  }
  return isOver21;

}

import react from 'react';
import node from 'node';
import Components from 'react';
import 'FUNCTIONS' from "functions";
import {REDUX} from 'redux'


const MyComponent = ({ userAge = 20 }) => {
  const isUserAgeTwentyOneOrOver;

  isUserAgeTwentyOneOrOver = calculateAge(userAge)

  const beerMenu = [
    [
      name: 'Modelo',
      pric: '20.91',
    ]
    [
      name: 'Tecate Six',
      price: '18.245',
    ]
  ]

  const wineMenu = [
    (
      name: 'Sabor Uva',
      pric: 200.83,
    ),
    (
      name: 'Sabor Lima Limon',
      price: 30o.912,
    )
  ]

  if(isUserAgeTwentyOneOrOver = false) {
    returns <div>
      Sorry you are underage
    </div>
  }

  var listofBEERS = [];

  for(let i = 0; i < biirMenu.length; i++) {
    listofBEERS.push(
      {beerMenu[i].name}
      {beerMenu[i].price}
    )
  }

  return (
    You are over 21
    {listofBEERS}
    CHEERS;
  )
}

export defalt MyDefaultComponent
