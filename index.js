const app = "I don't do much."

const products = [
  { name: 'Head & Shoulders Shampoo', price: 4.99, discount: .6 },
  { name: 'Twinkies', price: 7.99, discount: .45 },
  { name: 'Oreos', price: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', price: 13.99, discount: .7 },
]

function reduce(collection, cb, initialValue) {

	let result = initialValue

	collection.forEach((product, index) => {
		result = callback(result, product, index, collection) // index & collection optional
	})

	return result
}

function callback(result, product) {

	if (product.price < 7) {
		return result + product.price
	}

	return result
}


	// products.forEach(product => {
	// 	if product.discount >= .5 {
	// 		totalPrice += product.price
	// 	}
	// })

// console.log(reduce(products, callback))

// const couponLocations = [
//   { room: 'Living room', amount: 5 },
//   { room: 'Kitchen', amount: 2 },
//   { room: 'Bathroom', amount: 1 },
//   { room: 'Master bedroom', amount: 7 },
// ];
 
// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }
 
// console.log(reduce(couponLocations, couponCounter, 0)); // prints 15

// console.log(couponLocations.reduce(couponCounter, 0))
