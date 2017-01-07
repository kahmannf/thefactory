function loadItems(){
  var finished = false;
  $.getJSON("json/items.json", function (data){
    items =data;
    finished = true;
  });

  var operationvar = 0;

  while(!finished)
  {
    operationvar = operationvar + 1;
  }
  console.log(operationvar);
}

var items;

function getItem(id, amount){
	var item = items[String(id)];
	item.amount = amount;
	return item;
}
