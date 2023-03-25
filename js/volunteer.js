document.getElementById("form").addEventListener("submit", function(e){
  e. preventDefault();

  let fname = document.getElementById("fname"); //text
  let lname = document.getElementById("lname"); //text
  let tanggal = document.getElementById("tanggal"); //selectbox
  let bulan = document.getElementById("bulan"); //selectbox
  let tahun = document.getElementById("tahun"); //selectbox
  let kelamin; //radiobox
  //kelamin
   if(document.getElementById("L").checked){
      kelamin = document.getElementById("L").value;
   } else {
    kelamin = document.getElementById("P").value;
   }
  let nomor = document.getElementById("nomor"); //nomor
  let email = document.getElementById("email"); //email
  let alamat = document.getElementById("alamat"); //textarea
  let Lang = document.getElementsByName("Lang"); //checkbox
  let tangapan = document.getElementById("tanggapan"); //textarea
  let pilihan; //chckbox
  if(document.getElementById("ya").checked){
    pilihan = document.getElementById("ya").value;
} else {
  pilihan = document.getElementById("tidak").value;
}
  let alasan = document.getElementById("alasan"); //textarea
  let lainnya = document.getElementById("lainnya"); //text
  let tanya = document.getElementById("tanya"); //textarea

 

  // let arrlang =[];

  let arrlang =[];
  //pengalaman
  for (let i = 0; i < Lang.length; i++){
    if (Lang[i].checked == true){
      arrlang.push(Lang[i].value);
}}

  let fnameValue = fname.value.trim();
  let lnameValue = lname.value.trim();
  let tanggalValue = tanggal.value.trim();
  let bulanValue = bulan.value.trim();
  let tahunValue = tahun.value.trim();
  let kelaminValue = kelamin.trim()
  let nomorValue = nomor.value.trim();
  let emailValue = email.value.trim();
  let alamatValue = alamat.value.trim();
  let tanggapanValue = tangapan.value.trim();
  let pilihanValue = pilihan.trim();
  let alasanValue = alasan.value.trim();
  let lainnyaValue = lainnya.value.trim(); 
  let tanyaValue = tanya.value.trim();

  //object
  let info = {
    fname : fnameValue,
    lname : lnameValue,
    tanggal : tanggalValue,
    bulan : bulanValue,
    tahun : tahunValue,
    kelamin : kelaminValue,
    nomor : nomorValue,
    Lang : arrlang,
    lainnya : lainnyaValue,
    email : emailValue,
    alamat : alamatValue,
    tanggapan : tanggapanValue,
    pilihan : pilihanValue,
    alasan : alasanValue,
    tanya : tanyaValue
};

  sessionStorage.setItem("info", JSON.stringify(info));
});

document.getElementById("tampil").addEventListener("click", function(e){
  e. preventDefault();

  let x = sessionStorage.getItem("info");

  x =JSON.parse(x);


  document.getElementById("getfname").innerHTML = x.fname 
  document.getElementById("getlname").innerHTML = x.lname
  document.getElementById("gettanggal").innerHTML = x.tanggal
  document.getElementById("getbulan").innerHTML = x.bulan
  document.getElementById("gettahun").innerHTML = x.tahun
  document.getElementById("getkelamin").innerHTML = x.kelamin
  document.getElementById("getlang").innerHTML = x.Lang
  document.getElementById("getlainnya").innerHTML = x.lainnya
  document.getElementById("getnomor").innerHTML = x.nomor
  document.getElementById("getemail").innerHTML = x.email
  document.getElementById("getalamat").innerHTML = x.alamat
  document.getElementById("gettanggapan").innerHTML = x.tanggapan
  document.getElementById("getpilihan").innerHTML = x.pilihan
  document.getElementById("getalasan").innerHTML = x.alasan
  document.getElementById("tanya").innerHTML = x.tanya
});