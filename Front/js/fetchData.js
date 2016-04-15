typeListTest=[];
function getTypeList(){	
	$.getJSON("https://raw.githubusercontent.com/callmeyule/EasyStatistics/master/Front/json/dataStudent.json",function(json){
		for(var i=0;i<json.typeList.length;i++)
			{  
			/*alert(json.typeList[i].type);*/
			typeListTest[i]=initType(json.typeList[i].type);
			//alert(typeListTest[i].type);
			//alert(typeListTest.length);
		}
		dealType();
	})
}


/*var typeTestTwo;
var inputTestTwo;
function dealType(){
	alert(typeListTest.length);
	for(var i=0;i<typeListTest.length;i++)
	{
		//alert("ceshi");
		//alert(typeListTest[i].type);
		typeTestTwo=typeListTest[i].type;
		//alert(typeTestTwo);
		inputTestTwo="<input>";
		$("#inputTest").append("<p>typeTestTwo</p>",inputTestTwo);
	}
}*/