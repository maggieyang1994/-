const data = [
    { parent_id: null, id: 'a', value: '1' },
    { parent_id: 'a', id: 'c', value: '2' },
    { parent_id: 'b', id: 'f', value: '3' },
    { parent_id: 'c', id: 'e', value: '4' },
    { parent_id: 'b', id: 'd', value: '5' },
    { parent_id: 'a', id: 'b', value: '6' }
  ];
  
  
  function fn (list) {
    let root = {}
    let temp = data.find(x => !data.parent_id)
    root[temp.id] = {}
    const map = data.reduce((o, cur) => {
      o[cur.id] = cur
      return o
    }, {})
    console.log('map: ', map)
    data.forEach(cur => {
      if(cur.parent_id){
        root[cur.id] = 
      }
    })
  
    return root
  }
  
  console.log(fn(data))