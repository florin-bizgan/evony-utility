export const findResource = (resource, formData) =>
  formData.filter(({ troopType }) => troopType === resource)[0];
