function checkfordebug(){
	return true;
}


function addmaschinedummys(){
	
	var arr = new Array();
	
	arr.push({ 
		name:"Dummy1",
		price: 1,
		rarity: "item-junk",
		imglink: "img/sand200x200.png",
		amount: 3,
		tooltip: ""
	});

	arr.push({ 
		name:"Dummy2",
		price: 1,
		rarity: "item-common",
		imglink: "img/sand200x200.png",
		amount: 5,
		tooltip: ""
	});
	
	arr.push({ 
		name:"Dummy3",
		price: 1,
		rarity: "item-uncommon",
		imglink: "img/sand200x200.png",
		amount: 1000,
		tooltip: ""
	});
	
	arr.push({ 
		name:"Dummy4",
		price: 1,
		rarity: "item-rare",
		imglink: "img/sand200x200.png",
		amount: 1,
		tooltip: ""
	});
	
	arr.push({ 
		name:"Dummy5",
		price: 1,
		rarity: "item-epic",
		imglink: "img/sand200x200.png",
		amount: 20,
		tooltip: ""
	});
	
	arr.push({ 
		name:"Dummy6",
		price: 1,
		rarity: "item-legendary",
		imglink: "img/sand200x200.png",
		amount: 1000,
		tooltip: ""
	});
	
	addMaschineArrayToInventory(arr);
}

function clearMaschineInventory(){
	maschineInventory.clear;
	maschineInventory = new Array();
	displayMaschineInventory();
}

function addSand(amount){
	
	var sand = 
	{
		name:"Sand",
		price: 0,
		rarity: "item-junk",
		imglink: "img/sand200x200.png",
		amount: amount,
		tooltip: "Plain sand. Nothing more, nothing less. May contain nuts."
	};
	
	addResourceToInventory(sand);
}