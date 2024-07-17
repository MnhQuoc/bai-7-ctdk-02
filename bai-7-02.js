function giaiptbac2() {
    let a = +document.getElementById("a").value
    let b = +document.getElementById("b").value
    let c = +document.getElementById("c").value
    var x;
    var delta;
    var x1;
    var x2;
    document.getElementById("pt").innerHTML =  "Giải phương trình: " + a + "x² +" + b +"x +"+ c + " = 0";
    if (a === 0) {
        if (b === 0) {
            document.getElementById("result").innerHTML = "a và b không thể đồng thời bằng 0 ";
        }
        else {
            x = -c/b;
            document.getElementById("result").innerHTML =  "Phương trình có 1 nghiệm là: x = " + x;
        }
    }
    else {
        delta = b*b-4*a*c
        if (delta < 0) {
            document.getElementById("result").innerHTML =  "Phương trình vô nghiệm ";
        }
        if (delta === 0) {
            x=-b/(2*a);
            document.getElementById("result").innerHTML =  "Phương trình có nghiệm kép là: x1 = x2 = " +x;
        }
        if (delta > 0) {
            x1=(-b+Math.sqrt(delta))/(2*a);
            x2=(-b-Math.sqrt(delta))/(2*a);
            document.getElementById("result").innerHTML =  "Phương trình có 2 nghiệm là: x1 = " + x1 + "; x2 = " + x2;
        }
    }

}
