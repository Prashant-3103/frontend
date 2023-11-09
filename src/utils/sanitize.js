import DOMPurify from 'dompurify';

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
  if (typeof window !== 'undefined' && window.DOMPurify) {
    // Check if window object is defined and DOMPurify is available (indicating browser environment)
    return window.DOMPurify.sanitize(content);
  } else if (typeof DOMPurify !== 'undefined') {
    // Check if DOMPurify is available (indicating Node.js environment)
    return DOMPurify.sanitize(content);
  }
  // For other environments, return content as it is
  return content;
};

/**
 * Get Singular or plural text.
 *
 * @param {Int} count Count.
 * @param {String} text text.
 *
 * @returns {string} Singular or plural form of text.
 */
export const getSingularOrPluralText = (count, text) => {
  return count > 1 ? `${text}s` : text;
};
