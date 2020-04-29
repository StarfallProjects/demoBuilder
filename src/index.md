---
layout: layouts/website.njk
title: Create interactive demos with 11ty
description: Create interactive demos with 11ty
eleventyNavigation:
  key: Home
  order: 100
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