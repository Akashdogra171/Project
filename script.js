'use strict'

const cards = document.querySelectorAll('.card');

const fun = function(entries){
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting)
    })   
}
const observer = new IntersectionObserver(fun,{
    threshold:1,
})
cards.forEach(function(card){
    observer.observe(card)
})



const lastFun = function(entries){
    const lastCard = entries[0];
    if(!lastCard.isIntersecting) return;
    
    newCard();
    lastObserver.unobserve(lastCard.target)
    lastObserver.observe(document.querySelector(".card:last-child"))
}

const lastObserver = new IntersectionObserver(lastFun,{})


lastObserver.observe(document.querySelector(".card:last-child"))




const cardContainer =  document.querySelector('.card-container');
const newCard =  function(){
    for(let i =0;i<10;i++){
        const card =  document.createElement('div');
        card.textContent = 'New Card';
        card.classList.add('card');
        observer.observe(card);
        cardContainer.append(card);
    }
}