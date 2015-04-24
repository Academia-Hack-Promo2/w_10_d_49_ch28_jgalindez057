function Llamado(callback, callback2, callback3){
	document.getElementById("name").innerHTML = "Nombre"
	document.getElementById("lastname").innerHTML = "Apellido"
	document.getElementById("indetify").innerHTML = "Cedula"
	var nombre = "John Frank"
	var apellido = "Galindez Requena"
	var cedula = "24.843.057"

	setTimeout(function(){
		callback(nombre);
	},2000);

	setTimeout(function(){
		callback2(apellido);
	},4000);

	setTimeout(function(){
		callback3(cedula);
	},6000);
}

function callback(nombre){
	document.getElementById("nombre").innerHTML = nombre;
}

function callback2(apellido){
	document.getElementById("apellido").innerHTML = apellido;
}

function callback3(cedula){
	document.getElementById("cedula").innerHTML = cedula;
}

Llamado(callback, callback2, callback3);

