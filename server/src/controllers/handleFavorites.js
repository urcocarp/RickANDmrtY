let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.status(201).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  const myFavortitesFiltered = myFavorites.filter(
    (character) => character.id !== Number(id)
  );

  myFavorites = myFavortitesFiltered;

  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
