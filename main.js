let element = document.querySelector("section");
element.classList.add("featured");


let article = document.createElement("article") 
article.append("section.posts")

let section-posts=document.querySelector("section.posts")
let article1 = document.querySelector("article1")
let article2 = document.querySelector("article2")
article2.before(article1)     








let aside = document.createElement("aside")
let asidePara = document.createElement("p")
let span = document.createElement("span")
let strong = document.createElement("strong")
let textContent=document.main.select('.. read-time')
asidePara.textContent = "4 Minutes"
let hyperLink = document.createElement("a")
hyperLink.href = "#"
hyperLink.textContent = "Read more..."

span.append(strong)
asidePara.append(span, hyperLink )
aside.append(asidePara)
article.append(title, paragraph2, aside)



