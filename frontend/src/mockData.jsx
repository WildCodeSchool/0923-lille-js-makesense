const mockUser = [
  {
    user_id: 1,
    lastname: "Kitsuragi",
    firstname: "Kim",
    email: "kimball@precinct57.rev",
    location: "Revachol",
    picture: "https://upload.wikimedia.org/wikipedia/en/d/d0/Kim_Kitsuragi.png",
    role: "admin",
  },
  {
    user_id: 2,
    lastname: "Du Bois",
    firstname: "Harry",
    email: "evilchair@precinct41.rev",
    location: "Revachol",
    picture:
      "https://i.pinimg.com/564x/56/50/0f/56500f0ddf451688f11475525bd723ae.jpg",
    role: "employee",
  },
  {
    user_id: 3,
    lastname: "Vicquemare",
    firstname: "Jean",
    email: "kimball@precinct57.rev",
    location: "Revachol",
    picture:
      "https://i.pinimg.com/736x/e9/3d/3b/e93d3b076b60664048cf62626a711320.jpg",
    role: "employee",
  },
];

const mockDecision = [
  {
    decision_id: 1,
    date: "20/12/2023",
    status: "En cours",
    title: "Mutation immédiate et rapide au precinct 41",
    decide_maker_id: 1,
  },
  {
    decision_id: 2,
    date: "20/12/2023",
    status: "En cours",
    title: "Retrouver mon binôme disparu dans la nature sauvage",
    decide_maker_id: 2,
  },
  {
    decision_id: 3,
    date: "20/12/2023",
    status: "En cours",
    title: "Manger les meilleures chips du monde en écoutant de la musique",
    decide_maker_id: 3,
  },
  {
    decision_id: 4,
    date: "20/12/2023",
    status: "En cours",
    title: "Interdire les tournois clandestins de flippeur pour toujours",
    decide_maker_id: 1,
  },
  {
    decision_id: 5,
    date: "20/12/2023",
    status: "En cours",
    title: "Taguer les murs de la ville avec de jolis dessins",
    decide_maker_id: 2,
  },
  {
    decision_id: 6,
    date: "20/12/2023",
    status: "En cours",
    title: "Interdire les chaises incomfortables",
    decide_maker_id: 3,
  },
  {
    decision_id: 7,
    date: "20/12/2023",
    status: "En cours",
    title: "Faire tous les mots croisés du monde avec un bic",
    decide_maker_id: 1,
  },
  {
    decision_id: 8,
    date: "20/12/2023",
    status: "En cours",
    title: "Choix de déménagement entre le Japon et l'Islande",
    decide_maker_id: 2,
  },
  {
    decision_id: 9,
    date: "20/12/2023",
    status: "En cours",
    title: "Mutation immédiate et rapide au precinct 43",
    decide_maker_id: 3,
  },
  {
    decision_id: 10,
    date: "20/12/2023",
    status: "En cours",
    title: "Mutation immédiate et rapide au precinct 41",
    decide_maker_id: 1,
  },
  {
    decision_id: 11,
    date: "20/12/2023",
    status: "En cours",
    title: "Mutation immédiate et rapide au precinct 42",
    decide_maker_id: 2,
  },
  {
    decision_id: 12,
    date: "20/12/2023",
    status: "En cours",
    title: "Mutation immédiate et rapide au precinct 43",
    decide_maker_id: 3,
  },
];

const mockComments = [
  {
    comment_id: 1,
    date_time: "21/12/2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia minima eius amet id voluptatem ab, corrupti dicta quam aspernatur sit quaerat cupiditate consequuntur voluptate deleniti ea natus earum similique.",
    employee_id: 2,
    admin_id: null,
    decision_id: 1,
  },
  {
    comment_id: 2,
    date_time: "22/12/2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia minima eius amet id voluptatem ab, corrupti dicta quam aspernatur sit quaerat cupiditate consequuntur voluptate deleniti ea natus earum similique.",
    employee_id: 3,
    admin_id: null,
    decision_id: 1,
  },
  {
    comment_id: 3,
    date_time: "23/12/2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia minima eius amet id voluptatem ab, corrupti dicta quam aspernatur sit quaerat cupiditate consequuntur voluptate deleniti ea natus earum similique.",
    employee_id: null,
    admin_id: 1,
    decision_id: 2,
  },
  {
    comment_id: 4,
    date_time: "24/12/2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia minima eius amet id voluptatem ab, corrupti dicta quam aspernatur sit quaerat cupiditate consequuntur voluptate deleniti ea natus earum similique.",
    employee_id: 2,
    admin_id: null,
    decision_id: 3,
  },
];

const mockParagraphs = [
  {
    paragraph_id: 1,
    title: "Détails de la décision :",
    contains:
      "J'ai récemment obtenu une offre d'emploi chez Make Sense dans les deux pays, au Japon et en Islande. Il doit prendre une décision importante quant à l'endroit où il souhaite s'installer pour les prochaines années. Les opportunités professionnelles dans les deux pays sont similaires en termes de rôle et de rémunération.",
    decision_id: 8,
  },
  {
    paragraph_id: 2,
    title: "Impact sur l'organisation :",
    contains:
      "Le déménagement au Japon pourrait offrir une meilleure intégration dans l'industrie technologique en plein essor, tandis que l'Islande présente des opportunités dans le secteur de l'énergie renouvelable. Le choix final dépendra de la vision à long terme de l'utilisateur pour sa carrière.",
    decision_id: 8,
  },
  {
    paragraph_id: 2,
    title: "Bénéfices :",
    contains:
      "Japon : Opportunités de réseautage dans une économie technologique en croissance. Accès à une culture riche et diversifiée.Environnement urbain dynamique et moderne. Islande: Qualité de vie élevée avec un accès à la nature préservée. Implication potentielle dans des projets innovants liés aux énergies renouvelables. Communauté professionnelle plus petite, favorisant les relations interpersonnelles.",
    decision_id: 8,
  },
  {
    paragraph_id: 2,
    title: "Risques potentiels :",
    contains:
      "Japon: Barrière linguistique et culturelle, coût de la vie élevé dans certaines régions. Islande: Conditions climatiques extrêmes et journées courtes en hiver, possibilité de se sentir isolé en raison de la petite taille de la population.",
    decision_id: 8,
  },
];

export { mockUser, mockDecision, mockComments, mockParagraphs };
