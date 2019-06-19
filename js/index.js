// Your code goes here

// MOUSEOVER
let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) => {
  event.preventDefault();
  event.target.style.animation = 'bounce 1s';
})
logo.addEventListener('mouseout', (event) => {
  event.preventDefault();
  logo.removeAttribute('style');
})

// KEYDOWN
window.addEventListener('keydown', function(event) {
  event.preventDefault();
  let min = 10;
  let max = 90;
  let colors = ['blue', 'yellow', 'orange', 'seagreen'];
  let node = document.createElement('span');
  node.className = 'circle';
  node.setAttribute("style", `background-color:${colors[Math.floor(Math.random()*colors.length)]}; height: 25px; width: 25px; border-radius: 50%; position: absolute; top: ${Math.random() * (+max - +min) + +min}%; bottom: ${Math.random() * (+max - +min) + +min}%; left: ${Math.random() * (+max - +min) + +min}%`);
  document.querySelector('body').appendChild(node);
})

// DRAG / DROP
let draggable = document.createElement('a');

draggable.className = 'nav-link';
draggable.setAttribute('draggable', true);
draggable.setAttribute('id', 'drag');
draggable.setAttribute('style', 'color: orange');

let text = document.createTextNode('Drag me!');
draggable.appendChild(text);
document.querySelector('.nav').prepend(draggable);

document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
})

document.addEventListener('dragover', (event) => {
  event.preventDefault();
})

document.addEventListener('drop', (event) => {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
})

// LOAD
let img = document.querySelector('.intro img');

img.addEventListener('load', (event) => {
  event.preventDefault();
  console.log(navigator.geolocation.getCurrentPosition( function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log('Latitude ', latitude, 'Longitude ', longitude);
    address(latitude, longitude);
  },))

  var geocoder;
  function address(lat, lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        if(status == google.maps.GeocoderStatus.OK) {
            console.log(results)
            if(results[1]) {
                //formatted address
                var address = results[0].formatted_address;
                alert("address = " + address);
            } else {
                alert("No results found");
            }
        } else {
            alert("Geocoder failed due to: " + status);
        }
      });
  }
})

// FOCUS
let elems = document.querySelector('.nav')
elems.addEventListener('click', (event) => {
  event.preventDefault();
  let i = 0;
  let colors = ['blue', 'yellow', 'orange', 'seagreen'];
  function loop() {
    setTimeout(function() {
      if (i < elems.children.length) {
        elems.children[i].style.color = colors[Math.floor(Math.random()*colors.length)];
        i++;
        loop();
      }
    }, 100)
  }
  loop()
})

// RESIZE 
window.addEventListener('resize', (event) => {
  event.preventDefault();
  alert('Window is resized!')
})

// SCROLL
let body = document.querySelector('body');
window.addEventListener('scroll', (event) => {
  event.preventDefault();
  body.style.color = 'seagreen'
})

// SELECT
let textArea = document.createElement('textarea');
document.querySelector('.intro').appendChild(textArea);
let textFiled = document.createTextNode('Select me!');
textArea.appendChild(textFiled);

textArea.addEventListener('select', (event) => {
  event.preventDefault();
  textArea.setAttribute('style', 'background-color: blue')
  textArea.style.backgroundColor = 'lightblue';
})

// DBLCLICK
let bus = document.querySelector('.intro img');

bus.addEventListener('dblclick', (event) => {
  event.preventDefault();
  bus.style.transform = 'scale(1.3)';
    bus.addEventListener('click', (event) => {
      event.preventDefault();
      bus.style.transform = 'scale(1)';
    })
})

// stopPropagation()
let box = document.querySelector('.text-content');
let title = document.querySelector('.text-content h2');
box.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Parent is clicked!');
})
title.addEventListener('click', (event) => {
  event.stopPropagation();
  alert('Child is clicked!')
})