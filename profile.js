const firstButton = document.querySelector('button#color')
firstButton.addEventListener('click', (e) =>{
e.preventDefault();
console.log(e)
return alert('My favorite color is pink!');
});


const secondButton = document.querySelector('button#place')
secondButton.addEventListener('click',()=>{
 return alert('My favorite place is home!');
});

const thirdButton = document.querySelector('button#ritual',)
thirdButton.addEventListener('click',()=>{
 return alert('My favorite ritual is praying!');
});





