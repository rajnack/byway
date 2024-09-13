window.addEventListener("load", function () {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const userList = document.getElementById("userList");
      console.log(data);

      data.users.forEach((user) => {
        userList.innerHTML += `
        <div class="card-item swiper-slide">
         <a href="#"><img src="assets/icons/quotes.svg" alt="Quote" /></a>
            <h5>${user.description}</h5>
            <div class="bottom-end">
                <span><a href="#"><img src="${user.image}" alt="Profile" /></a></span>
                <ul>
                    <li>${user.name}</li>
                    <li>${user.profession}</li>
                </ul>
            </div>
        </div>
        `;
      });
    })
    .catch((error) => {
      console.error("Error fetching the data:", error);
    });
});

document.querySelectorAll(".card-photo").forEach((photo) => {
  photo.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const card = this.closest(".card"); // Find the closest card
    const Deatails = card.getAttribute("data-page"); // Get the page URL from data-page

    if (Deatails) {
      window.location.href = Deatails; // Redirect to the target page
    } else {
      console.error("Target page not specified for this card.");
    }
  });
});
