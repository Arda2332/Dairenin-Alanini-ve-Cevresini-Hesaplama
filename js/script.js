//fonksiyonu tanımladık.
function hesapla(){
    //text kutusu içindeki değeri okuyup sayi değişkenine aktarıyoruz.
    var sayi=document.getElementById("kenar").value;
     
    //text kutusuna girilen değerler metinsel türdedir. Hesaplama yapabilmek için sayıya çeviriyoruz.
    yaricap=Number(sayi);
     
    var alan=3.14*yaricap*yaricap;
    var cevre=2*3.14*yaricap;
    alert("Dairenin alanı:"+alan+" \n Dairenin çevresi:"+cevre);
     
    }
     
    //hesaplama yapması için hesap butonunu seçiyoruz.
    var hesapBtn=document.getElementById("hesapla");
     
    //fonksiyonu olaya bağlıyoruz.
    hesapBtn.onclick=hesapla;