# Hidden Practice

Static HTML website exported from Webflow.io

## Re-importing from webflow procedure

After re-importing content from webflow you will need to 

### 1. Change image formats
Bulk search and replace the following texts in all files:
`.png` -> `.webp`
`.jpg` -> `.webp`

except the favicon/weblip in the html <head>

### 2. Re-generate the css file
Use a simple .scss compiler such as [SASS compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) for `styles.min.scss` -> `styles.min.css` and make sure to minify the resulting file

### 3. Re-generate the js file
Copy the content of the folloing files
`webflow.js` + `custom.js` -> `scripts.min.js` and minify it
