function loadItems(){

  var scripttag = $("#jsonitems");
  var jsonstring = scripttag.html();
  items = JSON.parse(jsonstring);
}

var items;

function getItem(id, amount){
	var item = items[String(id)];
	item.amount = amount;
	return item;
}
