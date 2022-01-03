window.onload = ()=>{
    if (window.location.href.indexOf("student/list.pl") !== -1) {
        var list1 = document.querySelectorAll('table#tmtab_1');
        list1.forEach((value)=>{
            value.style.cssText = "display: block;width: 96%;overflow-x: auto;-ms-overflow-style: -ms-autohiding-scrollbar;margin-right: auto;margin-left: auto;"
        })
    }
};