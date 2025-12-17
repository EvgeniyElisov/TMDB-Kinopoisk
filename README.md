# TMDB-Kinopoisk

Веб-приложение для поиска и просмотра информации о фильмах на основе API The Movie Database (TMDB).

## 📋 Описание

TMDB-Kinopoisk — это современное React-приложение, которое предоставляет пользователям возможность:
- Просматривать популярные, топовые, предстоящие и текущие фильмы
- Искать фильмы по названию
- Фильтровать фильмы по жанрам, рейтингу и другим параметрам
- Просматривать детальную информацию о фильмах
- Сохранять избранные фильмы
- Переключаться между светлой и темной темой

## 🚀 Технологический стек

### Основные технологии
- **React 19.2.0** — библиотека для создания пользовательских интерфейсов
- **TypeScript 5.9.3** — типизированный JavaScript
- **Vite 7.2.4** — инструмент сборки и dev-сервер

### Управление состоянием и маршрутизация
- **Redux Toolkit 2.11.1** — управление глобальным состоянием
- **RTK Query** — инструмент для работы с API (встроен в Redux Toolkit)
- **React Router 7.10.1** — маршрутизация в приложении

### UI библиотеки
- **Material UI 7.3.6** — компонентная библиотека
- **Emotion** — CSS-in-JS решение для стилизации
- **CSS Modules** — модульная стилизация компонентов

### Валидация и формы
- **Zod 4.1.13** — схема валидации TypeScript-first
- **@hookform/resolvers 5.2.2** — резолверы для React Hook Form

### Утилиты
- **react-toastify 11.0.5** — уведомления (toast)

## 📁 Структура проекта

```
src/
├── app/                   # Конфигурация приложения
│   ├── api/               # Базовый API клиент (RTK Query)
│   │   └── baseApi.ts     # Базовый RTK Query API с настройками
│   ├── model/             # Redux store
│   │   └── store.ts       # Конфигурация Redux store
│   └── ui/                # Корневой компонент App
│       ├── index.ts       # Экспорт App
│       └── App/
│           ├── App.module.css
│           └── App.tsx
│
├── assets/                # Статические ресурсы
│   └── images/            # Изображения (логотипы, плейсхолдеры)
│       ├── no-photo.jpg
│       ├── no-poster.jpg
│       └── tmdb-logo.svg
│
├── common/               # Общие компоненты и утилиты
│   ├── components/       # Переиспользуемые компоненты
│   │   ├── index.ts      # Экспорт всех компонентов
│   │   ├── BackButton/   # Кнопка "Назад"
│   │   │   ├── index.ts
│   │   │   ├── BackButton.module.css
│   │   │   └── BackButton.tsx
│   │   ├── Button/       # Кнопка
│   │   │   └── Button.tsx
│   │   ├── FavoriteButton/ # Кнопка избранного
│   │   │   ├── index.ts
│   │   │   ├── FavoriteButton.module.css
│   │   │   └── FavoriteButton.tsx
│   │   ├── Footer/       # Футер
│   │   │   ├── Footer.module.css
│   │   │   ├── Footer.tsx
│   │   │   └── FooterLink/ # Компонент ссылки футера
│   │   │       ├── index.ts
│   │   │       ├── FooterLink.module.css
│   │   │       └── FooterLink.tsx
│   │   ├── Header/       # Хедер с навигацией
│   │   │   ├── Header.module.css
│   │   │   ├── Header.tsx
│   │   │   ├── Logo/     # Логотип приложения
│   │   │   │   ├── index.ts
│   │   │   │   ├── Logo.module.css
│   │   │   │   └── Logo.tsx
│   │   │   ├── Navigation/ # Навигационное меню
│   │   │   │   ├── index.ts
│   │   │   │   ├── Navigation.module.css
│   │   │   │   └── Navigation.tsx
│   │   │   └── NavigationLink/ # Ссылка навигации
│   │   │       ├── index.ts
│   │   │       ├── NavigationLink.module.css
│   │   │       └── NavigationLink.tsx
│   │   ├── Image/        # Компонент изображения
│   │   │   ├── index.ts
│   │   │   ├── Image.module.css
│   │   │   └── Image.tsx
│   │   ├── MovieCard/    # Карточка фильма
│   │   │   ├── MovieCard.module.css
│   │   │   └── MovieCard.tsx
│   │   ├── MovieRating/  # Рейтинг фильма
│   │   │   ├── index.ts
│   │   │   ├── MovieRating.module.css
│   │   │   └── MovieRating.tsx
│   │   ├── MoviesList/   # Список фильмов
│   │   │   ├── MoviesList.module.css
│   │   │   └── MoviesList.tsx
│   │   ├── Paginator/    # Пагинация
│   │   │   ├── index.ts
│   │   │   ├── Paginator.module.css
│   │   │   └── Paginator.tsx
│   │   ├── SearchInput/  # Поле поиска
│   │   │   ├── SearchInput.module.css
│   │   │   └── SearchInput.tsx
│   │   └── Skeletons/    # Skeleton компоненты для загрузки
│   │       ├── index.ts
│   │       ├── CastListSkeleton/
│   │       │   ├── CastListSkeleton.module.css
│   │       │   └── CastListSkeleton.tsx
│   │       ├── FiltersSectionSkeleton/
│   │       │   ├── index.ts
│   │       │   ├── FiltersSectionSkeleton.module.css
│   │       │   └── FiltersSectionSkeleton.tsx
│   │       ├── MovieInfoSkeleton/
│   │       │   ├── MovieInfoSkeleton.module.css
│   │       │   └── MovieInfoSkeleton.tsx
│   │       ├── MoviesSkeleton/
│   │       │   ├── MoviesSkeleton.module.css
│   │       │   └── MoviesSkeleton.tsx
│   │       └── WelcomeSectionSkeleton/
│   │           ├── index.ts
│   │           ├── WelcomeSectionSkeleton.module.css
│   │           └── WelcomeSectionSkeleton.tsx
│   ├── constants/        # Константы приложения
│   │   ├── constants.ts  # Основные константы (URL изображений, ключи localStorage, опции сортировки, категории, навигация)
│   │   └── index.ts      # Экспорт констант
│   ├── hooks/            # Кастомные хуки
│   │   ├── index.ts      # Экспорт хуков
│   │   ├── useDebounceValue.ts
│   │   ├── useGlobalLoading.ts
│   │   └── useInfiniteScroll.ts
│   ├── routing/          # Конфигурация маршрутов
│   │   ├── index.ts      # Экспорт Routing
│   │   └── Routing.tsx    # Компонент маршрутизации
│   ├── styles/           # Глобальные стили
│   │   ├── animations.css # CSS анимации
│   │   └── variables.css  # CSS переменные
│   ├── theme/            # Тема Material UI
│   │   ├── index.ts      # Экспорт темы
│   │   └── theme.ts      # Конфигурация темы
│   ├── types/            # TypeScript типы
│   │   ├── index.ts      # Экспорт типов
│   │   └── types.ts      # Типы, пути страниц, endpoints, категории фильмов
│   └── utils/            # Утилитарные функции
│       ├── index.ts      # Экспорт утилит
│       ├── createInfiniteMoviesQuery.ts # Создание infinite query для RTK Query
│       ├── errorToast.ts # Показ ошибок через toast
│       ├── formatRuntime.ts # Форматирование длительности фильма
│       ├── getCategoryMoviesData.ts # Получение данных категории фильмов
│       ├── getRandomBackdrop.ts # Получение случайного backdrop изображения
│       ├── getRatingClass.ts # Получение CSS класса для рейтинга
│       ├── handleErrors.ts # Обработка ошибок
│       ├── isErrorWithProperty.ts # Проверка типа ошибки
│       ├── localStorage.ts # Работа с localStorage
│       ├── scrollToTop.ts # Прокрутка страницы вверх
│       ├── sortBy.ts # Функция сортировки
│       └── withZodCatch.ts # Обработка ошибок Zod валидации
│
└── features/              # Функциональные модули
    ├── api/              # API endpoints (RTK Query)
    │   ├── moviesApi.ts  # RTK Query API с endpoints для фильмов
    │   └── moviesApi.types.ts # TypeScript типы для API
    ├── model/           # Схемы валидации (Zod)
    │   ├── index.ts     # Экспорт схем
    │   └── movies.schemas.ts # Zod схемы для валидации данных фильмов
    └── ui/              # Страницы приложения
        ├── CategoryMoviesPage/    # Страница категории фильмов
        │   ├── CategoryMoviesPage.module.css
        │   ├── CategoryMoviesPage.tsx
        │   ├── index.ts
        │   └── CategoriesButtons/ # Кнопки категорий
        │       ├── index.ts
        │       ├── CategoriesButtons.module.css
        │       ├── CategoriesButtons.tsx
        │       └── CategoryButton/ # Кнопка категории
        │           ├── index.ts
        │           ├── CategoryButton.module.css
        │           └── CategoryButton.tsx
        ├── FavoritesPage/         # Страница избранного
        ├── FilteredMoviesPage/    # Страница фильтрованных фильмов
        │   ├── FilteredMoviesPage.module.css
        │   ├── FilteredMoviesPage.tsx
        │   ├── index.ts
        │   └── FiltersSection/    # Секция фильтров
        │       ├── index.ts
        │       ├── FiltersSection.module.css
        │       ├── FiltersSection.tsx
        │       ├── GenresSection/ # Секция жанров
        │       │   ├── index.ts
        │       │   ├── GenresSection.module.css
        │       │   └── GenresSection.tsx
        │       ├── RatingSlider/  # Слайдер рейтинга
        │       │   ├── index.ts
        │       │   ├── RatingSlider.module.css
        │       │   └── RatingSlider.tsx
        │       └── SortBy/        # Сортировка
        │           ├── index.ts
        │           ├── SortBy.module.css
        │           └── SortBy.tsx
        ├── MainPage/              # Главная страница
        │   ├── index.ts
        │   ├── MainPage.tsx
        │   ├── MoviesSection/     # Секция фильмов
        │   │   ├── index.ts
        │   │   └── MoviesSection.tsx
        │   └── WelcomeSection/   # Приветственная секция
        │       ├── index.ts
        │       ├── WelcomeSection.module.css
        │       └── WelcomeSection.tsx
        ├── MoviePage/             # Страница деталей фильма
        │   ├── index.ts
        │   ├── MoviePage.module.css
        │   ├── MoviePage.tsx
        │   ├── CastItem/          # Элемент актера
        │   │   ├── index.ts
        │   │   ├── CastItem.module.css
        │   │   └── CastItem.tsx
        │   ├── CastList/          # Список актеров
        │   │   ├── index.ts
        │   │   ├── CastList.module.css
        │   │   └── CastList.tsx
        │   ├── MovieInfo/         # Информация о фильме
        │   │   ├── index.ts
        │   │   ├── MovieInfo.module.css
        │   │   └── MovieInfo.tsx
        │   └── SimilarMovies/     # Похожие фильмы
        │       ├── SimilarMovies.module.css
        │       └── SimilarMovies.tsx
        ├── NotFoundPage/          # Страница 404
        └── SearchPage/            # Страница поиска
            ├── index.ts
            ├── SearchPage.module.css
            ├── SearchPage.tsx
            └── LoadingTrigger/    # Триггер загрузки (infinite scroll)
                ├── index.ts
                ├── LoadingTrigger.module.css
                └── LoadingTrigger.tsx
```

## 🛠 Установка и запуск

### Требования
- Node.js (рекомендуется версия 18+)
- pnpm (менеджер пакетов)

### Установка зависимостей

```bash
pnpm install
```

### Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env.local
VITE_BASE_URL=https://api.themoviedb.org/3/
VITE_ACCESS_TOKEN=your_tmdb_api_token_here
```

Для получения API токена:
1. Зарегистрируйтесь на [TMDB](https://www.themoviedb.org/)
2. Перейдите в настройки аккаунта → API
3. Создайте API ключ (API Read Access Token)
4. Добавьте токен в `.env` файл

### Запуск в режиме разработки

```bash
pnpm dev
```

Приложение будет доступно по адресу `http://localhost:5173`

### Сборка для production

```bash
pnpm build
```

Собранные файлы будут находиться в папке `dist/`

### Предпросмотр production сборки

```bash
pnpm preview
```

### Линтинг

```bash
pnpm lint
```

## 🎯 Основные возможности

### Главная страница
- Приветственная секция с случайными backdrop изображениями
- Секции фильмов:
  - Популярные фильмы
  - Топ рейтинг фильмов
  - Предстоящие фильмы
  - Фильмы в прокате

### Поиск фильмов
- Поиск по названию с debounce
- Бесконечная прокрутка (infinite scroll)
- Пагинация результатов

### Фильтрация фильмов
- Фильтрация по жанрам (множественный выбор)
- Фильтрация по рейтингу (slider)
- Сортировка по различным параметрам:
  - Популярность
  - Название
  - Доход
  - Дата релиза
  - Оригинальное название
  - Средний рейтинг
  - Количество голосов

### Страница фильма
- Детальная информация о фильме
- Список актеров (cast)
- Похожие фильмы
- Кнопка добавления в избранное

### Избранное
- Сохранение избранных фильмов в localStorage
- Просмотр списка избранных фильмов
- Удаление из избранного

### Темная/светлая тема
- Переключение темы через кнопку в хедере
- Сохранение выбранной темы в localStorage

## 🔧 API Endpoints

Приложение использует следующие endpoints TMDB API:

- `GET /movie/popular` — популярные фильмы
- `GET /movie/top_rated` — топ рейтинг фильмов
- `GET /movie/upcoming` — предстоящие фильмы
- `GET /movie/now_playing` — фильмы в прокате
- `GET /discover/movie` — фильтрованные фильмы
- `GET /search/movie` — поиск фильмов
- `GET /movie/{id}` — детали фильма
- `GET /movie/{id}/credits` — актеры фильма
- `GET /movie/{id}/similar` — похожие фильмы
- `GET /genre/movie/list` — список жанров
- `GET /configuration` — конфигурация API (URL изображений)

## 📝 Особенности реализации

### Архитектура проекта
- **Feature-Sliced Design** — разделение на `app`, `features` и `common`
- **Barrel exports** — каждый модуль имеет `index.ts` для централизованного экспорта
- **CSS Modules** — каждый компонент имеет свой `.module.css` файл
- **Типобезопасность** — все компоненты и функции типизированы через TypeScript

### RTK Query
- Использование RTK Query для всех API запросов
- Infinite queries для пагинации (через утилиту `createInfiniteMoviesQuery`)
- Автоматическое кеширование данных
- Валидация ответов API с помощью Zod
- Базовый API клиент в `app/api/baseApi.ts` с настройками для TMDB API

### Валидация данных
- Все ответы API валидируются через Zod схемы
- Типобезопасность на уровне TypeScript

### Оптимизация производительности
- Debounce для поиска (через хук `useDebounceValue`)
- Lazy loading изображений (компонент `Image`)
- Skeleton компоненты для улучшения UX
- Infinite scroll для больших списков (через хук `useInfiniteScroll` и `createInfiniteMoviesQuery`)
- Кеширование данных через RTK Query

### Доступность (Accessibility)
- ARIA атрибуты на интерактивных элементах
- Семантическая HTML разметка
- Поддержка клавиатурной навигации

## 🎨 Стилизация

- **CSS Modules** для компонентной стилизации
- **Material UI** для базовых компонентов
- **Emotion** для динамических стилей
- Кастомные CSS переменные в `variables.css`
- Анимации в `animations.css`

## 📦 Хранение данных

- **Redux Store** — кеширование API данных
- **localStorage** — избранные фильмы и тема

## 🔐 Безопасность

- API токен хранится в переменных окружения
- Токен не коммитится в репозиторий
- Валидация всех входящих данных через Zod

## 🚧 Разработка

### Добавление нового endpoint

1. Добавьте endpoint в `src/features/api/moviesApi.ts`
2. Создайте Zod схему в `src/features/model/movies.schemas.ts`
3. Добавьте типы в `src/features/api/moviesApi.types.ts`
4. Если нужна infinite pagination, используйте утилиту `createInfiniteMoviesQuery` из `src/common/utils/createInfiniteMoviesQuery.ts`
5. Экспортируйте хук для использования в компонентах

### Добавление новой страницы

1. Создайте компонент страницы в `src/features/ui/`
2. Создайте `index.ts` файл для экспорта компонента
3. Добавьте маршрут в `src/common/routing/Routing.tsx`
4. Добавьте путь в `src/common/types/types.ts` (в объект `PagePaths`)
5. При необходимости добавьте навигационный элемент в `src/common/constants/constants.ts` (в массив `NavItems`)

## 📄 Лицензия

Проект создан в образовательных целях.

---

**Примечание**: Для работы приложения необходим валидный API токен TMDB. Без токена приложение не сможет загружать данные о фильмах.
