
window.onload = function () {

    // 1. 获取所有的标题 li
    //    获取所有的图片 li
    let images = document.querySelectorAll(".ad-images>li");
    let titles = document.querySelectorAll(".ad-titles>li");


    // 2. 监听标题 li 它的, 鼠标hover事件
    for (let i = 0, len=titles.length; i < len; i++) {
        let title_li = titles[i];
        title_li.onmouseover = function () {
            // 1. 处理标题
            // 去掉所有li  对应的class  active;
            // 单独给, 当前鼠标放上去的 li  添加 类名  active
            titles.forEach(item=>item.className="")
            title_li.className = "active"

            // 2. 处理 图片
            images.forEach(item=>item.className="")
            images[i].className = "active";

        }
    }


    // 3. 根据, 你鼠标放上去的 标题 对应的 序号, 去到  图片 li 里面 去找, 对应的图片



}