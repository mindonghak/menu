

$(function(){
    $("#menu>ul>li>ul").hide();
    $("#Amenu").on("mouseover",function(){
        $("#Alist").slideDown(300,"linear");        
    });
    $("#Amenu").on("mouseout",function(){
        $("#Alist").slideUp(200,"linear");
    });

    $("#Bmenu").on("mouseover",function(){
        $("#Blist").slideDown(300,"linear");
    });
    $("#Bmenu").on("mouseout",function(){
        $("#Blist").slideUp(200,"linear");
    });

    $("#Cmenu").on("mouseover",function(){
        $("#Clist").slideDown(300,"linear");
    });
    $("#Cmenu").on("mouseout",function(){
        $("#Clist").slideUp(200,"linear");
    });

    $("#Dmenu").on("mouseover",function(){
        $("#Dlist").slideDown(300,"linear");
    });
    $("#Dmenu").on("mouseout",function(){
        $("#Dlist").slideUp(200,"linear");
    });

    $("#Emenu").on("mouseover",function(){
        $("#Elist").slideDown(300,"linear");
    });
    $("#Emenu").on("mouseout",function(){
        $("#Elist").slideUp(200,"linear");
    });

    $("#Fmenu").on("mouseover",function(){
        $("#Flist").slideDown(300,"linear");
    });
    $("#Fmenu").on("mouseout",function(){
        $("#Flist").slideUp(200,"linear");
    });
});


$(function(){
    
    $("#Amenu").on("click",function(){
        $("#body>div").hide();
        $("#Abody").fadeIn(500);
    });
    $("#Bmenu").on("click",function(){
        $("#body>div").hide();
        $("#Bbody").fadeIn(500);
    });
    $("#Cmenu").on("click",function(){
        $("#body>div").hide();
        $("#Cbody").fadeIn(500);
    });
    $("#Dmenu").on("click",function(){
        $("#body>div").hide();
        $("#Dbody").fadeIn(500);
    });
    $("#Emenu").on("click",function(){
        $("#body>div").hide();
        $("#Ebody").fadeIn(500);
    });
    $("#Fmenu").on("click",function(){
        $("#body>div").hide();
        $("#Fbody").fadeIn(500);
    });
})