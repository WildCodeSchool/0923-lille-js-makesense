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
    picture: "https://upload.wikimedia.org/wikipedia/en/d/d0/Kim_Kitsuragi.png",
    role: "employee",
  },
  {
    user_id: 3,
    lastname: "A",
    firstname: "Jean",
    email: "kimball@precinct57.rev",
    location: "Revachol",
    picture: "https://upload.wikimedia.org/wikipedia/en/d/d0/Kim_Kitsuragi.png",
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
