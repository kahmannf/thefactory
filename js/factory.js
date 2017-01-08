var factoryWidth = 5;
var factoryHeight = 5;

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
	}
}
