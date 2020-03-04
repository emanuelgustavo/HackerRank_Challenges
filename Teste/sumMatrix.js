const arr = [[1,2,3], [4,5,6], [9,8,9]];
//const arr = [[-1,1,-7,-8],[-10,-8,-5-2],[0,9,7,-1],[4,4,-2,1]];
//const arr = [[1,2,3,4,5], [2,4,6,8,10],[3,6,9,12,15],[4,8,12,16,20],[5,10,15,20,25]];

//console.log(arr);

let sumTotalDP = 0;
let sumTotalDS = 0;

/*for(let i = 0; i < arr.length; i++){
    for(let j = arr.length - 1; j >= 0; j-- ){
		if( i === j){
			sumTotalDP += arr[i][j];
			if( i > 0 && j < arr.length - 1){
				sumTotalDS += arr[i][j];
			}
		}
		if( Math.abs(i-j) === (arr.length - 1)){
            sumTotalDS += arr[i][j];
        }
	}
}*/
for(let i = 0; i < arr.length; i++){
    for(let j = arr.length - 1; j >= 0; j-- ){
		//console.log('(',i,',',j,')');
		if( i === j){
			//console.log('i:'+i+'j:'+j,arr[i][j], 'i:'+i, 'j-1:'+(j-i), arr[i][j - i]);
			sumTotalDP += arr[i][j];
			sumTotalDS += arr[i][(arr.length - 1) - i];
		}
	}
}

console.log(typeof(sumTotalDP));
console.log(typeof(arr));

console.log(sumTotalDP);
console.log(sumTotalDS);
console.log(Math.abs(sumTotalDP - sumTotalDS));
