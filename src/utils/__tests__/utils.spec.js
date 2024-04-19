import { getDate, getCityName } from "../util";
describe('Util test', () => {
  describe('getDate test', () => {
    it('should return nothing when date and format are not provided', () => {
      expect(getDate()).toEqual();
    })
    it('should return nothing when one of arguments is missing', () => {
      expect(getDate(null, 'YYYY/MM/DD')).toEqual();
      expect(getDate('2022-05-21', null)).toEqual();
    })
    it('should convert dateString (2015/01/02 23:14:05) to formatted date (Fri, Jan 02 2015)', () => {
      const date = new Date('2015/01/02 23:14:05');
      expect(getDate(date, 'ddd, MMM DD YYYY')).toEqual('Fri, Jan 02 2015');
    })
  });

  describe(`getCityName test: API is always return name, region, and country;
   however, name and region can be the same`, () => {
    it('should return nothing when location is undefined', () => {
      expect(getCityName(undefined)).toEqual();
      expect(getCityName(null)).toEqual();
      expect(getCityName({})).toEqual();
    })
    it('should return city region, country', () => {
      const mockLocation = {
        'name': 'name',
        'region': 'region',
        'country': 'country'
      }
      const expectResult = 'name region, country';
      expect(getCityName(mockLocation)).toEqual(expectResult);
    })
    it('should return city, country', () => {
      const mockLocation = {
        'name': 'name',
        'region': 'name',
        'country': 'country'
      }
      const expectResult = 'name, country';
      expect(getCityName(mockLocation)).toEqual(expectResult);
    })
  })
});