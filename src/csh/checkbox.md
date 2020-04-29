---
title: Checkbox form help
---

To add a checkbox form to a `.md` or `.njk` file, use the `form` Nunjucks shortcode. It takes the following parameters:

* Label: the form label
* Value: the input value
* Target: the file that should open when a user clicks submit
* {% include "../snippets/help-target.md" %}

## Example:

{% raw %}
``` js
{% checkbox 
"Checkbox label", 
"Value", 
"website/checkbox-target", 
"checkbox" %}
```
{% endraw %}