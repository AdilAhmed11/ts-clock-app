# 🕒 Digital Clock – Level 1 Project

A simple digital clock built using TypeScript. This project is part of a progressive learning path designed to incrementally build my front-end and full-stack development skills.

## 📌 Project Goals

-   Build a functional digital clock using TypeScript.
-   Display the current time in HH:MM:SS format.
-   Update the time every second.
-   Strengthen confidence in basic DOM manipulation and time-based logic.

## 🧠 Concepts Used / Learned

-   Working with the **Date object** in TypeScript.
-   Using **`setInterval()`** to update content in real time.
-   Selecting and modifying HTML elements using the **DOM API**.
-   Understanding how to structure a basic HTML/CSS/JS project.
-   Writing clean, modular TypeScript.

## 📁 Technologies Used

-   HTML
-   CSS
-   JavaScript (Vanilla)

## 📸 Preview

_To be added once project is complete_

## 🗂️ Project Structure (Step-by-Step Plan)

### **Step 1: Setup**

> Create the project folder and basic files.

-   Create `index.html`, `style.css`, and `script.js`.
-   Link the CSS and JS files in your HTML.
-   Add a placeholder `<div>` or `<span>` to show the time.

### **Step 2: Get the Current Time**

> Write a function that gets the current hour, minute, and second.

-   Use the `Date` object.
-   Format the time to always show two digits (e.g., 08:05:03).

### **Step 3: Display the Time in the DOM**

> Output the formatted time string inside your placeholder element.

-   Select the element using `document.getElementById` or `querySelector`.
-   Set its `.innerText` or `.textContent`.

### **Step 4: Update the Time Every Second**

> Use `setInterval()` to call your update function every 1000 milliseconds.

-   Ensure the time updates in real time without refreshing the page.

### **Step 5: Styling**

> Make it look nice.

-   Center the clock on the page using CSS.
-   Choose a readable font and pleasant color scheme.

---

## 📝 Next Steps

-   Add 12hr/24hr toggle
-   Add dark/light mode
-   Add analog clock version

---

## ✅ Completion Checklist

-   [ ] Displays current time in HH:MM:SS format
-   [ ] Updates every second
-   [ ] Uses a separate TS file
-   [ ] Clean, readable layout
-   [ ] Bonus features (optional)

---

## 📖 Resources

-   ...
