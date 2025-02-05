const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Brown T-shirt",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sweater",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Shoes",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Shirt",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/10952733/pexels-photo-10952733.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cardigan",
  },
];

let productContainer = document.getElementById("container");

const productsData = () => {
  data.forEach((item) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product-card");

    let productImg = document.createElement("img");
    productImg.src = item.img;
    productImg.alt = item.title;

    let productTitle = document.createElement("h3");
    productTitle.innerText = item.title;

    productDiv.appendChild(productImg);
    productDiv.appendChild(productTitle);

    productContainer.appendChild(productDiv);
  });
};

productsData();
