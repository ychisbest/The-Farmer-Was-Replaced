import setting from '../Setting.json';

export function getFileNameFromPath(path) {
    if (!path) return '';
    const parts = path.split('/');

    const final = parts[parts.length - 1].split('.');

    final.pop(); // Remove the file extension
    if (final.length === 0) return '';

    return final.join('.');
}

/**
 * Detect locale from a content file path by finding a known locale segment
 * (e.g. src/content/blog/ru/foo.md → "ru").
 * Posts at the blog root (no locale folder) map to the default locale.
 */
export function getLangFromPath(path) {
    if (!path) return setting.DEFAULT_LOCALE_SETTING || 'en';
    const known = new Set(Object.keys(setting.LOCALES_SETTING || {}));
    const parts = path.split(/[/\\]/).filter(Boolean);
    for (const part of parts) {
        if (known.has(part)) return part;
    }
    return setting.DEFAULT_LOCALE_SETTING || 'en';
}
