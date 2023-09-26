function upload(event) {
	let items = event.clipboardData && event.clipboardData.items;
	let file = null;
	if (items && items.length) {
		// 检索剪切板items
		for (var i = 0; i < items.length; i++) {
			if (items[i].type.indexOf('image') !== -1) {
				file = items[i].getAsFile();
				// 隐藏文字
				const placeholder = document.getElementById('placeholder')
				placeholder.setAttribute('style', 'display:none')
				break;
			}
		}
	}
	var reader = new FileReader()
	reader.onload = function (event) {
		// event.target.result就是图片的Base64地址啦
		const img = document.getElementById('img')
		img.setAttribute('src', event.target.result)
	}
	if (file) reader.readAsDataURL(file);
}

export {upload}
