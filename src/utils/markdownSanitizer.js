const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const turndown = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new turndown();

    //Step 1 : Convert markdown to Html
    const convertedHtml = marked.parse(markdownContent);

    //Step 2 : Sanitizing the converted Html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags : sanitizeHtmlLibrary.defaults.allowedTags
    });
    
    //Step 3 : Convert Html to markdown
    const sanitizedmarkdown = turndownService.turndown(sanitizedHtml); 
    return sanitizedmarkdown;
}

module.exports = sanitizeMarkdownContent;