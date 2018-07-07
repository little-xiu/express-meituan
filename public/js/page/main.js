var mySwiper = new Swiper ('.swiper-container', {
  // loop: true,
  // 如果需要分页器
  pagination: '.swiper-pagination',
})

//渲染商家列表
function RenSellers() {
	this.box = $(".sellers-list");
	this.init();
}
$.extend(RenSellers.prototype,{
	init: function() {
		$.ajax({
			url: "/api/json/sellers.json",
			type: "post",
			success: $.proxy(this.handAjax,this)
		})
	},
	handAjax: function(data) {
		this.str = "";
		var _this = this;
		// data.map($.proxy(this.handMap,this));
		data.map(function(item) {
			_this.str += `<dd class="seller-item one-bottom">
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
		})
		this.box.append(this.str);
	}
})
new RenSellers();

