

// create image scroll
const galerie = document.querySelector('.galery')

let index = 1


window.addEventListener('scroll', ()=> {

    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
  
    if(document.body.scrollTop >=0 ){
        createImage(3,galerie)
    }

})



function createImage(nb,container)
{
    for (let i = 0; i < nb; i++) {
        index++
        const newdivPhoto = document.createElement('div')
        newdivPhoto.className = "galery_photo"
        const newP = document.createElement('p')
        newP.innerHTML = 'lolLorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo.'
        const newA  = document.createElement('a')
        newA.href = `https://loremflickr.com/320/240?random=${index}`
        const newImg = document.createElement('img')
        newImg.src = `https://loremflickr.com/320/240?random=${index}`
        newA.appendChild(newImg)
        newdivPhoto.appendChild(newA)
        newdivPhoto.appendChild(newP)
        container.appendChild(newdivPhoto)
    }
    
    
}

createImage(9,galerie)
