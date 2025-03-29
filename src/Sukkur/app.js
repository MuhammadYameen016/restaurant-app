let cardsArray = [
    {
        imgLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Kw4EfYwjsYeqm35Tc-Fvj-t9lya7CuhlRQ&s',
        hotelName: "Chaman Dairy Ice Cream - Susan R",
        dish: "Ice Cream",
        rating: "4.0", ratingStar: "⭐⭐⭐⭐"
    },
    {
        imgLink: "https://images.deliveryhero.io/image/fd-pk/LH/t3pb-hero.jpg?width=480&height=360&quality=45",
        hotelName: "Muhammadi Nehari D Ground",
        dish: "Pakistani",
        rating: 3.1, ratingStar: "⭐⭐⭐"
    },
    {
        imgLink: "https://images.deliveryhero.io/image/fd-pk/LH/lti6-hero.jpg?width=480&height=360&quality=45",
        hotelName: "Al-Rehmat Pizza",
        dish: "Pizza",
        rating: 3.7, ratingStar: "⭐⭐⭐"
    },
    {
        imgLink: "https://images.deliveryhero.io/image/fd-pk/LH/l4zh-listing.jpeg",
        hotelName: "J & k Bannu Pulao - D Ground",
        dish: "Pulao",
        rating: "4.0", ratingStar: "⭐⭐⭐⭐"
    },
    {
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMeMnHdWoyrQ_i7EDwtALLZov5sKxW-WECg&s",
        hotelName: "The Sweatzz House",
        dish: "Mithai",
        rating: "3.0", ratingStar: "⭐⭐⭐"
    },
    {
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5Z14pBLxyYOyWtsDcmA1ZnC7ZVUOINDlbg&s",
        hotelName: "Black & Brown",
        dish: "Cake",
        rating: "4.0", ratingStar: "⭐⭐⭐⭐"
    },
    {
        imgLink: "https://www.masala.tv/wp-content/uploads/2015/12/Beef-Biryani-Rida-Aftab.jpg",
        hotelName: "Lahori Biryani",
        dish: "Beef Biryani",
        rating: "1.0", ratingStar: "⭐"
    },
    {
        imgLink: "https://img.favpng.com/21/15/9/samosa-indian-cuisine-fast-food-dahi-vada-pakora-png-favpng-6jwRzrk7vHkcfiqq6S0yTF2tG.jpg",
        hotelName: "Noman Samosa Corner",
        dish: "Grilled Samosa",
        rating: "3.2", ratingStar: "⭐⭐⭐"
    },
    {
        imgLink: "https://images.unsplash.com/photo-1618213837799-25d5552820d3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBwbmd8ZW58MHx8MHx8fDA%3D",
        hotelName: "Pizaa Corner",
        dish: "Pizaa",
        rating: "4.0", ratingStar: "⭐⭐⭐⭐"
    },
    {
        imgLink: "https://c.ndtvimg.com/2020-12/q9bvneb_sweet-corn-soup-recipe_625x300_16_December_20.jpg",
        hotelName: "Vegetarian Vibes",
        dish: "Vegetable soup",
        rating: "2.0", ratingStar: "⭐⭐"
    },
    {
        imgLink: "https://t3.ftcdn.net/jpg/02/28/09/64/360_F_228096414_PF4smFUTAqBUEMhDmeyntdSSq3Lz8CSN.jpg",
        hotelName: "Qorma House",
        dish: "Qorma",
        rating: 2.9, ratingStar: "⭐⭐⭐"
    },
    {
        imgLink: "https://as1.ftcdn.net/jpg/02/27/94/36/1000_F_227943617_C36lB4R1XT7VqgfB0PBmebfN8qDtivwl.jpg",
        hotelName: "Tikka Spicer",
        dish: "Chicken Tikka",
        rating: 3.7, ratingStar: "⭐⭐⭐"
    },
    {
        imgLink: "https://www.177milkstreet.com/assets/site/Recipes/Pakistani-Chicken-Karahi-FB.jpg",
        hotelName: "Dehli Karahi",
        dish: "Karahi",
        rating: "4.0", ratingStar: "⭐⭐⭐⭐"
    },
    {
        imgLink: "https://www.maggi.ph/sites/default/files/srh_recipes/91afe3a3615aaa162847dc3fdcdda2da.jpg",
        hotelName: "Sandwitch Street",
        dish: "Club Sandwitch",
        rating: 1.9, ratingStar: "⭐⭐"
    },
    {
        imgLink: "https://static.toiimg.com/thumb/msid-112315676,width-1280,height-720,resizemode-4/112315676.jpg",
        hotelName: "Ice Cream Parlour",
        dish: "Ice Cream",
        rating: "4.0", ratingStar: "⭐⭐⭐⭐"
    },
    {
        imgLink: "https://i.ndtvimg.com/i/2017-06/nihari_650x400_81498470650.jpg",
        hotelName: "Nihar House",
        dish: "Nihari"
        , rating: 2.7,
        ratingStar: "⭐⭐⭐"
    }
];

let cardsContainerDiv = document.querySelector(".restaurant-container");

for (let i = 0; i < cardsArray.length; i++) {
    cardsContainerDiv.innerHTML += `
        <div class="restaurant-card">
            <div class="image-wrapper">
                <img src="${cardsArray[i].imgLink}" alt="${cardsArray[i].hotelName}" />
                <div class="offer-badge">Welcome gift: free dessert</div>
            </div>
            <div class="card-content">
                <h2>${cardsArray[i].hotelName}</h2>
                <p class="cuisine">Sukkur</p>
                <div class="rating">
                    <span>${cardsArray[i].rating}</span>
                    <span>${cardsArray[i].ratingStar}</span>
                </div>
            </div>
        </div>`
};