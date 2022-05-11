// bài 2
function enter() {
    let a = document.getElementById("ths").value
    if (a < 18) {
        if (a > 15) {
            document.getElementById("result").innerHTML =  "đủ tuổi đăng ký vào lớp 10"
        } else {
            document.getElementById("result").innerHTML = " không đủ tuổi đăng ký vào lớp 10"
        }
    }
        else {

        document.getElementById("result").innerHTML = "không đủ tuổi đăng ký vào lớp 10"
    }
}



//bài 3

function slsn1() {
    let b=document.getElementById("slsn").value
    let b1=parseInt("b")
    if (b1<0) {
        document.getElementById("res").innerText= "là số nhỏ hơn 0"
    }
    else {
        document.getElementById("res").innerText= "là số lớn hơn 0"
    }
}


// bài 4
function cl1() {
    let t1=document.getElementById("st1").value
    let t2=document.getElementById("st2").value
    let t3=document.getElementById("st3").value
    let max=t1
    if (max>t2 && max>t3) {
        document.getElementById("result4").innerText="số lớn nhất là" + t1
    }
    else {
        if (t2>t3) {
            document.getElementById("result4").innerText="số lớn nhất là" + t2

        }
        else {
            document.getElementById("result4").innerText="số lớn nhất là" + t3

        }
    }
}


//bài 5
function cl5() {
    let d1=document.getElementById("dt1").value
    let d2=document.getElementById("dt2").value
    let d3=document.getElementById("dt3").value
    let dtb= ( d1 + d2 + d3 ) / 3
    let dtb1=parseInt("dtb")
        if (dtb1> 8 ) {
        document.getElementById("result5").innerHTML="Đạt loại Giỏi"
         } else if (dtb1> 6.5) {
        document.getElementById("result5").innerHTML ="Đạt loại Khá"
         } else if (dtb1> 5) {
        document.getElementById("result5").innerHTML ="Đạt loại Trung bình"
         } else if (dtb1> 3.5) {
        document.getElementById("result5").innerHTML ="Đạt loại Yếu"
         } else {
        document.getElementById("result5").innerHTML ="Đạt loại Kém"

    }
}