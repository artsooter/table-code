import {upload} from './utils/img.js'
import {ocr} from './utils/ocr_baidu.js'
import {input, initData} from './utils/event.js'

window.onload = initData()
document.addEventListener('paste', upload)
// document.getElementById('img').addEventListener('load', ocr)
document.getElementById('input').addEventListener('blur', input)
document.getElementById('submit').addEventListener('click', submit)

async function submit() {
	const text = await ocr()
	const api = document.getElementById('input').value
	const template = document.getElementById('template').value
	const header_keys = text
	const all_api_keys = [...Object.keys(JSON.parse(api))].map(key => key.toLowerCase())
	const ans = []
	for (const index in header_keys) {
		console.log('transfering ==>', index)
		const key = header_keys[index]
		const a = {header_key: key, api_key: ''}
		if (all_api_keys.map(e => e.replace('_', ' ')).includes(key.toLowerCase())) {
			a.api_key = key.toLowerCase()
		} else {
			a.api_key = await initModel(header_keys[0], all_api_keys)
		}
		ans.push(JSON.parse(JSON.stringify(a)))
	}
	console.log(ans)

	let val = ''
	ans.forEach(({header_key, api_key}) => {
		val += template.replaceAll('[header_key]', header_key).replaceAll('[api_key]', api_key)
	})
	console.log(val)
	document.getElementById('answer').value = val

}


async function initModel(key, arr) {
	let max = 0, res = ''
	for (let index in arr) {
		const snap = arr[index]
		const num = await new Promise((resolve, reject) => {
			useModel(key, snap, function (similarityScore) {
				resolve(similarityScore)
			});
		})
		if (num > max) {
			max = num
			res = snap
		}
	}
	return res

}

initModel()
