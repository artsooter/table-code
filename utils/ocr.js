import Tesseract from "../web_modules/tesseractjs.js";

async function ocr() {
	const img = document.getElementById('img')
	OCRAD(img, function (text) {
		console.log('ocrad 22=>', text)
	})

	// Tesseract 的使用方式
	// Tesseract.recognize(file, 'eng', {logger: m => console.log(m)}).then(({data: {text}}) => {
	// 	console.log(text);
	// }).catch(r => console.log(r))
}


export {ocr}
