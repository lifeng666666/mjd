window.onload = function () {
    changeNavColor();
    banner();
    secondKill();
};

function changeNavColor() {
    var headerBox = document.getElementsByClassName('jd-header-box')[0];
    /*获取轮播图的高度*/
    var jd_banner = document.getElementsByClassName('jd-banner')[0];
    var banner_height = jd_banner.offsetHeight;
    /*获取滚动的距离*/
    var scrollTopH = 0;
    window.onscroll = function () {
        scrollTopH = getScrollTop();

        function getScrollTop() {
            var scrollPos;
            if (window.pageYOffset) {
                scrollPos = window.pageYOffset;
            }
            else if (document.compatMode && document.compatMode != 'BackCompat') {
                scrollPos = document.documentElement.scrollTop;
            }
            else if (document.body) {
                scrollPos = document.body.scrollTop;
            }
            return scrollPos;
        }

        var opt = 0;
        if (scrollTopH < banner_height) {
            opt = (scrollTopH / banner_height) * 0.8;
        } else {
            opt = 0.8;
        }
        headerBox.style.background = "rgba(201,21,35," + opt + ")";
    }
}
function banner(){
    /*1、获取标签*/
    var banner = document.getElementsByClassName('jd-banner')[0];
    var bannerW = banner.offsetWidth;
    var pointsBox = banner.getElementsByTagName('ol')[0];
    var allpoints = pointsBox.getElementsByTagName('li');
    var imageBoxs = banner.getElementsByTagName('ul')[0];
    var lis = imageBoxs.children;

    /*2.设置过渡 移除过渡 位置改变*/
    var addTransition = function(){
        imageBoxs.style.transition = "all .2s ease";
        imageBoxs.style.webkitTransition = 'all .2s ease';
    };
    var removeTransition = function(){
        imageBoxs.style.transition = "none";
        imageBoxs.style.webkitTransition = 'none';
    };
    var changeTranslateX = function(x){
        imageBoxs.style.transform = "translate(" + x + "px)";
        imageBoxs.style.webkitTransform = "translate(" + x + "px)";
    };
    /*3.图片滚动*/
    var index = 1;
    var timer = null;
    timer = setInterval(scrollImg,1000);
    function scrollImg(){
        index++;
        addTransition();
        changeTranslateX(-index*bannerW);
    }

    /*imageBoxs.addEventListener('transitionEnd', function(){
       if(index>=9){
           index = 1
       }else if(index <= 0){
           index = 8;
       }
       removeTransition();
       changeTranslateX(-index*bannerW);
    });
    imageBoxs.addEventListener('webkitTransitionEnd', function(){
        if(index>=9){
            index = 1
        }else if(index <= 0){
            index = 8;
        }
        removeTransition();
        changeTranslateX(-index*bannerW);
    });*/
    mjd.transitionEnd(imageBoxs,function(){
        if(index>=9){
            index = 1;
        }else if(index<= 0){
            index = 8;
        }
        removeTransition();
        changeTranslateX(-index*bannerW);
        setPoints();
    });

    var setPoints = function(){
        for (var i = 0; i < allpoints.length; i++) {
            allpoints[i].className = '';
        }
        // 5.2 让圆点的索引和图片的索引保持一致
        var pointIndex = index;
        if(index >= 9){
            pointIndex = 1;
        }else if(index <= 0){
            pointIndex = 8;
        }
        // 5.3 让当前的被选中
        allpoints[pointIndex -1].className = 'current';
    };

    // 6.监听滑动
    var startX = 0, endX = 0, distanceX =0;
    imageBoxs.addEventListener('touchstart', function(e){
        // 6.0 清除定时器
        clearInterval(timer);
        // 6.1 求出起始位置
        startX = e.touches[0].clientX;
    });

    /*模拟器的bug, 事件丢失现象, 遵循冒泡机制,往上进行拓展, window*/
    imageBoxs.addEventListener('touchmove', function(e){
        // 6.3 阻止默认的事件
        e.preventDefault();
        // 6.4 获取结束位置
        endX = e.touches[0].clientX;
        // 6.5 求出移动的距离
        distanceX = startX - endX;
        // 6.6 清除过渡
        removeTransition();
        // 6.7 改变位置
        changeTranslateX(-index*bannerW - distanceX);
    });

    imageBoxs.addEventListener('touchend', function(){
        // 6.8 满足1/3*宽度的时候 滑动一屏 && 滑动状态
        if(Math.abs(distanceX) >= 1/3 * bannerW && endX != 0){
            if(distanceX > 0){
                index ++;
            }else {
                index --;
            }
        }
        // 6.9 添加过渡效果,改变位置
        addTransition();
        changeTranslateX(-index * bannerW);

        // 6.10 重新开启定时器
        timer = setInterval(scrollImg, 1000);

        // 6.11 清零
        startX = 0;
        endX = 0;
        distanceX =0;
    });
}

/*秒杀时间*/
function secondKill(){
    var timer = document.getElementsByClassName('first-sec-time')[0];
    var spans = timer.children;

    var time = (12*60*60);

    times = null;



    /*定时器*/
    times = setInterval(function(){
        time = getCookie("lifeng");
        function getCookie(name){
            document.cookie = "lifeng="+time;
            var strCookie=document.cookie;
            var arrCookie=strCookie.split("; ");
            for(var i=0;i<arrCookie.length;i++){
                var arr=arrCookie[i].split("=");
                if(arr[0]==name) return arr[1];
            }
            return "";
        }

        time--;
        var h = Math.floor(time/60/60), m = Math.floor(time%(60*60)/60),s = time%60;
        spans[0].innerHTML = h>=10? Math.floor(h/10) : 0;
        spans[1].innerHTML = Math.floor(h%10) ;
        spans[3].innerHTML = m>=10? Math.floor(m/10) : 0;
        spans[4].innerHTML = Math.floor(m%10) ;
        spans[6].innerHTML = s>=10? Math.floor(s/10) : 0;
        spans[7].innerHTML = Math.floor(s%10) ;



    },1000);
}
