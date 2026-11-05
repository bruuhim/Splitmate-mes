// ================================
// 1. GROUPES
// ================================

const groups = [
  {
    id: 1,
    nom: "Voyage à Marrakech",
    description: "Voyage entre amis",
    devise: "MAD",
    dateDebut: "2026-10-01",
    cloture: false,
  },
  {
    id: 2,
    nom: "Colocation Rabat",
    description: "Dépenses de la colocation",
    devise: "MAD",
    dateDebut: "2026-09-01",
    cloture: false,
  },
  {
    id: 3,
    nom: "Week-end à Ifrane",
    description: "Week-end en famille",
    devise: "MAD",
    dateDebut: "2026-08-10",
    cloture: true,
  },
];

// ================================
// 2. MEMBRES
// ================================

const members = [
  { id: 1, groupeId: 1, nom: "Ahmed", pseudo: "ahmed01" },
  { id: 2, groupeId: 1, nom: "Youssef", pseudo: "youssef02" },
  { id: 3, groupeId: 1, nom: "Sara", pseudo: "sara03" },
  { id: 4, groupeId: 1, nom: "Omar", pseudo: "omar04" },

  { id: 5, groupeId: 2, nom: "Amine", pseudo: "amine05" },
  { id: 6, groupeId: 2, nom: "Salma", pseudo: "salma06" },
  { id: 7, groupeId: 2, nom: "Khalid", pseudo: "khalid07" },

  { id: 8, groupeId: 3, nom: "Hamza", pseudo: "hamza08" },
  { id: 9, groupeId: 3, nom: "Nadia", pseudo: "nadia09" },
];

// ================================
// 3. DEPENSES
// ================================

const expenses = [
  // Groupe 1 : Voyage à Marrakech

  {
    id: 1,
    groupeId: 1,
    titre: "Hôtel",
    montant: 1200,
    categorie: "Hébergement",
    date: "2026-10-02",
    payeurId: 1,
    parts: [
      { membreId: 1, montant: 300 },
      { membreId: 2, montant: 300 },
      { membreId: 3, montant: 300 },
      { membreId: 4, montant: 300 },
    ],
  },
  {
    id: 2,
    groupeId: 1,
    titre: "Restaurant",
    montant: 400,
    categorie: "Nourriture",
    date: "2026-10-03",
    payeurId: 2,
    parts: [
      { membreId: 1, montant: 100 },
      { membreId: 2, montant: 100 },
      { membreId: 3, montant: 100 },
      { membreId: 4, montant: 100 },
    ],
  },
  {
    id: 3,
    groupeId: 1,
    titre: "Location voiture",
    montant: 800,
    categorie: "Transport",
    date: "2026-10-03",
    payeurId: 3,
    parts: [
      { membreId: 1, montant: 200 },
      { membreId: 2, montant: 200 },
      { membreId: 3, montant: 200 },
      { membreId: 4, montant: 200 },
    ],
  },
  {
    id: 4,
    groupeId: 1,
    titre: "Courses",
    montant: 200,
    categorie: "Nourriture",
    date: "2026-10-04",
    payeurId: 1,
    parts: [
      { membreId: 1, montant: 50 },
      { membreId: 2, montant: 50 },
      { membreId: 3, montant: 50 },
      { membreId: 4, montant: 50 },
    ],
  },

  // Groupe 2 : Colocation Rabat

  {
    id: 5,
    groupeId: 2,
    titre: "Facture électricité",
    montant: 300,
    categorie: "Factures",
    date: "2026-09-05",
    payeurId: 5,
    parts: [
      { membreId: 5, montant: 100 },
      { membreId: 6, montant: 100 },
      { membreId: 7, montant: 100 },
    ],
  },
  {
    id: 6,
    groupeId: 2,
    titre: "Courses alimentaires",
    montant: 450,
    categorie: "Nourriture",
    date: "2026-09-08",
    payeurId: 6,
    parts: [
      { membreId: 5, montant: 150 },
      { membreId: 6, montant: 150 },
      { membreId: 7, montant: 150 },
    ],
  },
  {
    id: 7,
    groupeId: 2,
    titre: "Internet",
    montant: 150,
    categorie: "Factures",
    date: "2026-09-10",
    payeurId: 7,
    parts: [
      { membreId: 5, montant: 50 },
      { membreId: 6, montant: 50 },
      { membreId: 7, montant: 50 },
    ],
  },

  // Groupe 3 : Week-end à Ifrane

  {
    id: 8,
    groupeId: 3,
    titre: "Chalet",
    montant: 600,
    categorie: "Hébergement",
    date: "2026-08-11",
    payeurId: 8,
    parts: [
      { membreId: 8, montant: 300 },
      { membreId: 9, montant: 300 },
    ],
  },
];

// ================================
// 4. REMBOURSEMENTS
// ================================

const reimbursements = [
  // Groupe 1

  {
    id: 1,
    groupeId: 1,
    deId: 2,
    versId: 1,
    montant: 250,
    date: "2026-10-05",
  },
  {
    id: 2,
    groupeId: 1,
    deId: 4,
    versId: 1,
    montant: 250,
    date: "2026-10-05",
  },

  // Groupe 2

  {
    id: 3,
    groupeId: 2,
    deId: 5,
    versId: 6,
    montant: 50,
    date: "2026-09-12",
  },

  // Groupe 3

  {
    id: 4,
    groupeId: 3,
    deId: 9,
    versId: 8,
    montant: 300,
    date: "2026-08-15",
  },
];

// ================================

function getActiveGroups(groups) {
  let activeGroups = groups.filter((group) => group.cloture == false);
  return console.log(activeGroups);
}

function findMemberById(members, id) {
  let membreId = members.find((member) => member.id == id);
  if (membreId.id == id) {
    return console.log(membreId);
  } else {
    return null;
  }
}

function getTotalExpenses(expenses, groupId) {
  let totalExp = expenses.filter((expense) => expense.groupeId == groupId);
  let temp = 0;
  totalExp.forEach((exp) => {
    temp += exp.montant;
  });
  return console.log(`${temp} DH`);
}

function getExpensesByCategory(expenses, groupId, category) {
  let expcatg = expenses.filter((expense) => expense.groupeId == groupId);
  let expcatc = expcatg.filter((exp) => exp.categorie == category);
  let tempdep = 0;
  expcatc.forEach((exp) => {
    tempdep += exp.montant;
  });
  return console.log(`${tempdep} DH`);
}

function getMemberExpenses(expenses, memberId) {
  let expenpart = expenses.map((expense) => expense.parts);
  let expenmem = expenpart.filter((mem) => mem.membreId == memberId);
  console.log(expenpart);
  console.log(expenmem);
}

// function getCategoryTotals(expenses, groupId) {
//   let expcatgtotal = expenses.filter((expense) => expense.groupeId == groupId);
//   let expcatego = expcatgtotal.map((exp) => exp.categorie)
//   console.log(expcatego);
// }

// getActiveGroups(groups)
// findMemberById(members, 2);
// getTotalExpenses(expenses, 1);
// getExpensesByCategory(expenses, 1, "Nourriture")
getMemberExpenses(expenses, 2);
// getCategoryTotals(expenses, 1)