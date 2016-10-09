/**
 * 广告位GDT角标logo
 * Created by dickzheng 2016/10/09
 */
;(function(root, factory) {
    if(typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else if(typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.Corner = factory();
    }
})(this, function() {
    /**
     * 设置角标样式
     * @return {String} css text
     */
    var getCssText = function() {
        var cssText = [
            '',
        ].join('');
        return cssText;
    };

    /**
     * 创建style内联样式
     */
    var setCssText = function() {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        if(style.styleSheet) {
            style.styleSheet.cssText = getCssText();
        } else {
            var cssText = document.createTextNode(getCssText());
            style.appendChild(cssText);
        }
        document.getElementByTagName('head')[0].appendChild(style);
    };

    /**
     * 设置角标html节点结构
     * @param  {String} link 角标链接
     * @return {object}      角标html节点
     */
    var getHtmlText = function(link) {
        var corner = document.createElement('a');
        corner.setAttribute('href', link);
        corner.setAttribute('class', 'j-corner');
        var htmlText = [
            '<div class="tr"></div>',
            '<div class=""></div>',
        ].join('\n');
        corner.innerHTML = htmlText;
        return corner;
    };

    return {

        setCorner: function(link, param, type) {
            link = link || 'http://e.qq.com/reg-new';
            var corner = getHtmlText(link);
            if(typeof param === 'object') {
                param.appendChild(corner);
            } else if(typeof param === 'string' && type !== undefined) {
                if(type === 'class') {

                } else if(type === 'id') {

                } else {

                }
            }
        }
    };
});
