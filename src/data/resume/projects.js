const projects = [
  {
    company: 'Packed',
    position: 'Lead Software Engineer',
    link: 'https://gitlab.com/packed-module-3/packed',
    daterange: '2022',
    points: [
      'Led four engineer development team in creating and deploying a Django web application over six week period',
      'Built three backend microservices following test-driven development',
      'Integrated user authentication using Simple JWT',
    ],
  },
  {
    company: 'Car-Car',
    position: 'Software Engineer',
    link: 'https://gitlab.com/car-car/car-car',
    daterange: '2022',
    points: [
      'Designed Django/React application employing 14 REST API endpoints',
      'Deployed six Docker images on Heroku and Gitlab pages utilizing continuous deployment',
      'Created three PostgreSQL databases that employ polling to share data between microservices',
    ],
  },
  {
    company: 'ConferenceGO',
    position: 'Software Engineer',
    link: 'https://gitlab.com/josiahpederson/conferencego',
    daterange: '2022',
    points: [
      'Employed RabbitMQ pub/sub and middleware queueing between three microservices, resulting in 300% fewer database requests compared to the original polling method',
      'Modernized Django monolith using domain-driven-design to divide bounded contexts into three microservices',
      'Integrated three third-party APIs utilizing anti-corruption layers (ACLs) to ensure accurate data mapping',
    ],
  },
];

export default projects;
