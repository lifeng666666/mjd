window.onload = function(){
    changePanel();
};

function changePanel(){
    /*获取标签：*/
    var panel = document.getElementsByClassName('panel')[0];
    /*给框添加类名*/
    var panelContent = panel.getElementsByClassName('panel_content')[0];
    /*取消按钮*/
    var cancel = document.getElementsByClassName('cancel')[0];

    var carshs =document.getElementsByClassName('cart_deal_right');

    var checkBoxes=document.getElementsByClassName('cart_Check_Box');

    /*var up;//垃圾盖子
    for(var i=0;i<carshs.length;i++){
        (function (index) {
            mjd.tap(carshs[index],function () {
                up=carshs[index].firstElementChild;
                //将垃圾改获取的：carshs里的第一个子元素就是垃圾盖

                //给up设置动画
                up.style.transition='all .2s ease';
                up.style.webkitTransition='all .2s ease';

                //盖子的位置变化
                up.style.transformOrigin='0 5px';
                up.style.webkitTransformOrigin='0 5px';

                //设置旋转
                up.style.transform='rotate(-45deg)';
                up.style.webkitTransform='rotate(-45deg)';


                //设置模态框的显示
                panel.style.display='block';
                panelContent.className='panel_content jump';
            })
        })(i);
    }
    //点击取消的时候模态框要隐藏 垃圾盖要下去
    mjd.tap(cancel,function () {
        // 1 模态框要隐藏
        panel.style.display='none';
        //2垃圾盖要下去
        up.style.transform='none';
    });
    //checkbox的选中和非选中的效果
    for(var i=0;i<checkBoxes.length;i++){
        (function (index) {
            mjd.tap(checkBoxes[index],function () {
                //判断是否有checked这个属性
                if (checkBoxes[index].hasAttribute('checked')){
                    checkBoxes[index].removeAttribute('checked')
                }else{
                    checkBoxes[index].setAttribute('checked','');
                }
            })
        })(i)
    }*/
    var ljg;
    for (var i = 0; i < carshs.length; i++) {
        (function(index){
            mjd.tap(carshs[index],function(){
                ljg = carshs[index].firstElementChild;
                /*给垃圾盖设置动画*/
                ljg.style.transition = "all .2s ease";
                ljg.style.webkitTransition = "all .2s ease";
                /*transform-Origin属性允许您更改转换元素的位置。*/
                ljg.style.transformOrign = "0 5px";
                ljg.style.webkitTransformOrign = "0 5px";
                /*设置旋转*/
                ljg.style.transform = 'rotate(-60deg)';
                ljg.style.webKitTransform = 'rotate(-60deg)';
                /*设置模态框*/
                panel.style.display = 'block';
                panelContent.className = "panel_content jump"

            })
        })(i);
    }
    /*点击取消消失*/
    mjd.tap(cancel,function(){
        panel.style.display = 'none';
        ljg.style.transform = 'none';
        ljg.style.webKitTransform = 'none';
    });

    /*checkBoxes的选中和没选中状态*/
    for (var i = 0; i < checkBoxes.length; i++) {
        (function(index){
            mjd.tap(checkBoxes[index],function(){
                if(checkBoxes[index].hasAttribute('checked')){
                    checkBoxes[index].removeAttribute('checked');
                }else{
                    checkBoxes[index].setAttribute('checked','false');
                }
            })
        })(i);
    }
}
