function loadItems(){
  $.getJSON("json/items.json", function (data){
    items =data;
    loadDocumentComplete();
  });
}

var items;

function getItem(id, amount){
	var item = items[String(id)];
	item.amount = amount;
	return item;
}
