var factoryWidth = 5;
var factoryHeight = 5;

function increaseFactoryWidth(){
	if(factoryWidth == 10)
	{
		return false;
	}

	for(var y = 0; y < factoryHeight;y++)
	{
		factoryRows[y].push("empty");
	}
	factoryWidth += 1;
	displayFactoryComplete();
	return true;
}

function increaseFactoryHeight(){
	var row = new Array();

	for(var x; x < factoryWidth; x++)
	{
		row.push("empty");
	}

	factoryRows.push(row);
	factoryHeight += 1;
	displayFactoryComplete();
}

var factoryRows = new Array();

InitBasFactory();

function InitBasFactory(){

	for(var x = 0; x < factoryHeight; x++)
	{
		var row = new Array();
		for(var y = 0; y < factoryWidth; y++)
		{
			row.push("empty");
		}

		factoryRows.push(row);
	}
}


function displayFactoryComplete(){

	var factoryGridElement = document.getElementById("factorygrid");

	while(factoryGridElement.hasChildNodes())
	{
		factoryGridElement.removeChild(factoryGridElement.lastChild);
	}

	for(var x = 0; x < factoryHeight; x++)
	{
		var row = factoryRows[x];

		var htmlString = '<div class="factory-row"></div>';

		var factoryRowElement = GetDOMElementFromHTLMString((htmlString));

		for(var y = 0; y < factoryWidth; y++)
		{
			var m = row[y];
			if(m === "empty")
			{
				factoryRowElement.appendChild(GetDOMElementFromHTLMString('<div class="maschine-item"></div>'));
			}
			else
			{
				factoryRowElement.appendChild(GetDOMElementFromHTLMString(getMaschineHtmlDiv(m)));
			}
		}
		factoryGridElement.appendChild(factoryRowElement);
	}
}
