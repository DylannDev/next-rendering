// 🐶 fait en sorte que ce code ne puisse pas etre exposé au client
export async function getData() {
  const secretKey = '#######_this_is_a_secret_key_#######'
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      authorization: secretKey,
    },
  })

  return res.json()
}
