console.log('Test')

const form=document.querySelector('form')
const search=document.querySelector('input')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    console.log(location)
    


    fetch('http://localhost:3000/wikipedia/search?address='+location)
    .then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            document.body.innerHTML=data.error
            else{
                
                for(let i=0;i<data.length;i++)
                {
                    let h=data[0].title
                    console.log(data)
                    const div=document.createElement(`a`)
                    div.className='panel'
                    div.setAttribute('href','http://en.wikipedia.org/?curid='+data[i].pageid)
                    const h1=document.createElement('h1')
                    h1.appendChild(document.createTextNode(data[i].title))
                    const p=document.createElement('p')
                    p.appendChild(document.createTextNode(data[i].snippet))
                    div.appendChild(h1)
                    div.appendChild(p)
                    document.querySelector('body').appendChild(div)




                    
                    console.log(div)


                }
            }
        })
    })
})
// const clearfield=function(){
//     document.querySelectorAll('.panel').removeChild();
// }