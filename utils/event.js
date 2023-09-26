function initData() {
	const templateEle = document.getElementById('template')
	templateEle.value = 'el-table-column(label=\'[header_key]\', align=\'center\', show-tooltip-when-overflow)\n' +
		'\t\t\t\t\ttemplate(v-slot="{row}") {{row.[api_key] }}\n'

	const intputEle = document.getElementById('input')
	intputEle.value ='{\n' +
		'        "avg_price": "34.56",\n' +
		'        "currency": "string",\n' +
		'        "direction": "string",\n' +
		'        "exchange": "string",\n' +
		'        "instrument": "string",\n' +
		'        "liquidation_price": "23.12",\n' +
		'        "market_price": "34.57",\n' +
		'        "size": "1234.56",\n' +
		'        "size_usd": "1244.56",\n' +
		'        "type": "string",\n' +
		'        "upl": "-12.34"\n' +
		'      }'
}

function input(value) {
	const inputEle = value.srcElement
	if(inputEle.value==='') return;
	try {
		inputEle.value = JSON.stringify(JSON.parse(inputEle.value), null, 2)
	} catch (e) {
		alert('Error parsing , 请粘贴JSON格式');
		inputEle.value = ''
	}
}


export {input,initData}

