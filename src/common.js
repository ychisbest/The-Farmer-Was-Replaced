export function getFileNameFromPath(path) {
    if (!path) return '';
    const parts = path.split('/');

    const final = parts[parts.length - 1].split('.');

    final.pop(); // Remove the file extension
    if (final.length === 0) return '';

    return final.join('.');
}

export function getLangFromPath(path) {
    if (!path) return '';
    const parts = path.split('/');
    const lang = parts[1]; // Assuming the language code is the second part of the path
    return lang;
}