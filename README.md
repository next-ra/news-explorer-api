### Дипломная работа: backend для news-explorer-api

### v1.0.0

## Проект [api.news-explorer.tk](https://api.news-explorer.tk)

### Используемые технологии:

JS, GIT, node.js, express.js, mongoose, mongoDB

#### Начало работы:

Убедитесь, что у вас установлен `Node.js`.

Скопируйте проект:

```
git clone https://github.com/next-ra/news-explorer-api.git
```

Установите зависимости:

```
npm i
```

#### Используйте следующие команды:

Запуск сервера:

```
 npm run start
```

Запуск сервера с функцией "hot reload":

```
npm run dev
```

### Реализовано:

#### Создать пользователя

**POST** /signup

_Content-Type: application/json_

```
{
"name": "Zak De La Rocha",
"email": "Zak@yandex.ru",
"password": "password123"
}
```

#### Авторизация пользователя

**POST** /signin

_Content-Type: application/json_

```
{
  "email": "Zak@yandex.ru",
  "password": "password123"
}
```
#### Получить информацию о пользователе

**GET** /users/me 

#### Создать статью

**POST** /articles 

_Content-Type: application/json_

```
{
    "keyword" : "ключевое слово, по которому статью нашли"
    "title" : "заголовок статьи"
    "text" : "текст статьи"
    "date" : "дата статьи"
    "source" : "источник статьи"
    "link" : "ссылка на статью"
    "image" : "ссылка на иллюстрацию к статье"
    "owner" : "_id пользователя, сохранившего статью"
}
```

#### Удалить статью 

**DELETE** /articles/:id

#### Несуществующий адрес

**ALL** /abc_xyz