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
      "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/8/83/Portrait_you.png/revision/latest?cb=20191028100206",
    role: "employee",
  },
  {
    user_id: 3,
    lastname: "Vicquemare",
    firstname: "Jean",
    email: "kimball@precinct57.rev",
    location: "Revachol",
    picture:
      "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/f/f8/Portrait_jean.png/revision/latest?cb=20191028100303",
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
    decision_id: 1,
    date: "20/12/2023",
    status: "En cours",
    title: "Interdire les tournois clandestins de flippeur pour toujours",
    decide_maker_id: 1,
  },
  {
    decision_id: 2,
    date: "20/12/2023",
    status: "En cours",
    title: "Taguer les murs de la ville avec de jolis dessins",
    decide_maker_id: 2,
  },
  {
    decision_id: 3,
    date: "20/12/2023",
    status: "En cours",
    title: "Interdire les chaises incomfortables",
    decide_maker_id: 3,
  },
  {
    decision_id: 1,
    date: "20/12/2023",
    status: "En cours",
    title: "Faire tous les mots croisés du monde avec un bic",
    decide_maker_id: 1,
  },
  {
    decision_id: 2,
    date: "20/12/2023",
    status: "En cours",
    title: "Mutation immédiate et rapide au precinct 42",
    decide_maker_id: 2,
  },
  {
    decision_id: 3,
    date: "20/12/2023",
    status: "En cours",
    title: "Mutation immédiate et rapide au precinct 43",
    decide_maker_id: 3,
  },
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
    title: "Mutation immédiate et rapide au precinct 42",
    decide_maker_id: 2,
  },
  {
    decision_id: 3,
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

export { mockUser, mockDecision, mockComments };
