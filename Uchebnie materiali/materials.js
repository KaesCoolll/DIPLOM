document.addEventListener('DOMContentLoaded', () => {
    const topics = {
        "html-css": `
            <h2>HTML & CSS</h2>
            <p><b>HTML</b> (HyperText Markup Language) - язык разметки, который используется для создания структуры веб-страниц. <b>CSS</b> (Cascading Style Sheets) - язык описания внешнего вида документов, написанных на HTML.</p>
            <h3>Основные понятия HTML:</h3>
            <ul>
                <li><b>Семантические теги</b> - &lt;header&gt;, &lt;main&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt; и др. Они придают смысл структуре страницы.</li>
                <li><b>Атрибуты</b> - дополнительные параметры тегов (например, <code>href</code> у &lt;a&gt;).</li>
                <li><b>Валидация</b> - проверка корректности HTML-кода.</li>
            </ul>
            <h3>Основные понятия CSS:</h3>
            <ul>
                <li><b>Селекторы</b> - определяют, к каким элементам применять стили.</li>
                <li><b>Flexbox</b> и <b>Grid</b> - современные технологии для построения адаптивных макетов.</li>
                <li><b>Позиционирование</b> - свойства <code>position</code>, <code>z-index</code>, <code>float</code>.</li>
                <li><b>Медиазапросы</b> - для адаптивной верстки под разные устройства.</li>
            </ul>
            <h3>Полезные ресурсы:</h3>
            <ul>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/HTML" target="_blank">MDN HTML</a></li>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS" target="_blank">MDN CSS</a></li>
                <li><a href="https://html5book.ru/" target="_blank">html5book.ru</a></li>
            </ul>
        `,
        "javascript": `
            <h2>JavaScript</h2>
            <p><b>JavaScript</b> - основной язык программирования для веба, который позволяет делать страницы интерактивными.</p>
            <h3>Основные темы:</h3>
            <ul>
                <li><b>Переменные:</b> <code>var</code>, <code>let</code>, <code>const</code></li>
                <li><b>Типы данных:</b> числа, строки, объекты, массивы, функции</li>
                <li><b>Функции:</b> объявление, стрелочные функции, замыкания</li>
                <li><b>Асинхронность:</b> callbacks, promises, async/await</li>
                <li><b>Работа с DOM:</b> изменение элементов, обработка событий</li>
            </ul>
            <h3>Полезные ресурсы:</h3>
            <ul>
                <li><a href="https://learn.javascript.ru/" target="_blank">learn.javascript.ru</a></li>
                <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="_blank">MDN JavaScript</a></li>
            </ul>
        `,
        "react": `
            <h2>React</h2>
            <p><b>React</b> - популярная библиотека для создания пользовательских интерфейсов от Facebook.</p>
            <h3>Ключевые понятия:</h3>
            <ul>
                <li><b>JSX</b> - расширение синтаксиса JavaScript для описания интерфейса</li>
                <li><b>Компоненты</b> - основные строительные блоки интерфейса</li>
                <li><b>Состояние (state)</b> и <b>пропсы (props)</b></li>
                <li><b>Хуки:</b> useState, useEffect и др.</li>
                <li><b>Жизненный цикл компонентов</b></li>
            </ul>
            <h3>Полезные ресурсы:</h3>
            <ul>
                <li><a href="https://ru.react.dev/" target="_blank">Официальная документация React</a></li>
                <li><a href="https://learn-reactjs.ru/" target="_blank">learn-reactjs.ru</a></li>
            </ul>
        `,
        "webpack": `
            <h2>Webpack & Бандлеры</h2>
            <p><b>Webpack</b> - инструмент для сборки модулей JavaScript и других ресурсов.</p>
            <h3>Основные понятия:</h3>
            <ul>
                <li><b>Entry</b> - точка входа приложения</li>
                <li><b>Output</b> - куда сохраняется собранный файл</li>
                <li><b>Loaders</b> - обработчики файлов (JS, CSS, изображения)</li>
                <li><b>Plugins</b> - расширяют функциональность Webpack</li>
                <li><b>Code splitting</b> - разделение кода для оптимизации загрузки</li>
            </ul>
            <h3>Полезные ресурсы:</h3>
            <ul>
                <li><a href="https://webpack.js.org/concepts/" target="_blank">Официальная документация Webpack</a></li>
                <li><a href="https://habr.com/ru/company/ruvds/blog/336626/" target="_blank">Webpack для начинающих (Хабр)</a></li>
            </ul>
        `,
        "performance": `
            <h2>Оптимизация и производительность</h2>
            <p>Оптимизация фронтенда позволяет ускорить загрузку и работу сайта.</p>
            <h3>Ключевые техники:</h3>
            <ul>
                <li><b>Lazy loading</b> - отложенная загрузка ресурсов</li>
                <li><b>Минификация</b> - уменьшение размера файлов</li>
                <li><b>Кеширование</b> - хранение копий ресурсов в браузере</li>
                <li><b>Критический путь рендеринга</b> - оптимизация порядка загрузки ресурсов</li>
                <li><b>Инструменты:</b> Chrome DevTools, Lighthouse</li>
            </ul>
            <h3>Полезные ресурсы:</h3>
            <ul>
                <li><a href="https://web.dev/fast/" target="_blank">web.dev/fast</a></li>
                <li><a href="https://developers.google.com/web/tools/lighthouse" target="_blank">Google Lighthouse</a></li>
            </ul>
        `
    };

    // Инициализация: показать первую тему
    const contentBlock = document.getElementById('materials-content');
    contentBlock.innerHTML = topics['html-css'];

    // Обработка кликов по меню
    document.querySelectorAll('.materials-menu-item').forEach(item => {
        item.addEventListener('click', function () {
            // Снять активный класс со всех
            document.querySelectorAll('.materials-menu-item').forEach(i => i.classList.remove('active'));
            // Добавить активный класс на выбранный
            this.classList.add('active');
            // Показать материал
            const topic = this.dataset.topic;
            contentBlock.innerHTML = topics[topic];
            // Скролл вверх только у блока с материалом
            contentBlock.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
