
const items = [
    {name: 'Bike',     price: 100  },
    {name: 'TV',       price: 200  },
    {name: 'Album',    price: 10   },
    {name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },
    {name: 'Computer', price: 1000 }
]

var b=0
var sum = 0
while(b<6){
    if(items[b].price < 10 ){
    b++
    }
    else
    {
    sum = sum + items[b].price
    b++;
    }
  }

console.log(`The full price minus products that are under 10 dollar is ${sum}`)

