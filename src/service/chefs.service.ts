import { IChefs, ChefsModal } from "../../src/model/chefs.model";

export const getChefs = async () => {
  try {
    const chefs = await ChefsModal.find();
    return chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
