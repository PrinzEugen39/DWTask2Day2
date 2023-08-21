

//hof
const testimonialData = [
  {
    author: "Patchouli",
    quote: "Dont Let You DOWNNNNNNNN !!",
    image: "image/ripiuw/DONTLETYOUDOWN.png",
    rating: 5,
  },
  {
    author: "Marisa",
    quote: "Monosugoi Space Shuttle Koishi",
    image: "image/ripiuw/marisa.jpg",
    rating: 4,
  },
  {
    author: "Nanahira",
    quote: "Onegai! Kon kon O Inari-sama!",
    image: "image/ripiuw/nanahira.png",
    rating: 4,
  },
  {
    author: "Aiobahn",
    quote: "Overdosis ngab :(",
    image: "image/ripiuw/Overdose.jpg",
    rating: 1,
  },
  {
    author: "UtsuP",
    quote: "HARAKIRI",
    image: "image/ripiuw/UtsuP.png",
    rating: 2,
  },
  {
    author: "PinocchioP",
    quote: "Reincarnation Apple",
    image: "image/ripiuw/PinocchioP.jpg",
    rating: 5,
  }
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
    <div class="testimoni">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">${item.quote}</p>
      <hr>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML = `<h1>Nobody has reviewed, yet..</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
      <div class="testimoni">
        <img src="${item.image}" class="profile-testimonial" />
        <hr>
        <p class="quote">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
      </div>
      `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}