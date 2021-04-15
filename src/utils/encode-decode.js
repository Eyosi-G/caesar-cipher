const isUpperCase = (char)=>char === char.toUpperCase()
export const encodeText = (text,shiftNumber)=>{
    let encodedText = "";
    const A = "A".charCodeAt(0);
    const a = "a".charCodeAt(0);
    const Z = "Z".charCodeAt(0);
    const z = "z".charCodeAt(0);
    for(let char of text){
        const charCode = char.charCodeAt(0)
        if(!((charCode >= a && charCode <= z) || (charCode >= A && charCode<= Z))) {
            encodedText+=char
            continue;
        }
        if(isUpperCase(char)){
            let encodedChar = (char.charCodeAt(0)+shiftNumber-A)%26;
            encodedText+=String.fromCharCode(encodedChar+A)
        }else{
            let encodedChar = (char.charCodeAt(0)+shiftNumber-a)%26;
            encodedText+=String.fromCharCode(encodedChar+a)
        }
    }
    return encodedText;
}

export const decodeText = (text,shiftNumber)=>{
    let decodedText = "";
    const A = "A".charCodeAt(0);
    const a = "a".charCodeAt(0);
    const Z = "Z".charCodeAt(0);
    const z = "z".charCodeAt(0);
    for(let char of text){
        const charCode = char.charCodeAt(0)
        if(!((charCode >= a && charCode <= z) || (charCode >= A && charCode<= Z))) {
            decodedText+=char
            continue;
        }
        if(isUpperCase(char)){
            let decodedChar = (char.charCodeAt(0)-shiftNumber-A)%26;
            if(decodedChar < 0){
                decodedChar += 26;   
            }
            decodedText+=String.fromCharCode(decodedChar+A)
            
        }else{
            let decodedChar = (char.charCodeAt(0)-shiftNumber-a)%26;
            if(decodedChar < 0){
                decodedChar += 26;   
            }
            decodedText+=String.fromCharCode(decodedChar+a)
    
        }
    }
    return decodedText;
}
