export const initialValues = {
  quantity: 0,
  troopType: "",
};
export const formData = [
  {
    resource: {
      food: 160,
      lumber: 0,
      stone: 0,
      ore: 0,
    },
    label: "Ground",
    troopType: "ground",
  },
  {
    resource: {
      food: 80,
      lumber: 80,
      stone: 0,
      ore: 0,
    },
    label: "Cavalry",
    troopType: "cavalry",
  },
  {
    resource: {
      food: 40,
      lumber: 120,
      stone: 0,
      ore: 0,
    },
    label: "Archery",
    troopType: "archery",
  },
  {
    resource: {
      food: 0,
      lumber: 100,
      stone: 60,
      ore: 0,
    },
    label: "Siege",
    troopType: "siege",
  },
];
