# Days Lived Calculator (Flask App)

## Description
This Flask web application calculates the total number of days a user has lived based on their date of birth. The user enters their name and birth date, and the app returns the number of days they have been alive.

## Features
- Simple and user-friendly interface
- Date input validation
- Displays the number of days lived
- Styled with CSS for a better user experience
- JavaScript form validation for required fields

## Technologies Used
- Python (Flask)
- HTML (Jinja templates)
- CSS
- JavaScript

## Installation and Setup
### Prerequisites
- Python 3 installed
- Flask installed (`pip install flask`)

### Steps
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/days-lived-calculator.git
   cd days-lived-calculator
   ```
2. Install dependencies:
   ```sh
   pip install flask
   ```
3. Run the application:
   ```sh
   python app.py
   ```
4. Open a browser and go to:
   ```sh
   http://127.0.0.1:5000/
   ```

## Project Structure
```
/your_project
│── app.py
│── /templates
│   ├── index.html
│   ├── result.html
│── /static
│   ├── styles.css
│   ├── script.js
│── README.md
```

## Usage
1. Enter your name.
2. Provide your date of birth in YYYY-MM-DD format.
3. Click the "Calculate" button to see the number of days you have lived.
