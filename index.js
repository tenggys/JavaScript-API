/*Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. 
Каждое занятие имеет название, время проведения, максимальное количество участников и 
текущее количество записанных участников.
Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться 
на странице с указанием его названия, времени проведения, максимального количества участников
 и текущего количества записанных участников.

Пользователь может нажать на кнопку "Записаться" для записи на занятие. 
Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

После успешной записи пользователя на занятие, обновите количество 
записанных участников и состояние кнопки "Записаться".

Запись пользователя на занятие можно отменить путем нажатия на кнопку 
"Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

При разработке используйте Bootstrap для стилизации элементов.
*/
async function fetchData() {
    try {
        const response = await fetch('data.json');
        if (!response) {
            throw new Error('Не удалось обработать data.json');
        }
        const data = await response.json();
        const lessonsBox = document.querySelector('.lessons-box');

        data.forEach(({id,title, date, clock, maxPeople, currentPeople}) => {
            const lessonsEl = `
                <div class="lesson-item" id="${id}">
                    <h3 class="title">${title}</h3>
                    <p class="date">Дата проведения - ${date}</p>
                    <p class="clock">Начало занятий -${clock}</p>
                    <div>
                        <p>Максимальное количество участников</p>
                        <p class="lessonItem">${maxPeople}</p>
                    </div>
                    <div class="current-people-box">
                        <p>Текущее количество участников</p>
                        <p class="count-people">${currentPeople}</p>
                    </div>
                    <button class="sing-up">Записаться</button>
                    <button class="сancel-recording">Отменить запись</button>
                </div>
            `;
            lessonsBox.insertAdjacentHTML('beforeend', lessonsEl)
        });
    } catch (error) {
        console.log(error)
    };

    let count = 1;

    const allBtn = document.querySelectorAll('.sing-up');
    allBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            const lessonItem = e.currentTarget.closest('.lesson-item');
            const countPeople = lessonItem.querySelector('.count-people');
            countPeople.innerHTML = +countPeople.innerHTML + count;

            const maxPeople = lessonItem.querySelector('.lessonItem');
            if (countPeople.innerHTML === maxPeople.innerHTML) {
                button.setAttribute('disabled', true);
            } else {
                button.removeAttribute('disabled');
            }

            
        })
    })

    const down = document.querySelectorAll('.сancel-recording');
    down.forEach(button => {
        button.addEventListener('click', (e) => {
            const lessonItem = e.currentTarget.closest('.lesson-item');
            const countPeople = lessonItem.querySelector('.count-people');
            countPeople.innerHTML = +countPeople.innerHTML - count;
        })
    })
};

fetchData();





