console.log("hello world");
let form = document.querySelector('form#contact');

function handleSubmit(evt) {
	evt.preventDefault();

	return alert('Form has been submitted successfully!');
}




let myImage = document.querySelector('img');
myImage.addEventListener('mouseover', () => {
	alert('you are awesome!')
})

