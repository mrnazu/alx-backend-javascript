export default function appendToEachArrayValue(array, appendString) {
	let arrayEnd = [];
	for (const idx of array) {
		arrayEnd.push(`${appendString}${idx}`);
	}
	return arrayEnd;
}


