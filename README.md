# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [https://github.com/kachi33/interactive-card-details-form-main]()
- Live Site URL: [https://interactive-card-details-form-main-navy.vercel.app/]()

## My process

### Built with

- Semantic HTML5 markup
- Custom utility class along with standard built-in Tailwind CSS classes.
- Scaffolded using the Vite bundler for optimized loading and fast development
- Mobile-first workflow

### What I learned
- DOM Navigation and Manipulation - I learnt how to efficiently select and manipulate DOM elements using modern JavaScript methods.
- Dynamic CSS Class Management - I learnt how to programmatically add and remove CSS classes to create interactive UI states.
- CSS Custom Properties and Tailwind Configuration - I learnt how to extend Tailwind CSS with custom design tokens and create reusable utility classes.
- Advanced CSS Styling Techniques - I also learnt how to create complex visual effects like gradient borders and manage CSS specificity.
```css

#card-form input:focus {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box, 
              linear-gradient(135deg, var(--color-gradientStart), var(--color-gradientEnd)) border-box;
}
```

- Real-time Input Formatting and Validation - I learnt how to format user input in real-time while maintaining a good user experience.
- Form Validation with User Feedback - I learnt how to implement comprehensive form validation with clear error messaging and visual feedback.
- State Management in Vanilla JavaScript - I also learnt how to manage application state without frameworks, handling form resets and UI state transitions.

```js
// Clean state reset functionality
continueButton.addEventListener('click', () => {
    cardForm.reset();
    //.....
});
```
## Author

- Frontend Mentor - [@kachi33](https://www.frontendmentor.io/profile/kachi33)
- LinkedIn - [kachi Ezeah](https://www.linkedin.com/in/kachi33-ezeah/)
