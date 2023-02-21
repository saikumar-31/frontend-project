
//Search implementation
let storeProducts = {
  data: [
    {
      productName: "Tomato Garlic Salsa",
      category: "Sauces and Dips",
      price: 99,
      image:
        "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Tomato-_-garlic_360x.png?v=1659685454",
    },

    {
      productName: "Sona Masoori Raw Rice",
      category: "Rice",
      price: 85,
      image:
        "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/SonaMasooriRawRice_360x.jpg?v=1667619652",
    },

    {
      productName: "A2 Gir Cow Ghee Testing",
      category: "Ghee",
      price: 85,
      image:
        "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/GheeBottle1_300x.jpg?v=1666177520",
    },

    {
        productName: "Extra Virgin Olive Oil",
        category: "oil",
        price: 419,
        image:
          "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Garlicp4_300x.png?v=1649055936",
      },

      {
        productName: "Cold Pressed sesame oil",
        category: "oil",
        price: 379,
        image:
          "https://cdn.shopify.com/s/files/1/0592/9884/0756/products/Cold-Pressed-Sesame-Oil-500ml_300x.jpg?v=1649745320",
      },
  ],
};


for(let i of storeProducts.data){
 let card =document.createElement("div");
 card.classList.add("card","i.category");
 
 let imgContainer=document.createElement("div");
 imgContainer.classList.add("image-container");
 let image =document.createElement("img");
 image.setAttribute("src",i.image);

 imgContainer=appendChild(image);

 card.appendChild(imgContainer);

 document.getElementById("products").appendChild(card);
}
