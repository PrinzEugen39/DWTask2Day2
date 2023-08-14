let dataBlog = [];
let hasData = false;

const addBlog = (event) => {
  event.preventDefault();

  let project = document.getElementById("input-project-title").value;
  let startDate = document.getElementById("input-blog-start").value;
  let endDate = document.getElementById("input-blog-end").value;
  let input = document.querySelectorAll(".multi-input:checked");
  let description = document.getElementById("input-project-desc").value;
  let image = document.getElementById("input-image").files;
  let images = document.getElementById("input-image").value;

  if (project === "") {
    return alert("Please input your project name");
  } else if (startDate === "") {
    return alert("Please fill the start date");
  } else if (endDate === "") {
    return alert("Please fill the end date");
  } else if (description === "") {
    return alert("Please fill the project description");
  } else if (input.length === 0) {
    return alert("Please choose atleast one option");
  } else if (images === "") {
    return alert("Please attach an image");
  }

  let start = new Date(startDate);
  let end = new Date(endDate);
  if (start > end) {
    return alert("End date should be greater than start date");
  }

  let waktu = end.getTime() - start.getTime();
  console.log(waktu);
  let hari = waktu / (1000 * 3600 * 24);
  let minggu = Math.floor(hari / 7);
  let bulan = Math.floor(minggu / 4);
  let tahun = Math.floor(bulan / 12);
  let durasi = "";

  if (hari > 0) {
    durasi = hari + " Hari";
  }
  if (minggu > 0) {
    durasi = minggu + " Minggu";
  }
  if (bulan > 0) {
    durasi = bulan + " Bulan";
  }
  if (tahun > 0) {
    durasi = tahun + " Tahun";
  }

  const NodeJsIcon = '<i class="fa-brands fa-node fa-2x"></i>';
  const ReactJsicon = '<i class="fa-brands fa-react fa-2x"></i>';
  const JSIcon = '<i class="fa-brands fa-square-js fa-2x"></i>';
  const htmlicon = '<i class="fa-brands fa-html5 fa-2x"></i>';

  let nodeJs = document.getElementById("cek1").checked ? NodeJsIcon : "";
  let reactJs = document.getElementById("cek2").checked ? ReactJsicon : "";
  let JS = document.getElementById("cek3").checked ? JSIcon : "";
  let htmll = document.getElementById("cek4").checked ? htmlicon : "";
  image = URL.createObjectURL(image[0]);

  let blog = {
    project,
    durasi,
    description,
    postAt: new Date(),
    image,
    nodeJs,
    reactJs,
    JS,
    htmll,
  };

  dataBlog.push(blog);
  hasData = true;
  renderBlog();
};

const renderBlog = () => {
  if (!hasData) {
    return;
  }
  document.getElementById("contents").innerHTML = "";
  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById(
      "contents"
    ).innerHTML += `<div class="blog-list-item">
     <div class="blog-image">
       <img src="${dataBlog[i].image}" alt="" />
     </div>
     <div class="title-content">
       <a href="blog-content.html"><p style="font-size: 32px;">${
         dataBlog[i].project
       }</p></a>
       <p style="font-size: 20px;">Durasi: ${dataBlog[i].durasi}</p>
     </div>
     <div class="blog-content">
       <h1>
         <p>
            ${dataBlog[i].description}
         </p>
       </h1>
     </div>
     <div class="logo">
       ${dataBlog[i].nodeJs}
       ${dataBlog[i].reactJs}
       ${dataBlog[i].JS}
       ${dataBlog[i].htmll}
     </div>
     <p>diposting sejak : ${getDistance(dataBlog[i].postAt)}</p>
     <div class="btn-group">
       <button class="btn-edit">Edit Post</button>
       <button class="btn-post">Delete Post</button>
     </div>
   </div>`;
  }
};

function getDistance(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;

  let milisecond = 1000;
  let secondInHours = 3600;
  let hoursInDays = 24;

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSecond = Math.floor(distance / milisecond);

  if (distanceSecond <= 60) {
    return `${distanceSecond} seconds ago`;
  } else if (distanceSecond > 60) {
    return `${distanceMinutes} minutes ` + `${distanceSecond} seconds ago`;
  } else if (distanceMinutes > 60) {
    return (
      `${distanceHours} hours ` +
      `${distanceMinutes} minutes ` +
      `${distanceSecond} seconds ago`
    );
  } else if (distanceHours > 24) {
    return (
      `${distanceDay} days ` +
      `${distanceHours} hours ` +
      `${distanceMinutes} minutes ` +
      `${distanceSecond} seconds ago`
    );
  }
}

setInterval(function () {
  renderBlog();
}, 1000);
// function getFullTime(time) {
// New date, mendapatkan terkait tanffal dan waktu kapan dan fungsinya dijalankan
// let time = new Date();
// console.log(time);

//   let monthName = [
//     "Januari",
//     "Februari",
//     "Maret",
//     "April ",
//     "May",
//     "Juni",
//     "Juli",
//     "August",
//     "September",
//     "Oktober",
//     "November",
//     "Desember",
//   ];

//   let date = time.getDate();
//   let monthIndex = time.getMonth();
//   let year = time.getFullYear();

//   let hours = time.getHours();
//   let minutes = time.getMinutes();
//   if (hours <= 9 ) {
//     hours = "0" + hours;
//   } else if (minutes <= 9 ) {
//     minutes = "0" + minutes;
//   }

// return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes}`;

// }
// getFullTime();

// // Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr);

// console.log(arr.length);

// let nama = "habib";
// let alamat = "Surabaya";
// let umur = "21";

// let dataPersonal1 = {
//     nama : "Rahul",
//     alamat : "Jakarta",
//     umur : "22",
// };
// let dataPersonal2 = {
//     nama : "Qemal",
//     alamat : "Depok",
//     umur : "31",
// };
// let dataPersonal3 = {
//     nama : "Oji",
//     alamat : "Kukusa",
//     umur : "21",
// };

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3.nama);

// let namaSiswa = [12, 19, "suryan", "Farhan"];
// console.log(namaSiswa);
// console.log(namaSiswa[0]);

// // Array of objects
// let dataTeman = [
//     {
//         nama : "Oji",
//         alamat : "Kukusa",
//         umur : "21",
//     },
//     {
//         nama : "Qemal",
//         alamat : "Depok",
//         umur : "31",
//     },
//     {
//         nama : "Rahul",
//         alamat : "Jakarta",
//         umur : "22",
//     }
// ];
// console.log(dataTeman);

// let data = []

// function addData() {
//     let person = {
//         nama : "Maul",
//         alamat : "Bandung",
//         umur : 24,
//     }
//     // fungsi push adalah memasukkan data baru kedalam sebuah array
//     data.push(person);
// }
// for (let i = 0; i < 3; i++) {
//     addData();
// }

// console.log(data);
