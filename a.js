const books = [
    {
        title: "Мастер и Маргарита",
        author: "М. Булгаков",
        price: 450,
        image: "https://sun9-10.userapi.com/s/v1/ig2/ISa19LnQ10M98TgxZylgvNo4NXSMo-iu1J6PAjAnysBaGrVvzgdLYMTXyTfiR9hR_2jBMpjE8KV_lmqsDBjwZrXY.jpg?quality=95&as=32x45,48x67,72x100,108x150,160x223,240x334,360x501,480x668,540x752,640x891,720x1002,1000x1392&from=bu&u=D-dl1l9Uqo-bf5-_Lb8ZXuPFZNK9yLwyOmKBgcCZ6os&cs=1000x0"
    },
    {
        title: "1984",
        author: "Д. Оруэлл",
        price: 380,
        image: "https://sun9-67.userapi.com/s/v1/ig2/qYIdTUZ2uQqYp_RqW6uryPRCiQsFcOT1O9J5fZFPOjHkSK9NuASGoaJRq09xCicq-ALQgCvoU7-gC-by2z2GbL40.jpg?quality=95&as=32x49,48x74,72x111,108x166,160x246,240x370,360x554,480x739,540x831,640x985,720x1109,1080x1663,1280x1971,1299x2000&from=bu&u=iwTburpjXDceMSVQh3iKOXks432RcedfS5UyV96Mm44&cs=1299x0"
    },
    {
        title: "Преступление и наказание",
        author: "Ф. Достоевский",
        price: 420,
        image: "https://sun9-24.userapi.com/s/v1/ig2/keh5xE4hTwzK8gjpyuJQKzkJoO2QBftt3cIxOivyw8u_Eku-WigfByTEnXzF1ixPKg2GwOfg9lkeZiluTMVPz7Fm.jpg?quality=95&as=32x50,48x75,72x112,108x169,160x250,240x375,360x562,480x750,540x843,541x845&from=bu&cs=541x0"
    },
    {
        title: "Дом, в котором...",
        author: "М. Петросян",
        price: 1500,
        image: "https://sun9-80.userapi.com/s/v1/ig2/u26hB7668nwkDQ96GVFrrMbIzxK7_Yrv_emZPSeQ13AFgl0ER2hPR9cgyTHnIgKJrO31obghGKk-w_G4uLrYvfIj.jpg?quality=95&as=32x47,48x71,72x106,108x160,160x237,240x355,360x532,480x710,540x799,640x947,720x1065,1000x1479&from=bu&cs=1000x0"
    },
    {
        title: "Пикник на обочине. Коллекционное издание",
        author: "А. и Б. Стругацкие",
        price: 2800,
        image: "https://sun9-82.userapi.com/s/v1/ig2/9WZJgUezIQn_NCNozqFA2RW08hd9OgG2nBqYaysQbgvgErTVYeRdv6WRmxPp6NqKwlJ3hDULPYy69MVynJa0X82t.jpg?quality=95&as=32x41,48x62,72x93,108x139,160x206,240x309,360x464,480x618,540x696,600x773&from=bu&cs=600x0"
    },
    {
        title: "Превращение",
        author: "Ф.Кафка",
        price: 200,
        image: "https://sun9-51.userapi.com/s/v1/ig2/cd3LiIIZLvFz0fBlGEvtCtwynYf6VR9GztcpUD3OERryD4NOEI-nwgzKTxld3xc8DxegZ_pyj1c0luK44Lij432I.jpg?quality=95&as=32x54,48x81,72x122,108x182,160x270,240x405,360x608,480x811,540x912,640x1081,720x1216,1000x1689&from=bu&cs=1000x0"
    }
];

function displayBooks() {
    const bookList = document.getElementById('book-list');

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div>
                <h3>${book.title}</h3>
                <p><strong>Автор:</strong> ${book.author}</p>
                <p><strong>Цена:</strong> ${book.price} руб.</p>
                <button onclick="addToCart('${book.title}')">В корзину</button>
            </div>
        `;

        bookList.appendChild(bookCard);
    });
}

function addToCart(title) {
    alert(`Книга "${title}" добавлена в корзину!`);
}

document.addEventListener('DOMContentLoaded', displayBooks);