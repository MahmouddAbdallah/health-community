export const sliceText = (text, number) => {
    if (text.length < number) {
        return text
    }
    return text.slice(0, number) + "..."
}