
# Procura Assignment

A simple **Node.js + Express + MongoDB** application for managing products.  
This project demonstrates CRUD operations, EJS templating, and MongoDB integration.

---

## Features

- Add, view, and list products.
- Store product details in MongoDB.
- Simple front-end using EJS templates.
- Sample data initialization script included.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating:** EJS
- **Other:** Mongoose for MongoDB modeling

---

## Project Structure

```

procura-assignmentcd/
│
├── app.js                 # Main application file
├── models/                # Mongoose schemas
│   └── product.js
├── views/                 # EJS templates
│   ├── products/
│   │   ├── index.ejs
│   │   └── show.ejs
│   └── new.ejs
├── init/                  # Database initialization scripts
├── package.json
└── package-lock.json

````

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NikhilRamteke82/assignment.git
cd assignment
````

2. Install dependencies:

```bash
npm install
```

3. Start MongoDB locally or use a MongoDB Atlas URI.

4. Initialize sample data (optional):

```bash
node init/index.js
```

5. Run the application:

```bash
node app.js
```

6. Open your browser and visit:

```
http://localhost:8080
```

---

## Usage

* `/products` → List all products
* `/products/new` → Add a new product
* `/products/:id` → View a single product

---

