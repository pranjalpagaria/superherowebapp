const newsuperHeroButton = document.getElementById("newHeroButton")
const heroImage = document.getElementById("ima")
const searchSuperHeroButton = document.getElementById("searchSuperHero")
const nameOfHero = document.getElementById("nameinput")
const statspara = document.getElementById("statspara")
const headingname = document.getElementById("headingname")

const base_url = "https://superheroapi.com/api.php/2346486215520937"

const getsuperhero = (id) => {
    fetch(`${base_url}/${id}`)
        .then(response => response.json())
        .then(json => {
            // const name = `<h2>${json.name}</h2>`
            headingname.innerText=`Name : ${json.name}`
            // const intelligence = `<p>Intelligence: ${json.powerstats.intelligence}</p>`
            const stats=getstatsHTML(json)
            heroImage.innerHTML = `${name}<img src= '${json.image.url}'width=300 height=300/>`
            statspara.innerHTML= `<p>${stats} </p>`
        }
        )
    // .then(json=>console.log(json.image.url))
}
const searchSuperHero = (name) => {
    console.log(nameOfHero.value)
    fetch(`${base_url}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            heroImage.innerHTML = `<img src= '${hero.image.url}' width=300 height=300/>`
        }
        )

}
const randomHero = () => {
    const totalHero = 731
    return Math.floor(Math.random() * totalHero) + 1
}
const clearfields = () => {
    document.getElementById('nameinput').value = ''
}
const getstatsHTML=(character)=>{
    const stats= Object.keys(character.powerstats).map(stat=>{
        return `<p>${stat}: ${character.powerstats[stat]}</p>`

    })
    console.log(stats.join(''))
    return stats.join(' ')
}
newsuperHeroButton.onclick = () => getsuperhero(randomHero()) + clearfields()
searchSuperHeroButton.onclick = () => searchSuperHero(nameOfHero.value)

