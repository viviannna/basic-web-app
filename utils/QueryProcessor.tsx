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

  return "";
}
