function capitalize(string){
    const str = string;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}

module.exports = capitalize;