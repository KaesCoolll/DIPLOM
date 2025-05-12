document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.test-menu-item');
    const panels = document.querySelectorAll('.test-panel');

    // Данные тестов: вопросы, варианты и правильный ответ (индекс)
    const tests = {
        "html-css": [
            {
                question: "Что такое семантический тег в HTML?",
                answers: [
                    "Тег, который описывает смысл содержимого",
                    "Тег, который задаёт стиль",
                    "Тег, который используется для скриптов",
                    "Тег, который скрыт на странице"
                ],
                correct: 0
            },
            {
                question: "Какой метод подключения CSS считается лучшим?",
                answers: [
                    "Встроенный стиль (inline)",
                    "Внешний файл CSS",
                    "Использование атрибута style в теге",
                    "Использование тегов <script>"
                ],
                correct: 1
            },
            {
                question: "Что такое Flexbox и для чего он используется?",
                answers: [
                    "Метод позиционирования элементов в строке или столбце",
                    "Язык программирования",
                    "Фреймворк для создания сайтов",
                    "База данных"
                ],
                correct: 0
            },
            {
                question: "Какой тег используется для создания гиперссылки?",
                answers: [
                    "&lt;link&gt;",
                    "&lt;a&gt;",
                    "&lt;href&gt;",
                    "&lt;url&gt;"
                ],

                correct: 1
            },
            {
                question: "Что делает свойство CSS 'z-index'?",
                answers: [
                    "Определяет прозрачность элемента",
                    "Устанавливает порядок наложения элементов",
                    "Задаёт цвет фона",
                    "Устанавливает размер шрифта"
                ],
                correct: 1
            }
        ],

        "javascript": [
            {
                question: "Что такое замыкание (closure) в JavaScript?",
                answers: [
                    "Функция вместе с лексическим окружением, в котором она была создана",
                    "Объект, который хранит состояние",
                    "Переменная, объявленная внутри функции",
                    "Ошибка в коде"
                ],
                correct: 0
            },
            {
                question: "Чем отличаются var, let и const?",
                answers: [
                    "var - глобальная, let и const - локальные",
                    "var - устаревшая, let - изменяемая, const - неизменяемая",
                    "var - функция, let и const - блоки",
                    "var и let - одинаковые, const - константа"
                ],
                correct: 1
            },
            {
                question: "Что такое промис (Promise)?",
                answers: [
                    "Объект для работы с асинхронным кодом",
                    "Функция обратного вызова",
                    "Тип ошибки",
                    "Цикл в JavaScript"
                ],
                correct: 0
            },
            {
                question: "Какой метод используется для добавления элемента в конец массива?",
                answers: [
                    "push()",
                    "pop()",
                    "shift()",
                    "unshift()"
                ],
                correct: 0
            },
            {
                question: "Что делает оператор === в JavaScript?",
                answers: [
                    "Сравнивает только значения",
                    "Сравнивает значения и типы",
                    "Присваивает значение",
                    "Создаёт новую переменную"
                ],
                correct: 1
            }
        ],

        "react": [
            {
                question: "Что такое JSX?",
                answers: [
                    "Расширение синтаксиса JavaScript для описания UI",
                    "Язык программирования",
                    "Библиотека для работы с сервером",
                    "Фреймворк для CSS"
                ],
                correct: 0
            },
            {
                question: "Для чего используется хук useState?",
                answers: [
                    "Для управления состоянием компонента",
                    "Для создания маршрутов",
                    "Для работы с формами",
                    "Для стилизации компонентов"
                ],
                correct: 0
            },
            {
                question: "Что делает хук useEffect?",
                answers: [
                    "Позволяет выполнять побочные эффекты в компонентах",
                    "Создаёт новые компоненты",
                    "Обрабатывает события",
                    "Управляет состоянием"
                ],
                correct: 0
            },
            {
                question: "Что такое контролируемый компонент?",
                answers: [
                    "Компонент, состояние которого управляется React",
                    "Компонент без состояния",
                    "Компонент, который не рендерится",
                    "Компонент, который управляет другими компонентами"
                ],
                correct: 0
            },
            {
                question: "Какой метод жизненного цикла вызывается при монтировании компонента?",
                answers: [
                    "componentDidMount",
                    "componentWillUnmount",
                    "render",
                    "shouldComponentUpdate"
                ],
                correct: 0
            }
        ],

        "webpack": [
            {
                question: "Что такое entry в Webpack?",
                answers: [
                    "Точка входа для сборки приложения",
                    "Результат сборки",
                    "Плагин для оптимизации",
                    "Конфигурационный файл"
                ],
                correct: 0
            },
            {
                question: "Для чего нужны лоадеры (loaders) в Webpack?",
                answers: [
                    "Для обработки файлов перед сборкой",
                    "Для запуска сервера",
                    "Для стилизации компонентов",
                    "Для управления состоянием"
                ],
                correct: 0
            },
            {
                question: "Что делает плагин HtmlWebpackPlugin?",
                answers: [
                    "Автоматически генерирует HTML-файл",
                    "Оптимизирует JS-код",
                    "Запускает тесты",
                    "Создаёт CSS-файл"
                ],
                correct: 0
            },
            {
                question: "Как уменьшить размер итогового бандла?",
                answers: [
                    "Использовать tree shaking",
                    "Добавлять все библиотеки в бандл",
                    "Отключить минификацию",
                    "Использовать inline стили"
                ],
                correct: 0
            },
            {
                question: "Что такое code splitting?",
                answers: [
                    "Разделение кода на части для загрузки по требованию",
                    "Объединение всех файлов в один",
                    "Удаление неиспользуемого кода",
                    "Оптимизация CSS"
                ],
                correct: 0
            }
        ],

        "performance": [
            {
                question: "Что такое lazy loading?",
                answers: [
                    "Загрузка ресурсов по мере необходимости",
                    "Предварительная загрузка всех ресурсов",
                    "Кэширование данных",
                    "Оптимизация изображений"
                ],
                correct: 0
            },
            {
                question: "Как работает кеширование в браузере?",
                answers: [
                    "Хранит копии ресурсов для ускорения загрузки",
                    "Удаляет все данные после закрытия вкладки",
                    "Загружает ресурсы заново при каждом запросе",
                    "Отправляет данные на сервер"
                ],
                correct: 0
            },
            {
                question: "Какие инструменты помогают анализировать производительность?",
                answers: [
                    "Chrome DevTools, Lighthouse",
                    "Photoshop, Illustrator",
                    "Git, GitHub",
                    "Webpack, Babel"
                ],
                correct: 0
            },
            {
                question: "Что такое критический путь рендеринга?",
                answers: [
                    "Последовательность действий браузера для отображения страницы",
                    "Оптимизация CSS",
                    "Загрузка изображений",
                    "Асинхронный код"
                ],
                correct: 0
            },
            {
                question: "Как уменьшить время отклика страницы?",
                answers: [
                    "Минимизировать HTTP-запросы и использовать кеширование",
                    "Добавлять много скриптов",
                    "Использовать большие изображения",
                    "Отключать кеш"
                ],
                correct: 0
            }
        ]
    };

    // Переключение между тестами в меню
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(btn => btn.classList.remove('active'));
            panels.forEach(panel => panel.classList.add('hidden'));

            item.classList.add('active');
            const testId = item.getAttribute('data-test');
            document.getElementById(testId).classList.remove('hidden');

            // Запускаем тест для выбранной темы
            startTest(testId);
        });
    });

    // Текущий индекс вопроса и счетчики для каждого теста
    const testState = {};

    function startTest(testId) {
        const container = document.querySelector(`#${testId} .question-container`);
        const questions = tests[testId];
        if (!questions) return;

        testState[testId] = {
            current: 0,
            correctCount: 0,
            total: questions.length
        };

        container.innerHTML = '';
        showQuestion(testId);
    }

    function showQuestion(testId) {
        const container = document.querySelector(`#${testId} .question-container`);
        const state = testState[testId];
        const questions = tests[testId];

        if (state.current >= questions.length) {
            // Показываем результат
            container.innerHTML = `
          <div class="result">
            Тест завершён!<br>
            Правильных ответов: ${state.correctCount} из ${state.total}<br>
            Неправильных ответов: ${state.total - state.correctCount}
          </div>
        `;
            return;
        }

        const q = questions[state.current];

        // Формируем HTML вопроса и вариантов
        let answersHtml = q.answers.map((ans, i) => `
        <li>
          <label>
            <input type="radio" name="answer" value="${i}" />
            ${ans}
          </label>
        </li>
      `).join('');

        container.innerHTML = `
        <div class="question">
          <div class="question-text">${q.question}</div>
          <ul class="answers">${answersHtml}</ul>
        </div>
      `;

        // Добавляем обработчик на выбор ответа
        const inputs = container.querySelectorAll('input[name="answer"]');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                const selected = parseInt(input.value);
                if (selected === q.correct) {
                    state.correctCount++;
                }
                state.current++;
                showQuestion(testId);
            });
        });
    }

    // Запускаем первый тест по умолчанию
    startTest('html-css');
});
