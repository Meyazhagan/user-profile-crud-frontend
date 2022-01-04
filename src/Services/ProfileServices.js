export const skillOptions = [
  "HTML",
  "CSS",
  "JS",
  "REACT",
  "NODE JS",
  "EXPRESS",
  "MONGODB",
  "MONGOOSE",
  "MYSQL",
  "AWS",
];
export const roleOptions = [
  "STUDENT",
  "MENTOR",
  "EVENT MANAGER",
  "PLACEMENT TEAM",
];

export const validate = (value) => {
  const errors = {};
  if (value.skill?.length < 3) errors.skill = "Select at least three item";
  else if (value.role?.length <= 0) errors.role = "Select a role";
  return errors;
};
