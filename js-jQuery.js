
var $ = function(){
	return new mine();
};

function mine(){
	//属性
	this.element = [];
}

//通过Id获取元素
mine.prototype.getId = function(id){
	this.element.push(document.getElementById(id));
	return this;
}
//通过标签名获取元素
mine.prototype.getTagName = function(tag){
	var tags = document.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++){
		this.element.push(tags[i]);
	}
	return this;
}
//通过类名获取元素
mine.prototype.getClass = function(classname){
	var all = document.getElementsByTagName("*");
	for(var i=0;i<all.length;i++){
		var names = all[i].className; 
		names = names.split(" ");   
		for(var j=0;j<names.length;j++){
			if(names[j] == classname){
				this.element.push(all[i]);
			}
		}
	}
	return this;
}
//css属性值
mine.prototype.css = function(attr,value){
	for(var i=0;i<this.element.length;i++){
		if(arguments.length ==1){     //获取属性
			//获取非行间样式
			if(this.element[i].currentStyle){
				return this.element[i].currentStyle[attr];
			}else{
				return getComputedStyle(this.element[i])[attr];
			}
			//return this.element[i].style[attr]; //只能获取行间样式
		}else{
			//设置属性
			this.element[i].style[attr] = value;
		}
		
	}
	return this;  //因为return，css可以反复调用
}
//html
mine.prototype.html = function(str){
	for(var i=0;i<this.element.length;i++){
		if(arguments.length == 0){
			return this.element[i].innerHTML;
		}else{
			this.element[i].innerHTML = str ;
		}
	}
	return this;
}
//click事件
mine.prototype.click = function(fn){
	for(var i=0;i<this.element.length;i++){
		this.element[i].onclick = function(){
			fn();
		}
	}
	return this;
}
//鼠标移入事件
mine.prototype.mouseover = function(fn){
	for(var i=0;i<this.element.length;i++){
		this.element[i].onmouseover = function(){
			fn();
		}
	}
	return this;
}
//鼠标移出事件
mine.prototype.mouseout = function(fn){
	for(var i=0;i<this.element.length;i++){
		this.element[i].onmouseout = function(){
			fn();
		}
	}
	return this;
}
//hover
mine.prototype.hover = function(fn1,fn2){
	for(var i=0;i<this.element.length;i++){
		this.element[i].onmouseover = function(){
			fn1();
		}
		this.element[i].onmouseout = function(){
			fn2();
		}
	}
	return this;
}
//eq
mine.prototype.eq = function(num){
	var myEq = this.element[num];
	this.element = [];
	this.element.push(myEq);
	return this;
}
//addClass
mine.prototype.addClass = function(add){
	for(var i=0;i<this.element.length;i++){
		this.element[i].className += ' '+ add;
	}
	return this;
}
//removeClass
mine.prototype.removeClass = function(remove){
	for(var i=0;i<this.element.length;i++){
		var names = this.element[i].className;  //"p1 p2 p3"
		names = names.split(' ');  //['p1','p2','p3']
		for(var j=0;j<names.length;j++){
			if(names[j] == remove){
				names.splice(j,1);  //['p1','p2']
			}
		}
		names = names.join(' '); //'p1 p2'
		this.element[i].className = names;
	}
	return this;
}
