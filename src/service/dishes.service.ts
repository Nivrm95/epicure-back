import { IDish, DishesModal } from "../../src/model/dishes.model";

export const getDishes = async () => {
  try {
    const dishes = await DishesModal.find();
    return dishes;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const deleteDishesById = async (id:any) => {
  try { 
    return await DishesModal.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
