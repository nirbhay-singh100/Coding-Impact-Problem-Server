const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  // 1. Convert markdown to html

  const convertedHtml = marked.parse(markdownContent);
  console.log("converted html: ", convertedHtml);

  // 2. Sanitize Html

  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat("img"),
  });

  console.log("sanitized html: ", sanitizedHtml);

  // 3. Converting sanitized Html to Markdow (because it is easy to edit markdown isntead of html)

  const turnedownService = new TurndownService();
  const sanitizedMarkdown = turnedownService.turndown(sanitizedHtml);

  console.log("sanitized markdow: ", sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
