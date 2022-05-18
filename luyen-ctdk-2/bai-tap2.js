// bài 1
function bai1 () {
    let a1=document.getElementById("ndc").value
    let cd= ( ( a1 * 9 ) / 5 ) +32
    document.getElementById("b1").value= cd
}



//bài 2
function bai2 () {
    let a2 = document.getElementById("met2").value
    let cd2 = a2 * 3.2808

    document.getElementById("b2").value = cd2.toFixed(2)
}


//bai 3