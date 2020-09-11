const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = changeBg();
})

function changeBg(){
    // const box = document.getElementById('box');

    // box.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}