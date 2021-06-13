$(".CellHeading").hover(function(){
    $(this).css("background-color", "#caf7e3");
    }, function(){
    $(this).css("background-color", "#edffec");
  });
var a=[];

var count=0;
var total=25;
$(".text3").html(count+"/"+total);

$("a").click(function getNamechange(){
    var nam=this.innerHTML;
    console.log(nam);
    localStorage.setItem("names",nam);
    window.location.href="table.html"
});
