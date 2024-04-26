export function generateRecommendations(min: number, max: number, items: number): string {
  const numbers = new Set<number>();
  while (numbers.size < items) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNum);
  }
  return Array.from(numbers).join(',');
}

export function charactersToCover(chatacters: string[]): string {
  const character = getRandomCharacter(chatacters);
  return getCharacterImage(character);
}

function getRandomCharacter(characters: string[]): string {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function getCharacterImage(originalUrl: string) {
  const idMatch = originalUrl.match(/\/character\/(\d+)/);

  if (!idMatch) {
    throw new Error('Invalid URL format');
  }

  const characterId = idMatch[1];
  return `https://rickandmortyapi.com/api/character/avatar/${characterId}.jpeg`;
}
