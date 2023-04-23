console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
  const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const addButter = new Promise((resolve, reject) => resolve(`butter`));
  const getColdDrinks = new Promise((resolve, reject) => resolve(`cold drinks`));

  let ticket = await promiseWifeBringingTicket;

  console.log(`wife: i have the ${ticket}`);
  console.log('husband: we should go in');
  console.log('wife: no i am hungry');

  let popcorn = await getPopcorn;

  console.log(`husband: i got some ${popcorn}`);
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');

  let butter = await addButter;
  console.log(`wife: I need ${butter} on my popcorn`);
  console.log('husband: anything else darling?');
  console.log('wife: I also want some cold drinks');

  let drinks = await getColdDrinks;
  console.log(`husband: I got some ${drinks}`);
  console.log('wife: thanks honey');
  console.log('husband: lets go in');
  console.log('wife: okay');

  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
