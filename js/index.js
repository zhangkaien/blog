$(document).ready(function(){
	// openProg();
	// setTimeout(function(){
	// 	closeProg();
	// },9550); 
	loadList(addTitlelistEvent);
});
 
// 进度条
function openProg() {
	var progElem = $(".out_prog");
	progElem.css("display","block");
	$(".in_prog").animate({"width":"90%"},300);
}
function closeProg() {
	var progElem = $(".out_prog");
	progElem.css("display","none");
	$(".in_prog").css("width","0px");
}

// 加载标题列表
function loadList(fun){
	var htmlobj=$.ajax({
		url:"https://zhangkaien.github.io/title.txt",
		async:false,
		contentType: "application/x-www-form-urlencoded; charset=utf-8" 
	});
	var list = htmlobj.responseText.split('\n'),
		h = '';
	for(var i = list.length-2;i >= 0;i--){
		var l = list[i].split(' ');
		var time = new Date(parseInt(l[1].split('.')[0]));
		var t = time.getMonth()+1 + '/' + time.getDate();  
		h += "<li><a href='"+ l[1] +"'>"+ "<i style='font-size:24px'>"+t+"</i>  "+l[0] +"</a></li>"
	}
 	$(".title_list ul").html(h);
 	fun();
}

// 为列表添加事件
function addTitlelistEvent(){
	$(".title_list ul li a").click(function(event){
		openProg();
		url = 'https://zhangkaien.github.io/text/' +　$(this).attr('href');
		var htmlobj=$.ajax({
			url:url,
			async:false,
			contentType: "application/x-www-form-urlencoded; charset=utf-8",
		});
		$(".title_list .passage").html(htmlobj.responseText);
		$(".title_list ul").css('display','none');
		$(".title_list pre").css('display','block');
		setTimeout(function(){
			closeProg();
		},300);
		// closeProg();
		return false;
	});
	$(".list_btn").click(function(){
		$(".title_list ul").css('display','block');
		$(".title_list pre").css('display','none');
	});
}