let numbers = [ 1, 2, 3, 4, 5];

function miniMaxSum(arr) {
	let maxValue = 0;
	for(let i = 0; i < arr.length; i++){
		if( arr[i] > maxValue ){
			maxValue = arr[i];
		}
	}
	let minValue = maxValue;
	for(let i = 0; i < arr.length; i++){
		if( arr[i] < minValue ){
			minValue = arr[i];
		}
	}
	let total = arr.reduce( (total, num) => total += num );
	return [total - maxValue, total - minValue];
}	

console.log(miniMaxSum(numbers));