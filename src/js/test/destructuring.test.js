import showOptionsAttacks from '../destructuring';

test('should be array with two objects about four properties]', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const expected = [
    {
      name: 'Двойной выстрел',
      id: 8,
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      name: 'Нокаутирующий удар',
      id: 9,
      icon: 'http://...',
      description: 'Описание засекречено',
    },
  ];

  expect(showOptionsAttacks(character)).toEqual(expected);
});

test('should be Error for non-existent property special', () => {
  const child = {
    name: 'Ребенок',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 0,
    defence: 0,
  };

  expect(() => showOptionsAttacks(child)).toThrow();
});