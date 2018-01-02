
var d_name = "";
var cnt = 1;
var page = 1;
var search;


function loadxml(){

	 var url = "http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberCurrStateList?serviceKey=%2BX2qYlEt6l0Om6Ixc0wJi0Rnj5t7lX9p%2Bts0LxL5LSoedbZX15iTVBptBcjBbWKDExM6zqJ0r4M1HL9KAkfNwA%3D%3D&numOfRows=8&pageNo="+page;
       d_name = "";
      
        $.ajax({
             type: "GET",             
             url: url,
             //data: "{}",
             cache: false,
             dataType: "xml",
             success: onSuccess
           });
   }
   
   function onSuccess(data){ 

	  
	  $(data).find("item").each(function () {
		  var str = "<a href='#detail' onclick='detail_val("+cnt+");' ";
		  str += "'  class='btnset ui-btn ui-shadow ui-corner-all ui-btn-icon-right ui-icon-carat-r'><img src="+$(this).find("jpgLink").text()+" class='img_f' /><p>"+$(this).find("empNm").text()+"</p>";
		  str += "<p>"+$(this).find("origNm").text()+"</p></a>";
		  str += "<input type='hidden' id='dept"+cnt+"' value="+$(this).find("deptCd").text()+" />";
		  str += "<input type='hidden' id='num"+cnt+"' value="+$(this).find("num").text()+" />";
		  str += "<input type='hidden' id='jpg"+cnt+"' value="+$(this).find("jpgLink").text()+" />";
		$("#div1").append(str);
	   
	   
	   cnt++;
	   });
	   
	   page++;
	   var next = "<a href='#' onclick='nextxml();' id='nextbtn' class='ui-btn'> 더 보기 </a>";
	   $("#div1").append(next);
}

function nextxml(){
	$("#div1 #nextbtn").remove();
	loadxml();
}

function chkname(){
	
	search = 1;
	$("#div1 *").remove();

	searchxml();
}

function returnxml(){
	$("#div1 *").remove();
	cnt = 1;
	page = 1;
	loadxml();
}

function searchxml(){

	 var url = "http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberCurrStateList?serviceKey=%2BX2qYlEt6l0Om6Ixc0wJi0Rnj5t7lX9p%2Bts0LxL5LSoedbZX15iTVBptBcjBbWKDExM6zqJ0r4M1HL9KAkfNwA%3D%3D&numOfRows=300";      
        $.ajax({
             type: "GET",             
             url: url,
             //data: "{}",
             cache: false,
             dataType: "xml",
             success: onSuccess2
           });
   }
   
   function onSuccess2(data){ 

		var man_name = $("#filter").val();
	
	  $(data).find("item").each(function () {
		  if(man_name == $(this).find("empNm").text())
		  {
			var str = "<a href='#detail' onclick='detail_val("+search+");' ";
			str += "'  class='btnset ui-btn ui-shadow ui-corner-all ui-btn-icon-right ui-icon-carat-r'><img src="+$(this).find("jpgLink").text()+" class='img_f' /><p>"+$(this).find("empNm").text()+"</p>";
			str += "<p>"+$(this).find("origNm").text()+"</p></a>";
			str += "<input type='hidden' id='dept"+search+"' value="+$(this).find("deptCd").text()+" />";
			str += "<input type='hidden' id='num"+search+"' value="+$(this).find("num").text()+" />";
			str += "<input type='hidden' id='jpg"+search+"' value="+$(this).find("jpgLink").text()+" />";
			
			$("#div1").append(str);
			
		  }
		
	   search++;
	   });
	   var next = "<a href='#' onclick='returnxml();' id='nextbtn' class='ui-btn'> 돌아가기 </a>";
	   $("#div1").append(next);
}







$(document).ready( function() {
	$("#div1").text("");
	loadxml();

});
