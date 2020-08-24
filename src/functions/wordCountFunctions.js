export const getWordCount = text => {
    // remove end space and split into array
    const wordArr = text.replace(/\s/g, ' ').split(" ");
    // remove empty spaces and return length
    return wordArr.filter(word => word !== "").length
}