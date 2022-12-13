// function money (ticked){
//     let mymoney = 0;
//     mymoney += ticked;
//     console.log(mymoney);
// }

// money(8);
// money(9);

// alcancia 
function money(){
    let mymoney = 0;
    function savemoney(ticked){
        mymoney += ticked;
        console.log(mymoney);
    }
    return savemoney;
}

const newmoney = money();
newmoney(20);
newmoney(50);
newmoney(60);

