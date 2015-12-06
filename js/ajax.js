function ajax()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("galeria-inicio").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","acercade.html",true);
xmlhttp.send();



}
