/**
 * 面试题 17.13. Re-Space LCCI
 *
 * Oh, no! You have accidentally removed all spaces, punctuation, and capitalization in a lengthy document. A sentence like "I reset the computer. It still didn't boot!" became "iresetthecomputeritstilldidntboot''. You'll deal with the punctuation and capi­talization later; right now you need to re-insert the spaces. Most of the words are in a dictionary but a few are not. Given a dictionary (a list of strings) and the document (a string), design an algorithm to unconcatenate the document in a way that minimizes the number of unrecognized characters. Return the number of unrecognized characters.
 * 
 * # Note
 * 
 * This problem is slightly different from the original one in the book.
 * 
 * ```bash
 * Input:
 * dictionary = ["looked","just","like","her","brother"]
 * sentence = "jesslookedjustliketimherbrother"
 * Output:  7
 * Explanation:  After unconcatenating, we got "jess looked just like tim her brother", which containing 7 unrecognized characters.
 * ```
 * 
 * ## Note
 * 
 * - `0 <= len(sentence) <= 1000`
 * - The total number of characters in dictionary is less than or equal to 150000.
 * - There are only lowercase letters in dictionary and sentence.
 */
export type Solution = () => (dictionary: string[], sentence: string) => number;

/**
 * @date
 * @time
 * @space
 */
export const respace = (dictionary: string[], sentence: string): number => {
  dictionary
    .sort((pre: string, next: string) => next.length - pre.length)
    .forEach((dic: string) => {
      let reg = new RegExp(dic, "g");
      if (sentence.match(reg)) {
        sentence = sentence.replace(reg, "");
        console.info(sentence);
      }
    });
  return sentence.length;
};

respace(
  ["looked", "just", "like", "her", "brother"],
  "jesslbrotheroobrotherkedjustlbrotherijustjbrotherustjherustjushebrotherrtjustjustjherustjuherstjustjustjustketimherbrother",
);

export const respace1 = (dictionary: string[], sentence: string): number => {
  let cache: number[] = [0];
  for (let i = 1; i <= sentence.length; i++) {
    cache[i] = cache[i - 1] + 1;
    for (let d of dictionary) {
      if (sentence.slice(i - d.length, i) === d) {
        cache[i] = Math.min(cache[i], cache[i - d.length]);
      }
    }
  }
  return cache[cache.length - 1];
};
