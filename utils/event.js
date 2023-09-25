function initData() {
	const templateEle = document.getElementById('template')
	templateEle.value = 'el-table-column(label=\'[header_key]\', align=\'center\', show-tooltip-when-overflow)\n' +
		'\t\t\t\t\ttemplate(v-slot="{row}") {{row.[api_key] }}'

	const intputEle = document.getElementById('input')
	intputEle.value ='{\n' +
		'                "level": 0,\n' +
		'                "level_name": "string",\n' +
		'                "maker": 0,\n' +
		'                "taker": 0,\n' +
		'                "type": 0\n' +
		'              }'
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

