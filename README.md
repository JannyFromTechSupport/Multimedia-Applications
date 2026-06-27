# Repository for Multimedia Applications CAT 2 

A web page built for **CAT 2** in Multimedia Applications, for a conservation organisation wanting to publish a promotional video on its website. 

## Overview 

The page is styled as a **field researcher's notebook entry:** aged paper texture, typewriter type, and a hand-tagged "specimen" treatment for the video rather than a conventional marketing layout. 

## Features 

- **Heading -** "Save Our Wildlife" displayed prominently on the page. 
- **Embedded video -** `wildlife.mp4` embedded with full playback controls, a poster image, and a captions track. 
- **Description -** a short write-up beneath the video explaining the footage and its context. 
- **Toggle button -** a single button that hides the video if it's playing/visible, or shows and plays it if it isn't. 
- **Accessibility -** skip-to-content link, visible focus states, `aria-pressed` on the toggle button, semantic landmarks, and support for `prefers-reduced-motion`/`prefers-contrast`. 
- **Responsive design -** fluid typography and a mobile breakpoint that adapts the layout and button for smaller screens. 

## File Structure 

``` 
├── index.html      # Page markup 
├── style.css       # Styling (field-notebook theme) 
├── script.js       # Toggle button logic 
└── wildlife.mp4    # Video file (add your own) 
``` 

## Usage 

1. Clone the repository. 
2. Place your `wildlife.mp4` file in the root folder, alongside `index.html`. 
3. Open `index.html` in a browser, or deploy via GitHub Pages. 

## Live Demo 

https://jannyfromtechsupport.github.io/Multimedia-Applications/ 

## Author 

Janny Jonyo - 4th Year Computer Science Student @ Strathmore University 
