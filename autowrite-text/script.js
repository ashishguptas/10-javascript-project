const text = `I'm a Mumbai based Front End Developer && Learner. Full time Job by Day, && Freelancer by Night..`;

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0, index);
    
    index++

    if(index > text.length - 1){
        index = 0
    }
}

setInterval(writeText, 100);