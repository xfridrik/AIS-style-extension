window.onload = ()=>{
    if (window.location.href.indexOf("student/list.pl") !== -1) {
        var list1 = document.querySelectorAll('table#tmtab_1');
        list1.forEach((value)=>{
            value.style.cssText = value.style.cssText+"width:93vw; min-width: 900px; max-width: 1400px;"
        })

        var list2 = document.querySelectorAll('#tmtab_1 td');
        list2.forEach((value)=>{
            value.style.cssText = value.style.cssText+"max-width: 55px; overflow: hidden; white-space: nowrap; padding: 3px !important;"
        })
        var list3 = document.querySelectorAll('#tmtab_1 th');
        list3.forEach((value)=>{
            value.style.cssText = value.style.cssText + "overflow: hidden;"
        })
       
    }
};