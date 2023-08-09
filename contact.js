// console.log('Hello World!');
// alert("Selamat pagi")
// document.write("Selamatoagi");

//var javascript
// var, let, const

// var gelas = "air putih"; //var bisa diubah valuenya dan bisa dideklarasikan ulang
// var gelas = "Kopi";
// console.log(gelas);

// let mangkok = "bakso"; //let bisa diubah valuenya, tetapi tidak bisa dideklarasikan ulang
// mangkok = "mie ayam";
// console.log(mangkok);

// const piring = "Nasi goreng"; //const tidak bisa diubah valuenya
// console.log(piring); //dan tidak bisa dideklarasikan ulang

// //data type
// let nama = "Habib"; //string
// let umur = 22; //number
// let punyaDuit= false; //boolean
// console.log(`nama saya ${nama} umur saya ${umur} tahun`);

// //operator
// let x = 20;
// let y = 30;
// let hasil = x + y;
// console.log(hasil);

// //condition
// if (x == y) {
//     console.log("x lebih besar dari y");
// } else {
//     console.log("x tidak sama y");
// }

// function Hello(){
//     let bil1 = 1;
//     let bil2 = 2;
//     let bil12 = bil1 + bil2;
//     console.log(bil12 );
// }
// Hello();

// function remy(i,j){
//     let result = i + j;
//     console.log(`function remy adalah ${result}`);
// }
// remy(10,20);

function submitData(){
    let name = document.getElementById("inputname").value;
    let email = document.getElementById("inputemail").value;
    let phone = document.getElementById("inputtelp").value;
    let subject = document.getElementById("inputpilih").value;
    let message = document.getElementById("inputmessage").value;

        // console.log(name);
        // console.log(email);
        // console.log(phone);
        // console.log(subject);
        // console.log(message);
        // alert("Terima kasih sudah mengisi form");
        
    let emailReceiver = "habibsan02@gmail.com";

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, hubungi saya dinomor ${phone}`;
    a.click();
    // https://mail.google.com/mail/?view=cm&fs=1&to=

    let data = {name, email, phone, subject, message};
    console.log(data);
    
}