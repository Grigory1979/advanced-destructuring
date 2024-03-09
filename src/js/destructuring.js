export default function showOptionsAttacks(obj) {
    if (!('special' in obj)) {
      throw new Error('Нет доступных вариантов спец.атак для этого персонажа');
    }
  
    return obj.special.map(
      ({
        id, name, icon, description = 'Описание засекречено',
      }) => ({
        id,
        name,
        icon,
        description,
      }),
    );
  }