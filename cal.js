var screeninput = document.getElementById('screen')

var firstValue = ''
var signValue = ''
var secondValue = ''

var allLetters = ''

allNumber = (letter) => {
	
	if(signValue === ""){
		if(letter === '.'){
			firstValue += '.'
		}
		else{
			firstValue += parseInt(letter)
		}
	}
	else{
		if(letter === '.'){
			secondValue += '.'
		}
		else{
			secondValue += parseInt(letter)
		}
	}
	
	allLetters = firstValue + signValue + secondValue
	
	//console.log(allValues)
	
	screeninput.value = allLetters
}

plusSign = () => {
	if(firstValue !== ""){
		signValue = '+'
		
		allLetters += ' '+signValue+' '
		
		screeninput.value = allLetters
	}
}

minusSign = () => {
	if(firstValue !== ""){
		signValue = '-'
		
		allLetters += ' '+signValue+' '
		
		screeninput.value = allLetters
	}
}

multiplicationSign = () => {
	if(firstValue !== ""){
		signValue = '*'
		
		allLetters += ' '+signValue+' '
		
		screeninput.value = allLetters
	}
}

divisionSign = () => {
	if(firstValue !== ""){
		signValue = '/'
		
		allLetters += ' '+signValue+' '
		
		screeninput.value = allLetters
	}
}

clearNumber = () => {
	//when press button C let all the values in the screen be cleared
	firstValue = ''
	signValue = ''
	secondValue = ''
	
	allLetters = ''
	
	screeninput.value = ''
}

equalsSign = () => {
	if(signValue === "+"){
		const answer = parseFloat(firstValue) + parseFloat(secondValue)
		
		clearNumber()
		
		allLetters = answer
		
		firstValue = parseFloat(answer)
		
		signValue = ''
		secondValue = ''
	}
	else if(signValue === "-"){
		const answer = parseFloat(firstValue) - parseFloat(secondValue)
		
		clearNumber()
		
		allLetters = answer
		
		firstValue = parseFloat(answer)
		
		signValue = ''
		secondValue = ''
	}
	else if(signValue === '*'){
		const answer = parseFloat(firstValue) * parseFloat(secondValue)
		
		clearNumber()
		
		allLetters = answer
		
		firstValue = parseFloat(answer)
		
		signValue = ''
		secondValue = ''
	}
	else if(signValue === '/'){
		const answer = parseFloat(firstValue) / parseFloat(secondValue)
		
		clearNumber()
		
		allLetters = answer
		
		firstValue = parseFloat(answer)
		
		signValue = ''
		secondValue = ''
	}
	
	
	screeninput.value = allLetters
}