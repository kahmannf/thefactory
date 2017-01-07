var maschineInventory = new Array();
var resourceInventory = new Array();

function addMaschineInventoryBaseItems(){
	
	var baseMaschines = new Array();
	
	baseMaschines.push({ 
		name:"Factory Gate",
		price: -1,
		rarity: "item-unobtainable",
		imglink: "img/warehousegate160x160.jpg",
		amount: 1,
		tooltip: "The gate to your factory. Resources will arrive here and will be pushed into all Directions."
		});
	
	
	baseMaschines.push({ 
		name:"Resource Hopper",
		price: 500,
		rarity: "item-common",
		imglink: "img/hopper200x200.png",
		amount: 1,
		tooltip: "Items that are pushed into this block will be transported into your warehouse."
		});
	
	
	addMaschineArrayToInventory(baseMaschines);
}


function addMaschineToInventory(maschine){
	
	var added = false;
	
	for(var i = 0; i < maschineInventory.length; i++)
	{
		var m = maschineInventory[i];
		if(m.name === maschine.name && m.rarity === maschine.rarity)
		{
			m.amount += maschine.amount;
			added = true;
		}
	}
	
	if(!added)
	{
		maschineInventory.push(maschine);
	}
}

function addMaschineArrayToInventory(maschinearray){
	
	for(var i = 0; i < maschinearray.length; i++)
	{
		addMaschineToInventory(maschinearray[i]);
	}
	
	displayMaschineInventory();
}

function displayMaschineInventory(){
	var displaydiv = document.getElementById("maschineinventory");
	
	var html = "";
	
	for(var i = 0; i < maschineInventory.length; i++)
	{
		html += getMaschineHtmlDiv(maschineInventory[i], true);
	}
	
	displaydiv.innerHTML = html;
}


function addResourceToInventory(resource){
	
	var added = false;
	
	for(var i = 0; i < resourceInventory.length; i++)
	{
		var r = resourceInventory[i];
		if(r.name === resource.name && r.rarity === resource.rarity)
		{
			r.amount += resource.amount;
			added = true;
		}
	}
	
	if(!added)
	{
		resourceInventory.push(resource);
	}

}

function addResourceArrayToInventory(resourceArray){
	
	for(var i = 0; i < resourceArray.length; i++)
	{
		addResourceToInventory(resourceArray[i]);
	}
	
	displayResourceInventory();
}

function displayResourceInventory(){

	var displaydiv = document.getElementById("inventory");
	
	var html = "";
	
	for(var i = 0; i < resourceInventory.length; i++)
	{
		var r = resourceInventory[i];
		html += '<div class="' + r.rarity + ' tooltip">';
		html += '<span class="tooltiptext">' + r.tooltip + '</span>';
		html += '<img src="' + r.imglink + '" ></img>';
		html += '<div>' + r.name + '</div>';
		html += '<div>' + r.amount + '</div>';
		html += "</div>";
	}
	
	displaydiv.innerHTML = html;
}