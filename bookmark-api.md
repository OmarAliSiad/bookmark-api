# 📚 Bookmark API

A RESTful API built with **NestJS** for managing bookmarks. This guide covers how to run the project and test all endpoints using **Postman**.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run the server

```bash
# development
npm run start

# watch mode (recommended)
npm run start:dev
```

The server runs on **`http://localhost:3000`** by default.

---

## 📌 Base URL

```
http://localhost:3000
```

---

## 🔖 Bookmark Endpoints

All bookmark endpoints are prefixed with `/books`.

---

### 1. Get All Bookmarks

| Field  | Value    |
|--------|----------|
| Method | `GET`    |
| URL    | `/books` |

**Postman Setup:**
- Set method to **GET**
- URL: `http://localhost:3000/books`
- No body required

**Success Response `200 OK`:**
```json
[
  {
    "id": "0b3f7534-8f3d-4615-b9dd-89867910d5f4",
    "url": "meduim.com",
    "title": "nestJs",
    "description": "learingnestJs",
    "tags": "[udemy,coursera]",
    "createdAt": "2026-03-02T01:31:04.726Z"
  }
]
```

**Error Response `404 Not Found`:**
```json
{
    "message": "No bookmarks found",
    "error": "Not Found",
    "statusCode": 404
}
```

---

### 2. Get Bookmark by ID

| Field  | Value        |
|--------|--------------|
| Method | `GET`        |
| URL    | `/books/:id` |

**Postman Setup:**
- Set method to **GET**
- URL: `http://localhost:3000/books/YOUR_BOOKMARK_ID`

**Success Response `200 OK`:**
```json
{
  "id": "0b3f7534-8f3d-4615-b9dd-89867910d5f4",
  "url": "meduim.com",
  "title": "nestJs",
  "description": "learingnestJs",
  "tags": "[udemy,coursera]",
  "createdAt": "2026-03-02T01:31:04.726Z"
}
```

**Error Response `404 Not Found`:**
```json
{
  "message": "Bookmark with id 0b3f7534-8f3d-4615-b9dd-89867910d5f not found",
  "error": "Not Found",
  "statusCode": 404
}
```

---

### 3. Create a Bookmark

| Field        | Value              |
|--------------|--------------------|
| Method       | `POST`             |
| URL          | `/books`           |
| Content-Type | `application/json` |

**Postman Setup:**
- Set method to **POST**
- URL: `http://localhost:3000/books`
- URL: `http://localhost:3000/books`
- Go to **Body** → select **Body** → choose **x--www-form-urlencoded**
- Or Go to **Body** → select **row** 

**Request Body:**
```json
{
    "url": "meduim.com",
    "title": "nestJs",
    "description": "learingnestJs",
    "tags": "[udemy,coursera]",
}
```

> **Required fields:** `url`, `title`  
> **Optional fields:** `description`, `tags`

**Success Response `201 Created`:**
```json
{
    "id": "da3e1dfc-e06c-48a1-9796-e9f75d3f43df",
    "url": "meduim.com",
    "title": "nestJs",
    "description": "learingnestJs",
    "tags": "[udemy,coursera]",
    "createdAt": "2026-03-02T01:33:22.300Z"
}
```

---

### 4. Update a Bookmark

| Field        | Value              |
|--------------|--------------------|
| Method       | `PATCH`            |
| URL          | `/books/:id`       |
| Content-Type | `application/json` |

**Postman Setup:**
- Set method to **PATCH**
- URL: `http://localhost:3000/books/YOUR_BOOKMARK_ID`
- Go to **Body** → select **raw** → choose **JSON**

**Request Body (all fields are optional):**
```json
{
  "url": "meduim.com",
  "title": "python",
  "description": "learing python",
  "tags": ["udemy", "coursera"]
}
```

> You can send **one or more** fields. Only the provided fields will be updated.

**Success Response `200 OK`:**
```json
{
  "id": "da3e1dfc-e06c-48a1-9796-e9f75d3f43df",
  "url": "meduim.com",
  "title": "python",
  "description": "learing python",
  "tags": ["udemy", "coursera"],
  "createdAt": "2026-03-02T10:00:00.000Z"
}
```

**Error Response `404 Not Found`:**
```json
{
  "message": "Bookmark with id da3e1dfc-e06c-48a1-9796-e9f75d3f43df not found",
  "error": "Not Found",
  "statusCode": 404
}
```

---

### 5. Delete a Bookmark

| Field  | Value        |
|--------|--------------|
| Method | `DELETE`     |
| URL    | `/books/:id` |

**Postman Setup:**
- Set method to **DELETE**
- URL: `http://localhost:3000/books/YOUR_BOOKMARK_ID`
- No body required

**Success Response `200 OK`:**
```
Bookmark with id YOUR_ID deleted successfully
```

**Error Response `404 Not Found`:**
```json
{
  "message": "Bookmark with id da3e1dfc-e06c-48a1-9796-e9f75d3f43df not found",
  "error": "Not Found",
  "statusCode": 404
}
```

---

## 📋 Endpoints Summary Table

| #  | Method   | Endpoint     | Description             |
|----|----------|--------------|-------------------------|
| 1  | `GET`    | `/books`     | Get all bookmarks       |
| 2  | `GET`    | `/books/:id` | Get a bookmark by ID    |
| 3  | `POST`   | `/books`     | Create a new bookmark   |
| 4  | `PATCH`  | `/books/:id` | Update a bookmark by ID |
| 5  | `DELETE` | `/books/:id` | Delete a bookmark by ID |

---

## 🗂️ Bookmark Data Model

| Field         | Type       | Required | Description                    |
|---------------|------------|----------|--------------------------------|
| `id`          | `string`   | Auto     | UUID generated automatically   |
| `url`         | `string`   | ✅ Yes   | The URL of the bookmarked site |
| `title`       | `string`   | ✅ Yes   | Title of the bookmark          |
| `description` | `string`   | ❌ No    | Short description              |
| `tags`        | `string[]` | ❌ No    | Array of tags                  |
| `createdAt`   | `Date`     | Auto     | Timestamp set on creation      |

---

## 🛠️ Quick Postman Workflow

1. **Start the server** → `npm run dev`
2. **Create a bookmark** → `POST /books` with a JSON body
3. **Copy the `id`** from the response
4. **Get it** → `GET /books`
5. **Get it** → `GET /books/{id}`
6. **Update it** → `PATCH /books/{id}` with updated fields
7. **Delete it** → `DELETE /books/{id}`
8. **List all** → `GET /books`

---

## 📬 contact 

-  ![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=flat&logo=gmail&logoColor=white) omaraliabdealziz@gmail.com
- ![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=flat&logo=whatsapp&logoColor=white) https://wa.link/92lyuj
