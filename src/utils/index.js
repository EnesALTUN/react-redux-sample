export const sentenceSplit = (sentence, startIndex = 0, endIndex) =>
  sentence.length > endIndex
    ? `${sentence.substring(startIndex, endIndex)}...`
    : sentence;
