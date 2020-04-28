"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-taobao-component:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      name: "test",
      author: "Simon-Bin",
      description: "description"
    });
  });

  it("creates files", () => {
    assert.file(["test"]);
    assert.jsonFileContent("test/package.json", {
      name: "test",
      author: "Simon-Bin",
      description: "description"
    });
  });
});
