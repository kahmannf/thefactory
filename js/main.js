document.addEventListener('DOMContentLoaded', function() {
	countJSONDocsToLoad = 1;
	loadItems();
}, false);

var countJSONDocsToLoad;

function loadDocumentComplete(){
	countJSONDocsToLoad -= 1;
	if(countJSONDocsToLoad > 0)
	{
		return;
	}
	//todo: check for possibilities of loading savegame
	//ELSE initializte default game

	if(!true)
	{
		//load savegame here later
	}
	else
	{
		addMaschineInventoryBaseItems();
	}

	menubuttonclick(document.getElementById("factoryButton"), "factorydiv");
	devmode("silent");
	displayFactoryComplete();


}

function devmode(){
	try
	{
		checkfordebug();
		if(isdevmodeactive)
		{
			document.getElementById("devmenubutton").classList.add("hidden");
			isdevmodeactive = false;
			buttondevmode.innerHTML = "Activate";
		}
		else
		{
			document.getElementById("devmenubutton").classList.remove("hidden");
			isdevmodeactive = true;
			buttondevmode.innerHTML = "Deactivate";
		}
		return isdevmodeactive;
	}
	catch(ex)
	{
		alert("You have no permission for that");
	}
}

function devmode(silent){
	try
	{
		checkfordebug();
		if(isdevmodeactive)
		{
			document.getElementById("devmenubutton").classList.add("hidden");
			isdevmodeactive = false;
			buttondevmode.innerHTML = "Activate";
		}
		else
		{
			document.getElementById("devmenubutton").classList.remove("hidden");
			isdevmodeactive = true;
			buttondevmode.innerHTML = "Deactivate";
		}
		return isdevmodeactive;
	}
	catch(ex)
	{
		//alert("You have no permission for that");
	}
}


isdevmodeactive = false;


//selected Tab
var selectedTabButton = null;
var selectedTab = null;


function menubuttonclick(sender, divname){
	if(selectedTabButton != null)
	{
		selectedTabButton.classList.remove("menu-button-clicked");
	}
	sender.classList.add("menu-button-clicked");
	selectedTabButton = sender;

	if(selectedTab != null)
	{
		selectedTab.classList.add("hidden");
	}

	var newtab = document.getElementById(divname);
	newtab.classList.remove("hidden");
	selectedTab = newtab
}

function loadexportcodeintotextbox(){
	document.getElementById("exportcodetextbox").value = createexportcode();
}


function createexportcode(){
	return 'Here could be your exportcode if that feature was already implemented';
}

function loadimportcode(){
	var importcode = prompt("Please enter the savegame you want to Import.");
	throw "NotImplemented";
}

function getMaschineHtmlDiv(m, isininventory){
	var html = "";

	html += '<div class="' + m.rarity + ' maschine-item tooltip" draggable="true" ondrag="';
	if(isininventory)
	{
		html += "dragFactoryItemFromInventory(event)";
	}
	else
	{
		html += "dragFactoryItemFromGrid(event)";
	}
	html += '">';
	html += '<span class="tooltiptext">' + m.tooltip + '</span>';
	html += '<div style="width:100%;">' + m.name + '</div>';
	html += '<img draggable="false" src="' + m.imglink + '" ></img>';
	html += '<div>' + m.amount + '</div>';
	html += "</div>";

	return html;
}
