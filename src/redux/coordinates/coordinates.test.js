import { selectCoordinateList } from '../coordinates/coordinates.selectors';

describe('selectCoordinateList', () => {
  it('should return coordinateList from store', () => {
    const state = {
      coordinates: {
        coordinateList: [{ lat: 47.444, lng: -122.176 }],
      },
    };

    const result = selectCoordinateList(state);

    expect(result).toEqual([{ lat: 47.444, lng: -122.176 }]);
  });
});
