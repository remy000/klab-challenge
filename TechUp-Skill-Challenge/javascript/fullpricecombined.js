const items = [
    {name: 'Bike',     price: 100  },
    {name: 'TV',       price: 200  },
    {name: 'Album',    price: 10   },
    {name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },
    {name: 'Computer', price: 1000 }
]

var sum = 0 
for(let b=0;b<6;b++){
    sum = sum + items[b].price
  }
console.log(`The full price of all products combined is ${sum}`)
