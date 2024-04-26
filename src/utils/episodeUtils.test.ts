import { generateRecommendations } from './episodeUtils';
import { describe, test, expect } from 'vitest';

describe('generateRecommendations', () => {
  test('should generate recommendations within the specified range', () => {
    const min = 1;
    const max = 10;
    const items = 5;

    const recommendations = generateRecommendations(min, max, items);

    expect(recommendations.split(',').length).toBe(items);
    expect(
      recommendations.split(',').every((num) => {
        const number = parseInt(num);
        return number >= min && number <= max;
      }),
    ).toBe(true);
  });
});
