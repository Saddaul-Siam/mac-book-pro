// Memory
const Memory8GB = document.getElementById('8GB-memory');
const Memory16GB = document.getElementById('16GB-memory');
const ExtraMemoryCost = document.getElementById('memory-cost');
// storage 
const SSD256GB = document.getElementById('256GB-SSD');
const SSD512GB = document.getElementById('512GB-SSD');
const SSD1TB = document.getElementById('1TB-SSD');
const ExtraStorageCost = document.getElementById('storage-cost');
// delivery
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const ExtraDeliveryCost = document.getElementById('delivery-cost');
// total price
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price')
// Memory cost
Memory8GB.addEventListener('click', function () {
  ExtraMemoryCost.innerText = "0"
  updateTotal()
})
Memory16GB.addEventListener('click', function () {
  ExtraMemoryCost.innerText = "180"
  updateTotal()
})

// storage cost
SSD256GB.addEventListener('click', function () {
  ExtraStorageCost.innerText = "0"
  updateTotal()
})
SSD512GB.addEventListener('click', function () {
  ExtraStorageCost.innerText = "100"
  updateTotal()
})
SSD1TB.addEventListener('click', function () {
  ExtraStorageCost.innerText = "180"
  updateTotal()
})

// delivery cost
freeDelivery.addEventListener('click', function () {
  ExtraDeliveryCost.innerText = "0"
  updateTotal()
})
paidDelivery.addEventListener('click', function () {
  ExtraDeliveryCost.innerText = "20"
  updateTotal()
});

function updateTotal() {
  const memoryCOst = parseInt(ExtraMemoryCost.innerText)
  const storageCost = parseInt(ExtraStorageCost.innerText)
  const deliveryCost = parseInt(ExtraDeliveryCost.innerText);
  const total = parseInt(bestPrice.innerText);
  console.log(ExtraDeliveryCost.innerText, bestPrice.innerText)
  const grandTotal = memoryCOst + storageCost + deliveryCost + total;
  totalPrice.innerText = grandTotal;
}