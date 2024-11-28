
# **RBAC System (Role-Based Access Control)**

This is a simple and secure authentication and authorization system using Django, implementing **Role-Based Access Control (RBAC)**. Users can register, log in, and be assigned specific roles that determine their level of access within the system.

## **Features**

- **User Registration and Login**: Users can create an account and log in securely.
- **Role-Based Access Control (RBAC)**: Users are assigned different roles such as `Admin`, `User`, and `Moderator`. Access to certain resources is restricted based on the user's role.
- **Password Validation**: Passwords must meet certain security criteria like length, uppercase, lowercase, and number checks.
- **Session Management**: session-based management for handling user sessions.
- **Responsive Design**: The user interface adapts to both desktop and mobile screens.

## **Technologies Used**

- **Backend**: Django (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: Django’s built-in authentication system
- **Database**: SQLite (default) or any other database supported by Django
- **Security**: Password hashing, CSRF protection, and session management
- **Responsive Design**: Media queries for mobile responsiveness

## **Installation**

Follow the steps below to set up the project locally.

### **1. Clone the Repository**

Clone the repository to your local machine:

```bash
git https://github.com/chiranjivikeshav/Role-Based-Access-Control-RBAC.git
cd rbac-system
```

### **2. Set up a Virtual Environment (Recommended)**

Create a virtual environment to isolate the project's dependencies:

```bash
python -m venv venv
```

Activate the virtual environment:

- On Windows:
  ```bash
  venv\Scriptsctivate
  ```

- On Mac/Linux:
  ```bash
  source venv/bin/activate
  ```

### **3. Install Dependencies**

Install the required Python packages using pip:

```bash
pip install -r requirements.txt
```

### **4. Set Up the Database**

Run the migrations to set up your database:

```bash
python manage.py migrate
```

### **5. Create a Superuser (Admin User)**

To access the Django admin panel, create a superuser:

```bash
python manage.py createsuperuser
```

You will be prompted to enter a username, email, and password for the admin user.

### **6. Run the Server**

Start the Django development server:

```bash
python manage.py runserver
```

You can now access the application at `http://127.0.0.1:8000/`.

## **Endpoints**

- **Login**: ` ` – Users can log in with their credentials.
- **Register**: `/register/` – New users can create an account.
- **Logout**: `/logout/` – Log out and end the session.
- **Dashboard**: `/dashboard/` – The home page for authenticated users, with different views based on roles.

## **Roles and Permissions**

The system supports the following roles:

- **Admin**: Full access to all resources and administrative functionalities.
- **Moderator**: Limited access to manage content, but not as extensive as Admin.
- **User**: Basic access to the platform, without permissions for content management.

Role-based access is enforced using Django's permissions framework. Depending on the user’s assigned role, they will be able to access different views or perform actions (e.g., viewing the dashboard, managing content, etc.).

## **Frontend Design**

The frontend is styled with CSS for a clean and responsive layout. Key elements include:

- **Navigation Bar**: A sticky navbar with links to Login, Logout, and Dashboard pages.
- **Forms**: Forms for registration and login with real-time validation and password strength checks.
- **Responsive Design**: The layout is mobile-friendly, switching to a hamburger menu on smaller screens.

## **Security Features**

- **Password Hashing**: All passwords are securely hashed and stored in the database using Django’s default password hashing algorithm.
- **Session Management**: The system uses Django’s session management to keep users logged in across requests.
- **Cross-Site Request Forgery (CSRF)**: CSRF tokens are used for all forms to prevent malicious attacks.

## **Customization**

- **Roles**: You can easily add more roles by modifying the `role` field in the registration form and adding more permissions to the `User` model.
- **Access Control**: Use Django's `@permission_required` decorator or create custom permission checks in views to restrict access based on roles.

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new Pull Request.



