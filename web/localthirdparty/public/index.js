let req = new XMLHttpRequest()
req.open('GET', 'http://localhost:8081')
// memo: クライアント側がwithCredential=trueにしないとクッキーは送信されない
req.withCredentials = true
req.send()