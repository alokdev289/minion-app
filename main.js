var btn = document.querySelector("#sub-btn");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#trnslt-txt")

// console.log(txtInput)

var url = "	https://api.funtranslations.com/translate/minion.json";

function getTranslated(text) {
	return url + "?" + "text=" + text;
}

function talk() {

	var txtdata = txtInput.value;


	fetch(getTranslated(txtdata))
		.then(response => response.json())
		.then(data => {
			var trnsltext = data.contents.translated;
			output.innerText = trnsltext;
			console.log(data)
		})
		.catch(err => alert(err))
}


btn.addEventListener("click", talk)