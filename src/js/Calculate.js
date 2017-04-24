function calc_f1() {
    var s1 = document.getElementById("inpt_s1").value;
    var s2 = document.getElementById("inpt_s2").value;
    var z1 = document.getElementById("inpt_z1").value;
    var z2 = document.getElementById("inpt_z2").value;
    if (s1 === '' || s2 == null || z1 == null || z2 == null) {
        alert('Empty data');
        return;
    } else {
        var result = calculate_f1(s1, s2, z1, z2);
        var f1 = document.getElementById("val_f1");
        f1.value = 'F1 = ' + result + 'H';
    }
}
function calc_f2() {
    var s6 = document.getElementById("inpt_s6").value;
    var s5 = document.getElementById("inpt_s5").value;
    var z6 = document.getElementById("inpt_z6").value;
    var z5 = document.getElementById("inpt_z5").value;
    if (s6 === '' || s5 == null || z6 == null || z5 == null) {
        alert('Empty data');
        return;
    } else {
        var result = calculate_f2(s6, s5, z6, z5);
        var f2 = document.getElementById("val_f2");
        f2.value = 'F2 = ' + result + 'H';
    }
}
function calc_f3() {
    var zt = document.getElementById("inpt_zt").value;
    var s4 = document.getElementById("inpt_s4").value;
    var yt = document.getElementById("inpt_yt").value;
    var y4 = document.getElementById("inpt_y4").value;
    var s3 = document.getElementById("inpt_s3").value;
    var z3 = document.getElementById("inpt_z3").value;
    var y3 = document.getElementById("inpt_y3").value;
    var s6 = document.getElementById("inpt_s4").value;
    var s5 = document.getElementById("inpt_s4").value;
    var z6 = document.getElementById("inpt_z6").value;
    var z5 = document.getElementById("inpt_z5").value;
    var s1 = document.getElementById("inpt_s1").value;
    var s2 = document.getElementById("inpt_s2").value;
    var z1 = document.getElementById("inpt_z1").value;
    var z2 = document.getElementById("inpt_z2").value;
    if (s1 === '' || s2 == null || z1 == null || z2 == null || s6 === '' || s5 == null || z6 == null || z5 == null || zt === '' || s4 == null || yt == null || y4 == null || s3 === '' || z3 == null || y3 == null) {
        alert('Empty data');
        return;
    } else {
        var fz = calculate_f3(s1, s2, z1, z2, s6, s5, z6, z5, zt, s4, yt, y4, s3, z3, y3);
        var f3 = document.getElementById("val_f3");
        f3.value = 'F2 = ' + fz + 'H';
    }
}

function calculate_f1(s1,s2,z1,z2) {
    return ((s1 - s2) / (z2 - z1)).toFixed(2);
}

function calculate_f2(s6,s5,z6,z5) {
    return ((s6 - s5) / (z6 - z5)).toFixed(2);
}

function calculate_f3(s1, s2, z1, z2, s6, s5, z6, z5, zt, s4, yt, y4, s3, z3, y3) {
    var mx = (-s5 * (zt - z6) + s6 * (zt - z5)) / (z6 - z5);
    var my = (s1 * (zt - z2) - s2 * (zt - z1)) / (z1 - z2);
    var fx = (s1 - s2) / (z2 - z1);
    var mz = (s4 + fx * (yt - y4))
    var fy = (s6 - s5) / (z6 - z5);
    return ((s3 + fy * (zt - z3) - mx) / (yt - y3)).toFixed(2);
}