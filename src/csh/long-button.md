---
title: Long button help
---

To add a long button to a `.md` or `.njk` file, use the `longButton` Nunjucks shortcode. It takes the following parameters:

* Title: the main title of the button
* Info: a short description
* Target: the file that should open when a user clicks the button
* Help target: optional. The CSH file that should open when a user clicks the help icon. If you do not include this parameter, the help icon does not display.

## Example:

{% raw %}
``` js
{% longButton 
"Long button", 
"Button description", 
"website/long-button-landing-page", 
"long-button" %}
```
{% endraw %}