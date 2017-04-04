const add = (num) => {
  return num + 2;
}

const getDiffBetween = (list, updatedList) => {
  let diffList = [];
  for (let i = 0; i < list.length; i++) {

    for (let j = 0; j < updatedList.length; j++) {
      if (list[i].id === updatedList[j].id) {
        let change = {
          id: list[i].id,
          type: 'CHANGE'
        };
        for (let key in updatedList[j]) {
          if (list[i][key] != updatedList[j][key]) {
             change[key] = updatedList[j][key];
           }
         }
         diffList.push(change);
       }
     }
  }
  for (let i = 0; i < list.length; i++) {
    let found = updatedList.find(function(item) {
      return item.id === list[i].id
    })
    if (typeof found === 'undefined') {
      let remove = {
        id: list[i].id,
        type: 'REMOVE'
      }
      diffList.push(remove)
    }
  }
  return diffList;
};




module.exports = { add, getDiffBetween };
