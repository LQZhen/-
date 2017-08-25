define(["jquery","cookie"],function($){
    $.ajax({
        type:"get",
        url : "/html/logo.html",
        success:function(data){
            var _username = $.cookie("loginUser");
            
            if(_username){
                $(data).appendTo(".logo_nva");
                $(".logo_nva .indent_trace").css({"display":"block"})  
            }else{
                $(data).appendTo(".logo_nva")
            }
            $(".logo_input_text").click(function(){
                 $(this).val("");
            })
           
            // $.ajax({
            //     type :"get",
            //     url:"/mock/jia.josn",
            //     data : "seekSpan",
            //     success : function(data){需要用到假数据
            //         var _seekSpan = data;

            //     }
            // })
        }
    })
  
  
})
