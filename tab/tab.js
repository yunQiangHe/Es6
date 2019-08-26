/**
 * 选项卡
 */

var that;

class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);  //最外面#tab 标签
        // this.lis = this.main.querySelectorAll('li'); //ul>li
        // this.section = this.main.querySelectorAll('section');  //section
        this.add = this.main.querySelector('.tabadd'); //添加
        this.ul = this.main.querySelector('.firstnav ul:first-child'); //li的父元素ul
        this.fsection = this.main.querySelector('.tabscon'); //section的父元素
        this.init();
    }
    //初始化 让相关元素绑定事件
    init() {
        this.updateNode(); //获取最新的的lis sections

        // 添加add
        this.add.onclick = this.addTab;

        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;    //索引
            this.lis[i].onclick = this.toggleTab; //不能带括号立即执行
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.section[i].ondblclick = this.editTab;
        }
    }
    //提取 里section  和 li
    updateNode() {
        this.lis = this.main.querySelectorAll('li'); //ul>li
        this.section = this.main.querySelectorAll('section');  //section
        this.remove = this.main.querySelectorAll('.icon-guanbi'); //关闭按钮

        this.spans = this.main.querySelectorAll('.firstnav ul li span:first-child'); //顶部选项卡里面的文字
    }
    // 清除
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.section[i].className = "";
        }
    }
    // 切换选项卡功能
    toggleTab() {
        that.clearClass();
        //this 指向调用者 lis[i] 
        console.log(this, this.index);
        //<li><span>测试2</span><span class="iconfont icon-guanbi"></span></li>

        this.className = "liactive";
        that.section[this.index].className = "conactive";
    }
    // 添加功能
    addTab() {
        that.clearClass();
        // 1.创建添加元素
        // 2. 添加到html
        let random = Math.random();
        let li = `<li class="liactive"><span>New Tab</span><span class="iconfont icon-guanbi"></span></li>`;
        let section = `<section class="conactive">New section ${random}</section>`;
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 删除功能
    removeTab(e) {
        // console.log(e);
        // 因为li元素上也有点击事件  所以要阻止冒泡 
        e.stopPropagation();
        let index = this.parentNode.index; //关闭按钮对应的Li 的索引
        that.lis[index].remove();
        that.section[index].remove();
        that.init();

        // 当我删除的不是选中状态li 原来的选中状态保持不变
        if (document.querySelector(".liactive")) return;

        //当我们删除了选中状态的li 我们让他前一个li 处于选中状态
        index--;

        //手动点击事件 不需要鼠标出发
        that.lis[index] && that.lis[index].click();  //index 必须大于0 
    }
    // 编辑
    editTab(e) {
        // 编辑功能思路
        // 1. 双击选项卡 或者 section 里面文字  可以实现修改功能
        // 2. 双击 ondblclick
        // 3. 如果双击文字，会默认选定文字 此时需要双击禁止选中文字
        // 4. window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 5. 核心思路 双击文字 在里面生成一个文本框。当失去焦点或者按下回车然后吧文本输入的内容赋值给原先的元素
        console.log("双击编辑");

        // 获取选中前的文字
        let _str = this.innerHTML;

        //双击禁止选中文字  ********参考  js获取鼠标选中的文字
        // window.getSelection //返回一个  Selection 对象，表示用户选择的文本范围或光标的当前位置。
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = `<input type="text" />`
        let input = this.firstChild;
        input.value = _str;
        input.select();  // 文本框里面的文字处于选中的状态  用户体验
        // 当我们离开文本框 就把文本框里面的内容 给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动调用失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }
    }
}

new Tab("#tab");