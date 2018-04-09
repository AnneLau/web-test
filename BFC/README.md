<<<<<<< HEAD
# blog
Blog～
=======
<<<<<<< HEAD
# blog
Blog～
=======
## BFC
Block Formatting Contexts (块级格式化上下文)

具有BFC特性的元素可以看作是隔离了的独立容器,容器里面的元素不会在布局上影响到外面的元素,并且BFC具有普通容器所没有的特性

### 触发BFC

只要元素满足一下任意一条件即可触发BFC特性
  1. body根元素
  2. 浮动元素除了float none 以外的值
  3. 绝对定位元素 position (absolout fixed)
  4. display 为inline-block table-cells flex
  5. overflow除了visable以外的值 (hidden、auto、scroll)

### BFC特性及应用
#### 1. 同一个BFC下外边距会发生折叠

``` css
div{
  width: 100px;
  height: 100px;
  background: lightblue;
  margin: 100px;
}
```
``` html
<body>
  <div></div>
  <div></div>
</body>
```

两个`div`处于同一个BFC容器下(body)所以第一个`div`的下边距和第二个`div`的下边距发生了重叠

总结: 为了避免外边距的重叠，可以将其放在不同的BFC容器中

``` css
.container{
  overflow: hidden;
}
p{
  width: 100px;
  height: 100px;
  margin: 100px;
  background: lightblue;
}
```
``` html
<div class="container">
  <p></p>
</div>
<div class="container">
  <p></p>
</div>
```

#### 2. BFC可以包含浮动的元素(清除浮动)

容器内的元素浮动,脱离文档流,此时容器只剩下2px的高度,如果触发容器的BFC,那么容器将会包裹浮动的元素

``` css
.parent {
  border: 1px solid #ccc;
  overflow: hidden;
}
.child {
  height: 100px;
  width: 100px;
  float: left;
  background: lightblue;
}
```
``` html
<div class="parent">
  <div class="child"></div>
</div>
```

#### 3. 阻止元素被浮动元素覆盖

``` css
.first {
  width: 100px;
  height: 200px;
  float: left;
  background: lightblue;
}
.second {
  width: 200px;
  height: 200px;
  background: #ccc;
}
```
``` html
<div class="first">浮动元素</div>

<div class="second">没有浮动的元素，也没有触发BFC</div>

```

第二个元素有部分被浮动元素所覆盖,可以触发第二个元素的BFC特性,在第二个元素中加入 `overflow: hidden`

布局： 两列自适应布局,左边固定,右边自适应
>>>>>>> 第一次提交
>>>>>>> 更新内容
