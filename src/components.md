---
title: Components
description: The components (shortcodes) provided by the template
layout: layouts/website.njk
eleventyNavigation:
  key: Components
  order: 300
---

## Buttons

{% squareButton "Square button", "Button description", "website/square-button-landing-page", "square-button" %}

{% longButton "Long button", "Button description", "website/long-button-landing-page", "long-button" %}

## Forms

{% form "Label", "Value", "website/form-target", "form" %}

{% checkbox "Checkbox label", "Value", "website/checkbox-target", "checkbox" %}

{% radio "Radio label", "Value", "website/radio-target", "radio" %}

## Other

{% demoNote %}
This is a note.

You can include normal markdown, like:

* Lists.
* **Bold**, _italics_ and so on.
{% enddemoNote %}