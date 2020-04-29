---
title: Square button help
---

To add a square button to a `.md` or `.njk` file, use the `squareButton` Nunjucks shortcode. It takes the following parameters:

* Title: the main title of the button
* Info: a short description
* Target: the file that should open when a user clicks the button
* Help target: optional. The CSH file that should open when a user clicks the help icon. If you do not include this parameter, the help icon does not display.

## Example:

{% raw %}
``` js
{% squareButton 
"Square button", 
"Button description", 
"website/square-button-landing-page", 
"square-button" %}
```
{% endraw %}