// JAVASCRIPT FOR COURSE PROJECT 

// hamburger menu icon show/hide items 
let hamburgerMenuIcon = document.querySelector(".menu");
let menuItems = document.querySelector(".topnav");
let toggleMenu = function() {
    menuItems.classList.toggle("open");
}
hamburgerMenuIcon.addEventListener("click",toggleMenu);

// display more books 
// add sample books array 
let comicBooks = [ { 
        title: "Fun Home: A Family Tragicomic",
        author: "by Alison Bechdel",
        rating: "5 stars",
        href: "./fun-home.html",
        imgSrc: "./public/images/fun-home.jpg",
        imgAlt: "Fun Home: A Family Tragicomic comic book cover",
    }, {
        title: "Hunter X Hunter Vol. 1",
        author: "by Yoshihiro Togashi",
        rating: "5 stars",
        href: "./hunter-x-hunter.html",
        imgSrc: "./public/images/hunter-x-hunter.jpg",
        imgAlt: "Hunter X Hunter comic book cover",
    }, {
        title: "The Walking Dead, Vol. 1: Days Gone Bye",
        author: "by Robert Kirkman",
        rating: "4 stars",
        href: "./the-walking-dead.html",
        imgSrc: "./public/images/the-walking-dead.jpg",
        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",
    }
]

// create new elements on index.html 
const displayMore = function() {
    for (i = 0; i < 3; i++) {
        let thisBook = comicBooks[i];

        // create parent div for the new book 
        let newDiv = document.createElement("div");
        newDiv.classList.add("index-book");

        // create anchor tag 
        let newAnchor = document.createElement("a");
        newAnchor.setAttribute("href",thisBook.href);

        // insert image 
        let newImg = document.createElement("img");
        newImg.setAttribute("src",thisBook.imgSrc);
        newImg.setAttribute("alt",thisBook.imgAlt);
        newAnchor.appendChild(newImg);
        newDiv.appendChild(newAnchor);

        // title
        let titleSpan = document.createElement("span");
        titleSpan.appendChild(document.createTextNode(thisBook.title));
        newDiv.appendChild(titleSpan);

        // author 
        let authorSpan = document.createElement("span");
        authorSpan.appendChild(document.createTextNode(thisBook.author));
        newDiv.appendChild(authorSpan);

        // rating
        let ratingSpan = document.createElement("span");
        ratingSpan.appendChild(document.createTextNode(thisBook.rating));
        newDiv.appendChild(ratingSpan);

        // details
        let detailsLink = document.createElement("a");
        detailsLink.setAttribute("href", "#");
        detailsLink.appendChild(document.createTextNode("Details"));
        newDiv.appendChild(detailsLink);

        // append
        document.getElementById("index-all-books").appendChild(newDiv);
    }
}

let target = document.getElementById("more");
target.addEventListener("click", displayMore);