// const programmingLanguages = require('../services/programmingLanguages.service');
// const
const Set = require('./set');
const cardJSON = require('./cards.json');

async function create(req, res, next) {
  try {
    const set = new Set(cardJSON);
    const cards = set.makeBooster();
    res.json(JSON.stringify({ cards: cards }));
  } catch (err) {
    console.error(`Error while creating draft`, err.message);
    next(err);
  }
}

// async function get(req, res, next) {
//   try {
//     res.json(await programmingLanguages.getMultiple(req.query.page));
//   } catch (err) {
//     console.error(`Error while getting programming languages`, err.message);
//     next(err);
//   }
// }

// async function create(req, res, next) {
//   try {
//     res.json(await programmingLanguages.create(req.body));
//   } catch (err) {
//     console.error(`Error while creating programming language`, err.message);
//     next(err);
//   }
// }

// async function update(req, res, next) {
//   try {
//     res.json(await programmingLanguages.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// }

// async function remove(req, res, next) {
//   try {
//     res.json(await programmingLanguages.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// }

module.exports = {
  create
};