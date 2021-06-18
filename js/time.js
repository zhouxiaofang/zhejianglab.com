// JavaScript Document
 var timer = null;
    $(document).ready(function () {
        //开启定时器
		show();
        timer = setInterval(show,10000000);
        //回调函数
        function show(){
            var d1 = new Date();//获取到当前的时间
            var d1Ms = d1.getTime();
            var d2 = new Date(2021,7,21,8);//预计开始的时间 2021 8 20 08:00
            var d2Ms = d2.getTime();
            var differMs = d2Ms-d1Ms;//相差的毫秒数
            var date = parseInt(differMs/(3600*24*1000));//相差天数
            if( date >= 1 ){ 
                $(".number").text(date);
				$(".number2").text(date);
            }else{
                $(".deadline").css("display","none");
				$(".deadline2").css("display","none");
				$(".deadline_top").css("display","none")
            }
        }
    });