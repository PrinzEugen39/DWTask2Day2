let dataBlog = [];

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

  image = URL.createObjectURL(image[0]);

  let blog = {
    project,
    durasi,
    description,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);
  renderBlog();
};

const renderBlog = () => {
  document.getElementById("contents").innerHTML = "";
  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById(
      "contents"
    ).innerHTML += `<div class="blog-list-item">
     <div class="blog-image">
       <img src="${dataBlog[i].image}" alt="" />
     </div>
     <div class="title-content">
       <a href="blog-content.html"><p style="font-size: 32px;">${dataBlog[i].project}</p></a>
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
       <i class="fa-brands fa-google-play fa-lg"></i>
       <i class="fa-brands fa-android fa-lg"></i>
       <i class="fa-brands fa-java fa-lg"></i>
     </div>
     <div class="btn-group">
       <button class="btn-edit">Edit Post</button>
       <button class="btn-post">Delete Post</button>
     </div>
   </div>`;
  }
};

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