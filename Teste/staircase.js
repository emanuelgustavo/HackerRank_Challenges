/*function staircase(n) {
	let stairString = '';
	let stair = [];
	for(let i = 0; i < n; i++){
		let step = [];
		for(let j = 0; j < n; j++){
			if(j >= (n-1)-i){
				step[j] = '#';
			}else{
				step[j] = ' ';
			}
		}
		stair.push(step);
	}	
	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){
			stairString += `${stair[i][j]}`;
		}
		stairString += `\n`;
	}
	console.log(stairString);
	return stairString;
}*/

function staircase(n) {
	let stairString = '';
	for(let i = 0; i < n; i++){
		for(let j = 0; j < n; j++){
			if(j >= (n-1)-i){
				stairString += `#`;
			}else{
				stairString += ` `;
			}
		}
		stairString += `\n`;
	}
	console.log(stairString);
	return stairString;
}

console.log(staircase(4));
