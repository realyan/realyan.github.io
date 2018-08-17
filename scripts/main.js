//var myHeading = document.querySelector('h1');
//myHeading.textContent='Hello world!';

//alert('hello!');

//document.querySelector('html').style.backgroundColor = 'purple';

//var myImage = document.createElement('img');
//myImage.setAttribute('src','https://farm4.staticflickr.com/3455/3372925208_e1f2aae4e3_b.jpg');
//document.querySelector('h1').appendChild(myImage);

//document.querySelector('html').onclick = function(){
//	alert('ouch! stop poking me!');
//}

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/firefox2.jpg');
	}
	else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla is cool, '+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}


















