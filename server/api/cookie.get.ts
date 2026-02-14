export default defineEventHandler((event) => {
  let counter = Number(getCookie(event, 'counter')) || 0
  counter += 1
  setCookie(event, 'counter', counter.toString())
})
