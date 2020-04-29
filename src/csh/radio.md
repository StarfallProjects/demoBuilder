---
title: Radio form help
---

To add a radio button form to a `.md` or `.njk` file, use the `radio` Nunjucks shortcode. It takes the following parameters:

* Label: the form label
* Value: the input value
* Target: the file that should open when a user clicks submit
* {% include "../snippets/help-target.md" %}

## Example:

{% raw %}
``` js
{% form 
"Radio label", 
"Value", 
"website/radio-target", 
"radio" %}
```
{% endraw %}