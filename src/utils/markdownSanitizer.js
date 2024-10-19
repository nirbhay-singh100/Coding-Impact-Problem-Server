const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  // 1. Convert markdown to html

  const convertedHtml = marked.parse(markdownContent);

  // 2. Sanitize Html

  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat("img"),
  });

  // 3. Converting sanitized Html to Markdow (because it is easy to edit markdown isntead of html)

  const turnedownService = new TurndownService();
  const sanitizedMarkdown = turnedownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
