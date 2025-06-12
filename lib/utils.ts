
// This file contains utility functions for various purposes.

// Function to check if a string is a valid URL
export const isValidImageUrl = (url?: string) => {
    const isValid = typeof url === "string" && (url.startsWith("http://") || url.startsWith("https://"));
    if (!isValid) {
        return '/placeholder.png'; // Fallback image
    }
    return url;
}
