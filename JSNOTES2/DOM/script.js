// document.getElementById('title')
// document.getElementById('title').className //it will give class if present
// document.getElementById('title').getAttribute('class')
// document.getElementById('title').setAttribute('class','test')

// changing styles
title.style.backgroundcolor ='green'
title.TextContent // it will view content in text it will show whats writen in tags
title.innertext // it will view content in text...what actually visible in the website
title.innerHTML //it will give tags also

//document.querySelector(any class/id ...same as css)
const Myaa =document.querySelector(title)
Myaa.forEach((l)=>{
    l.style.backgroundcolor = 'green'
})
// node list formed is pseudo array
//so query selector  will form nodelist so we have to convert into array{  Myarr.from(document.queryselector(#))  }  

//then we can use it forEach(),and maps 



