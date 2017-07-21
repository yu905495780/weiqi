var nav = {};
var left = {};

nav.active = function(id) {
	$(id).addClass('on');
};

left.active = function(id) {
	$(id).addClass('active');
};

/**
 * 校验上传图片的格式
 * @returns {Boolean}
 */
function checkImg(file) {
	var str = [ "jpg", "jpeg", "gif", "bmp", "png", "jpg", "gif", "psd" ];
	var img_Suffix = file.split(".")[1];
	if (str.indexOf(img_Suffix) != -1) {
		return true;
	} else {
		return false;
	}
}

/**
 * 判断是否为空字符串
 * @param str
 * @returns
 */
function isNullStr(str) {
	var s = false;
	str = trim(str);
	if ("" != str && null != str) {
		s = true;
	}
	return s;
}

/**
 * 去除空格
 * @param str
 * @returns
 */
function trim(str) {
	var t = str.replace(/(^\s*)|(\s*$)/g, ""); // 用正则表达式将前后空格        
	return t.replace(/(^　*)|(　*$)/g, ""); // 用空字符串替代。      
}

function myAlert(msg){
	alert(msg);
	//popHtml.popup("open");
	//popHtml.children("p").text(msg)
}
