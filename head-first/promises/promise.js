let myPromise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
})

// catch returns any error message
myPromise.then((message) => {
  console.log('This is in the then ' + message)
}).catch((message) => {
  console.log('This is in the catch ' + message)
})

// three promises for this lesson exercise
const recordVideoOne = new Promise((resolve, reject) => {
  console.log('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  console.log('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  console.log('Video 3 Recorded')
})

// .all will return all of the messages at the same time, waiting on all to complete
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
})

// .race will return the first response completed and only one message
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(message)
})
