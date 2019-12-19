const Users = require("./users-model.js");
const db = require("../data/dbConfig.js");

describe("users model", function() {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert()", function() {
    it("should add the user to the database", async function() {
      await Users.insert({ name: "Ignacio test 1" });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });
  });

  describe("delete()", function() {
    it("should delete the user to the database", async function() {
      await Users.insert({ name: "Ignacio will be deleted" });
      let users = await db("users");
      expect(users).toHaveLength(1);

      await Users.remove(1);
      users = await db("users");
      expect(users).toHaveLength(0);
    });
  });
});