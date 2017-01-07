function loadItems(){
  items = loadJSON("json/items.js");
}

var items;

function getItem(id, amount){
	var item = items[String(id)];
	item.amount = amount;
	return item;
}

function loadJSON(filename){
  var result;

  $.getJSON(filename, function(data){result = data;});
  
  return result;
}
