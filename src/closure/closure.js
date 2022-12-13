function saludar(){
    let name = 'Adan';

    function displayName(){
        return `Hello ${name}`;
    }
    return displayName;
}


const s = saludar();
console.log(s);
console.log(s());

