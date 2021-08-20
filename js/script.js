const Memory8GB = document.getElementById('8GB-memory');
const Memory16GB = document.getElementById('16GB-memory');

const ExtraMemoryCost = document.getElementById('memory-cost');

Memory8GB.addEventListener('click', function () {
  ExtraMemoryCost.innerText = "0"
})
Memory16GB.addEventListener('click', function () {
  ExtraMemoryCost.innerText = "180"
})


const SSD256GB = document.getElementById('256GB-SSD');
const SSD512GB = document.getElementById('512GB-SSD');
const SSD1TB = document.getElementById('1TB-SSD');

const ExtraStorageCost = document.getElementById('storage-cost');

SSD256GB.addEventListener('click', function () {
  ExtraStorageCost.innerText = "0"
})
SSD512GB.addEventListener('click', function () {
  ExtraStorageCost.innerText = "100"
})
SSD1TB.addEventListener('click', function () {
  ExtraStorageCost.innerText = "180"
})

const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const ExtraDeliveryCost = document.getElementById('delivery-cost');

freeDelivery.addEventListener('click', function () {
  ExtraDeliveryCost.innerText = "0"
})
paidDelivery.addEventListener('click', function () {
  ExtraDeliveryCost.innerText = "20"
})