async function ocr() {
	const AK = "qxyDHDEBGH0rtsQgOVO9Wrrx"
	const SK = "euwivrx6rrZRMBeAEIV6zjDpma1HZsxx"

	async function main() {
		const options = {
			'method': 'POST',
			'url': 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=' + await getAccessToken(),
			'headers': {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json'
			},
			form: {}
		};

		fetch(options.url,options, function (error, response) {
			if (error) throw new Error(error);
			console.log(response.body);
		});
	}

	/**
	 * 使用 AK，SK 生成鉴权签名（Access Token）
	 * @return string 鉴权签名信息（Access Token）
	 */
	function getAccessToken() {

		let options = {
			'method': 'POST',
			'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
		}
		return new Promise((resolve, reject) => {
			resolve(fetch(options.url,options))
		})
	}

	// main();

	const url = "https://sth7ij24.lc-cn-n1-shared.com/1.1/functions/test";
	const headers = {
		"Content-Type": "application/json; charset=utf-8",
		"X-LC-Id": "sTh7Ij24Ia9CQbcMm78Az8hw-gzGzoHsz",
		"X-LC-Key": "UyjiDhtchYWVprdJuWhxA5Kc"
	};

	fetch(url, {
		method: "POST",
		headers: headers,
	})
		.then(response => response.json())
		.then(data => {
			// 在这里处理响应数据
			console.log(data);
		})
		.catch(error => {
			// 处理错误
			console.error("Error:", error);
		});


// 	curl -X POST -H "Content-Type: application/json; charset=utf-8" \
//        -H "X-LC-Id: sTh7Ij24Ia9CQbcMm78Az8hw-gzGzoHsz" \
//        -H "X-LC-Key: UyjiDhtchYWVprdJuWhxA5Kc" \
//        -d '{"movie":"夏洛特烦恼"}' \
// https://sth7ij24.lc-cn-n1-shared.com/1.1/functions/test
// {"result":"test good"}

}


export {ocr}
