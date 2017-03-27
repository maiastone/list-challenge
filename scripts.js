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
      for (var key in updatedList[j]) {
        if (list[i][key] != updatedList[j][key]) {
           change[key] = updatedList[j][key];
         }
      }
      diffList.push(change)
      }
    }
  };
  return diffList;
};

module.exports = { add, getDiffBetween };
