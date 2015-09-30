$(document).ready(function() {
	$('.button').addClass('btn');
	$('.button').addClass('btn-primary');
	$('.playsms-table-list').addClass('table');
	$('.playsms-table-list').addClass('table-striped');
	$('.playsms-table-list').addClass('table-hover');
	$('.playsms-table-list').addClass('table-condensed');
	$('.playsms-table-list').tablesorter();
	$('.playsms-table').addClass('table');
	$('.playsms-table').addClass('table-hover');
	$('.playsms-table').addClass('table-condensed');
	$('.playsms-tooltip').tooltip();
	$('.playsms-mandatory').tooltip();
	
	//custom
	$("#main-body").append('<div id="sidebar-main-body"><ul class="sidebar-nav"></ul></div>');
	$("#main-body").append('<a href="#menu-toggle" class="btn btn-sm btn-primary" id="menu-toggle"><i id="" class="glyphicon glyphicon-eye-open"></i></a>');
	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#main-body").toggleClass("toggled");
	});
  
  $(".navbar-inner .navbar-nav").clone().prependTo("#sidebar-main-body");
  $("#sidebar-main-body .dropdown").removeClass("dropdown"); 
  $("#sidebar-main-body .navbar-nav").removeClass("nav navbar-nav").addClass("sidebar-nav"); 
  $("ul.dropdown-menu").removeClass("dropdown-menu").addClass("sidebar-nav-menu").hide();
  $("#sidebar-main-body a").removeAttr("data-toggle");
	$("#sidebar-main-body ul.sidebar-nav:eq(1)").addClass("remove");
	$("#sidebar-main-body ul.sidebar-nav:eq(2)").addClass("remove");
	$(".remove").remove();
	$(".divider").remove();
	$("#sidebar-main-body .sidebar-nav").append('<li><a href="index.php?app=main&amp;inc=core_auth&amp;route=logout"><span class="playsms-icon glyphicon glyphicon-off" alt="Logout" title="Logout"></span></a></li>');
	brand = $(".navbar-inner .navbar-header ").html();
	$("#sidebar-main-body .sidebar-nav").prepend(brand);
	$("#sidebar-main-body button").remove();
	$("#sidebar-main-body .navbar-brand").wrap("<li class='sidebar-brand'>");
	$("#sidebar-main-body .sidebar-nav a").removeClass("brand").removeClass("navbar-brand");
	$("b.caret").addClass("pull-right").css({"margin":"20px 25px 10px 10px"});
	$("input[type=text]").addClass("form-control");
	$("input[type=password]").addClass("form-control");
	$("select").addClass("form-control");
	$("textarea").addClass("form-control");
	
	//i = $("i[data-toggle=tooltip]");
	//ibefore = i.before();
	
	//if(ibefore.is("input")){
		//i.wrap('<span class="input-group-addon">');
	//}
	
	$(".dropdown-toggle").click(function(){
		ini = $(this).next();
		if(ini.is(":visible")){
			ini.slideUp();
		}else{
			$(".sidebar-nav-menu").slideUp();
			ini.slideDown();
		}
	});
	
	a = window.location.href;
	if(a.indexOf("login")>1){
		$("#main-body").addClass("toggled");
		$("#menu-toggle").hide();
		$("#main-footer").hide();
		$("#main-content").css({"margin-top":"10%"});
	}
	$(".glyphicon-trash").parent().addClass("text-danger");
	$(".glyphicon-plus").parent().addClass("text-success");
	$(".glyphicon-export").parent().addClass("text-success");
	$("table.table-hover").removeClass("table-hover");
	
	
	$("#main-menu").remove();
});
