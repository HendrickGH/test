import react from 'react';
// import node from 'node'; // this is not working, what's this? 
// import Components from 'react'; // what's this? 
// import 'FUNCTIONS' from "functions"; // what is this? 
// import {REDUX} from 'redux' // what's this? 

// function calculateAge (age) {
//   const isOver21 = false; // this should be let (anyway ternary operator is the best option)
//   if (age >= 20 ) {
//     isOver21 = true;
//     return isOver21;
//   else {
//     isOver21 = false;
//     return isOver21;
//   }
//     return isOver21;
  
// }
const calculateAge = age => age >= 20 // simply :)
const olderThan35 = age => age >= 35

const MyComponent = ({ userAge = 20 }) => {
//   const isUserAgeTwentyOneOrOver; // this doesn't work...
  const isUserAllowed = calculateAge(userAge)
  const isUserAllowedToWine = olderThan35(userAge)
  const liquor = { // you could rename this variable just for example "menu" and then add all kind of food like snacks, sodas or things like that (totally optional)
      beerMenu : [ 
        {
          name: 'Modelo',  
          pric: '20.91', // if you would like you could put more "props" here :)
        },
        {
          name: 'Tecate Six',
          price: '18.245', 
        },
      ],
      wineMenu : [
        {
          name: 'Sabor Uva',
          pric: 200.83,
        },
        {
          name: 'Sabor Lima Limon',
          price: 300.92,
        }
    ]
  }
//   if(isUserAgeTwentyOneOrOver = false) {
//     returns <div>
//       Sorry you are underage
//     </div>
//   }

//   var listofBEERS = [];

//   for(let i = 0; i < biirMenu.length; i++) {
//     listofBEERS.push(
//       {beerMenu[i].name}
//       {beerMenu[i].price}
//     )
//   }
//   const listOfBeers = liquor.beerMenu.map(beer => ({ ...beer })) // to get the beer (without elements)
  const listOfBeers = liquor.beerMenu.map((beer,i)  => <li key={i}><h2>{beer.name}</h2><p>{beer.price}</p></li>)
  const listOfWine =  liquor.wineMenu.map((wine,i)  => <li key={i}><h2>{wine.name}</h2><p>{wine.price}</p></li>)
  return (
    {!isUserAllowed ? <div>Sorry you're underage</div> : <p> You are  over 21</p>}
    {isUserAllowedToWine ? <div><ul>listOfBeers</ul><ul>listOfWine</ul></div> : isUserAllowed ?  <ul>{listOfBeers}</ul>: null} 
    {/* if is older than 35 show all, if not check if is older than 21 and if yes show beer if not don't show nothing */}
  )
}

export defalt MyDefaultComponent
