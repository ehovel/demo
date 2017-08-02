// JavaScript Document



function showLocale(objD)



{



	var str,colorhead,colorfoot;



	var yy = objD.getYear();



	if(yy<1900) yy = yy+1900;



	var MM = objD.getMonth()+1;



	if(MM<10) MM = '0' + MM;



	var dd = objD.getDate();



	if(dd<10) dd = '0' + dd;



	var hh = objD.getHours();



	if(hh<10) hh = '0' + hh;



	var mm = objD.getMinutes();



	if(mm<10) mm = '0' + mm;



	var ss = objD.getSeconds();



	if(ss<10) ss = '0' + ss;



	var ww = objD.getDay();



	if  ( ww==0 )  colorhead="<font color=\"#ffffff\">";



	if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#ffffff\">";



	if  ( ww==6 )  colorhead="<font color=\"#ffffff\">";



	if  (ww==0)  ww="������";



	if  (ww==1)  ww="����һ";



	if  (ww==2)  ww="���ڶ�";



	if  (ww==3)  ww="������";



	if  (ww==4)  ww="������";



	if  (ww==5)  ww="������";



	if  (ww==6)  ww="������";



	colorfoot="</font>"



	str = colorhead + yy + "��" + MM + "��" + dd + "�� " + hh + ":" + mm + ":" + ss + "  " + colorfoot;



	return(str);



}



function tick()



{



	var today;



	today = new Date();



	document.getElementById("localtime").innerHTML = showLocale(today);



	window.setTimeout("tick()", 1000);



}



tick();