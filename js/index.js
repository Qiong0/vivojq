/*
* @Author: Lenovo
* @Date:   2018-11-01 16:10:38
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-11-02 00:23:30
*/
$(function(){
	//轮播图
	let imgbox=$(".banner img");
	let dots=$(".banner li");
	console.log(imgbox,dots);
	
	// console.log(imgbox);

	imgbox.first().css("z-index",10);
	dots.eq(0).addClass("active");

	let now=0;
	let t=setInterval(move, 2000);
	function move(){
		now++;
		if(now==imgbox.length){
			now=0;
		}
		imgbox.css("z-index",5).eq(now).css("z-index",10);
		dots.removeClass("active").eq(now).addClass('active');

	}


    let bannerbox=$(".banner");
    console.log(bannerbox);
	$(".banner").mouseenter(function(){
		clearInterval(t);
	})
	$(".banner").mouseleave(function(){
		t=setInterval(move, 2000);
	})
	// console.log($(".banner .container .bannerbox"));


	dots.on("click",function(){
		let index=$(this).index();
		console.log(index);
		imgbox.css("z-index",5).eq(index).css("z-index",10);
		btns.removeClass("active").eq(index).addClass("active");
	})
	
	

	let headerlis1=$(".list-box");
	let headerson1=$(".son")
	console.log(headerlis1,headerson1);
	headerlis1.mouseenter(function(){
	let index=$(this).index();
	headerson1.css("display","none").eq(index).css("display","block");
	})
	headerlis1.mouseleave(function(){
	let index=$(this).index();
	headerson1.css("display","none").eq(index).css("display","none");
	})

	//返回顶部
	let back=$(".guding");
	back.click(function(){
			animate((document.body),{scrollTop:0});
			animate((document.documentElement),{scrollTop:0});
	
	})


})
// window.onload=function() {
// 	// banner图
// 	let imgs=document.querySelectorAll(".banner img");
// 	let dots=document.querySelectorAll(".banner li");
// 	let banner=document.querySelector(".banner");
// 	console.log(imgs,dots,banner);

// 	imgs[0].style.zIndex=2;
// 	dots[0].classList.add("active");
// 	console.log(dots[0]);
// 	let num=0;

// 	// 鼠标移入换图
// 	for(let i=0;i<dots.length;i++){
// 		dots[i].onmouseover=function(){
// 		for(let j=0;j<dots.length;j++){
// 			imgs[j].style.zIndex=1;
// 			dots[j].classList.remove("active");
// 		}
// 		imgs[i].style.zIndex=2;
// 		dots[i].classList.add("active");
// 		num=i;
// 		}
// 	}	
	

// 	//自动轮播图
// 	let t=setInterval(move,1500);
// 	function move(){
// 		num++;
// 		if(num==5){
// 			num=0;
// 		}
// 		for(let j=0;j<dots.length;j++){
// 			imgs[j].style.zIndex=1;
// 			dots[j].classList.remove("active");
// 		}
// 		imgs[num].style.zIndex=2;
// 		dots[num].classList.add("active");

// 	}
	

// 	//鼠标移入，停止播放 移出，继续播放
	
// 	banner.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	banner.onmouseout=function(){
// 		t=setInterval(move,1500);
// 	}


// 	//banner选项卡

// 	let lis=document.querySelectorAll(".list-box");
// 	let son=document.querySelectorAll(".son")
// 	console.log(lis,son);

// 	for(let i=0;i<lis.length;i++){
// 		lis[i].onmouseenter=function(){
// 			for(let j=0;j<son.length;j++){
// 				son[j].style.display="none";
// 			}
// 			son[i].style.display="flex";
// 		}
// 		lis[i].onmouseleave=function(){
// 			son[i].style.display="none";
// 		}
// 	}

// 	//返回顶部

// let gu=document.querySelector(".guding");
//     let back=document.querySelector(".guding .fourth");
//     console.log(back);
//     document.onscroll=function () {
//         if(document.body.scrollTop || document.documentElement.scrollTop>=1000){
//             back.style.display="block";
//         }else{
//             back.style.display="none";
//             gu.style.height="144px";
//         }
//         back.onclick=function () {
//             animate(document.body,{scrollTop:0});
//             animate(document.documentElement,{scrollTop:0});
//         }
//     }









