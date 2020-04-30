---
title: Quickstart
description: Get your project up and running
layout: layouts/website.njk
eleventyNavigation:
  key: Quickstart
  order: 200
---

{% alignLeft %}

## Prerequisites

A recent version of Node and npm. This project is currently tested with Node 12.16.1.

## Install and run
``` shell
# Clone the GitHub repo
git clone https://github.com/StarfallProjects/demoBuilder.git

# Navigate into the project directory
cd demoBuilder

# Install dependencies
npm i

# Serve the project locally at localhost:8080
npm start
```

## Customise

1. Amend `_data/site.js` to include your site info.
2. The project includes the content for this website. It gives you a full example to work from. Go ahead and delete any bits you don't need. You must keep the `csh` directory, or amend the `helpIcon.js` script.


{% endalignLeft %}