export const isObjectsChanged = (initialValues, currentValues) => {
  return JSON.stringify(initialValues) === JSON.stringify(currentValues);
};
