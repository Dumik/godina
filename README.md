# Godina

Игра: угадай год по фотографии.

<p align="center"><a href="https://rastereo.github.io/godina/" target="_blank"><img src="https://i.ibb.co/fnyqw61/2023-11-03-015058.jpg" width="700px"></a></p>

## 🛠️Технологии:

+ [HTML](https://html.spec.whatwg.org)
+ [CSS](https://www.w3.org/Style/CSS)
+ [React](https://react.dev/)
+ [TypeScript](https://www.typescriptlang.org/)
+ [Sass](https://sass-lang.com/)
+ [ESLint](https://eslint.org/)

## 🕹️Механика игры:

+ Игроку показывается фотография из 4 API.
+ Под фотографией есть ползунок с диапазоном от года возникновения
фотографии по наши дни, из которого нужно выбрать год, когда был сделан
снимок.
+ В игре 10 раундов.
+ За каждый ответ игрок получает очки: чем ближе к правильному ответу, тем
больше очков.
+ В конце игры показывается сумма очков, набранных во время игры.
+ Максимально можно набрать 1000 очков.
+ Есть возможность сохранить свой результат и попасть в таблицу лучших игроков.

## 📂Директории:

+ `/components` — папка с компонентами
+ `/hooks` — папка с хуками
+ `/images` — папка c изображениями

Остальные директории вспомогательные.

## 📋Инструкция по запуску проекта:

1. Склонируйте репозиторий на свой компьютер:
```bash
git clone git@github.com:rastereo/godina.git
```
2. Установите зависимости
```bash
npm install
```
3. Запустите приложение
```bash
npm run start
```

## 🌐Ссылки

+ Сайт игры: https://rastereo.github.io/godina
+ API PastVu: https://docs.pastvu.com/dev/api
+ API Кинопоиска: https://kinopoisk.dev
+ API Historypin: https://historypin.github.io/api-docs
+ API Library of Congress: https://www.loc.gov/apis
+ Формула расчета баллов: https://www.desmos.com/calculator/bp9rmyify1?lang=ru

## 🔨Планы по доработке

+ Подключить таймер на каждый раунд
+ Сделать анимацию
+ Подключить Redux Toolkit
+ В конце игры показать пользователю историю всей игры(фото, год)
+ Затереть год на некоторых фотографиях с PastVu(как это сделать?)
+ Оптимизация
+ Написать инструкцию к игре
+ Решить проблему с CORS у HistoryPin
