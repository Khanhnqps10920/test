// // eslint-disable-next-line
// const cache = {
//   set: (value) => localStorage.setItem("__multilang", JSON.stringify(value)),
//   get: () => {
//     const mul = localStorage.getItem("__multilang") ? JSON.parse(localStorage.getItem("__multilang")) : 0
//     return mul
//   }
// }

// const lang = () => new Promise(resolve => {
//   resolve({
//     english: {
//       en: 'English',
//       vi: 'Tieng anh'
//     }
//   })
// })

// export default async function Multilang(key) {
//   const fetchLang = cache.get()
//   const result = fetchLang[key]['vi'];
//   if (result) {
//     return result
//   }
//   return key
// }

// export const fetchMultilang = () => {
//   let fetchLang = cache.get()
//   if (!fetchLang) {
//     console.log(111111, 'aaa')
//     debugger;
//     lang().then(res => {
//       console.log(res.data)
//       cache.set(res.data)
//     })
//   }
// }