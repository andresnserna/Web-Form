# Web Form & DOM Manipulation

**Web Form** is a collection of JavaScript exercises demonstrating dynamic HTML content manipulation through the Document Object Model (DOM). These projects showcase fundamental and advanced DOM techniques including element selection, styling, dynamic content generation, and JSON data parsing.

> _This project was created as part of **Web Programming 2328 (Spring 2025)** at **St. Edward's University**._


## Overview

This repository contains two comprehensive lab exercises that progress from basic DOM manipulation to advanced dynamic content generation. The exercises demonstrate real-world web development techniques including accessing elements, modifying styles, creating elements programmatically, and rendering JSON data as interactive gallery layouts.


## Projects

### Lab 07 - Exercise 03: Basic DOM Manipulation
A form-based interface demonstrating fundamental DOM selection and manipulation techniques.

### Lab 07 - Exercise 04: Dynamic Photo Gallery
A responsive photo gallery that dynamically generates content from JSON data, complete with image cards, captions, and color scheme displays.


## Features

### Exercise 03: DOM Fundamentals

- **Element Selection Methods**
  - `getElementById()` for direct element access
  - `getElementsByTagName()` for element collection
  - `querySelector()` for CSS selector-based selection
  - `querySelectorAll()` for multiple element selection

- **Style Manipulation**
  - Dynamic border styling on thumbnail lists
  - Box shadow effects applied to multiple images
  - CSS property modification via JavaScript

- **Content Manipulation**
  - Text extraction from paragraph elements
  - Dynamic value assignment to form inputs
  - Reading and writing to textarea elements

- **Visual Features**
  - Styled form with labels and inputs
  - Thumbnail image gallery
  - Responsive flexbox layout
  - Custom box shadows and color schemes

### Exercise 04: Dynamic Content Generation

- **JSON Data Parsing**
  - Parses complex JSON structure with photo metadata
  - Extracts location, color, and description data
  - Handles arrays of objects with nested properties

- **Dynamic Element Creation**
  - Programmatic `<figure>` element generation
  - Image element creation with src and alt attributes
  - Caption generation with headers and paragraphs
  - Text node creation for content

- **Color Scheme Display**
  - Extracts hex color values from photo metadata
  - Creates visual color swatches
  - Displays dominant colors for each image

- **Responsive Grid Layout**
  - CSS Grid with auto-fill columns
  - Minimum 350px column width with flexible 1fr sizing
  - 40px gap between grid items
  - Adapts to various screen sizes

- **Photo Gallery Features**
  - Three featured locations: British Museum, Emirates Stadium, Albert Hall
  - Rich descriptions with historical context
  - Location metadata (country, city, coordinates)
  - Color palette extraction (5 colors per image with names)


## How to Run

### Exercise 03 - Basic DOM Manipulation

1. Open `lab07-ex03-complete.html` in a web browser
2. The page will automatically execute the JavaScript:
   - Blue dashed border appears around thumbnail list
   - Sample text populates the textarea
   - Purple box shadows appear on thumbnail images

**No user interaction required** - all changes happen on page load via deferred script execution.

### Exercise 04 - Dynamic Photo Gallery

1. Ensure the following files are in your project structure:
   ```
   /images/
       5855729828.jpg
       5855735700.jpg
       5855174537.jpg
   /js/
       photos.json
       lab07-ex04-complete.js
   /css/
       lab07-ex04.css
   lab07-ex04-complete.html
   ```

2. Open `lab07-ex04-complete.html` in a web browser
3. The gallery will automatically generate from JSON data
4. Each photo card displays:
   - Image
   - Title (h2)
   - Description paragraph
   - Five color swatches representing the image's color palette

### Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely client-side
- JavaScript must be enabled


## Technical Implementation

### Exercise 03: DOM Selection Patterns

```javascript
// Direct ID selection
document.getElementById("thumb-list")

// Tag name collection
document.getElementsByTagName("p")[0]

// CSS selector
document.querySelector("#msg")

// Multiple elements
document.querySelectorAll("ul img")
```

### Exercise 04: Dynamic Creation Pipeline

**Data Flow:**
1. JSON string → parsed to JavaScript object array
2. Loop through each photo object
3. Create `<figure>` container
4. Call helper functions to build child elements
5. Append completed figure to parent grid

**Helper Function Architecture:**
- `createImage()` - Builds `<img>` with src and alt
- `createHeader()` - Builds `<h2>` with title text node
- `createParagraph()` - Builds `<p>` with description text node
- `createCaption()` - Assembles `<figcaption>` with header, paragraph, colors
- `createColorScheme()` - Loops through colors array, creates `<span>` swatches


## CSS Techniques Used

### Exercise 03
- Flexbox centering (both axes)
- Box shadows with RGBA transparency
- Form element styling with border-radius
- Display block for label/input stacking
- Inline-block for horizontal thumbnail layout

### Exercise 04
- CSS Grid with `repeat(auto-fill, minmax())` for responsive columns
- Google Fonts integration (Oswald)
- Font weight variations (300, 500)
- Fixed-size color swatches (60x60px)
- Grid gap for spacing


## Tech Stack

- **Languages:** HTML5, CSS3, JavaScript (ES6+)
- **DOM APIs:** 
  - Element selection (getElementById, querySelector, querySelectorAll)
  - Element creation (createElement, createTextNode)
  - Style manipulation (element.style)
  - Content manipulation (textContent, appendChild)
- **Data Format:** JSON
- **Layout:** Flexbox (Ex03), CSS Grid (Ex04)
- **Fonts:** Google Fonts (Open Sans, Oswald)


## What I Learned

- **DOM Traversal:** Multiple methods for selecting elements with different use cases
- **Dynamic Content Generation:** Building complete HTML structures programmatically
- **JSON Parsing:** Converting stringified JSON to usable JavaScript objects
- **Separation of Concerns:** Helper function design for modular, reusable code
- **ES6 Features:** `const`, `let`, for-of loops, template literals
- **Event Timing:** Using `defer` attribute for proper script loading
- **CSS Grid:** Modern responsive layout with auto-fill and minmax
- **Color Manipulation:** Working with hex color values in JavaScript
- **Text Nodes:** Understanding the difference between innerHTML and text node creation
- **Functional Decomposition:** Breaking complex tasks into small, focused functions


## Key Learning Concepts

### Exercise 03 Focus
- Basic DOM manipulation
- Element selection strategies
- Style property modification
- Content reading and writing

### Exercise 04 Focus
- Programmatic element creation
- JSON data parsing and iteration
- Nested object property access
- Dynamic attribute assignment
- Building complex DOM structures from data


## Notes

These projects were built for academic purposes to demonstrate:
- Progressive DOM manipulation skills
- Transition from basic selection to advanced creation
- Real-world data handling with JSON
- Modern CSS layout techniques
- Functional programming patterns in JavaScript
- Separation of data and presentation

The exercises showcase a typical progression in web development education: starting with manipulating existing elements and advancing to generating complete interfaces from structured data.
