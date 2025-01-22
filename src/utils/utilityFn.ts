import axios from "axios";

export async function getRandomText() {
  try {
    const response = await axios.get(
      "https://random-data-api.com/api/lorem_ipsum/random_lorem_ipsum",
    );
    return response.data.paragraphs[0];
  } catch (error) {
    console.error("Error fetching random text:", error);
  }
}
export function generateRandomUsername() {
  const prefix = "user";
  const getRandomDigit = () => Math.floor(Math.random() * 10); // Generates a digit between 0-9
  const getRandomLetter = () =>
    String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Generates a lowercase letter a-z

  // Construct the username based on the pattern
  const username =
    prefix +
    getRandomDigit() +
    getRandomDigit() +
    getRandomDigit() +
    getRandomDigit() +
    getRandomDigit() +
    getRandomLetter() +
    getRandomLetter() +
    getRandomDigit() +
    getRandomLetter() +
    getRandomDigit();
  return username;
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard:", text);
  } catch (err) {
    console.error("Failed to copy text to clipboard:", err);
    throw err;
  }
}
export function parseFilters(filters: string): Record<string, string> {
  const result: Record<string, string> = {};
  const filterPairs = filters.split(",");

  filterPairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

export function unique(arr: any[]): any[] {
  return [...new Set(arr)];
}
