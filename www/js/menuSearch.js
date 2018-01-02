var getnum = location.href.split("?");
getnum = decodeURI(getnum[1]);
var d_name = getnum.split("&");

var poly_cd = d_name[0];
var name = d_name[1];


var cnt = 1;
var page = 1;
var search;


function loadxml(){

	 var url = "http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getJungDangMemberCurrStateList?serviceKey=%2BX2qYlEt6l0Om6Ixc0wJi0Rnj5t7lX9p%2Bts0LxL5LSoedbZX15iTVBptBcjBbWKDExM6zqJ0r4M1HL9KAkfNwA%3D%3D&numOfRows=8&poly_cd="+poly_cd+"&pageNo="+page;
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
		var tc = $(data).find("totalCount").text();
		$("#cntnum").html("총 "+tc+" 명");
	  
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
		if(cnt >= tc)
		{
			var next = "<a href='#' id='nextbtn' class='ui-btn'> 더 이상 없습니다. </a>";
		}
		else
		{
			var next = "<a href='#' onclick='nextxml();' id='nextbtn' class='ui-btn'> 더 보기 </a>";
		}
	   $("#div1").append(next);
	   
	   logoselect();
}


function logoselect(){
	var src = "";
	var color = "";
	switch(name){
		case "자유한국당":
			src = "img/jungdang1.jpg";
		break;
		case "더불어민주당":
			src = "img/jungdang2.jpg";
		break;
		case "국민의당":
			src = "img/jungdang3.jpg";
		break;
		case "정의당":
			src = "img/jungdang4.jpg";
		break;
		default:
			src = "img/jungdang5.jpg";
		break;
	}

	$("#logo").attr("src",src);
	$("#logo").attr("width","100%");
	//$("#logo_header").css('background-image','url("'+src+'")');
	//$("#logo_header").css('background-repeat','no-repeat');
	//$("#logo_header").css('background-size','cover');
	
}

function nextxml(){
	$("#div1 #nextbtn").remove();
	loadxml();
}


function detail_val(cnt){
	d_name = "detail.html?"+$("#dept"+cnt).val()+"&"+$("#num"+cnt).val()+"&"+$("#jpg"+cnt).val();
	//d_name =  encodeURI(d_name, "UTF-8"); 

	location.href = d_name;
}





$(document).ready( function() {
	$("#div1").text("");
	loadxml();
	
      
});
