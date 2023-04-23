console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const addButter = new Promise((resolve, reject) => resolve(`butter`));
  const getColdDrinks = new Promise((resolve, reject) => resolve(`cold drinks`));

  promiseWifeBringingTicket
    .then((ticket) => {
      console.log(`wife: i have the ${ticket}`);
      console.log('husband: we should go in');
      console.log('wife: no i am hungry');

      return getPopcorn;
    })
    .then((popcorn) => {
      console.log(`husband: i got some ${popcorn}`);
      console.log('husband: we should go in');
      console.log('wife: I need butter on my popcorn');

      return addButter;
    })
    .then((butter) => {
      console.log(`wife: I need ${butter} on my popcorn`);
      console.log('husband: anything else darling?');
      console.log('wife: I also want some cold drinks');

      return getColdDrinks;
    })
    .then((drinks) => {
      console.log(`husband: I got some ${drinks}`);
      console.log('wife: thanks honey');
      console.log('husband: lets go in');
      console.log('wife: okay');
    })
    .catch((error) => console.error(error));
};

preMovie();

console.log('person4: shows ticket');
console.log
