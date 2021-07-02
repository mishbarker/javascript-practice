// These are primitive values, data structures, data types.

const tag = 'button';
const fontSize = 50;
const isActive = true;

const object = {
    tag: "h1",
    fontSize: 30,
    isActive: true
}

const array = [tag, fontSize, isActive]
console.log(array);

// create an element
const differentButton = document.createElement(object.tag);

// place element on the body
document.body.appendChild(differentButton);

// update the innerHTML of button
differentButton.innerHTML = 'second button';

// create a variable that points to a different variable
const myButton = differentButton;

// const myButton = document.querySelector('.this-button');

// changing styles on the button
myButton.style.color = 'green';
myButton.style.fontSize = '50px';

// changing the text or html of a button
myButton.innerText = '<h1>Changed</h1>';
myButton.innerHTML = '<h6>Different</h6>';

// myButton.addEventListener('mouseout', function() {
//     alert('hello')
// });

console.log(myButton);