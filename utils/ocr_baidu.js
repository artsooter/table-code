function handleImageLoad() {
	const imgElement = document.getElementById('img')

	// 创建一个Canvas元素来处理图像
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	// 设置Canvas的尺寸与图像一致
	canvas.width = imgElement.naturalWidth;
	canvas.height = imgElement.naturalHeight;

	// 将图像绘制到Canvas上
	context.drawImage(imgElement, 0, 0);

	// 将Canvas中的图像数据转换为Base64编码
	const base64Image = canvas.toDataURL('image/jpeg'); // 替换为适当的图像格式和质量参数

	return base64Image;
}

async function ocr() {
	const url = "https://sth7ij24.lc-cn-n1-shared.com/1.1/functions/ocr";
	const headers = {
		"Content-Type": "application/json; charset=utf-8",
		"X-LC-Id": "sTh7Ij24Ia9CQbcMm78Az8hw-gzGzoHsz",
		"X-LC-Key": "UyjiDhtchYWVprdJuWhxA5Kc"
	};


	return new Promise(resolve => {
		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify({"file": handleImageLoad()})
		})
			.then(response => response.json())
			.then(data => {
				// 在这里处理响应数据
				const textObj = JSON.parse(data.result)
				console.log(textObj)
				resolve((textObj.words_result || []).map(e => e.words))
			})
			.catch(error => {
				// 处理错误
				console.error("Error:", error);
			});
	})


// 	curl -X POST -H "Content-Type: application/json; charset=utf-8" \
//        -H "X-LC-Id: sTh7Ij24Ia9CQbcMm78Az8hw-gzGzoHsz" \
//        -H "X-LC-Key: UyjiDhtchYWVprdJuWhxA5Kc" \
//        -d '{"movie":"夏洛特烦恼"}' \
// https://sth7ij24.lc-cn-n1-shared.com/1.1/functions/test
// {"result":"test good"}

}


export {ocr}
