/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const banners = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      filmList = document.querySelector('.promo__interactive-list'),     
      button = document.querySelector('.add').lastElementChild

      
const deleteElement = ()=> {
    document.querySelectorAll('.delete').forEach((element,i) => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
            movieDB.movies.splice(i,1);
            
        })
    })
}


banners.forEach(banner => banner.remove())
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
genre.textContent = 'драма'
filmList.innerHTML = ""

movieDB.movies.sort()
movieDB.movies.forEach((film, i) => {
    filmList.innerHTML +=`<li class="promo__interactive-item">${i+1})${film}<div class="delete"></div>`
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    let addFilm = document.querySelector('.adding__input').value
    let checkbox = document.querySelector('.yes').previousElementSibling
    if(checkbox.checked) {
        console.log('Добавляем любимый фильм')
    }
    if(addFilm.length>21)
    {
        addFilm = addFilm.slice(0,20) + "..."
    }
    movieDB.movies.push(addFilm)
    movieDB.movies = movieDB.movies.map(mov => {
        return mov.toLowerCase()
    })
    movieDB.movies.sort()
    filmList.innerHTML = ""

    movieDB.movies.forEach((film, i) => {
        filmList.innerHTML +=`<li class="promo__interactive-item">${i+1})${film}<div class="delete"></div>`
        document.querySelector('.adding__input').value = ""
    })
    deleteElement()

})
deleteElement()
