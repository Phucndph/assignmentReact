import { createStore } from "redux";
const Tang = 'Tang';
const Giam = 'Giam';
export const tang = () => ({
    type: Tang
});
export const giam = () => ({ type: Giam });
const initState = {
    dem: 0,
};
