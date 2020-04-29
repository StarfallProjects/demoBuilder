---
title: Square button help
---

To add a square button to a `.md` or `.njk` file, use the `squareButton` Nunjucks shortcode. It takes the following parameters:

* Title: the main title of the button
* Info: a short description
* Target: the file that should open when a user clicks the button
* {% include "../snippets/help-target.md" %}

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