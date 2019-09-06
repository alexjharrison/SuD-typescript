type WithId = {
  id: number;
};

function getById<T extends WithId>(arr: T[], id: number): T {
  return arr.filter(item => item.id === id)[0];
}

export { getById };
