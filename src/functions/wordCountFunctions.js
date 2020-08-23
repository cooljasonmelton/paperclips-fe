export const getWordCount = text => {
    // remove end space and split into array
    const wordArr = text.trim().split(" ")
    // remove empty spaces and return length
    return wordArr.filter(word => word !== "").length
}