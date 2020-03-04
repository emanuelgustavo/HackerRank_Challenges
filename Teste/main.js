const mainElement = document.getElementById('main');
const buttonElement = document.createElement('button');
const buttonText = document.createTextNode('Adicionar');
const inputElement = document.createElement('input');

inputElement.setAttribute('type', 'text');
buttonElement.appendChild(buttonText);
mainElement.appendChild(inputElement);
mainElement.appendChild(buttonElement);

//Aleatoriedades
const listElement = document.createElement('ul');
listElement.setAttribute('id', 'nameList');
mainElement.appendChild(listElement);

let names = [];

buttonElement.onclick = function () {
	//alert('Funcionando!');
	let text = inputElement.value;
	names.push(text);
	renderList();
	if (names.length > 0){
		console.log(typeof(names[names.length-1]));
	}
}

function renderList(){
	listElement.innerHTML = '';
	for(name of names){		
		const listItemElement = document.createElement('li');
		const listItemText = document.createTextNode(name);
		
		listItemElement.appendChild(listItemText);
		listElement.appendChild(listItemElement);
	}
}

console.log(typeof(buttonElement));
