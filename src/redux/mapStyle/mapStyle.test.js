import { isDarkMode } from '../mapStyle/mapStyle.selectors';

describe('isDarkMode', () => {
  it('should return if map has darkMode', () => {
    const state = {
      mapStyle: { isDarkMode: true },
    };

    const result = isDarkMode(state);

    expect(result).toBeTruthy();
  });
});
