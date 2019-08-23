function encodeAndDecodeMessages() {
    
    function encodeAndSend() {
        let text = sendTA.value;
        
        let encoded = "";
        for (let i  = 0; i < text.length; i++) {
            encoded += String.fromCharCode((text.charCodeAt(i)) + 1);
        }

        sendTA.value = "";
        receiveTA.value = encoded;
    }

    function decodeAndRead() {
        let encodedText = receiveTA.value;

        let decoded = "";
        for (let i = 0; i < encodedText.length; i++) {
            decoded += String.fromCharCode((encodedText.charCodeAt(i)) - 1);
        }

        receiveTA.value = decoded;        
    }

    let [sendTA, receiveTA] = document.getElementsByTagName("textarea");
    let [encodeSendBttn, decodeReceiveBttn] = document.getElementsByTagName("button");

    encodeSendBttn.addEventListener("click", encodeAndSend);
    decodeReceiveBttn. addEventListener("click", decodeAndRead);
}