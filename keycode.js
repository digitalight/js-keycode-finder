document.addEventListener('keydown', event => {
	//console.log(event);
	document.getElementById("key").innerHTML = event.keyCode;
	document.getElementById("name").innerHTML = event.code;
});