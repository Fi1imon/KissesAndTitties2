// const favourite = document.getElementById('favourite')
// console.log(favourite)
const underHMenu = document.querySelectorAll('.menu_under_head_item')
const underHMenu1 = underHMenu[0]
const underHMenu2 = underHMenu[1]
// console.dir(underHMenu)
// console.log(underHMenu2)
// underHMenu1.textContent = 'Changed from JS'
// underHMenu.style.color = 'red'
setTimeout( () => {
    addStyles(underHMenu1, 'СОСИ')
}, 1000)

setTimeout( () => {
    addStyles(underHMenu2, 'ХУЙ')
}, 2000)
//
function addStyles(node, text) {
    node.textContent = text
    node.style.background = 'red'
}

underHMenu1.onmouseover = () => {
    alert('УБЕРИ МЫШ')
}
underHMenu2.onmouseover = () => {
    if (underHMenu2.style.background === 'red') {
        underHMenu2.style.color = 'white'
        underHMenu2.style.background = 'black'
    }
    else {
        underHMenu2.style.color = 'black'
        underHMenu2.style.background = 'red'
    }
}