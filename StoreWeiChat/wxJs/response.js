/**
 * Created by Administrator on 2016/2/26.
 */
/**
 * 让你的页面轻松适配各种移动设备和PC端浏览器.
 *
 * @version 1.0.0 2015-7-16
 * @author Sun http://github.com/ufologist/responsive-page
 * @license MIT https://github.com/ufologist/responsive-page/blob/master/LICENSE
 */
(function (c) {
    var d = {
        css3: (function () {
            var q = c.document.createElement("div");
            var p = ["", "webkit", "moz", "ms"];
            var o = {Transform: "transform"};
            for (var j in o) {
                for (var m = 0, l = p.length; m < l; m++) {
                    var n = p[m];
                    var k = n ? n + j : o[j];
                    if (k in q.style) {
                        o[j] = k;
                        break
                    }
                }
            }
            return o
        })()
    };

    function e(k, i) {
        k = k ? k : {};
        for (var j in i) {
            k[j] = (typeof k[j] != "undefined") ? k[j] : i[j]
        }
        return k
    }

    var h = d.css3.Transform;
    var b = {selector: ".mod-responsive", sliceWidth: 640, center: true};

    function g(i) {
        var k = i.parentElement;
        if (k == c.document.body) {
            var j = document.createElement("div");
            j.style.overflow = "hidden";
            j.appendChild(i);
            k.appendChild(j)
        } else {
            if (k.style.overflow != "hidden") {
                k.style.overflow = "hidden"
            }
        }
    }

    function a(j, l) {
        var n = l.sliceWidth;
        var k = f(n);
        var q = j.style;
        if (j.getAttribute("style") !== null) {
            j.removeAttribute("style")
        }
        if (l.center && k) {
            q.width = n + "px";
            q.marginLeft = "auto";
            q.marginRight = "auto";
            return
        }
        var m = c.document.documentElement.clientWidth;
        var i = n;
        var p = j.clientHeight;
        var o = m / i;
        q.width = n + "px";
        q.height = (p * o) + "px";
        q[h + "Origin"] = "0 0";
        q[h] = "scale(" + o + ")"
    }

    function f(i) {
        return c.matchMedia ? c.matchMedia("(min-width: " + i + "px)").matches : undefined
    }

    c.responsivePage = function (o) {
        var j = e(o, b);
        var n = c.document.querySelectorAll(j.selector);
        for (var m = 0, k = n.length; m < k; m++) {
            var l = n[m];
            g(l);
            a(l, j)
        }
    }
})(window);