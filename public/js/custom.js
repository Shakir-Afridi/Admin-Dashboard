$(document).on('click', '.nav-tabs li', function() {
    $(".nav-tabs li").removeClass("active");
    $(this).addClass("active");
  });

  $(window).on('load', function() {
    if ($(window).width() <= 768){
      $('#SideNavBars').css("display", "none")
    } else {
      $('#SideNavBars').css("display", "inline")
    }
  })

  $(document).on('click', '.mysidenav li', function() {
    $(".mysidenav li").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on('click', '#SideNavClose li', function() {
    $("#SideNavClose li").removeClass("active");
    $(this).addClass("active");
    $('#SideNavClose').css("height", "0px")
    $('#SideNavClose ul li').css("visibility","hidden");
    $('#SideNavClose ul li').css("opacity","0");
  });

  $(document).on('click', '#bars', function(){
      if ($("#SideNavClose").height() == 0){
        $('#SideNavClose').css("height", "550px")
        $('#SideNavClose ul li').css("visibility","visible");
        $('#SideNavClose ul li').css("opacity","1");
      } else {
        $('#SideNavClose').css("height", "0px")
        $('#SideNavClose ul li').css("visibility","hidden");
        $('#SideNavClose ul li').css("opacity","0");
      }
  });

  $(document).on('click', '#SideNavBars', function(){
    if($('.mysidenav').width() === 280){
      $('.mysidenav').css("width", "60px")
      $('#mainBodyComp').css("margin-left", "75px")
      $('#SideNavBars').removeClass("fa fa-bars")
      $('#SideNavBars').addClass("fa fa-times")
      $('.mysidenav ul li a').css("display", "none")
      $('#mysidenav ul li a').css("opacity","0");
    } else {
      $('.mysidenav').css("width", "280px")
      $('#mainBodyComp').css("margin-left", "295px")
      $('#SideNavBars').removeClass("fa fa-timess")
      $('#SideNavBars').addClass("fa fa-bars")
      $('.mysidenav ul li a').css("display", "inline")
      $('#mysidenav ul li a').css("opacity","1");
    }
  });

  $(document).ready(function(){
    $(".close").click(function(){
      $("#myAlert").alert("close");
    });
  });
  
    // $(document).ready(function(){
    //   $(".mysidenav ul li span").hover(function(){
    //     $(this).parent().css("width", "260px");
    //     $(this).parent().css("background-color", "pink");
    //     }, function(){
    //       $(this).parent().css("background-color", "black");
    //   });
    // });
