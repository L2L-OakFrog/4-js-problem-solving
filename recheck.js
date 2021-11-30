// Problem - 4
function perfectFriend(names)
{
// Initial
var fiveCharName = names[0];
for(var i = 0; i < names.length; i++)
{
// Main limit
if(names[i].length == 5)
{
fiveCharName = names[i];
break;
}
}
return fiveCharName;
}
 var friendsNames = ['Arif', 'Rafian', 'Alvin', 'Farib', 'Tanim'];
var rightGuy = perfectFriend(friendsNames);
console.log(rightGuy);