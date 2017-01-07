function loadItems(){
  var finished = false;
  $.getJSON("json/items.json", function (data){
    items =data;
  })

  .done(function (){
    finished = true;
  })

  .fail(function(){
    finished = true;
    alert("Failed to retireve item-database from the server!");
    throw "Faile to retrieve \"json/items.json\"";
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
