function volume_sphere() {
    //SGN Write your code here
	 event.preventDefault();
	var rad = parseFloat(document.getElementById("radius").value);
	var vol = (4/3) * Math.PI * Math.pow(rad, 3);
	document.getElementById("volume").value = vol.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
