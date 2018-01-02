
function detail_val(cnt){
	d_name = "detail.html?"+$("#dept"+cnt).val()+"&"+$("#num"+cnt).val()+"&"+$("#jpg"+cnt).val();
	//d_name =  encodeURI(d_name, "UTF-8"); 

	location.href = d_name;
}

function poly_val(poly,name){
	
	d_name = "menuSearch.html?"+poly+"&"+name;
	//d_name =  encodeURI(d_name, "UTF-8"); 
	location.href = d_name;
}


function local_val(localnum,name){
	
	d_name = "menuSearchLocal.html?"+localnum+"&"+name;
	//d_name =  encodeURI(d_name, "UTF-8"); 
	location.href = d_name;
}

