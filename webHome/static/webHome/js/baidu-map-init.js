jQuery(document).ready(function() {

    var map = new BMap.Map("map");
    // 创建地图实例
    var point = new BMap.Point(113.254949, 23.15589);
    // 滚动
    map.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    map.centerAndZoom(point, 15);
    var opts = {
        width : 200,     // 信息窗口宽度
        height: 50,     // 信息窗口高度
        title : "聚科联有限公司" , // 信息窗口标题
        enableMessage:true,//设置允许信息窗发送短息
        message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
    }
    var infoWindow = new BMap.InfoWindow("地址：东莞市厚街镇厚沙路14号", opts);  // 创建信息窗口对象
    marker.addEventListener("click", function(){
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    });

});