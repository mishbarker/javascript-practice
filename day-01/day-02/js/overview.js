// Primitive values

const strings = "yellow";
let score = 40;  // changeable variable - used to be var : we don't use anymore
const boolean = false;
score = 100;

const objects = {
    strings: strings,
    score: score,
    boolean: boolean,
    body: {
        style: {
            backgroundColor: 'blue',
            color: 'black'
        }
    },
    favoriteFoods: [{}]
}

const array = [strings, score, boolean, objects]

console.log(objects)

document.body.style.backgroundColor = 'pink';

const h1 = document.querySelector('h1');
h1.style.fontSize = score + 'px';
// h1.style.backgroundColor = objects.body.style.backgroundColor;
h1.style.backgroundColor = objects['body']['style']['backgroundColor'];
h1.style.color = objects.body.style.color;
// h1.innerText = 'changed'
h1.innerText = strings;

for(let style in objects.style) {
    console.log(style)
    test.style[style] = objects.body.style[style]
}
