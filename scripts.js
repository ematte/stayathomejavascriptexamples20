$('h1').html('This is done by <em>JavaScript</em>');
$('h2').toggleClass('blue');



function myLittleFunction() {
    if ($('p').length <5) {
    $('main').append('<p> A p is appended to the page </p>');
    } else {
        console.log ('We reached maximum number of paragraphs')
    }
    $('p').css('border', '1px solid red');
$('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

let colors = ['orane', 'blue', 'lime', 'magenta'];

colors.forEach(function (color) {
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background',color);
});

for ()
console.log('Script file is loaded');







//Single line comment
/* let post = "This is my first post"
undefined
let post2 = " This is my second post"
undefined
let color1 ="orange"
undefined
let color2 = "blue"
undefined
let colors = ["orange", "blue", "green"]
undefined
colors
(3) ["orange", "blue", "green"]
colors [1]
"blue"
colors [0]
"orange"
let pickedColor =2
undefined
colors[pickedColors]
VM739:1 Uncaught ReferenceError: pickedColors is not defined
    at <anonymous>:1:8
(anonymous) @ VM739:1
colors[pickedColor]
"green"
colors[1] = yellow;
VM866:1 Uncaught ReferenceError: yellow is not defined
    at <anonymous>:1:13
(anonymous) @ VM866:1
colors[1] = "yellow"
"yellow"
colors
(3) ["orange", "yellow", "green"]
colors.length
3
let name = "StayAtHome"
undefined
name.length
10
colors[3] = 'lime'
"lime"
colors
(4) ["orange", "yellow", "green", "lime"]
colors.push('purple')
5
colors
(5) ["orange", "yellow", "green", "lime", "purple"]
colors[colors.length] = 'cyan'
"cyan"
colors
(6) ["orange", "yellow", "green", "lime", "purple", "cyan"]
colors.push(colors)
7
colors
(7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]length: 7__proto__: Array(0)
let notGoodExample = ['text' , 123, true]
undefined
let person ={
name: 'Adam',
age: 34,
favoriteColors: colors,
oldEnoughToDrive: true,
}
undefined
person
{name: "Adam", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true}age: 34favoriteColors: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]name: "Adam"oldEnoughToDrive: true__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
'Hello dear ' + person.name
"Hello dear Adam"
person.name = 'Peti'
"Peti"
personperson.food ='pizza'
VM1802:1 Uncaught ReferenceError: personperson is not defined
    at <anonymous>:1:1
(anonymous) @ VM1802:1
person.food = 'pizza'
"pizza"
person
{name: "Peti", age: 34, favoriteColors: Array(7), oldEnoughToDrive: true, food: "pizza"}
*/