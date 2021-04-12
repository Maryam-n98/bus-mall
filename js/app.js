

'use strict';

let leftImageElement = document.getElementById('left');
let centerImageElement = document.getElementById('center');
let rightImageElement = document.getElementById('right');




let limitedAttempt = 25;
let userAttempt = 0;



let leftImage;
let centerImage;
let rightImage;

function Idea(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.shown = 0;
    Idea.allImages.push(this)
}

Idea.allImages = [];

new Idea('Bag', 'img/bag.jpg');
new Idea('Banan ', 'img/banana.jpg');
new Idea('Bathroom', 'img/bathroom.jpg');
new Idea('Boots', 'img/boots.jpg');
new Idea('BREAKFAST', 'img/breakfast.jpg');
new Idea('Bubblegum', 'img/bubblegum.jpg');
new Idea('Chair', 'img/chair.jpg');
new Idea('Cthulhu', 'img/cthulhu.jpg');
new Idea('Dog duck', 'img/dog-duck.jpg');
new Idea('Dragon ', 'img/dragon.jpg');
new Idea('Pen', 'img/pen.jpg');
new Idea('Pet sweep', 'img/pet-sweep.jpg');
new Idea('Scissors', 'img/scissors.jpg');
new Idea('Shark', 'img/shark.jpg');
new Idea('Sweep', 'img/sweep.png');
new Idea('Tauntaun', 'img/tauntaun.jpg');
new Idea('Unicorn', 'img/unicorn.jpg');
new Idea('USB', 'img/usb.gif');
new Idea('Water can', 'img/water-can.jpg');
new Idea('Wine glass', 'img/wine-glass.jpg');

// console.log(Idea.allImages);
function randomIndex() {
    return Math.floor(Math.random() * Idea.allImages.length);

}
// console.log(randomIndex());

function renderThreeImages() {
    leftImage = randomIndex();
    centerImage = randomIndex();
    rightImage = randomIndex();
    while (rightImage === leftImage || leftImage === centerImage || centerImage === rightImage) {

    }
    leftImageElement.src = Idea.allImages[leftImage].source;
    centerImageElement.src = Idea.allImages[centerImage].source;
    rightImageElement.src = Idea.allImages[rightImage].source;
    // console.log(centerImageElement);
     leftImageElement.textContent= Idea.allImages[leftImage].shown++;
     centerImageElement.textContent= Idea.allImages[centerImage].shown++;
     rightImageElement.textContent= Idea.allImages[rightImage].shown++;

}
renderThreeImages();

images.addEventListener('click', handleUserClick);

function handleUserClick(cli) {
    // console.log(cli.target.id);
    userAttempt++;

    console.log(userAttempt);

    if (userAttempt <= limitedAttempt) {
        if (cli.target.id === 'left') {
            Idea.allImages[leftImage].vote++;

        }
        else if (cli.target.id === 'center') {
            Idea.allImages[centerImage].vote++

        }
        else {
            Idea.allImages[rightImage].vote++
        }
        //  console.log(Idea.allImages);
        renderThreeImages();

    }


    else {

        
        images.removeEventListener('click', handleUserClick);
        
        let button=document.getElementById('bo');
        button.addEventListener('click', show );
        
        let list1 = document.getElementById('list');
        let ideaReault;
        function show(){

            for (let i = 0; i < Idea.allImages.length; i++) {
                ideaReault = document.createElement('li');
                list1.appendChild(ideaReault);
                ideaReault.textContent = `${Idea.allImages[i].name} had ${Idea.allImages[i].vote} votes, and it was seen ${Idea.allImages[i].shown}`
                show();
            }
            
        }

    }

}
