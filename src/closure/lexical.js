// La accesibilidad de las variables esta determinada por la posicion de las mismas dentro de los ambitos anidados

const dev = 'Developer';

function deploy (){
    const aws = 'Amazon';
    console.log(dev);
    
    function cloud (){
        const host = 'Hostinger';
        console.log(aws,dev);
        
        function number(){
            const devops = 'Adan';
            console.log(devops,host,aws,dev);
        }
        return number();

    }
    return cloud();
}

deploy();
console.log(deploy);
// console.log(deploy());
