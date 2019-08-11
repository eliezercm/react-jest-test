import reducer, { INITIAL_STATE } from "~/store/modules/techs/reducer";
import * as Techs from "~/store/modules/techs/actions";

describe("Techs reducer", () => {
  it("DEFAULT | state should be equals to INITIAL_STATE when pass empty actions", () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it("ADD_TECH | should be able to add new tech", () => {
    const state = reducer(INITIAL_STATE, Techs.addTech("Node.js"));

    expect(state).toStrictEqual(["Node.js"]);
  });
});
