$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(function() {
    var header = $("#header"),
        workH = $("#work").innerHeight(),
        scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if(scrollOffset >= workH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        } 
    }
});


filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filter-div");
    if (c == "all") c = "";

    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("projects__btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var time = 2, cc = 1;
$(window).scroll(function(){    
    $('#counter').each(function(){
        var
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (cPos < topWindow + 600){
            if(cc < 2) {
                $('.number').addClass('viz');
                $('div').each(function(){
                    var
                    i = 1,
                    num = $(this).data('num'),
                    step = 100 * time / num,
                    that = $(this),
                    int = setInterval(function(){
                        if (i <= num) {
                            that.html(i);
                        }
                        else {
                            cc = cc + 2;
                            clearInterval(int);
                        }
                        i++
                    },step);
                });
            }
        }
    });
});

$(document).ready(function() {
    $('.footer__post').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});