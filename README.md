# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Sunyside Agency Desktop Screenshot](./screenshots/desktop_0.jpg)


### Links

- Solution URL: [Github Repo](https://github.com/5ett/sunnyside-agency-landing)
- Live Site URL: [Sunnyside Agency](https://sunnyside-agen-c.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Javascript

### What I learned

My CSS and HTML skills the past two or so years were not enough to breeze through this project. There were things I struggled with at first and later solved myself as well as things communities and forums provided me with.


Interestingly, in spite of my self-proclaimed love for CSS, this was the first time I was using multiple media queries. I had not even thought of it on any prior projects until now. It's a very neat trick.

```css
@media all and  ( max-width: 375px ) , ( max-width: 411px ) {
    footer .brand{
        margin-bottom: 0.5em;
    }
}  
```

I also liked to put SVG codes into the html structure in order to allow for almost complete CSS control but I found inverting animage tag with an SVG source works well with hovers and visual state changes

```css
.socials img:hover{
    filter: brightness(0) invert(1);
}
```

### Continued development

I understand that my adeptness at making responsive sites is lacking. This challenge was insighful and showed me even more new ways of using flexbox in positioning and controlling objects on a page.

### Useful resources

- [CSS Tricks](https://css-tricks.com) - I always find and, on this project, found a boat load of useful CSS "tricks" to make more responive components.
- [StackOverflow](https://stackoverflow.com) - from iverting colors on img svgs to manipulating background images for empty divs, Stackoverflow provided, well, almost anything. 

## Author

- Codersrank - [Praise M-K](https://profile.codersrank.io/user/5ett)
- Frontend Mentor - [@sanzenkuro](https://www.frontendmentor.io/profile/sanzenkuro)
- Twitter - [@sanzenkuro](https://www.twitter.com/sanzenkuro)

## Acknowledgments

I had a lot of help from the Stackoverflow Web Dev forums and questions. CSS Tricks' Chris Coyier was helpful with his articles on on CSS Media Queries and Using available space. 

