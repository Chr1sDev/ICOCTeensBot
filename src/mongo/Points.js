class Points {
  constructor(db) {
    this.collection = db.collection("points");
  }
  async addPerson(person) {
    /* Structure of person object
    {
      id: '698590629344575500-279032930926592000',
      user: '279032930926592000',
      guild: '698590629344575500',
      points: 5402,
      level: 22,
      name: 'christopher#8888'
    }
    */
    const newPerson = await this.collection.insertOne(person);
    return newPerson;
  }
  async updatePerson(person) {
    const aPerson = await this.collection.updateOne(
      { user: person.user },
      {
        $set: {
          id: person.id,
          user: person.user,
          guild: person.guild,
          points: person.points,
          level: person.level,
          name: person.name,
        },
      }
    );
    return aPerson;
  }
  async getPerson(id) {
    let query = { user: id };
    const aPerson = await this.collection.find(query).toArray();
    return aPerson;
  }
  async getAll() {
    const allPeople = await this.collection.find({});
    return allPeople;
  }
  async getLeaderboard() {
    const leaderboard = await this.collection
      .find()
      .sort({ points: -1 })
      .toArray();
    return leaderboard;
  }
  async getNotLeaderboard() {
    const notLeaderboard = await this.collection
      .find()
      .sort({ points: 1 })
      .toArray();
    return notLeaderboard;
  }
  async getLeader() {
    const leader = await this.collection.find().sort({ points: -1 }).toArray();
    return leader[0];
  }
}
module.exports = Points;
