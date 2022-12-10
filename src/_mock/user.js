const rayons = JSON.parse(localStorage.getItem('rayons') || '{}');
const users = rayons?.map((data) => ({
  id: data.id,
  libelle: data.libelle,
  acronym: data.acronym,
  status: data.used,
  dateCreate: data.dateCreate,
}));

export default users;
