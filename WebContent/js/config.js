jQuery.extend({
    easing: {
        backEaseIn: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            return f * (e /= 1) * e * ((b + 1) * e - b) + a
        },
        backEaseOut: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            return f * ((e = e / 1 - 1) * e * ((b + 1) * e + b) + 1) + a
        },
        backEaseInOut: function(e, g, a, d) {
            var f = a + d;
            var b = 1.70158;
            if ((e /= 0.5) < 1) {
                return f / 2 * (e * e * (((b *= (1.525)) + 1) * e - b)) + a
            } else {
                return f / 2 * ((e -= 2) * e * (((b *= (1.525)) + 1) * e + b) + 2) + a
            }
        },
        bounceEaseIn: function(e, g, b, d) {
            var f = b + d;
            var a = this.bounceEaseOut(1 - e, 1, 0, d);
            return f - a + b
        },
        bounceEaseOut: function(d, f, a, b) {
            var e = a + b;
            if (d < (1 / 2.75)) {
                return e * (7.5625 * d * d) + a
            } else {
                if (d < (2 / 2.75)) {
                    return e * (7.5625 * (d -= (1.5 / 2.75)) * d + 0.75) + a
                } else {
                    if (d < (2.5 / 2.75)) {
                        return e * (7.5625 * (d -= (2.25 / 2.75)) * d + 0.9375) + a
                    } else {
                        return e * (7.5625 * (d -= (2.625 / 2.75)) * d + 0.984375) + a
                    }
                }
            }
        },
        circEaseIn: function(d, f, a, b) {
            var e = a + b;
            return - e * (Math.sqrt(1 - (d /= 1) * d) - 1) + a
        },
        circEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * Math.sqrt(1 - (d = d / 1 - 1) * d) + a
        },
        circEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return - e / 2 * (Math.sqrt(1 - d * d) - 1) + a
            } else {
                return e / 2 * (Math.sqrt(1 - (d -= 2) * d) + 1) + a
            }
        },
        cubicEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d + a
        },
        cubicEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * ((d = d / 1 - 1) * d * d + 1) + a
        },
        cubicEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d + a
            } else {
                return e / 2 * ((d -= 2) * d * d + 2) + a
            }
        },
        elasticEaseIn: function(g, i, a, f) {
            var h = a + f;
            if (g == 0) {
                return a
            }
            if (g == 1) {
                return h
            }
            var e = 0.25;
            var d;
            var b = h;
            if (b < Math.abs(h)) {
                b = h;
                d = e / 4
            } else {
                d = e / (2 * Math.PI) * Math.asin(h / b)
            }
            return - (b * Math.pow(2, 10 * (g -= 1)) * Math.sin((g * 1 - d) * (2 * Math.PI) / e)) + a
        },
        elasticEaseOut: function(g, i, a, f) {
            var h = a + f;
            if (g == 0) {
                return a
            }
            if (g == 1) {
                return h
            }
            var e = 0.25;
            var d;
            var b = h;
            if (b < Math.abs(h)) {
                b = h;
                d = e / 4
            } else {
                d = e / (2 * Math.PI) * Math.asin(h / b)
            }
            return - (b * Math.pow(2, -10 * g) * Math.sin((g * 1 - d) * (2 * Math.PI) / e)) + h
        },
        expoEaseIn: function(d, f, a, b) {
            var e = a + b;
            return (d == 0) ? a: e * Math.pow(2, 10 * (d - 1)) + a - e * 0.001
        },
        expoEaseOut: function(d, f, a, b) {
            var e = a + b;
            return (d == 1) ? e: b * 1.001 * ( - Math.pow(2, -10 * d) + 1) + a
        },
        expoEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if (d == 0) {
                return a
            }
            if (d == 1) {
                return e
            }
            if ((d /= 0.5) < 1) {
                return e / 2 * Math.pow(2, 10 * (d - 1)) + a - e * 0.0005
            } else {
                return e / 2 * 1.0005 * ( - Math.pow(2, -10 * --d) + 2) + a
            }
        },
        quadEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d + a
        },
        quadEaseOut: function(d, f, a, b) {
            var e = a + b;
            return - e * (d /= 1) * (d - 2) + a
        },
        quadEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d + a
            } else {
                return - e / 2 * ((--d) * (d - 2) - 1) + a
            }
        },
        quartEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d * d + a
        },
        quartEaseOut: function(d, f, a, b) {
            var e = a + b;
            return - e * ((d = d / 1 - 1) * d * d * d - 1) + a
        },
        quartEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d * d + a
            } else {
                return - e / 2 * ((d -= 2) * d * d * d - 2) + a
            }
        },
        quintEaseIn: function(d, f, a, b) {
            var e = a + b;
            return e * (d /= 1) * d * d * d * d + a
        },
        quintEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * ((d = d / 1 - 1) * d * d * d * d + 1) + a
        },
        quintEaseInOut: function(d, f, a, b) {
            var e = a + b;
            if ((d /= 0.5) < 1) {
                return e / 2 * d * d * d * d * d + a
            } else {
                return e / 2 * ((d -= 2) * d * d * d * d + 2) + a
            }
        },
        sineEaseIn: function(d, f, a, b) {
            var e = a + b;
            return - e * Math.cos(d * (Math.PI / 2)) + e + a
        },
        sineEaseOut: function(d, f, a, b) {
            var e = a + b;
            return e * Math.sin(d * (Math.PI / 2)) + a
        },
        sineEaseInOut: function(d, f, a, b) {
            var e = a + b;
            return - e / 2 * (Math.cos(Math.PI * d) - 1) + a
        }
    }
}); (function(f) {
    var e = ["DOMMouseScroll", "mousewheel"];
    f.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var a = e.length; a;) {
                    this.addEventListener(e[--a], d, false)
                }
            } else {
                this.onmousewheel = d
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var a = e.length; a;) {
                    this.removeEventListener(e[--a], d, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    f.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    });
    function d(b) {
        var h = [].slice.call(arguments, 1),
        a = 0,
        c = true;
        b = f.event.fix(b || window.event);
        b.type = "mousewheel";
        if (b.wheelDelta) {
            a = b.wheelDelta / 120
        }
        if (b.detail) {
            a = -b.detail / 3
        }
        h.unshift(b, a);
        return f.event.handle.apply(this, h)
    }
})(jQuery);
$(document).ready(function() {
    var G = numberOfScreens;
    for (var D = 1; D <= G; D++) {
        $("#name" + D).html(blockName[D])
    }
    if (hoverEffect) {
        for (D = 1; D <= G; D++) {
            $("<style>#wrapper" + D + " div:hover{border: 1px #fff solid;box-shadow: 0px 0px 5px #fff;margin-left:4px;margin-top:4px;}</style>").appendTo("head")
        }
    }
    if (searchEngine == "google") {
        search = "http://www.google.com/search"
    } else {
        if (searchEngine == "bing") {
            search = "http://www.bing.com/search"
        } else {
            if (searchEngine == "sogou") {
                search = "https://www.sogou.com/sogou"
            } else {
                search = "http://www.google.com/search";
                searchEngine = "google"
            }
        }
    }
    $("form").attr("action", search);
    $("input:text").css("background", "#fff url(lib/" + searchEngine + "-back.png) center right no-repeat");
    var E = $(window).width();
    var F = $(window).height();
    var y = Math.floor((E - 975) / 2);
    var x = y - 1045;
    var w = y - 2090;
    var v = y - 3135;
    var u = y - 4180;
    var t = y - 5225;
    var s = y - 6270;
    var r = y - 7315;
    var q = y - 8360;
    var K = Math.floor((F - 480) / 2) - 80;
    $("#place").css({
        left: y,
        top: K
    });
    var k = 1;
    $("#wrapper1 input:text").focus();
    var e = true;
    function c() {
        $("#wrapper1 input:text").focusout();
        e = false;
        $("#place").animate({
            left: x,

        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper2 input:text").focus();
            e = true;
            k = 2
        });
        $("#button1to2").hide();
        $("#button2to1").show();
        if (G > 2) {
            $("#button2to3").show();
            $("#button3to2").hide()
        }
    }
    function o() {
        $("#wrapper2 input:text").focusout();
        e = false;
        $("#place").animate({
            left: y
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper1 input:text").focus();
            e = true;
            k = 1
        });
        $("#button1to2").show();
        $("#button2to1").hide();
        if (G > 2) {
            $("#button2to3").hide();
            $("#button3to2").hide()
        }
    }
    function m() {
        $("#wrapper2 input:text").focusout();
        e = false;
        $("#place").animate({
            left: w
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper3 input:text").focus();
            e = true;
            k = 3
        });
        $("#button1to2").hide();
        $("#button3to2").show();
        $("#button2to1").hide();
        $("#button2to3").hide()
    }
    function J() {
        $("#wrapper3 input:text").focusout();
        e = false;
        $("#place").animate({
            left: x
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper2 input:text").focus();
            e = true;
            k = 2
        });
        $("#button1to2").hide();
        $("#button3to2").hide();
        $("#button2to1").show();
        $("#button2to3").show()
    }
    function H() {
        $("#wrapper3 input:text").focusout();
        e = false;
        $("#place").animate({
            left: v
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper4 input:text").focus();
            e = true;
            k = 4
        });
        $("#button2to3").hide();
        $("#button4to3").show();
        $("#button3to2").hide();
        $("#button3to4").hide()
    }
    function g() {
        $("#wrapper4 input:text").focusout();
        e = false;
        $("#place").animate({
            left: w
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper3 input:text").focus();
            e = true;
            k = 3
        });
        $("#button2to3").hide();
        $("#button4to3").hide();
        $("#button3to2").show();
        $("#button3to4").show()
    }
    function f() {
        $("#wrapper4 input:text").focusout();
        e = false;
        $("#place").animate({
            left: u
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper5 input:text").focus();
            e = true;
            k = 5
        });
        $("#button3to4").hide();
        $("#button5to4").show();
        $("#button4to3").hide();
        $("#button4to5").hide()
    }
    function A() {
        $("#wrapper5 input:text").focusout();
        e = false;
        $("#place").animate({
            left: v
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper4 input:text").focus();
            e = true;
            k = 4
        });
        $("#button3to4").hide();
        $("#button5to4").hide();
        $("#button4to3").show();
        $("#button4to5").show()
    }
    function z() {
        $("#wrapper5 input:text").focusout();
        e = false;
        $("#place").animate({
            left: t
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper6 input:text").focus();
            e = true;
            k = 6
        });
        $("#button4to5").hide();
        $("#button6to5").show();
        $("#button5to4").hide();
        $("#button5to6").hide()
    }
    function d() {
        $("#wrapper6 input:text").focusout();
        e = false;
        $("#place").animate({
            left: u
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper5 input:text").focus();
            e = true;
            k = 5
        });
        $("#button4to5").hide();
        $("#button6to5").hide();
        $("#button5to4").show();
        $("#button5to6").show()
    }
    function b() {
        $("#wrapper6 input:text").focusout();
        e = false;
        $("#place").animate({
            left: s
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper7 input:text").focus();
            e = true;
            k = 7
        });
        $("#button5to6").hide();
        $("#button7to6").show();
        $("#button6to5").hide();
        $("#button6to7").hide()
    }
    function n() {
        $("#wrapper7 input:text").focusout();
        e = false;
        $("#place").animate({
            left: t
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper6 input:text").focus();
            e = true;
            k = 6
        });
        $("#button5to6").hide();
        $("#button7to6").hide();
        $("#button6to5").show();
        $("#button6to7").show()
    }
    function l() {
        $("#wrapper7 input:text").focusout();
        e = false;
        $("#place").animate({
            left: r
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper8 input:text").focus();
            e = true;
            k = 8
        });
        $("#button6to7").hide();
        $("#button8to7").show();
        $("#button7to6").hide();
        $("#button7to8").hide()
    }
    function L() {
        $("#wrapper8 input:text").focusout();
        e = false;
        $("#place").animate({
            left: s
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper7 input:text").focus();
            e = true;
            k = 7
        });
        $("#button6to7").hide();
        $("#button8to7").hide();
        $("#button7to6").show();
        $("#button7to8").show()
    }
    function I() {
        $("#wrapper8 input:text").focusout();
        e = false;
        $("#place").animate({
            left: q
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper9 input:text").focus();
            e = true;
            k = 9
        });
        $("#button7to8").hide();
        $("#button9to8").show();
        $("#button8to7").hide();
        $("#button8to9").hide()
    }
    function h() {
        $("#wrapper9 input:text").focusout();
        e = false;
        $("#place").animate({
            left: r
        },
        1000, "circEaseOut", 
        function() {
            $("#wrapper8 input:text").focus();
            e = true;
            k = 8
        });
        $("#button7to8").hide();
        $("#button9to8").hide();
        $("#button8to7").show();
        $("#button8to9").show()
    }
    if (G > 1) {
        $("#button1to2").click(function() {
            c()
        });
        $("#button2to1").click(function() {
            o()
        });
        if (G > 2) {
            $("#button2to3").click(function() {
                m()
            });
            $("#button3to2").click(function() {
                J()
            });
            if (G > 3) {
                $("#button3to4").click(function() {
                    H()
                });
                $("#button4to3").click(function() {
                    g()
                });
                if (G > 4) {
                    $("#button4to5").click(function() {
                        f()
                    });
                    $("#button5to4").click(function() {
                        A()
                    });
                    if (G > 5) {
                        $("#button5to6").click(function() {
                            z()
                        });
                        $("#button6to5").click(function() {
                            d()
                        });
                        if (G > 6) {
                            $("#button6to7").click(function() {
                                b()
                            });
                            $("#button7to6").click(function() {
                                n()
                            });
                            if (G > 7) {
                                $("#button7to8").click(function() {
                                    l()
                                });
                                $("#button8to7").click(function() {
                                    L()
                                });
                                if (G > 8) {
                                    $("#button8to9").click(function() {
                                        I()
                                    });
                                    $("#button9to8").click(function() {
                                        h()
                                    })
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    $(document).bind("keydown", 
    function(i) {
        if (i.keyCode == "39" || i.keyCode == "37") {
            i.preventDefault()
        }
        if (i.which == "39" && e) {
            if (k == 1 && G > 1) {
                c()
            }
            if (k == 2 && G > 2) {
                m()
            }
            if (k == 3 && G > 3) {
                H()
            }
            if (k == 4 && G > 4) {
                f()
            }
            if (k == 5 && G > 5) {
                z()
            }
            if (k == 6 && G > 6) {
                b()
            }
            if (k == 7 && G > 7) {
                l()
            }
            if (k == 8 && G > 8) {
                I()
            }
        }
        if (i.which == "37" && e) {
            if (k == 9) {
                h()
            }
            if (k == 8) {
                L()
            }
            if (k == 7) {
                n()
            }
            if (k == 6) {
                d()
            }
            if (k == 5) {
                A()
            }
            if (k == 4) {
                g()
            }
            if (k == 3) {
                J()
            }
            if (k == 2) {
                o()
            }
        }
    });
    $(document).mousewheel(function(i, j) {
        if (j > 0 && e) {
            if (k == 9) {
                h()
            }
            if (k == 8) {
                L()
            }
            if (k == 7) {
                n()
            }
            if (k == 6) {
                d()
            }
            if (k == 5) {
                A()
            }
            if (k == 4) {
                g()
            }
            if (k == 3) {
                J()
            }
            if (k == 2) {
                o()
            }
        } else {
            if (j < 0 && e) {
                if (k == 1 && G > 1) {
                    c()
                }
                if (k == 2 && G > 2) {
                    m()
                }
                if (k == 3 && G > 3) {
                    H()
                }
                if (k == 4 && G > 4) {
                    f()
                }
                if (k == 5 && G > 5) {
                    z()
                }
                if (k == 6 && G > 6) {
                    b()
                }
                if (k == 7 && G > 7) {
                    l()
                }
                if (k == 8 && G > 8) {
                    I()
                }
            }
        }
        i.preventDefault()
    });
    var C = 0;
    for (C = 0; C <= (G - 1); C++) {
        for (D = 0; D <= 11; D++) {
            var p = bookmark[C][D]["title"];
            var a = bookmark[C][D]["url"];
            var B = bookmark[C][D]["thumb"];
            if (B == "") {
                $("#thumb" + (C + 1) + "-" + (D + 1)).html('<img id="net" src="lib/net-back.png" /><a href="' + a + '" target="_blank"><div class="title">' + p + "</div></a>")
            } else {
                $("#thumb" + (C + 1) + "-" + (D + 1)).html('<a href="' + a + '" target="_blank"><img src="thumbs/' + B + '" /></a>')
            }
        }
    }
    $("#search-engine1").click(function() {
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff")
    });
    $("#google1").click(function() {
        $("#wrapper1 form").attr("action", "http://www.google.com/search");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
        $("#wrapper1 input:hidden").detach();
        $("#wrapper1 input:first").attr("name", "q");
        $("#wrapper1 input:text").focus()
    });
    $("#bing1").click(function() {
        $("#wrapper1 form").attr("action", "http://www.bing.com/search");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
        $("#wrapper1 input:hidden").detach();
        $("#wrapper1 input:first").attr("name", "q");
        $("#wrapper1 input:text").focus()
    });
    $("#sogou1").click(function() {
        $("#wrapper1 form").attr("action", "https://www.sogou.com/sogou");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
        $("#wrapper1 input:hidden").detach();
        $("#wrapper1 input:first").attr("name", "query");
	$('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper1 form");
        $("#wrapper1 input:text").focus()
    });
    $("#baidu1").click(function() {
        $("#wrapper1 form").attr("action", "http://www.baidu.com/s");
        $("#wrapper1 input:first").attr("name", "wd");
        $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper1 form");
        $("#engines1").fadeToggle("fast", "circEaseOut");
        $("#wrapper1 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
        $("#wrapper1 input:text").focus()
    });
    if (G > 1) {
        $("#search-engine2").click(function() {
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff")
        });
        $("#google2").click(function() {
            $("#wrapper2 form").attr("action", "http://www.google.com/search");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper2 input:hidden").detach();
            $("#wrapper2 input:first").attr("name", "q");
            $("#wrapper2 input:text").focus()
        });
        $("#bing2").click(function() {
            $("#wrapper2 form").attr("action", "http://www.bing.com/search");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper2 input:hidden").detach();
            $("#wrapper2 input:first").attr("name", "q");
            $("#wrapper2 input:text").focus()
        });
        $("#sogou2").click(function() {
            $("#wrapper2 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper2 input:hidden").detach();
            $("#wrapper2 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper2 form");
            $("#wrapper2 input:text").focus()
        });
        $("#baidu2").click(function() {
            $("#wrapper2 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper2 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper2 form");
            $("#engines2").fadeToggle("fast", "circEaseOut");
            $("#wrapper2 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper2 input:text").focus()
        })
    }
    if (G > 2) {
        $("#search-engine3").click(function() {
            $("#engines3").fadeToggle("fast", "circEaseOut");
            $("#wrapper3 input:text").css("background", "#fff")
        });
        $("#google3").click(function() {
            $("#wrapper3 form").attr("action", "http://www.google.com/search");
            $("#engines3").fadeToggle("fast", "circEaseOut");
            $("#wrapper3 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper3 input:hidden").detach();
            $("#wrapper3 input:first").attr("name", "q");
            $("#wrapper3 input:text").focus()
        });
        $("#bing3").click(function() {
            $("#wrapper3 form").attr("action", "http://www.bing.com/search");
            $("#engines3").fadeToggle("fast", "circEaseOut");
            $("#wrapper3 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper3 input:hidden").detach();
            $("#wrapper3 input:first").attr("name", "q");
            $("#wrapper3 input:text").focus()
        });
        $("#sogou3").click(function() {
            $("#wrapper3 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines3").fadeToggle("fast", "circEaseOut");
            $("#wrapper3 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper3 input:hidden").detach();
            $("#wrapper3 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper3 form");
            $("#wrapper3 input:text").focus()
        });
        $("#baidu3").click(function() {
            $("#wrapper3 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper3 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper3 form");
            $("#engines3").fadeToggle("fast", "circEaseOut");
            $("#wrapper3 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper3 input:text").focus()
        })
    }
    if (G > 3) {
        $("#search-engine4").click(function() {
            $("#engines4").fadeToggle("fast", "circEaseOut");
            $("#wrapper4 input:text").css("background", "#fff")
        });
        $("#google4").click(function() {
            $("#wrapper4 form").attr("action", "http://www.google.com/search");
            $("#engines4").fadeToggle("fast", "circEaseOut");
            $("#wrapper4 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper4 input:hidden").detach();
            $("#wrapper4 input:first").attr("name", "q");
            $("#wrapper4 input:text").focus()
        });
        $("#bing4").click(function() {
            $("#wrapper4 form").attr("action", "http://www.bing.com/search");
            $("#engines4").fadeToggle("fast", "circEaseOut");
            $("#wrapper4 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper4 input:hidden").detach();
            $("#wrapper4 input:first").attr("name", "q");
            $("#wrapper4 input:text").focus()
        });
        $("#sogou4").click(function() {
            $("#wrapper4 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines4").fadeToggle("fast", "circEaseOut");
            $("#wrapper4 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper4 input:hidden").detach();
            $("#wrapper4 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper4 form");
            $("#wrapper4 input:text").focus()
        });
        $("#baidu4").click(function() {
            $("#wrapper4 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper4 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper4 form");
            $("#engines4").fadeToggle("fast", "circEaseOut");
            $("#wrapper4 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper4 input:text").focus()
        })
    }
    if (G > 4) {
        $("#search-engine5").click(function() {
            $("#engines5").fadeToggle("fast", "circEaseOut");
            $("#wrapper5 input:text").css("background", "#fff")
        });
        $("#google5").click(function() {
            $("#wrapper5 form").attr("action", "http://www.google.com/search");
            $("#engines5").fadeToggle("fast", "circEaseOut");
            $("#wrapper5 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper5 input:hidden").detach();
            $("#wrapper5 input:first").attr("name", "q");
            $("#wrapper5 input:text").focus()
        });
        $("#bing5").click(function() {
            $("#wrapper5 form").attr("action", "http://www.bing.com/search");
            $("#engines5").fadeToggle("fast", "circEaseOut");
            $("#wrapper5 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper5 input:hidden").detach();
            $("#wrapper5 input:first").attr("name", "q");
            $("#wrapper5 input:text").focus()
        });
        $("#sogou5").click(function() {
            $("#wrapper5 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines5").fadeToggle("fast", "circEaseOut");
            $("#wrapper5 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper5 input:hidden").detach();
            $("#wrapper5 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper5 form");
            $("#wrapper5 input:text").focus()
        });
        $("#baidu5").click(function() {
            $("#wrapper5 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper5 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper5 form");
            $("#engines5").fadeToggle("fast", "circEaseOut");
            $("#wrapper5 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper5 input:text").focus()
        })
    }
    if (G > 5) {
        $("#search-engine6").click(function() {
            $("#engines6").fadeToggle("fast", "circEaseOut");
            $("#wrapper6 input:text").css("background", "#fff")
        });
        $("#google6").click(function() {
            $("#wrapper6 form").attr("action", "http://www.google.com/search");
            $("#engines6").fadeToggle("fast", "circEaseOut");
            $("#wrapper6 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper6 input:hidden").detach();
            $("#wrapper6 input:first").attr("name", "q");
            $("#wrapper6 input:text").focus()
        });
        $("#bing6").click(function() {
            $("#wrapper6 form").attr("action", "http://www.bing.com/search");
            $("#engines6").fadeToggle("fast", "circEaseOut");
            $("#wrapper6 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper6 input:hidden").detach();
            $("#wrapper6 input:first").attr("name", "q");
            $("#wrapper6 input:text").focus()
        });
        $("#sogou6").click(function() {
            $("#wrapper6 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines6").fadeToggle("fast", "circEaseOut");
            $("#wrapper6 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper6 input:hidden").detach();
            $("#wrapper6 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper6 form");
            $("#wrapper6 input:text").focus()
        });
        $("#baidu6").click(function() {
            $("#wrapper6 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper6 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper6 form");
            $("#engines6").fadeToggle("fast", "circEaseOut");
            $("#wrapper6 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper6 input:text").focus()
        })
    }
    if (G > 6) {
        $("#search-engine7").click(function() {
            $("#engines7").fadeToggle("fast", "circEaseOut");
            $("#wrapper7 input:text").css("background", "#fff")
        });
        $("#google7").click(function() {
            $("#wrapper7 form").attr("action", "http://www.google.com/search");
            $("#engines7").fadeToggle("fast", "circEaseOut");
            $("#wrapper7 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper7 input:hidden").detach();
            $("#wrapper7 input:first").attr("name", "q");
            $("#wrapper7 input:text").focus()
        });
        $("#bing7").click(function() {
            $("#wrapper7 form").attr("action", "http://www.bing.com/search");
            $("#engines7").fadeToggle("fast", "circEaseOut");
            $("#wrapper7 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper7 input:hidden").detach();
            $("#wrapper7 input:first").attr("name", "q");
            $("#wrapper7 input:text").focus()
        });
        $("#sogou7").click(function() {
            $("#wrapper7 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines7").fadeToggle("fast", "circEaseOut");
            $("#wrapper7 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper7 input:hidden").detach();
            $("#wrapper7 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper7 form");
            $("#wrapper7 input:text").focus()
        });
        $("#baidu7").click(function() {
            $("#wrapper7 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper7 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper7 form");
            $("#engines7").fadeToggle("fast", "circEaseOut");
            $("#wrapper7 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper7 input:text").focus()
        })
    }
    if (G > 7) {
        $("#search-engine8").click(function() {
            $("#engines8").fadeToggle("fast", "circEaseOut");
            $("#wrapper8 input:text").css("background", "#fff")
        });
        $("#google8").click(function() {
            $("#wrapper8 form").attr("action", "http://www.google.com/search");
            $("#engines8").fadeToggle("fast", "circEaseOut");
            $("#wrapper8 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper8 input:hidden").detach();
            $("#wrapper8 input:first").attr("name", "q");
            $("#wrapper8 input:text").focus()
        });
        $("#bing8").click(function() {
            $("#wrapper8 form").attr("action", "http://www.bing.com/search");
            $("#engines8").fadeToggle("fast", "circEaseOut");
            $("#wrapper8 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper8 input:hidden").detach();
            $("#wrapper8 input:first").attr("name", "q");
            $("#wrapper8 input:text").focus()
        });
        $("#sogou8").click(function() {
            $("#wrapper8 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines8").fadeToggle("fast", "circEaseOut");
            $("#wrapper8 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper8 input:hidden").detach();
            $("#wrapper8 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper8 form");
            $("#wrapper8 input:text").focus()
        });
        $("#baidu8").click(function() {
            $("#wrapper8 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper8 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper8 form");
            $("#engines8").fadeToggle("fast", "circEaseOut");
            $("#wrapper8 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper8 input:text").focus()
        })
    }
    if (G > 8) {
        $("#search-engine9").click(function() {
            $("#engines9").fadeToggle("fast", "circEaseOut");
            $("#wrapper9 input:text").css("background", "#fff")
        });
        $("#google9").click(function() {
            $("#wrapper9 form").attr("action", "http://www.google.com/search");
            $("#engines9").fadeToggle("fast", "circEaseOut");
            $("#wrapper9 input:text").css("background", "#fff url(lib/google-back.png) center right no-repeat");
            $("#wrapper9 input:hidden").detach();
            $("#wrapper9 input:first").attr("name", "q");
            $("#wrapper9 input:text").focus()
        });
        $("#bing9").click(function() {
            $("#wrapper9 form").attr("action", "http://www.bing.com/search");
            $("#engines9").fadeToggle("fast", "circEaseOut");
            $("#wrapper9 input:text").css("background", "#fff url(lib/bing-back.png) center right no-repeat");
            $("#wrapper9 input:hidden").detach();
            $("#wrapper9 input:first").attr("name", "q");
            $("#wrapper9 input:text").focus()
        });
        $("#sogou9").click(function() {
            $("#wrapper9 form").attr("action", "https://www.sogou.com/sogou");
            $("#engines9").fadeToggle("fast", "circEaseOut");
            $("#wrapper9 input:text").css("background", "#fff url(lib/sogou-back.png) center right no-repeat");
            $("#wrapper9 input:hidden").detach();
            $("#wrapper9 input:first").attr("name", "query");
            $('<input type="hidden" name="pid" value="sogou-netb-3be0214185d6177a-5154" />').appendTo("#wrapper9 form");
            $("#wrapper9 input:text").focus()
        });
        $("#baidu9").click(function() {
            $("#wrapper9 form").attr("action", "http://www.baidu.com/s");
            $("#wrapper9 input:first").attr("name", "wd");
            $('<input type="hidden" name="tn" value="divencheng_pg" />').appendTo("#wrapper9 form");
            $("#engines9").fadeToggle("fast", "circEaseOut");
            $("#wrapper9 input:text").css("background", "#fff url(lib/baidu-back.png) center right no-repeat");
            $("#wrapper9 input:text").focus()
        })
    }
    if (G < 9) {
        $("#name9").detach();
        $("#wrapper9").detach();
        $("#button8to9").detach();
        $("#button9to8").detach()
    }
    if (G < 8) {
        $("#name8").detach();
        $("#wrapper8").detach();
        $("#button7to8").detach();
        $("#button8to7").detach()
    }
    if (G < 7) {
        $("#name7").detach();
        $("#wrapper7").detach();
        $("#button6to7").detach();
        $("#button7to6").detach()
    }
    if (G < 6) {
        $("#name6").detach();
        $("#wrapper6").detach();
        $("#button5to6").detach();
        $("#button6to5").detach()
    }
    if (G < 5) {
        $("#name5").detach();
        $("#wrapper5").detach();
        $("#button4to5").detach();
        $("#button5to4").detach()
    }
    if (G < 4) {
        $("#name4").detach();
        $("#wrapper4").detach();
        $("#button3to4").detach();
        $("#button4to3").detach()
    }
    if (G < 3) {
        $("#name3").detach();
        $("#wrapper3").detach();
        $("#button2to3").detach();
        $("#button3to2").detach()
    }
    if (G < 2) {
        $("#name2").detach();
        $("#wrapper2").detach();
        $("#button1to2").detach();
        $("#button2to1").detach()
    }
});
var hoverEffect = true;
var searchEngine = "sogou";
var numberOfScreens = 9;
var blockName = new Array();
blockName[1] = "常用";
blockName[2] = "购物";
blockName[3] = "消遣";
blockName[4] = "发现";
blockName[5] = "生活";
blockName[6] = "程序";
blockName[7] = "设计";
blockName[8] = "旅游";
blockName[9] = "资源";
var bookmark = new Array();
bookmark[0] = new Array();
bookmark[1] = new Array();
bookmark[2] = new Array();
bookmark[3] = new Array();
bookmark[4] = new Array();
bookmark[5] = new Array();
bookmark[6] = new Array();
bookmark[7] = new Array();
bookmark[8] = new Array();
bookmark[9] = new Array();
bookmark[0][0] = {
    title: "网易",
    url: "http://www.163.com",
    thumb: "163.png"
};
bookmark[0][1] = {
    title: "腾讯网",
    url: "http://www.qq.com/",
    thumb: "qq.png"
};
bookmark[0][2] = {
    title: "搜狐",
    url: "http://www.sohu.com",
    thumb: "sohu.png"
};
bookmark[0][3] = {
    title: "新浪网",
    url: "http://www.sina.com.cn/",
    thumb: "sina.png"
};
bookmark[0][4] = {
    title: "豆瓣",
    url: "http://www.douban.com",
    thumb: "douban.png"
};
bookmark[0][5] = {
    title: "新浪微博",
    url: "http://weibo.com/?c=spr_web_sq_6164_weibo_t001",
    thumb: "weibo.png"
};
bookmark[0][6] = {
    title: "人人网",
    url: "http://www.renren.com",
    thumb: "renren.png"
};
bookmark[0][7] = {
    title: "央视网",
    url: "http://www.cctv.com",
    thumb: "cctv.png"
};
bookmark[0][8] = {
    title: "QQ空间",
    url: "http://qzone.qq.com",
    thumb: "qzone.png"
};
bookmark[0][9] = {
    title: "优酷",
    url: "http://www.youku.com",
    thumb: "youku.png"
};
bookmark[0][10] = {
    title: "凤凰网",
    url: "https://www.ifeng.com",
    thumb: "ifeng.png"
};
bookmark[0][11] = {
    title: "3399小游戏",
    url: "http://www.3399.com/?fr=10009-1",
    thumb: "3399.png"
};
bookmark[1][0] = {
    title: "苏宁",
    url: "http://p.yiqifa.com/n?k=PPbKCNbvrI6H6N3OWcLErI6H2mLErnD76NyH1nDF6NW7rn2F6EDerI6HkQLErnBw6N6bME69rIW-&e=win8&t=http://www.suning.com/",
    thumb: "suning.png"
};
bookmark[1][1] = {
    title: "聚美优品",
    url: "http://p.yiqifa.com/n?k=2mLErntL6n3SrI6H2mLErI6H6N2S6mLF6nzsWlgH6Nt76NMHYO6BP5DqrZyH2mq81NywMJtl6QLE&e=win8&t=http://www.jumei.com/",
    thumb: "51buy.png"
};
bookmark[1][2] = {
    title: "一号店",
    url: "http://p.yiqifa.com/n?k=2mLErnzLWcLErI6H2mqTCKscPNyHWNWernz71nKl6ZLq6NBH2mqerI6H6ltLMnyw6nXH2L--&e=win8&t=http://www.yhd.com/",
    thumb: "yihaodian.png"
};
bookmark[1][3] = {
    title: "唯品会",
    url: "http://p.yiqifa.com/n?k=Un4MMw3erI6HWEzFWcLErI6H2mLErnDLWNbH1nDF6NW7rn2q6lKFrI6HkQLErnP8M9BEWOKlrIW-&e=win8&t=http://www.vip.com",
    thumb: "vipshop.png"
};
bookmark[1][4] = {
    title: "当当",
    url: "http://p.yiqifa.com/n?k=2mLErnts1QLErI6H2mLErn276mLF6nzsWlgH6E2mrI6HkQLErnDS6NWOW5BbrJb1NlPZpcL-&e=win8&t=http://www.dangdang.com",
    thumb: "dangdang.png"
};
bookmark[1][5] = {
    title: "京东",
    url: "http://p.yiqifa.com/n?k=UNycCEg6rI6HWN3LrI6H2mLErI6HWEK7rnz71nKl6ZLO6nUH2mqerI6H1NKO6EDm6lMH2L--&e=win8&t=http://www.jd.com/",
    thumb: "360buy.png"
};
bookmark[1][6] = {
    title: "国美在线",
    url: "http://p.yiqifa.com/n?k=M7PKYQ4CrI6HWNDeWE4H2mLErI6H2mLs6NRernz71nKl6ZLm6EwqWmLErZyH2mLSWnKlWnwm6QLE&e=win8&t=http://www.gome.com.cn",
    thumb: "amazon.png"
};
bookmark[1][7] = {
    title: "网酒网",
    url: "http://p.yiqifa.com/n?k=PQBw6s6drI6HWE3S6E6H2mLErI6H2mLmWntlrnz71nKl6ZLl6EzqWNPH2mqerI6H1ntsMnzL1NgH2L--&e=win8&t=http://www.wangjiu.com",
    thumb: "vancl.png"
};
bookmark[1][8] = {
    title: "名鞋库",
    url: "http://p.yiqifa.com/n?k=2mLErnDq6E4H2mLErI6H3EB9KsbsrnDq6NMH1nDF6NW7rn2OWnjFrI6HkQLErnDm3EPEW527rIW-&e=win8&t=http://www.s.cn",
    thumb: "okbuy.png"
};
bookmark[1][9] = {
    title: "顺丰优选",
    url: "http://p.yiqifa.com/n?k=2mLErn2S6l3SrI6H2mLErJ4m5telpmLO6ltSrnz71nKl6ZLq6lKL1NgH2mqerI6HMnUyWO2l1NbH2L--&e=win8&t=http://www.sfbest.com/",
    thumb: "taobao.png"
};
bookmark[1][10] = {
    title: "天猫",
    url: "http://www.tmall.com/",
    thumb: "tmall.png"
};
bookmark[1][11] = {
    title: "梦芭莎",
    url: "http://p.yiqifa.com/n?k=2mLErn2L6nzlrI6H2mLErI6HWEwFrnz71nKl6ZLmWnbH2mqerI6HWJtOMnUwMJ6H6JMSKEU_rj--&e=win8&t=http://www.moonbasa.com",
    thumb: "moonbasa.png"
};
bookmark[2][0] = {
    title: "花瓣网",
    url: "http://huaban.com/",
    thumb: "huaban.png"
};
bookmark[2][1] = {
    title: "音悦Tai",
    url: "http://www.yinyuetai.com/",
    thumb: "yinyuetai.png"
};
bookmark[2][2] = {
    title: "豆瓣电台",
    url: "http://douban.fm/",
    thumb: "doubanfm.png"
};
bookmark[2][3] = {
    title: "悦读FM",
    url: "http://yuedu.fm/",
    thumb: "yuedu.png"
};
bookmark[2][4] = {
    title: "网易公开课",
    url: "http://open.163.com",
    thumb: "open.png"
};
bookmark[2][5] = {
    title: "斗鱼直播",
    url: "http://www.douyu.com/",
    thumb: "kxt.png"
};
bookmark[2][6] = {
    title: "瘾科技",
    url: "http://cn.engadget.com/",
    thumb: "engadget.png"
};
bookmark[2][7] = {
    title: "时光电影",
    url: "http://www.mtime.com/",
    thumb: "mtime.png"
};
bookmark[2][8] = {
    title: "糗事百科",
    url: "http://www.qiushibaike.com/",
    thumb: "qiushibaike.png"
};
bookmark[2][9] = {
    title: "周公解梦",
    url: "http://www.jiemeng8.com/",
    thumb: "book.png"
};
bookmark[2][10] = {
    title: "TOPIT.ME",
    url: "http://topit.me/",
    thumb: "topit.png"
};
bookmark[2][11] = {
    title: "个性签名",
    url: "http://www.17qq.com/",
    thumb: "vmovier.png"
};
bookmark[3][0] = {
    title: "知乎",
    url: "http://www.zhihu.com/",
    thumb: "zhihu.png"
};
bookmark[3][1] = {
    title: "煎蛋",
    url: "http://jandan.net/",
    thumb: "jandan.png"
};
bookmark[3][2] = {
    title: "网名大全",
    url: "http://www.qqwangming.org/",
    thumb: "ikeepu.png"
};
bookmark[3][3] = {
    title: "微盘",
    url: "http://vdisk.me/",
    thumb: "vdisk.png"
};
bookmark[3][4] = {
    title: "做梦网",
    url: "http://www.domeng.cn/",
    thumb: "m360.png"
};
bookmark[3][5] = {
    title: "趣玩",
    url: "http://p.yiqifa.com/n?k=2mLErntl6E4H2mLErI6H2mLq1njLrnz71nKl6ZLF1NwerZMKUtg2gcqerI6H65WFWNjeWlyH2L--&e=win8&t=http://www.quwan.com",
    thumb: "quwan.png"
};
bookmark[3][6] = {
    title: "佑一良品",
    url: "http://p.yiqifa.com/n?k=Mt4BpmtsrI6HWNtmWn4H2mLErI6H2mLsWlwLrnz71nKl6ZLmWlzmWcLErZyH2mqEWEyw3E6E6QLE&e=win8&t=http://www.uiyi.cn",
    thumb: "uiyi.png"
};
bookmark[3][7] = {
    title: "百度文库",
    url: "http://wenku.baidu.com/",
    thumb: "wenku.png"
};
bookmark[3][8] = {
    title: "堆糖",
    url: "http://www.duitang.com/",
    thumb: "duitang.png"
};
bookmark[3][9] = {
    title: "巨有趣",
    url: "http://www.juyouqu.com/",
    thumb: "juyouqu.png"
};
bookmark[3][10] = {
    title: "蘑菇街",
    url: "http://www.mogujie.com/trade/click?c=19&u=12gkkr4&t=http%3A%2F%2Fwww.mogujie.com",
    thumb: "mogujie.png"
};
bookmark[3][11] = {
    title: "美丽说",
    url: "http://www.meilishuo.com/welcome?frm=NM_s10094",
    thumb: "meilishuo.png"
};
bookmark[4][0] = {
    title: "聚划算",
    url: "http://s.click.taobao.com/t?e=zGU34CA7K%2BPkqB05%2Bm7rfGKas1PIKp0U37pZuBotzOg7OjeU9mIWS5%2B5UROBz6sq4fiHePnGhf6UrWuOtfD2G6QGcAHIXpjhEtESpuqsRo0a&pid=mm_16596268_4688103_15820839",
    thumb: "juhuasuan.png"
};
bookmark[4][1] = {
    title: "豆果美食",
    url: "http://www.douguo.com/",
    thumb: "douguo.png"
};
bookmark[4][2] = {
    title: "百姓网",
    url: "http://www.baixing.com/",
    thumb: "baixing.png"
};
bookmark[4][3] = {
    title: "口碑网",
    url: "http://www.koubei.com/",
    thumb: "koubei.png"
};
bookmark[4][4] = {
    title: "58同城",
    url: "http://www.58.com/",
    thumb: "58.png"
};
bookmark[4][5] = {
    title: "赶集网",
    url: "http://www.ganji.com/",
    thumb: "ganji.png"
};
bookmark[4][6] = {
    title: "下厨房",
    url: "http://www.xiachufang.com",
    thumb: "xiachufang.png"
};
bookmark[4][7] = {
    title: "百度糯米",
    url: "http://p.yiqifa.com/n?k=2mLErntm6njSrI6H2mLErI6H6E2S6cLF6nzsWlgH1N3L6nUHWZgPR5MTrZyH2mLl1NBEMn3lWcLE&e=win8&t=http://www.nuomi.com/",
    thumb: "meituan.png"
};
bookmark[4][8] = {
    title: "前程无忧",
    url: "http://www.51job.com/",
    thumb: "51job.png"
};
bookmark[4][9] = {
    title: "智联招聘",
    url: "http://www.zhaopin.com/",
    thumb: "zhaopin.png"
};
bookmark[4][10] = {
    title: "金象网",
    url: "http://p.yiqifa.com/n?k=2mLErn2S6QLErI6H2mLErnWL6QLF6nzsWlgH6lt7rZDFYmuONZqerI6H6O6w152F6JBH2L--&e=win8&t=http://www.jxdyf.com",
    thumb: "jxdyf.png"
};
bookmark[4][11] = {
    title: "大众点评网",
    url: "http://www.dianping.com/",
    thumb: "dianping.png"
};
bookmark[5][0] = {
    title: "ibm developerworks",
    url: "http://www.ibm.com/developerworks/cn/",
    thumb: "developerworks.png"
};
bookmark[5][1] = {
    title: "Google Code",
    url: "http://code.google.com/hosting/",
    thumb: "google-code.png"
};
bookmark[5][2] = {
    title: "蓝色理想",
    url: "http://www.blueidea.com/",
    thumb: "blueidea.png"
};
bookmark[5][3] = {
    title: "阳春非凡",
    url: "http://www.ycff.com/",
    thumb: ""
};
bookmark[5][4] = {
    title: "开源中国社区",
    url: "http://www.oschina.net/",
    thumb: "oschina.png"
};
bookmark[5][5] = {
    title: "GitHub",
    url: "https://github.com/",
    thumb: "github.png"
};
bookmark[5][6] = {
    title: "sourceforge",
    url: "http://sourceforge.net/",
    thumb: "sourceforge.png"
};
bookmark[5][7] = {
    title: "high scalability",
    url: "http://highscalability.com/",
    thumb: "highscalability.png"
};
bookmark[5][8] = {
    title: "scriptmafia",
    url: "http://www.scriptmafia.com/",
    thumb: "scriptmafia.png"
};
bookmark[5][9] = {
    title: "infoq",
    url: "http://www.infoq.com/",
    thumb: "infoq.png"
};
bookmark[5][10] = {
    title: "CSDN",
    url: "http://www.csdn.net/",
    thumb: "csdn.png"
};
bookmark[5][11] = {
    title: "BitBucket",
    url: "https://bitbucket.org/",
    thumb: "bitbucket.png"
};
bookmark[6][0] = {
    title: "myfonts",
    url: "http://www.myfonts.com/WhatTheFont/",
    thumb: "myfonts.png"
};
bookmark[6][1] = {
    title: "365PSD",
    url: "http://365psd.com/",
    thumb: "365psd.png"
};
bookmark[6][2] = {
    title: "icon finder",
    url: "http://www.iconfinder.com/",
    thumb: "iconfinder.png"
};
bookmark[6][3] = {
    title: "ucdChina",
    url: "http://www.ucdchina.com/",
    thumb: "ucdchina.png"
};
bookmark[6][4] = {
    title: "猪八戒",
    url: "http://www.zhubajie.com/",
    thumb: "zhubajie.png"
};
bookmark[6][5] = {
    title: "dribbble",
    url: "http://dribbble.com/",
    thumb: "dribbble.png"
};
bookmark[6][6] = {
    title: "500px",
    url: "http://500px.com/",
    thumb: "500px.png"
};
bookmark[6][7] = {
    title: "设计共和国",
    url: "http://www.rologo.com/",
    thumb: "rologo.png"
};
bookmark[6][8] = {
    title: "设计日报",
    url: "http://www.designdaily.cn/",
    thumb: "designdaily.png"
};
bookmark[6][9] = {
    title: "deviantart",
    url: "http://www.deviantart.com/",
    thumb: "deviantart.png"
};
bookmark[6][10] = {
    title: "全球设计精选站",
    url: "http://designlol.net/",
    thumb: "designlol.png"
};
bookmark[6][11] = {
    title: "where we design",
    url: "http://wherewedesign.com/",
    thumb: "wherewedesign.png"
};
bookmark[7][0] = {
    title: "淘宝旅行",
    url: "https://www.alitrip.com/",
    thumb: "taobaotrip.png"
};
bookmark[7][1] = {
    title: "7天连锁酒店",
    url: "http://www.7daysinn.cn",
    thumb: "7daysinn.png"
};
bookmark[7][2] = {
    title: "悠哉旅游网",
    url: "http://p.yiqifa.com/n?k=k5MvKsy!rI6HWNWl6E4H2mLErI6H2mLs6N2Frnz71nKl6ZLm6NwF6cLErZyH2mLsM5W73l481QLE&e=win8&t=http://www.uzai.com",
    thumb: "uzai.png"
};
bookmark[7][3] = {
    title: "穷游网",
    url: "http://p.yiqifa.com/n?k=37yxWsgMrI6H6nWqWlPH2mLErI6H2mLq1nKS6cLF6nzsWlgH6NDl1nwmrI6HkQLErnD76njq6lKSrIW-&e=win8&t=http://www.qyer.com",
    thumb: "kuxun.png"
};
bookmark[7][4] = {
    title: "携程",
    url: "http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=1210&sid=1393&OUID=&jumpUrl=http://www.ctrip.com",
    thumb: "ctrip.png"
};
bookmark[7][5] = {
    title: "驴妈妈",
    url: "http://p.yiqifa.com/n?k=2mLErntO6l2SrI6H2mLErtzeYZ2L6ZLs6lDLrnz71nKl6ZLFWn2q6ZLErZyH2mqb6NKF3lRqMZLE&e=win8&t=http://www.lvmama.com",
    thumb: "lvmama.png"
};
bookmark[7][6] = {
    title: "艺龙",
    url: "http://p.yiqifa.com/n?k=2mLErn2s1nDSrI6H2mLErI6HWEROrnz71nKl6ZLmWlBHKKVpgK6ErZyH2mLeWlj76JgEWmLE&e=win8&t=http://travel.elong.com/hotel/",
    thumb: "elong.png"
};
bookmark[7][7] = {
    title: "布丁酒店连锁",
    url: "http://p.yiqifa.com/n?k=KPXODcUWrI6HWNzs6E4H2mLErI6H2mLOWlRLrnz71nKl6ZLqWnzq6nUH2mqerI6HMnDq6lDmWNBH2L--&e=win8&t=http://www.podinns.com/",
    thumb: "podinns.png"
};
bookmark[7][8] = {
    title: "去哪儿",
    url: "http://p.yiqifa.com/n?k=2mLErnDlWN37rI6H2mLErJB3KwUIRZLq1nKF6mLF6nzsWlgHWlRs6N2erI6HkQLErJ2mM9DO1NXErIW-&e=win8&t=http://www.qunar.com/",
    thumb: "zhuna.png"
};
bookmark[7][9] = {
    title: "同程网",
    url: "http://p.yiqifa.com/n?k=2mLErn2m6njSrI6H2mLErJqvp5eXpmLmWnWOrnz71nKl6ZLl1nKe6lPH2mqerI6H39gwWnK71J4H2L--&e=win8&t=http://www.ly.com",
    thumb: "17u.png"
};
bookmark[7][10] = {
    title: "铁友网",
    url: "http://www.tieyou.com/",
    thumb: "tieyou.png"
};
bookmark[7][11] = {
    title: "芒果网",
    url: "http://p.yiqifa.com/n?k=2mLErnws6n4H2mLErI6H2mLsWNtSrnz71nKl6ZLs6EwFWQq13lyICJoHkQLErJPb6OKqWNMErIW-&e=win8&t=http://www.mangocity.com/",
    thumb: "mangocity.png"
};
bookmark[8][0] = {
    title: "资源海",
    url: "http://www.ziyuanhai.com/",
    thumb: "ziyuanhai.png"
};
bookmark[8][1] = {
    title: "小众软件",
    url: "http://www.appinn.com/",
    thumb: "appinn.png"
};
bookmark[8][2] = {
    title: "杂碎后院",
    url: "http://www.zasv.com/",
    thumb: "zasv.png"
};
bookmark[8][3] = {
    title: "健康无忧",
    url: "http://www.jk51.com/",
    thumb: "jk51.png"
};
bookmark[8][4] = {
    title: "完美者论坛",
    url: "http://www.wmzhe.com/",
    thumb: "wmzhe.png"
};
bookmark[8][5] = {
    title: "verycd",
    url: "http://www.verycd.com/",
    thumb: "verycd.png"
};
bookmark[8][6] = {
    title: "要无忧网",
    url: "http://www.yao51.com/",
    thumb: "gougou.png"
};
bookmark[8][7] = {
    title: "人人影视",
    url: "http://yyets.com/",
    thumb: "yyets.png"
};
bookmark[8][8] = {
    title: "异次元软件世界",
    url: "http://www.iplaysoft.com/",
    thumb: "iplaysoft.png"
};
bookmark[8][9] = {
    title: "射手网",
    url: "http://www.shooter.cn/",
    thumb: "shooter.png"
};
bookmark[8][10] = {
    title: "远景论坛",
    url: "http://www.pcbeta.com/",
    thumb: "pcbeta.png"
};
bookmark[8][11] = {
    title: "3DM游戏网",
    url: "http://bbs.3dmgame.com/",
    thumb: "3dmgame.png"
};
