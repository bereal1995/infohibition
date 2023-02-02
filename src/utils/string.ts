export const htmlEntities: { [key: string]: string } = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#039;': "'",
  '&#39;': "'",
};

export function unescapeHtml(str?: string): string {
  return str
    ? str.replace(
        /&amp;|&lt;|&gt;|&quot;|&#039;|&#39;/g,
        (entity) => htmlEntities[entity]
      )
    : '';
}
