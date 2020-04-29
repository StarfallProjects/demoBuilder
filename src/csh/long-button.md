---
title: Long button help
---

To add a long button to a `.md` or `.njk` file, use the `longButton` Nunjucks shortcode. It takes the following parameters:

* Title: the main title of the button
* Info: a short description
* Target: the file that should open when a user clicks the button
* {% include "../snippets/help-target.md" %}

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