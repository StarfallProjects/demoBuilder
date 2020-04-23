const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
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
    eleventyConfig.addNunjucksShortcode("demoNote", function(note) {
        return `<div class="demoNote">${note}</div>`;
    });

    // Dates
    eleventyConfig.addFilter('htmlDateString', dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });
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