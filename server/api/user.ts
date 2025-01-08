import { setCookie } from 'h3'
export default defineEventHandler(async (event) => {
  setCookie(event,'user','jack chen',{
    domain: 'baidu.com',
    
  })
  return {
    name: 'jack',
    age: 18
  }
})