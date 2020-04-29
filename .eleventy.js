const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(syntaxHighlight, {
        alwaysWrapLineHighlights: true,
    });
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.setDataDeepMerge(true);

    // Element shortcodes
    eleventyConfig.addNunjucksShortcode("squareButton", function(title, info, target, helpTarget) { 
        if(helpTarget != null){
            return `<div class="squareButton"><span class="helpIcon" id=${helpTarget}>?</span><a href=${target} class="squareButtonTitle">${title}</a><p class="squareButtonInfo">${info}</p></div>`;
            } else {
                return `<div class="squareButton"><a href=${target} class="squareButtonTitle">${title}</a><p class="squareButtonInfo">${info}</p></div>`;
            }
    });
    eleventyConfig.addNunjucksShortcode("longButton", function(title, info, target, helpTarget) { 
        if(helpTarget != null){
        return `<div class="longButton"><span class="helpIcon" id=${helpTarget}>?</span><a href=${target} class="longButtonTitle">${title}</a><p class="longButtonInfo">${info}</p></div>`;
        } else {
            return `<div class="longButton"><a href=${target} class="longButtonTitle">${title}</a><p class="longButtonInfo">${info}</p></div>`;
        }
    });
    eleventyConfig.addNunjucksShortcode("form", function(label, value, target, helpTarget){
        if(helpTarget != null){
            return `<div class="formWrapper"><span class="helpIcon" id=${helpTarget}>?</span><form action=${target}>
            <label>${label}</label>
            <input type="text" value=${value}>
            <input type="submit" value="Submit">
        </form></div>`;
        } else {
            return `<div class="formWrapper"><form action=${target}>
            <label>${label}</label>
            <input type="text" value=${value}>
            <input type="submit" value="Submit">
        </form></div>`;
        }
    });
    eleventyConfig.addNunjucksShortcode("checkbox", function(label, value, target, helpTarget){
        if(helpTarget != null){
        return `<div class="formWrapper"><span class="helpIcon" id=${helpTarget}>?</span><form class="checkbox" action=${target}>
        <label>${label}</label>
        <input type="checkbox" value=${value} checked="checked"><br />       
        <input type="submit" value="Submit">
      </form></div>`;
    } else {
        return `<div class="formWrapper"><form class="checkbox" action=${target}>
        <label>${label}</label>
        <input type="checkbox" value=${value} checked="checked"><br />       
        <input type="submit" value="Submit">
      </form></div>`
    }
    });
    eleventyConfig.addNunjucksShortcode("radio", function(label, value, target, helpTarget){
        if(helpTarget != null){
        return `<div class="formWrapper"><span class="helpIcon" id=${helpTarget}>?</span><form class="radio" action=${target}>
        <label>${label}</label>
        <input type="radio" value=${value} checked="checked"><br />      
        <input type="submit" value="Submit">
      </form></div>`;
    } else {
        return `<div class="formWrapper"><form class="radio" action=${target}>
        <label>${label}</label>
        <input type="radio" value=${value} checked="checked"><br />      
        <input type="submit" value="Submit">
      </form>`
    }
    });
    eleventyConfig.addPairedShortcode("demoNote", function(content) {
        return `<div class="demoNote">${content}</div>`;
    });

    // Dates
    eleventyConfig.addFilter("readableDate", dateObj => {
       return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addFilter("justTheYear", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
    });

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "dist"
        }
}

};