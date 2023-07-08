// BÀI 1

document.getElementById("btn1").onclick = function () {
  var n = 1;
  var i = 0;
  while (n < 10000) {
    i++;
    n += i;
    document.getElementById(
      "ketqua1"
    ).innerHTML = `Số nguyên dương nhỏ nhất:${i}`;
  }
};
// BÀI2
document.getElementById("tinhtong2").onclick = function () {
  var x = document.getElementById("nhapx").value * 1;
  var p = document.getElementById("nhapp").value * 1;
  var t = 1;
  var s = 0;
  var a = 1;
  while (a <= p) {
    t *= x;
    s += t;
    a++;
  }
  document.getElementById("ketqua2").innerHTML = s;
};
// BÀI 3
document.getElementById("btn3").onclick = function () {
  var number3 = document.getElementById("nhapn3").value * 1;
  var ketQua3 = 1;
  var b = 1;
  while (b <= number3) {
    ketQua3 *= b;
    b++;
  }
  document.getElementById("ketqua3").innerHTML = ketQua3;
};

// Bài 4
document.getElementById("taothediv").onclick = function () {
  var k = 1;
  var div = "";
  var divChan = 0;
  var divLe = 0;
  for (k = 1; k <= 10; k++) {
    if (k % 2 == 0) {
      divChan = ` <div class="bg-danger text-white">Div chẵn:${k}</div>
      `;
      div += divChan;
    } else {
      divLe = ` <div class="bg-primary text-white">Div lẻ:${k} </div>`;
      div += divLe;
    }
  }
  document.getElementById("ketqua4").innerHTML = div;
};
