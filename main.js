let fighters = ["akuma", "alisa", "anna", "armor-king", "asuka", "bob", "bryan", "claudio", "devil-jin", "dragunov", "eddy", "eliza"]

// Recreate the Fighters grid using this function

const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
}

let fightersGrid = document.getElementById('fighters-grid')
console.log('fighters grid', fightersGrid)

fighters.forEach((fighter) => {
    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src = fighterUrl(fighter)
    div.style.height = '100px'
    div.style.width = '100px'
    img.style.height = '100px'
    img.style.width = '100px'
    div.append(img)
    fightersGrid.append(div)
})



