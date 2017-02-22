var triangle1Area = getTriangleArea(6,8);
var triangle2Area = getTriangleArea(8,13);
var triangle3Area = getTriangleArea(21,34);

function getTriangleArea(a, h) {
	if (a < 0 || h < 0) {
		alert('Nieprawidłowe dane');
	} else {
		return value = a*h/2;
	}
}

console.log(getTriangleArea(10,6))
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);