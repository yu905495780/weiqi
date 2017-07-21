window.onload = function() {
	var con3 = document.getElementsByClassName("con3")[0]
	var pa1 = document.getElementsByClassName("pa1")[0]
	var pa2 = document.getElementsByClassName("pa2")[0]
	var pa3 = document.getElementsByClassName("pa3")[0]
	var img1=document.getElementsByClassName("img1")[0]
	var img2=document.getElementsByClassName("img2")[0]
	var img3=document.getElementsByClassName("img3")[0]
	var list = document.getElementsByClassName("list")
//	var a=1
//	for(var i=0;i<list.length;i++){
//			list[i].onmouseover=function(){
//			var pa=this.getElementsByClassName("pa")[0]
//			var img=this.getElementsByClassName("img")[0]
//			pa.style.backgroundColor="#9C9C9C"
//			pa.style.color="white"
//			this.style.backgroundColor="#EDEDED"
//			img.src="维企网/20170420001226/i"++".png"
//		}
//		list[i].onmouseleave=function(){
//	
//		}
//		
//		
//	}
	
	
	list[0].onmouseover=function(){
		pa1.style.backgroundColor="#9C9C9C"
		pa1.style.color="white"
		list[0].style.backgroundColor="#EDEDED"
		img1.src="维企网/20170420001226/i2.png"
	}
	list[0].onmouseleave=function(){
		pa1.style.backgroundColor="#EDEDED"
		pa1.style.color="#5D5D5D"
		list[0].style.backgroundColor="white"
		img1.src="维企网/20170420001226/i1.png"
	}
	
	list[1].onmouseover=function(){
		pa2.style.backgroundColor="#9C9C9C"
		pa2.style.color="white"
		list[1].style.backgroundColor="#EDEDED"
		img2.src="维企网/20170420001226/i4.png"
	}
	list[1].onmouseleave=function(){
		pa2.style.backgroundColor="#EDEDED"
		pa2.style.color="#5D5D5D"
		list[1].style.backgroundColor="white"
		img2.src="维企网/20170420001226/i3.png"
	}
	
	list[2].onmouseover=function(){
		pa3.style.backgroundColor="#9C9C9C"
		pa3.style.color="white"
		list[2].style.backgroundColor="#EDEDED"
		img3.src="维企网/20170420001226/i6.png"
	}
	list[2].onmouseleave=function(){
		pa3.style.backgroundColor="#EDEDED"
		pa3.style.color="#5D5D5D"
		list[2].style.backgroundColor="white"
		img3.src="维企网/20170420001226/i5.png"
	}
	
	var tu1=document.getElementsByClassName("tu1")
//var divtu1=document.getElementsByClassName("divtu1")
	for(var i=0;i<tu1.length;i++){
		tu1[i].onmouseover=function(){
			var divtu1=this.getElementsByClassName("divtu1")[0]
			divtu1.style.display="block"
		}
		tu1[i].onmouseleave=function(){
			var divtu1=this.getElementsByClassName("divtu1")[0]
			divtu1.style.display="none"
		}
	}
	
	
	
	
	
	
	
}