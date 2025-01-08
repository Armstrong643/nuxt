const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('fulfilled')
  }, 1000);
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected')
  }, 1000);
})
class MyPromise {
  constructor(fn){
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
  }
}
export default MyPromise