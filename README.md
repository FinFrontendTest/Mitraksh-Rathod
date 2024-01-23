# Finzome Technologies assignment

This project demonstrates a React application with a form that collects user information and displays it in a table. Users can edit and delete entries.


1. **Form with Fields:**
   - Name (Text)
   - Email (Email)
   - Contact (Number)
   - Weekdays (Monday to Friday Checkbox)
   - Gender (Male and Female Radio)
   - Date of Birth (Calendar Date Picker)

2. **Table on Form Submission:**
   - Table columns match the form fields: [S.No, Name, Contact, Email, Weekday, Gender, DOB, Action]
   - Edit and Delete buttons for each row.

3. **Edit Modal:**
   - Opens on clicking the Edit button in the table.
   - Allows updating row values and saves changes on submission.

4. **CSS Styling:**
   - Utilizes CSS modules or styled components for styling.
   - Ensures a consistent design across components.

5. **Functional Components and Hooks:**
   - Prefers functional components and hooks for state management and side effects.
   - Avoids wasteful re-renders of components.

6. **Error Handling:**
   - Implements error handling for form submissions and data updates.

## Getting Started

## Install dependencies
    - npm install

## Run development server
    - npm start

## Project structure
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Form.js
│   │   ├── Table.js
│   │   ├── EditModal.js
│   ├── App.js
│   ├── App.css
├── package.json
├── README.md


## Usage
 - Fill out the form fields and submit.
 - The submitted data will appear in the table.
 - Click the "Edit" button to edit a row.
 - Click the "Delete" button to delete a row.

## Technologies Used
 - React.js
 - Node.js for running on local server
 - CSS Modules or Styled Components
 - Other dependencies as specified in package.json
