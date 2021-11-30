// Problem - 1
function seerToMon(seer)
{
if (seer >= 0)
{
// Converting
var mon = seer/40;
return mon;
}
else
{
return "Wrong Input"
}
}
/* var kotoSeer = 0;
var mon = seerToMon(kotoSeer)
console.log(mon) */
// Problem - 2
function totalSales(shirtsSold,pantsSold,shoesSold)
{
if(shirtsSold >= 0 && pantsSold >= 0 && shoesSold >= 0)
{
// Fixed Price
const shirtsPrice = 100;
const pantsPrice = 200;
const shoesPrice = 500;
// Quantity
const shirtsTotalSold = shirtsPrice * shirtsSold;
const pantsTotalSold = pantsPrice * pantsSold;
const shoesTotalSold = shoesPrice * shoesSold;
// Sales of the Day
const totalSold = shirtsTotalSold + pantsTotalSold + shoesTotalSold;
return totalSold;
}
else
{
return "Wrong Input"
}
}
/* const tryout = totalSales(2,5,6);
console.log(tryout); */
// Problem - 3
function deliveryCost(orders)
{
if (orders >= 0)
{
const priceOfFirst100Orders = 100;
const priceOfSecond100Orders = 80;
const priceOfRest = 50;
// First 100
if(orders <= 100)
{
const cost = orders * priceOfFirst100Orders;
return cost;
}
// Second 100
else if(orders <= 200)
{
const first100 = 100 * priceOfFirst100Orders;
const ordersLeft = orders - 100;
const second100 = ordersLeft * priceOfSecond100Orders;
var totalOrders = first100 + second100;
return totalOrders;
}
// Rest
else
{
const first100 = 100 * priceOfFirst100Orders;
const second100 = 100 * priceOfSecond100Orders;
const ordersLeft = orders - 200;
const restOrders = ordersLeft * priceOfRest;
var totalOrders = first100 + second100 + restOrders;
return totalOrders;
}
}
else
{
return "Wrong Input"
}
}
/* var deliveryOrders = 101;
var checkout = deliveryCost(deliveryOrders);
console.log(checkout); */
// Problem - 4
function perfectFriend(names)
{
// Initial
var fiveCharName = names[0];
for(var i = 0; i < names.length; i++)
{
// Main limit
if(names[i].length <= 5 && names[i].length > fiveCharName.length)
{
fiveCharName = names[i];
}
}
return fiveCharName;
}
/* var friendsNames = ['Arif', 'Rafian', 'Alvin', 'Farib', 'Tanim'];
var rightGuy = perfectFriend(friendsNames);
console.log(rightGuy); */