function getTypeList(){
	typeListTest=[];
	$.getJSON("http//:localhost/json/dataStudent.json",function(json){
		for(var i=0;i<json.typeList.length;i++)
			{  
			alert(json.typeList.type);
			typeListTest[i]=initType(json.typeList.type);
		}
	})
}