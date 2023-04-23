console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicket= new Promise ((resolve, reject)=> {
  setTimeout(()=>{
    resolve('ticket');
  },3000)
});

promiseWifeBringingTicket.then((t)=>{
  console.log(`person3:shows ${t}`);
});

const getPopcorn = promiseWifeBringingTicket.then((t)=>{
  console.log('wife: i have the ticket');
  console.log('husband: we should go in');
  console.log('wife: no i am hungry');
  return new Promise((resolve, reject)=>resolve(`${t} popcorn`));
});
const getButter = getPopcorn.then((t)=>{
  console.log('husband: i got some popcorn');
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');
  return new Promise((resolve, reject)=>resolve(`${t} popcorn`));
});
getButter.then((t)=> console.log(t))

console.log('person4: shows ticket');
console.log('person5: shows ticket');