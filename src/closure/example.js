 function createPetList() {
    let pet = [];
    function petist(list) {
      pet.push(list);
      console.log(pet)
    }
    return petist;
  
  }
  
  let listnew = createPetList();

  listnew('cat');
//   listnew('dsdkñla');
//   listnew('ksla')
  