'use strict';

//TODO loop this
let grayscaleFilter = "";
let invertFilter = "";
let huerotateFilter = "";
let blurFilter = "";
let brightnessFilter = "";
let contrastFilter = "";
let opacityFilter = "";
let saturateFilter = "";
let dropshadowFilter = "0px 0px";
let dropshadowFilterBlur = "0px";

const image = document.querySelector('#image');
image.src = "images/formula1.png";

const size = document.querySelector('#size');
const sizeCount = document.querySelector('#sizeCount');

const background = document.querySelector('#background');
const backgroundCount = document.querySelector('#backgroundCount');

const grayscale = document.querySelector('#grayscale');
const grayscaleCount = document.querySelector('#grayscaleCount');

const invert = document.querySelector('#invert');
const invertCount = document.querySelector('#invertCount');

/*
let huerotate, huerotateCount, blur, blurCount;
const filters = [huerotate, blur];
const counts = [huerotateCount, blurCount];
const filtersString = Object.keys({huerotate, blur});
const countsString = Object.keys({huerotateCount, blurCount});
console.log(filtersString, countsString);
for(let i = 0;i<filters.length;i++){
    filters[i] = document.querySelector(`#${filtersString[i]}`);
    counts[i] = document.querySelector(`#${countsString[i]}`);
}
*/

const huerotate = document.querySelector('#huerotate');
const huerotateCount = document.querySelector('#huerotateCount');

const blur = document.querySelector('#blur');
const blurCount = document.querySelector('#blurCount');

const brightness = document.querySelector('#brightness');
const brightnessCount = document.querySelector('#brightnessCount');

const contrast = document.querySelector('#contrast');
const contrastCount = document.querySelector('#contrastCount');

const opacity = document.querySelector('#opacity');
const opacityCount = document.querySelector('#opacityCount');

const saturate = document.querySelector('#saturate');
const saturateCount = document.querySelector('#saturateCount');

const dropshadow = document.querySelector('#dropshadow');
const dropshadowCount = document.querySelector('#dropshadowCount');


backgroundCount.innerHTML = background.value;
grayscaleCount.innerHTML = grayscale.value;
invertCount.innerHTML = invert.value;
huerotateCount.innerHTML = huerotate.value;
blurCount.innerHTML = blur.value;
brightnessCount.innerHTML = brightness.value;
contrastCount.innerHTML = contrast.value;
opacityCount.innerHTML = opacity.value;
saturateCount.innerHTML = saturate.value;
dropshadowCount.innerHTML = dropshadow.value;
//sizeCount.innerHTML = size.value;

const loadFile = function(event) {
    image.src = URL.createObjectURL(event.target.files[0]);
    };

    background.oninput = function() {
    backgroundCount.innerHTML = this.value;
    let hue,saturation,lightness;
    if(this.value==0){
        hue = 100;
        saturation = 100;
        lightness = 100;
    } else if(this.value<360){

        hue = this.value;
        saturation = 100;
        lightness = 80;

    } else if(this.value<720) {

        hue = this.value-360;
        saturation = Math.round(((this.value/360)-1)*100);
        lightness = 80;

    } else if(this.value<1080) {

        hue = this.value-720;
        saturation = 100;
        lightness = Math.round(((this.value/720)-1)*100);

    }
    console.log(hue,saturation,lightness)
    //document.querySelector('.background').style.background = `hsl(${100}, ${50}%, ${50}%)`
    document.querySelector('.background').style.background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

size.oninput = function() {
    sizeCount.innerHTML = (this.value/300).toFixed(2) + 'x';
    console.log(image.getAttribute('width'))
    image.setAttribute('width', this.value);

};

grayscale.oninput = function() {
    grayscaleCount.innerHTML = this.value;
    grayscaleFilter = `grayscale(${this.value}%)`;
    refreshFilter();
};

invert.oninput = function() {
    invertCount.innerHTML = this.value;
    invertFilter = `invert(${this.value}%)`;
    refreshFilter();
};

huerotate.oninput = function() {
    huerotateCount.innerHTML = this.value;
    huerotateFilter = `hue-rotate(${this.value}deg)`;
    refreshFilter();
};

blur.oninput = function() {
    blurCount.innerHTML = this.value;
    blurFilter = `blur(${this.value}px)`;
    refreshFilter();
};

brightness.oninput = function() {
    brightnessCount.innerHTML = this.value;
    brightnessFilter = `brightness(${this.value}%)`;
    refreshFilter();
};

contrast.oninput = function() {
    contrastCount.innerHTML = this.value;
    contrastFilter = `contrast(${this.value}%)`;
    refreshFilter();
};

opacity.oninput = function() {
    opacityCount.innerHTML = this.value;
    opacityFilter = `opacity(${this.value}%)`;
    refreshFilter();
};

saturate.oninput = function() {
    saturateCount.innerHTML = this.value;
    saturateFilter = `saturate(${this.value}%)`;
    refreshFilter();
};

dropshadow.oninput = function() {
    dropshadowCount.innerHTML = this.value;

    dropshadowFilterBlur = `${this.value}px`;
    refreshFilter();
};

function refreshFilter(){
    //console.log(`drop-shadow(${dropshadowFilter} ${dropshadowFilterBlur} black)`)
    console.log(getComputedStyle(image).filter)
    //console.log(grayscaleFilter, invertFilter, huerotateFilter, blurFilter,
    //brightnessFilter, contrastFilter, opacityFilter, saturateFilter, dropshadowFilter)

    image.style.filter = grayscaleFilter + invertFilter + huerotateFilter +
    blurFilter + brightnessFilter + contrastFilter + opacityFilter +
    saturateFilter + `drop-shadow(${dropshadowFilter} ${dropshadowFilterBlur} )`;
};





const canvas = document.getElementById('shadow');
const ctx = canvas.getContext('2d');
var x = 50;
var y = 50;
var WIDTH = 100;
var HEIGHT = 100;
var dragging = false;

function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
    return setInterval(draw, 10);
}

function draw() {
    clear();
    ctx.fillStyle = "#0c64e8";

    rect(x-15, y-15, 30, 30);
}

function myMove(e){
    if (dragging){

        dropshadowFilter = `${(x-50)/5}px ${(y-50)/5}px`;
        refreshFilter();



        x = e.pageX - canvas.offsetLeft;
        y = e.pageY - canvas.offsetTop;
    }
}

function myDown(e){
    //x = e.pageX - canvas.offsetLeft;
    //y = e.pageY - canvas.offsetTop;
    dragging = true;
    canvas.onmousemove = myMove;
}

function myUp(){
    dragging = false;
    canvas.onmousemove = null;
}

init();
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;





/*
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext('2d');

image.onload = function () {
    ctx2.drawImage(image, 0, 0, canvas2.width, canvas2.height);

    var data = canvas2.toDataURL("image/png");
    if (!window.open(data)) {
        document.location.href = data;
    }
}

var data = canvas2.toDataURL("image/png");
if (!window.open(data)) {
    document.location.href = data;
}
*/