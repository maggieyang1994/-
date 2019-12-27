
  var operatorData = [
    {
      label: 'AC',
      backgroundColor: 'white',
      color: 'black',
      type: 'operator',
      callback: function (val) {
        return ''
      }
    },
    {
      label: '+/-',
      backgroundColor: 'white',
      color: 'black',
      type: 'operator',
      callback: function (val) {
        return -val || 0
      }
    },
    {
      label: '%',
      backgroundColor: 'white',
      color: 'black',
      type: 'operator',
      callback: function(val){
        return val/100
      }
    },
    {
      label: '/',
      backgroundColor: 'orange',
      color: 'white',
      type: 'operator'
    },
    {
      label: '7',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    },
    {
      label: '8',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    },
    {
      label: '9',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    }, {
      label: '*',
      backgroundColor: 'orange',
      color: 'white',
      type: 'operator'
    }, {
      label: '4',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    },
    {
      label: '5',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    },
    {
      label: '6',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    }, {
      label: '-',
      backgroundColor: 'orange',
      color: 'white',
      type: 'operator'
    }, {
      label: '1',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    },
    {
      label: '2',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    },
    {
      label: '3',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number'
    }, {
      label: '+',
      backgroundColor: 'orange',
      color: 'white',
      type: 'operator'
    },{
      label: '0',
      backgroundColor: 'gray',
      color: 'white',
      type: 'number',
      width: '120px'    },
    {
      label: '.',
      backgroundColor: 'gray',
      color:'white',
      type: 'number'
    },{
      label: '=',
      backgroundColor: 'orange',
      color:'white',
      type: 'operator'
    },
  ]
