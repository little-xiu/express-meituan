
window.onload = function() {
	//初始化iscroll
	var myScroll = new IScroll(".content", {
	  //配置侦听滚动事件的方式
	  probeType: 3,
	  mouseWheel: true
	});

	//下拉刷新
	function Refresh() {
		this.htmlSize = parseInt($("html").css("fontSize"));
		this.refreshH = 0.6 * this.htmlSize;
		this.refreshTxt = $(".load-more span");
		this.refreshImg = $(".load-more img");
		this.box = $(".sellers-list");
		this.str = "";
		this.init();
	}
	$.extend(Refresh.prototype,{
		init: function() {
			this.scroll();
		},
		scroll: function() {
			myScroll.on("scrollEnd",$.proxy(this.handScrollEnd,this));
			myScroll.on("scroll",$.proxy(this.handScroll,this));
		},
		handScrollEnd: function() {
			var y = myScroll.y;
			var y1 = myScroll.maxScrollY;
			var y2 = myScroll.maxScrollY + this.refreshH;
			if(y < y2 && y > y1) {
				myScroll.scrollTo(0,y2,300);
			} else if(y <= y1) {
				$.ajax({
					type: "post",
					url: "/api/json/sellers.json",
					success: $.proxy(this.handAjax,this)
				})
			}
		},
		handAjax: function(data) {
			data.map($.proxy(this.handEach,this));
			this.box.append(this.str);
			myScroll.refresh();
		},
		handEach: function(item) {
			this.str += `<dd class="seller-item one-bottom">
										<a href="#" class="img-link">
											<img src="${item.img}">
										</a>
										<div class="pro-des">
											<h3 class="pro-tit">
												<a href="#" class="pro-link">${item.title}</a>
											</h3>
											<p class="sub-tit">${item.subTit}</p>
											<p class="pro-price">
												<em>${item.price}</em><span class="price-flag">元</span>
												<strong>${item.delPrice}</strong>
												<span class="sales">${item.count}</span>
											</p>
										</div>
									</dd>`;
		},
		handScroll: function() {

		}
	})
	new Refresh();
}