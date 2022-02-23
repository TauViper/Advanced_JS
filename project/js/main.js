const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img = "https://picsum.photos/200/200?random=1") => {
    //Добавлен параметр картинки по умолчанию
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src=${img} alt="${title}">
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
//  Вариант когда картинка на каждои товаре разная
// const renderProduct = (title, price, img) => {
//     const randomInt = Math.floor(Math.random() * 10 + 1);
//     img = img ?? `https://picsum.photos/200/200?random=${randomInt}`;
//     return `<div class="product-item">
//                   <h3>${title}</h3>
//                   <img src=${img} alt="${title}">
//                   <p>${price}</p>
//                   <button class="buy-btn">Купить</button>
//               </div>`
// };


// старый код до упращения:
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item.title,item.price));
//     console.log(productsList);
//     document.querySelector('.products').innerHTML = productsList;
// };

// renderPage(products);


// Код упращен убрано лишнее:
const renderPage = document.querySelector('.products').innerHTML = products
    .map(item => renderProduct(item.title, item.price)).join("");
console.log(renderPage);

//Запятая появляется в разметке в результате создания нового массива методом map
//  как разделитель при итерации. Что бы убрать данный разделитель, методом join
// меняем разделитель "," на пустой разделитель "". 
