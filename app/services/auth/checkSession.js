/**
 * Validates a session cookie timestamp to ensure it's within the 1-hour expiration window.
 * @param {string | undefined} cookieValue - The cookie value containing the timestamp
 * @returns {boolean} True if session is valid (within 1 hour), false otherwise
 */
export function checkSession(cookieValue) {
  if (!cookieValue) {
    return false;
  }

  try {
    // Cookie format: timestamp (Unix epoch in milliseconds or ISO string)
    const timestamp = parseInt(cookieValue, 10);
    
    if (isNaN(timestamp)) {
      return false;
    }

    const now = Date.now();
    const sessionAge = now - timestamp;
    const oneHourInMs = 60 * 60 * 1000; // 1 hour in milliseconds

    return sessionAge >= 0 && sessionAge < oneHourInMs;
  } catch (error) {
    return false;
  }
}

