const a=document.getElementById("btn_toggle_navbar"),e=document.getElementById("item_navbar_links"),o=document.getElementById("btn_toggle_navbar_svg_close"),g=document.getElementById("btn_toggle_navbar_svg_open"),s=document.getElementById("header_navbar");let l=window.pageYOffset;function t(){o.classList.toggle("hidden"),g.classList.toggle("hidden"),e.classList.toggle("hidden"),e.classList.toggle("flex"),e.classList.contains("hidden")===!1?e.addEventListener("click",t):e.removeEventListener("click",t)}a.addEventListener("click",t);window.onscroll=function(){let n=window.pageYOffset;o.classList.contains("hidden")!==!1&&(l>n?s.style.top="0":s.style.top="-5rem",l=n)};
