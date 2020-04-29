---
title: Form help
---

To add a form to a `.md` or `.njk` file, use the `form` Nunjucks shortcode. It takes the following parameters:

* Label: the form label
* Value: the input value
* Target: the file that should open when a user clicks submit
* {% include "../snippets/help-target.md" %}

## Example:

{% raw %}
``` js
{% form 
"Label", 
"Value", 
"website/form-target", 
"form" %}
```
{% endraw %}