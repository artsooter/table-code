import {upload} from './utils/img.js'
import {ocr} from './utils/ocr.js'
import {input,initData} from './utils/event.js'

window.onload = initData()
document.addEventListener('paste', upload)
// document.getElementById('img').addEventListener('load', ocr)
document.getElementById('input').addEventListener('blur', input)
document.getElementById('submit').addEventListener('click', submit)

async function submit() {
	const text = await ocr()
	const api = document.getElementById('input').value
	const template = document.getElementById('template').value
	console.log(api,template)
}



function initModel() {

	var sentence1 = "coins";
	var sentence2 = "currency";
	var sentence3 = "direction";
	function callback(similarityScore) {
		console.log('similarityScore',Math.round(similarityScore * 100 * 100) / 100 + "%")
	}
	useModel(sentence1, sentence2, callback); // useModel comes from tfjs-stuff.js
	useModel(sentence1, sentence3, callback); // useModel comes from tfjs-stuff.js
	console.log(123,sentence2,useModel)
}

initModel()
