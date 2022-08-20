let pizzaButton = document.getElementById("pizza");
let breakfastButton = document.getElementById("breakfast");
let mainCourseButton = document.getElementById("mainCourse");
let soupButton = document.getElementById("soup");
let dessertButton = document.getElementById("dessert");
let selectAllButton = document.getElementById("all");
let itemList = document.querySelector("ul")

let menu = [
    {
        title: "Pepperoni Pizza",
        image: "assets/images/Pepperoni-Pizza.png",
        price: "20.00$",
        category: "pizza",
        description: "Homemade pizza dough topped with Italian tomato sauce creamy mozzarella cheese and spicy pepperoni"
    },
    {
        title: "Hawaiian Pizza",
        image: "assets/images/Hawaiian-Pizza.png",
        price: "30.50$",
        category: "pizza",
        description: "Hawaiian pizza is the perfect combination of sweet and savoury flavours, with delicious melted mozzarella cheese covering layers of ham and pineapple chunks in each slice."
    },
    {
        title: "Ham and Mushroom Pizza",
        image: "assets/images/Ham-and-Mushroom-Pizza.png",
        price: "28.90$",
        category: "pizza",
        description: "top of an Italian tomato sauce and mozzarella cheese makes for a tasty succulent pizza the whole family will love."
    },
    {
        title: "Baked Eggs",
        image: "assets/images/Baked-Eggs.png",
        price: "30.00$",
        category: "breakfast",
        description: "Baked eggs or oeufs en cocotte are a delicious alternative for preparing your eggs for breakfast or brunch. There are so many different variations of fillings to really keep you interested"
    },
    {
        title: "Shakshuka",
        image: "assets/images/SHAKSHUKA.png",
        price: "21.00$",
        category: "breakfast",
        description: "A vegetarian dish made from simple, healthy ingredients, eggs poached in a sauce made up of onions tomatoes and spices."
    },
    {
        title: "Eggs Florentine",
        image: "assets/images/Eggs-Florentine.png",
        price: "34.00$",
        category: "breakfast",
        description: "A variant of Eggs Benedict, but with the Ham replaced by Spinach. In French culinary terms, anything that has a bed of Spinach is known as “Florentine”"
    },
    {
        title: "Crepe Suzette",
        image: "assets/images/Crepe-Suzette.png",
        price: "26.00$",
        category: "dessert",
        description: "Crêpe Suzette is a classic French dessert where thin pancakes and boozy orange sauce come together to make one of the most delicious desserts ever produced."
    },
    {
        title: "Eton Mess",
        image: "assets/images/Eton-Mess.png",
        price: "23.50$",
        category: "dessert",
        description: "A classic British summer dessert. Contrary to its name an Eton Mess can be served as a very attractive dessert that would not be out of place on any restaurant menu."
    },
    {
        title: "Chicken Marsala",
        image: "assets/images/Chicken-Marsala.png",
        price: "34.00$",
        category: "mainCourse",
        description: "Chicken breasts pounded down to thin escalopes, coated in flour and pan-fried in a marsala sauce"
    },
    {
        title: "Red Lentil Bolognese",
        image: "assets/images/Red-Lentil-Bolognese.png",
        price: "29.00$",
        category: "mainCourse",
        description: "Packed with Tomatoes and other veggies you will love what this meal from the Vegetarian Society has to offer."
    },
    {
        title: "Macaroni Cheese and Bacon",
        image: "assets/images/Macaroni-Cheese-with-Bacon.png",
        price: "33.50$",
        category: "mainCourse",
        description: "Macaroni in a creamy cheese sauce with added crispy bacon baked in the oven with a crunchy cheesy topping."
    },
    {
        title: "Cheesy Cauliflower Soup",
        image: "assets/images/Cheesy-Cauliflower-Soup.png",
        price: "33.50$",
        category: "soup",
        description: "A delicious heart-warming soup that is full of flavour and so easy to make."
    },
]

function displayMenu(item) {
    let menuItem = document.createElement("li");
    menuItem.classList.add("menu-item");
    itemList.append(menuItem);
    let foodImage = document.createElement("img");
    foodImage.setAttribute("src", item.image);
    menuItem.append(foodImage);
    let content = document.createElement("div")
    content.classList.add("content");
    menuItem.append(content);
    let foodTitle = document.createElement("h2");
    foodTitle.innerHTML = item.title;
    content.append(foodTitle);
    let foodDesc = document.createElement("p")
    foodDesc.innerHTML = item.description
    content.append(foodDesc);
    let foodPrice = document.createElement("span");
    foodPrice.innerHTML = item.price;
    content.append(foodPrice);
}

menu.map(displayMenu)

function pizza() {
    itemList.innerHTML = ""
    let selectpizza = menu.filter(function (select) {
        return select.category === "pizza"
    })
    selectpizza.map(displayMenu)
}
pizzaButton.addEventListener("click", pizza)

function breakfast() {
    itemList.innerHTML = ""
    let selectbreakfast = menu.filter(function (select) {
        return select.category === "breakfast"
    })
    selectbreakfast.map(displayMenu)
}
breakfastButton.addEventListener("click", breakfast)

function mainCourse() {
    itemList.innerHTML = ""
    let selectmainCourse = menu.filter(function (select) {
        return select.category === "mainCourse"
    })
    selectmainCourse.map(displayMenu)
}
mainCourseButton.addEventListener("click", mainCourse)

function soup() {
    itemList.innerHTML = ""
    let selectsoup = menu.filter(function (select) {
        return select.category === "soup"
    })
    selectsoup.map(displayMenu)
}
soupButton.addEventListener("click", soup)

function dessert() {
    itemList.innerHTML = ""
    let selectdessert = menu.filter(function (select) {
        return select.category === "dessert"
    })
    selectdessert.map(displayMenu)
}
dessertButton.addEventListener("click", dessert)

function allMenu() {
    menu.map(displayMenu)
}
selectAllButton.addEventListener("click", allMenu)
