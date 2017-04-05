const add = (num) => {
  return num + 2;
};

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
    let found = updatedList.find(item => {
      return item.id === list[i].id;
    });
    if (typeof found === 'undefined') {
      let remove = {
        id: list[i].id,
        type: 'REMOVE'
      };
      diffList.push(remove);
    }
  }

  for (let i = 0; i < updatedList.length; i++) {
    let found = list.find(item => {
      return item.id === updatedList[i].id;
    });
    if (typeof found === 'undefined') {
      let add = Object.assign({}, updatedList[i]);
      add.type = 'ADD';
      diffList.push(add);
    }
  }
  diffList.sort((a,b) => {
    return a.id - b.id;
  });
  return diffList;
};


module.exports = { add, getDiffBetween };
