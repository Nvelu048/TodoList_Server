const Label = {
  SHOPPING: 'SHOPPING',
  PERSONAL: 'PERSONAL',
  WORK: 'WORK',
  OTHER: 'OTHER',
};

const Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};

const Status = {
  NEW: 'NEW',
  INPROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
};

Object.freeze(Label);
Object.freeze(Priority);
Object.freeze(Status);

module.exports = { Label, Priority, Status };
