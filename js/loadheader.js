define(["jquery","cookie"],function($){
    $.ajax({
        type:"get",
        url : "/html/header.html",
        success:function(data){
            var _username = $.cookie("loginUser");
                if(_username){//欢迎存在的用户
                    $(data).filter(".qa1")
                            .remove()
                            .html(`欢迎你：${_username}`)
                            .end()
                            .appendTo(".header");
                   $(".header .qa1").first()
                                    .remove()
                }else{
                    $(data).appendTo(".header")
                }
        }
    })
    return $(".header")


})