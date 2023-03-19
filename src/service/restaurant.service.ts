import { IRestaurant, RestaurantModal } from "../../src/model/restauran.model";

export const getRestaurant = async () => {
  try {

    const restaurant = await RestaurantModal.find();
    return restaurant;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteRestaurantById = async (id:any) => {
  try { 
    return await RestaurantModal.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addRestaurantByUser = async (restaurantData: IRestaurant) => {
  try { 
    const newRestaurant = new RestaurantModal(restaurantData);
    return await newRestaurant.save();
  } catch (err) {
    console.log(err);
    throw err;
  }
};