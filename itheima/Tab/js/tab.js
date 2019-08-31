var that;
class Tab {
    constructor(id) {
        // 获取元素
        // console.log(this);  //指向Tab
        that = this;

        this.main = document.querySelector(id);
        // console.log(this.main); 
        // this.lis = this.main.querySelectorAll("li");
        // console.log(this.lis); NodeList(3)
        // this.sections = this.main.querySelectorAll("section");
        // console.log(this.section);  NodeList(3)
        this.add = this.main.querySelector(".tabadd");
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section的父元素
        this.fsection = this.main.querySelector('.tabscon');
        // console.log(this.add);
        // 获取关闭按钮
        // this.remove = this.main.querySelectorAll(".icon-guanbi");
        this.init();
    }
    init() {
        this.updatedNode(); 
        // init 初始化操作让相关元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i; //添加索引号
            // this.lis[i].onclick = function(){
            //     console.log(this.index);
            // }
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
        this.add.onclick = this.addTab;
    }
    updatedNode() {
        // DOM更新
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");

        this.remove = this.main.querySelectorAll(".icon-guanbi");

        // 获取所有双击的span section
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    claerClass() {
        // 清除所有的样式
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            that.sections[i].className = "";
        }
    }
    // 切换功能 1
    toggleTab() {
        console.log(this.index); //索引
        that.claerClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }

    // 添加功能 2
    addTab() {
        // console.log("+");
        that.claerClass();
        let _li = `<li class="liactive"><span>NewTab</span><span class="iconfont icon-guanbi"></span></li>`;
        let _section = `<section class="conactive">New section</section>`;
        that.ul.insertAdjacentHTML("beforeEnd",_li);
        that.fsection.insertAdjacentHTML("beforeEnd",_section);
        that.init();
    }     
    // 删除功能 3
    removeTab(e) {
        // console.log(e);
        e.stopPropagation(); //关闭按钮阻止冒泡到切换
        console.log(this.parentNode.index);
        let index = this.parentNode.index; //关闭按钮li 对应的索引值
        // 根据索引删除对应的li section
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中的状态的时候，我们原来的li 选中状态不变    
        //判断ul li里面是否有 选中的className
        if(document.querySelector('.liactive')) return; 

        // 当我们删除选中的li 让她前一个li处于选中状态
        index--;
        // 手动调用我们的点击事件 不需要鼠标触发
        that.lis[index] && that.lis[index].click();  //&& 前面防止只有一个删除 点击报错
        
     }
    // 编辑功能 4
    editTab() { 
        console.log("编辑");
        let str = this.innerHTML;
        // 双击修改 给里面插入文本框
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

        this.innerHTML = `<input type="text" />`;
        let input = this.children[0];
        input.value = str;
        input.select(); //文本框里面的值处于选定状态

        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        input.onkey = function(e){
            if(e.onkey === 13){
                this.onblur(); // 手动调用表单失去焦点事件  不需要鼠标离开操作
            }
        }
      
    }
}

new Tab("#tab");


// 1.文档对象模型Document引用的querySelector()方法返回文档中与指定选择器或选择器组匹配的第一个 html元素Element。 如果找不到匹配项，则返回null。
// 2.insertAdjacentHTML
// 3 input.select(); 文本框里面的值处于选定状态
// 4.双击禁止选定文字
//  window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

