const scrollContainer = document.getElementById("scroll-container");
const scrollLeftBtn = document.getElementById("scroll-left");
const scrollRightBtn = document.getElementById("scroll-right");

console.log("JavaScript file loaded!");


const foodItems = [
    {
        name: "Home Made Pizza",
        img: "./assets/pizza0.jpg",
        price: "₹150",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza1.jpg",
        price: "₹120",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza2.jpg",
        price: "₹180",
        deliveryTime: "30 mins",
        rating: "3.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza3.jpg",
        price: "₹200",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza4.jpg",
        price: "₹150",
        deliveryTime: "30 mins",
        rating: "4"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza5.jpg",
        price: "₹160",
        deliveryTime: "30 mins",
        rating: "4.4"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza6.jpg",
        price: "₹170",
        deliveryTime: "30 mins",
        rating: "3.8"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza7.jpg",
        price: "₹190",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza8.jpg",
        price: "₹200",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza9.jpg",
        price: "₹210",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza0.jpg",
        price: "₹220",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza1.jpg",
        price: "₹230",
        deliveryTime: "30 mins",
        rating: "3.5"
    },
];

const popularItems = [
    {
        name: "Home Made Pizza",
        img: "./assets/pizza0.jpg",
        price: "₹150",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Tandoori Chicken",
        img: "./assets/TandooriChicken.jpg",
        price: "₹120",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Chilli Chicken",
        img: "./assets/ChilliChicken.jpg",
        price: "₹180",
        deliveryTime: "30 mins",
        rating: "3.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza3.jpg",
        price: "₹200",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Tandoori Chicken",
        img: "./assets/TandooriChicken.jpg",
        price: "₹150",
        deliveryTime: "30 mins",
        rating: "4"
    },
    {
        name: "Chilli Chicken",
        img: "./assets/ChilliChicken.jpg",
        price: "₹160",
        deliveryTime: "30 mins",
        rating: "4.4"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza6.jpg",
        price: "₹170",
        deliveryTime: "30 mins",
        rating: "4.8"
    },
    {
        name: "Tandoori Chicken",
        img: "./assets/TandooriChicken.jpg",
        price: "₹190",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Chilli Chicken",
        img: "./assets/ChilliChicken.jpg",
        price: "₹200",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Home Made Pizza",
        img: "./assets/pizza9.jpg",
        price: "₹210",
        deliveryTime: "30 mins",
        rating: "4.5"
    },
    {
        name: "Tandoori Chicken",
        img: "./assets/TandooriChicken.jpg",
        price: "₹220",
        deliveryTime: "30 mins",
        rating: "4.5"
    }
]

// Populate Home Kitchen Items
const foodGrid = document.getElementById("food-grid");
foodItems.forEach(item => {
    const foodCard = document.createElement("div");
    foodCard.classList.add("food-card");
    foodCard.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div style="display: flex; justify-content: space-between;">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        </div>
        <div style="display: flex; justify-content: space-between;align-items:center;">
        <div style="display: flex; gap: 15px;align-items:baseline;">
        <p style="background:${item.rating >= 4 ? 'green' : '#FFBF00'}">☆${item.rating}</p>
        <p>${item.deliveryTime}</p>
        </div>
        <button style="height:20px">+</button>
        </div>
    `;
    foodGrid.appendChild(foodCard);
});

// Populate Horizontal Scrollable Popular Items
// const scrollContainer = document.getElementById("scroll-container");
popularItems.forEach(item => {
    const scrollItem = document.createElement("div");
    scrollItem.classList.add("scroll-item");
    scrollItem.innerHTML = `
         <img src="${item.img}" alt="${item.name}">
        <div style="display: flex; justify-content: space-between;">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        </div>
        <div style="display: flex; justify-content: space-between;align-items:center;">
        <div style="display: flex; gap: 15px;align-items:baseline;">
        <p style="background:${item.rating >= 4 ? 'green' : '#FFBF00'}">☆${item.rating}</p>
        <p>${item.deliveryTime}</p>
        </div>
        <button style="height:20px">+</button>
        </div>
    `;
    scrollContainer.appendChild(scrollItem);
});

const scrollAmount = 300;

scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += scrollAmount;
});

scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= scrollAmount;
});

// Enable Mouse Wheel Horizontal Scroll
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY * 2; // Faster scrolling
});


// Carousel Functionality
let index = 0;
document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % foodItems.length;
    carouselTrack.style.transform = `translateX(-${index * 300}px)`;
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + foodItems.length) % foodItems.length;
    carouselTrack.style.transform = `translateX(-${index * 300}px)`;
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded!");

    // Select Request Dish Elements
    const requestDishBtn = document.getElementById("request-dish-btn");
    const requestModal = document.getElementById("request-modal");
    const closeRequestBtn = document.getElementById("close-request");
    const submitRequestBtn = document.getElementById("submit-request");
    const requestForm = document.getElementById("request-form");

    // Debugging: Check if elements exist
    console.log("Request Dish Button:", requestDishBtn);
    console.log("Request Modal:", requestModal);

    if (!requestDishBtn) {
        console.error("Request Dish button NOT FOUND! Check your HTML.");
        return;
    }

    // ✅ Open Request Modal
    requestDishBtn.addEventListener("click", () => {
        console.log("🍽 Request a Dish Clicked!");
        requestModal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Disable scrolling
    });

    // ✅ Close Request Modal (Clicking Close Button)
    closeRequestBtn.addEventListener("click", () => {
        console.log("❌ Close Request Clicked!");
        requestModal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // ✅ Close Request Modal (Clicking Outside)
    requestModal.addEventListener("click", (event) => {
        if (event.target === requestModal) {
            console.log("🖱 Clicked Outside Modal!");
            requestModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // ✅ Handle Form Submission
    requestForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("✅ Dish Requested:", document.getElementById("dish-name").value);
        
        // Close the modal after submission
        requestModal.style.display = "none";
        document.body.style.overflow = "auto";

        // Show an alert (you can replace this with a custom success message)
        alert("Your dish request has been submitted!");
    });
});


// Video Play/Pause Button
const video = document.getElementById("promo-video");
const playBtn = document.getElementById("play-btn");

// Show play button when video is paused
video.addEventListener("pause", () => {
    playBtn.style.display = "block";
});

// Hide play button when video plays
video.addEventListener("play", () => {
    playBtn.style.display = "none";
});

// Toggle Play/Pause on Click
playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
});

// Click to Pause Video
video.addEventListener("click", () => {
    if (!video.paused) {
        video.pause();
    }
});


