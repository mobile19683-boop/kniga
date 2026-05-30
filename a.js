const books = [
    {
        title: "Мастер и Маргарита",
        author: "М. Булгаков",
        price: 450
    },
    {
        title: "1984",
        author: "Д. Оруэлл",
        price: 380
    },
    {
        title: "Преступление и наказание",
        author: "Ф. Достоевский",
        price: 420
    },
    {
        title: "Дом, в котором...",
        author: "М. Петросян",
        price: 1500
    },
    {
        title: "Пикник на обочине. Коллекционное издание",
        author: "А. и Б. Стругацкие",
        price: 2800
    },
    {
        title: "Превращение",
        author: "Ф.Кафка",
        price: 200
    }
];

function displayBooks() {
    const bookList = document.getElementById('book-list');

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        
        bookCard.innerHTML = `
            <div class="book-image"></div>
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