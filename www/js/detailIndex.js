
var getname = location.href.split("?");
getname = decodeURI(getname[1]);

var d_name = getname.split("&");

var dept = d_name[0];
var num = d_name[1];
var jpg = d_name[2];


$(document).ready( function() {

       var url = "http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberDetailInfoList?dept_cd="+dept+"&ServiceKey=%2BX2qYlEt6l0Om6Ixc0wJi0Rnj5t7lX9p%2Bts0LxL5LSoedbZX15iTVBptBcjBbWKDExM6zqJ0r4M1HL9KAkfNwA%3D%3D";
       d_name = "";
      
        $.ajax({
             type: "GET",             
             url: url,
             //data: "{}",
             cache: false,
             dataType: "xml",
             success: onSuccess
           });
   });
   
   function onSuccess(data){ 


  $("#detail_ul").text("");
  $("#detail_mem").html("");
  $("#detail_div").html("");
  $(data).find("item").each(function () {
	var divStr = "<img src='"+jpg+"' class='img_detail'/><span class='txtset'><b>";
    divStr += $(this).find("empNm").text()+"<br>";
	divStr += $(this).find("hjNm").text()+"<br>";
	divStr += $(this).find("engNm").text()+"<br><br>";
	var tb = $(this).find("bthDate").text();
	tb = tb.substring(0,4) + "년 " + tb.substring(4,6) + "월 " + tb.substring(6,8) + "일";
	divStr += tb+"</b></span>";
	var str = "<li class='clr'><b> 정당 : "+ $(this).find("polyNm").text() + "</b></li>";
	str += "<li><b> 선거구 : "+ $(this).find("origNm").text() + "</b></li>";
	str += "<li><b> 취미 : "+ $(this).find("examCd").text() + "</b></li>";
	str += "<li><b> 당선횟수 : "+ $(this).find("reeleGbnNm").text() + "</b></li>";
	str += "<li><b> 이메일 : "+ $(this).find("assemEmail").text() + "</b></li>";
	var mem = $(this).find("memTitle").text();
	mem = mem.split(",");
	var memStr = "";
	for ( var i in mem ) {
        memStr += "<p>"+mem[i]+"</p>";
      }
	 
	$("#detail_div").html(divStr);
	$("#detail_mem").html(memStr);
    $("#detail_ul").append(str);
	$("#detail_ul").listview("refresh");
 
   });
}