/**
 * Created by 权少 on 2017/6/16.
 */
//
window.onload = function () {

    scrollChangeHeaderColor();
    countDownTime();



};

//获取元素




//滚动改变颜色
function scrollChangeHeaderColor() {
    var headerDom = document.querySelector("header");
    var bannerHeight = document.querySelector(".jd-banner").offsetHeight;
    // console.log(bannerHeight);
    window.onscroll = function () {
        var alpha = document.body.scrollTop/bannerHeight;
        // console.log(document.body.scrollTop);
        // console.log(alpha);
        if(alpha > 0.8){
            alpha = 0.8;
        }
        headerDom.style.backgroundColor = "rgba(201,21,35,"+alpha+")"
    }



}

//倒计时
/*
 1.使用定时器来实现 一直倒计时的效果

 2. 定义总的时间
 3. 获取需要修改的 li标签
 3. 定时器中
 递减总时间
 判断是否倒计时结束
 关闭定时器
 提示用户
 return
 修改页面的显示效果 修改 倒计时的li标签的内容
 真是的网站中 倒计时 会更为紧张一些 其实就是 定时器执行的时间间隔 更短一些即可
 */
function countDownTime() {
//    定义一个时间
    var time = 5;
    //    设置定时器
    var timer = setInterval(function () {


//获取需要修改的li标签
    var lis = document.querySelectorAll(".clock li");

        time--;//递减时间

    //    判断是否倒计时结束
        if(time<0){
            clearInterval(timer);
            alert("兄弟你错过了")
            return;
        }

    // 格式化时间
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = time % 60;

    //    给li标签改变
        lis[0].innerHTML = Math.floor(h/10);
        lis[1].innerHTML = h%10;

        lis[3].innerHTML = Math.floor(m/10);
        lis[4].innerHTML = m%10;

        lis[6].innerHTML = Math.floor(s/10);
        lis[7].innerHTML = s%10;

    },1000);

}

//轮播图
function autoplay() {

}



