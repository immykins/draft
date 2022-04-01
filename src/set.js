// this logic needs to be moved outside of the view
class Set {
  // instantiate by injecting a json of the cards for a set
  constructor(json) {
    this.cards = json;
  }

  // returns a random draft booster from the set. A draft booster includes 15 cards with no duplicates:
  // - 1 rare or mythic rare
  // - 3 uncommon
  // - 10 common
  // - 1 basic land (in neon this includes its dual lands)
  makeBooster() {
    let booster = this.cards.rares.sort(() => 0.5 - Math.random()).slice(0, 1);
    booster.push(...this.cards.uncommons.sort(() => 0.5 - Math.random()).slice(0, 3));
    booster.push(...this.cards.commons.sort(() => 0.5 - Math.random()).slice(0, 10));
    booster.push(...this.cards.lands.sort(() => 0.5 - Math.random()).slice(0, 1));

    return booster;
  }
}

export default Set;

// module.exports = Set