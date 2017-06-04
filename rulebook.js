window.addEventListener("load", main, false);
var list = new Array();
var name;
function main()
{
	
	var product = document.getElementsByClassName("product");
	for(l=0;l<product.length;l++)
	{
		product[l].addEventListener("dragstart", dragstart, false);
	}
	var nid = document.getElementById("nid");
	nid.addEventListener("dragenter", function(e){e.preventDefault();} , false);
	nid.addEventListener("dragover", function(e){e.preventDefault();} , false);
	nid.addEventListener("drop", dropped , false);
	
}


function printlist()
{
	var x = "";
	for(i=0;i<list.length;i++)
	{
		x+= i+1 + ". " + list[i] + "<br>";
	}
	document.getElementById("final_list").innerHTML = x;
}
 
function dragstart()
{
	name=this.id;
}

function dropped()
{
	list.push(name);
	printlist();
}
