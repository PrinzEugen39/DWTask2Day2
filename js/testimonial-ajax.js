const testimonial_api = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.npoint.io/b0b91bbf5e1064fde0f3", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading JSON");
    }
  };
  xhr.onerror = function () {
    reject("Network Error");
  };
  xhr.send();
});

async function allTestimonials() {
  try {
    const response = await testimonial_api;
    console.log(response);

    let testimonialHTML = "";

    response.forEach((item) => {
      
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
  } catch (err) {
    console.log(err);
  }
}

allTestimonials();

async function filterTestimonials(rating) {
  try {
    const response = await testimonial_api;
    let testimonialHTML = "";

    const testimonialFiltered = response.filter(function (item) {
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
  } catch (err) {
    console.log(err);
  }
}
