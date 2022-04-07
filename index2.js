function reversedString(str){
    return str.split("").reverve().join("");
}

// function reversedString(str){
//     let newString = "";
//     for (let i = str.length; i >= 0; i--){
//        newString += str[i]
//     }

//     return newString;
// }

module.exports = reversedString;