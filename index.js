var numArray=[];
function themSo() {
    var n = document.getElementById("txt-number").value*1;timSoDuongNhoNhat
    document.getElementById("txt-number").value = "";
    numArray.push(n);
    document.getElementById("txt-mang").innerHTML=numArray;
  }
//bài 1 
  function tinhTong(){
    var sum=0;
    for(var i =0;i<numArray.length;i++){
        if(numArray[i]>0){
            sum+=numArray[i];
        }
        document.getElementById("txt-tong").innerHTML=`Tổng Dương là :  ${sum}`
    }
  }
  // bài 2 
  function demSoDuong(){
    var count = 0;
    for(var i = 0 ; i<numArray.length;i++){
        if(numArray[i]>0){
            count++;
        }
        document.getElementById("txt-dem").innerHTML=`Sô Dương Là :  ${count}`
    }
  }
  // bài 3 
  function timSoNhoNhat(){
    var min = numArray[0];
    for(var i = 0 ; i < numArray.length;i++){
      if(numArray[i] < min){
        min = numArray[i];
      }
      document.getElementById("txt-sonhonhat").innerHTML=`Số nhỏ nhất là  :  ${min}`;
    }
  }
  // bài 4 
  function timSoDuongNhoNhat(){
    var minDuong = numArray[0];
    for(var i = 0; i<numArray.length;i++){
      if(numArray[i]< minDuong&& numArray[i] > 0){
        minDuong = numArray[i];
      }
      document.getElementById("txt-soduongnhonhat").innerHTML=`Số dương nhỏ nhất là  :  ${minDuong}`;
    }
  }
  // bài 5
  function timChanCuoiCung(){
    var chanCuoi = 0;
    for(var i = 0 ; i < numArray.length;i++){
      if(numArray[i]%2==0){
        chanCuoi = numArray[i];
        document.getElementById("txt-sochancuoi").innerHTML=`Số chẳn cuối cùng là  :  ${chanCuoi}`;
      }else{
        document.getElementById("txt-sochancuoi").innerHTML=`không có giá trị chẳn :  -1`;
      }
    }
  }
//bai 6
function hoanDoi(x , y){
  var bienTam = numArray[x];
    numArray[x] = numArray[y];
    numArray[y] = bienTam;
}
function doiCho(){
  var num1= document.getElementById("txt-so1").value;
  var num2= document.getElementById("txt-so2").value;
 
  document.getElementById("txt-doicho").innerHTML=`sau khi dổi chỗ : ${numArray}`;
}

// bai7 
function sapXepTangDan(){
  for(i=0;i<numArray.length;i++){
    for(var j=i+1;j<numArray.length;j++){
      if(numArray[j]<numArray[i]){
        var x = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = x;
      }
    }
  }
  document.getElementById("txt-tangdan").innerHTML=`sau khi sắp xêp : ${numArray}`;
}
// bau 8 
function kiemTraSNT(x){
  if (x < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(x); i++) 
  if (x % i == 0) {
    return false;
  }
  return true;
}
function timSNTDauTien(){
  var x = -1;
  for ( i = 0; i < numArray.length; i++) {
    if (kiemTraSNT(numArray[i])) {
      x = numArray[i];
      break;
    }
   
  }
  document.getElementById("txt-timsnt").innerHTML=`số nguyên tố đầu tiên là : ${x}`;
}
// bai 9 
arrayNumber=[];
function themSoVer2(){
  var number = document.getElementById("txt-so").value*1;
  document.getElementById("txt-so").value = "";
  arrayNumber.push(number);
  document.getElementById("txt-mang2").innerHTML=arrayNumber ;
}
function demSoNguyen(){
  var num = 0;
  for(var i = 0; i< arrayNumber.length;i++){
    if( Number.isInteger(arrayNumber[i])){
      num++;
    }
  }
  document.getElementById("txt-demsonnguyen").innerHTML=`số nguyên là : ${num}`;
}

// bai 10
function soSanh(){
  var am = 0;
  var duong=0;
  for(var i = 0;i<numArray.length;i++){
    if(numArray[i]>0){
      duong++;
    }else{
      am++;
    }
  }
  if(am < duong){
    document.getElementById("txt-sosanh").innerHTML=`số dương > số âm`;
  }else if (am > duong){
    document.getElementById("txt-sosanh").innerHTML=`số dương < số âm`;
  }else{
    document.getElementById("txt-sosanh").innerHTML=`số dương = số âm`;
  }
}