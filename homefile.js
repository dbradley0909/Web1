const firstButtonOne = document.querySelectorAll('#RestaurantOne')

firstButtonOne.addEventListener('click', (e) =>{
e.preventDefault();
prompt('if you like seafood!')
});

const secondButtonTwo = document.querySelector('#RestaurantTwo')
secondButtonTwo.addEventListener('click',()=>{
    prompt('if you like seafood and hamburgers!')
});

const thirdButtonThree = document.querySelector("#RestaurantThree")
thirdButtonThree.addEventListener('click',()=> {
    prompt('if you like seafood, hamburgers, and hot dogs!')  
});
const thirdButtonThree = document.querySelector("#RestaurantThree")
thirdButtonThree.addEventListener('click',()=> {
    prompt('Undecided choice will be made for you!')  
});

const allButtons = document.querySelectorAll('button')

allButtons.addEventListener('click', () => {
if (allButtons.value.length < 3) {
   prompt(allButtons[i][0]) 
} 
})
