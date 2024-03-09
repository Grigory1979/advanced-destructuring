import orderByProps from '../sorting';

const objUser = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('should be Error for non-existent property', () => {
  expect(() => orderByProps(objUser, ['name', 'game'])).toThrow();
});

test('should be sorting for ["name", "level"]', () => {
  const result = orderByProps(objUser, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(expected);
});

test('should be only default sorting (alphabet sorting)', () => {
  const result = orderByProps(objUser);
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(result).toEqual(expected);
});