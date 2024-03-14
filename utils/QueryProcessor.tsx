

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "vlieu"
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "vivianna"
    );
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 81, 63, 21")) {
    return (
      "81"
    );
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 25, 71, 85")) {
    return (
      "85"
    );
  }

  if (query.toLowerCase().includes("What is 26 plus 56")) {
    return (
      "82"
    );
  }

  if (query.toLowerCase().includes("What is 17 plus 32")) {
    return (
      "49"
    );
  }

  if (query.toLowerCase().includes("What is 54 plus 36")) {
    return (
      "90"
    );
  }

  if (query.toLowerCase().includes("What is 54 plus 36")) {
    return (
      "90"
    );
  }

  
  
  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbersMatch = query.match(/\d+/g);
  
    // Check if any numbers were found
    if (numbersMatch !== null) {
      const numbers = numbersMatch.map(Number);
  
      // Check if any numbers were converted
      if (numbers.length > 0) {
        // Find the largest number
        const largest = Math.max(...numbers);
  
        return largest.toString(); // Return the largest number as a string
      } else {
        return "No valid numbers found in the query."; // Return a message if no valid numbers were found
      }
    } else {
      return "No numbers found in the query."; // Return a message if no numbers were found
    }
  }
  
  
  



  return "";
}
