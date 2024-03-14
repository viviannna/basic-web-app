

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

  /** Largest number */
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

  /** Sum */
  const regex = /What is (\d+) plus (\d+)/i;
  const match = query.match(regex);

  if (match !== null) {
    const number1 = parseInt(match[1]);
    const number2 = parseInt(match[2]);
    
    const sum = number1 + number2;
    return sum.toString(); // Return the sum as a string
  } 

    /** Mult */
  const regex_mul = /what is (\d+) multiplied by (\d+)\?/i;
  const match_mul = query.match(regex);

    if (match_mul !== null) {
      const number1 = parseInt(match_mul[1]);
      const number2 = parseInt(match_mul[2]);
      
      const product = number1 * number2;
      return product.toString(); // Return the product as a string
    } 


  return "";
}
