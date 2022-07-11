// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
  },
  {
    title: 'Python',
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
  },
  {
    title: 'React',
  },
  {
    title: 'Redux',
  },
  {
    title: 'HTML + CSS',
  },
  {
    title: 'Django',
  },
  {
    title: 'Bootstrap',
  },
  {
    title: 'Docker',
  },
  {
    title: 'Heroku',
  },
  {
    title: 'RabbitMQ',
  },
  {
    title: 'Insomnia',
  },
  {
    title: 'WebSockets',
  },
  {
    title: 'Microservices',
  },
  {
    title: 'Monoliths',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'Domain-driven-design',
  },
  {
    title: 'Git',
  },
  {
    title: 'REST APIs',
  },
  {
    title: 'Apache Kafka',
  },
  {
    title: 'FastAPI',
  },
  {
    title: 'Bash',
  },

].map((skill) => ({ ...skill, category: skill }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
