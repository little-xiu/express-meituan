function LoadFoot(box) {
	this.box = box;
	this.init();
}
$.extend(LoadFoot.prototype,{
	init: function() {
		this.creatDom();
	},
	creatDom: function() {
		var str = `<div class="footer pub-flex">
						<div class="w720 pub-flex">
							<a class="ft-item on">
								<i class="iconfont">&#xe6cb;</i>
								<span>首页</span>
							</a>
							<a class="ft-item">
								<i class="iconfont">&#xe6d7;</i>
								<span>附近</span>
							</a>
							<a class="ft-item">
								<i class="iconfont">&#xe65c;</i>
								<span>发现</span>
							</a>
							<a class="ft-item">
								<i class="iconfont">&#xe610;</i>
								<span>订单</span>
							</a>
							<a class="ft-item" href="mine.html">
								<i class="iconfont">&#xe657;</i>
								<span>我的</span>
							</a>
						</div>
					</div>`;
		this.ele = $("<div></div>").append(str);
		this.box.append= this.ele;
		this.box.html = "111"
	}
})
new LoadFoot($("#footer"));
$("#footer").html = "dfds"