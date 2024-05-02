export const customGreeting = () => {
  const date = new Date();
  const time = date.getHours();
  let greeting = '';

  if (time >= 6 && time < 12) greeting = 'Good Morning';
  else if (time >= 12 && time < 17) greeting = 'Good Afternoon';
  else if (time >= 17 && time < 22) greeting = 'Good Evening';
  else greeting = "Can't Sleep?";

  return greeting;
};
