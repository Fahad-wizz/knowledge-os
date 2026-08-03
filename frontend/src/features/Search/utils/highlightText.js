export function highlightText(text, query) {

    if (!query) {

        return [text];

    }

    const regex = new RegExp(`(${query})`, "ig");

    return text.split(regex);

}