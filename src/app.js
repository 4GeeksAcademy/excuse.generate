window.onload = () => {
  const who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  const action = ['se comió', 'orinó', 'aplastó', 'rompió'];
  const what = ['mi tarea', 'mi teléfono', 'el coche'];
  const when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras estaba ejercitándome', 'durante mi almuerzo', 'mientras estaba rezando'];

  const generateExcuse = () => {
      const whoIndex = Math.floor(Math.random() * who.length);
      const actionIndex = Math.floor(Math.random() * action.length);
      const whatIndex = Math.floor(Math.random() * what.length);
      const whenIndex = Math.floor(Math.random() * when.length);

      return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  };

  document.getElementById('excuse').innerHTML = generateExcuse();
};
