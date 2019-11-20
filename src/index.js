console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(r => r.json())
    .then((responseObject) => {
        let dogImgList = document.getElementById('dog-image-container')
        let dogImgListUl = document.createElement('ul')
        
        responseObject.message.forEach((message) => {
            let dogLi = document.createElement("li")
            let dogImage = document.createElement("img")
            dogImage.src = message

            dogLi.append(dogImage)
            dogImgListUl.append(dogLi)
            dogImgList.append(dogImgListUl)          
        })
    })

fetch("https://dog.ceo/api/breeds/list/all")
    .then(r => r.json())
    .then((responseObject) => {
        let breedList = document.getElementById("dog-breeds")
        Object.keys(responseObject.message).forEach((breed) => {
            let breedLi = document.createElement('li')
            breedLi.innerText = breed
            breedList.append(breedLi)

            breedLi.addEventListener("click", (event) => {
                let breedName = breedLi.innerText
                breedLi.innerHTML = "<span style=\"color:green\">" + breedName + "</span>"
            })
        })
        let dropDown = document.getElementById("breed-dropdown")
        let breeds = breedList.querySelectorAll("li")
        dropDown.addEventListener("change", (event) => {
            if (event.target.value == "a"){
                let wrongBreeds = breedList.querySelectorAll('li')
                wrongBreeds.forEach((breed) => {
                    breed.remove()
                })
                breeds.forEach((li) => {
                    let firstLetter = (li.innerText.split(''))[0]
                    if (firstLetter == "a") {
                        let newBreedLi = document.createElement('li')
                        newBreedLi.innerText = li.innerText
                        breedList.append(newBreedLi)
                    }
                })
            } else if (event.target.value == "b") {
                let wrongBreeds = breedList.querySelectorAll('li')
                wrongBreeds.forEach((breed) => {
                    breed.remove()
                })
                breeds.forEach((li) => {
                    let firstLetter = (li.innerText.split(''))[0]
                    if (firstLetter == "b") {
                        let newBreedLi = document.createElement('li')
                        newBreedLi.innerText = li.innerText
                        breedList.append(newBreedLi)
                    }
                })

            } else if (event.target.value == "c" ) {
                let wrongBreeds = breedList.querySelectorAll('li')
                wrongBreeds.forEach((breed) => {
                    breed.remove()
                })
                breeds.forEach((li) => {
                    let firstLetter = (li.innerText.split(''))[0]
                    if (firstLetter == "c") {
                        let newBreedLi = document.createElement('li')
                        newBreedLi.innerText = li.innerText
                        breedList.append(newBreedLi)
                    }
                })
            } else if (event.target.value == "d") {
                let wrongBreeds = breedList.querySelectorAll('li')
                wrongBreeds.forEach((breed) => {
                    breed.remove()
                })
                breeds.forEach((li) => {
                    let firstLetter = (li.innerText.split(''))[0]
                    if (firstLetter == "d") {
                        let newBreedLi = document.createElement('li')
                        newBreedLi.innerText = li.innerText
                        breedList.append(newBreedLi)
                    }
                })
            }

            // })
        })
    })




