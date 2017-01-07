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
	
	var html = "";
	
	for(var x = 0; x < factoryHeight; x++)
	{
		var row = factoryRows[x];
		
		html += '<div class="factory-row">';
		
		for(var y = 0; y < factoryWidth; y++)
		{
			var m = row[y];
			if(m === "empty")
			{
				html += '<div class="maschine-item"></div>';
			}
			else
			{
				html += getMaschineHtmlDiv(m, false);
			}
		}
		
		html += '</div>';
	}
	
	document.getElementById("factorygrid").innerHTML = html;
}