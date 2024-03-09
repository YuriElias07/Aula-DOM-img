const cat = document.querySelector("#gato")
const dog = document.querySelector("#cachorro")
const pig = document.querySelector("#porco")
const imagem = document.querySelector(".imagem")


cat.addEventListener("click", () =>     imagem.setAttribute("src", "https://img.freepik.com/fotos-premium/as-aventuras-do-gato-e-do-cao-papeis-de-parede_727939-3651.jpg"))
dog.addEventListener("click", () =>     imagem.setAttribute("src", "https://img.freepik.com/fotos-premium/cachorro-de-terno-com-um-copo-de-cerveja_888396-1032.jpg"))
pig.addEventListener("click", () =>     imagem.setAttribute("src", "https://img.freepik.com/fotos-premium/porco-no-campo-ia-generativa_896686-2817.jpg"))