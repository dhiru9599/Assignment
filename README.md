# 📨 Canary Mail Assignment – Backend

### 1. Clone the Repository

```bash
git clone https://github.com/dhiru9599/Assignment.git
cd Assignment/Frontend
```

### 2. install the dependencies

```bash
npm i
```

### 3. run the server

```bash
npm run dev
```




# 📨 Canary Mail Assignment – Backend


---

## 📦 Requirements

Make sure you have the following installed:

- Python 3.8 or higher
- `pip` (Python package installer)
- Git (to clone the repo)
- Virtualenv (recommended for environment isolation)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/dhiru9599/Assignment.git
cd Assignment/Backend
```

---

### 2. Set Up Virtual Environment

#### On Windows (PowerShell):

```bash
python -m venv venv
.env\Scripts\Activate.ps1
```

#### On macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` is missing or empty, generate it after installing packages:

```bash
pip freeze > requirements.txt
```

---

### 4. Apply Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

### 5. Create a Superuser (Optional)

To access Django's admin panel:

```bash
python manage.py createsuperuser
```

Follow the prompts to set username, email, and password.

---

### 6. Run the Development Server

```bash
python manage.py runserver
```

Visit your app at: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

## 🧭 Project Structure

```plaintext
Assignment/
└── Backend/
    ├── manage.py
    ├── requirements.txt
    ├── venv/
    ├── todo_backend/
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    └── your_apps/
        └── ...
```

---

## 🧪 Running Tests

```bash
python manage.py test
```

---

## 🛠 Useful Commands

| Command                            | Description                        |
|-----------------------------------|------------------------------------|
| `python manage.py runserver`      | Start the development server       |
| `python manage.py makemigrations` | Create migration files             |
| `python manage.py migrate`        | Apply migrations to the database   |
| `python manage.py createsuperuser`| Create admin login credentials     |
| `python manage.py test`           | Run tests                          |

---

## ❓ Troubleshooting

- **Virtualenv not activating** (PowerShell):

  Run PowerShell as Administrator and set execution policy:

  ```powershell
  Set-ExecutionPolicy RemoteSigned
  ```

- **manage.py not found**:

  Ensure you're in the `Assignment/Backend` directory.

- **Missing packages**:

  Re-check `requirements.txt` or install missing packages manually, then regenerate:

  ```bash
  pip freeze > requirements.txt
  ```

---

## 📫 Contact

For questions or feedback, reach out to:

- GitHub: [https://github.com/dhiru9599](https://github.com/dhiru9599)
- Email: rajdhiraj1800@gmail.com

---
