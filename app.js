const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "DENTALS",
    price: 800,
    colors: [
      {
        code: "blue",
        img: "Ali/dental.jpg",
      },
      {
        code: "darkblue",
        img: "Ali/dental.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "MINERALS",
    price: 900,
    colors: [
      {
        code: "red",
        img: "Ali/minreals.jpg",
      },
      {
        code: "red",
        img: "Ali/minreals.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "VISION",
    price: 1000,
    colors: [
      {
        code: "lightgray",
        img: "Ali/vision.jpg",
      },
      {
        code: "green",
        img: "Ali/vision.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "MULTI-VITAMINS",
    price: 800,
    colors: [
      {
        code: "black",
        img: "Ali/multi.jpg",
      },
      {
        code: "lightgray",
        img: "Ali/multi.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "CARDIO",
    price: 1000,
    colors: [
      {
        code: "gray",
        img: "Ali/cardio.jpg",
      },
      {
        code: "light red",
        img: "Ali/cardio.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

