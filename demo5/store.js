import { createStore } from "redux";
const Tang = 'Tang';
const Giam = 'Giam';
export const tang = () => ({
    type: Tang
});//khai báo hàm tăng
export const giam = () => ({
    type: Giam
});//khai báo hàm giảm
//2.định nghĩa reducer
//khởi  tạo biến đếm
const initState = {
    dem: 0,
};
const demReducer = (state = initState, action) => {
    switch (action.type) {
        case Tang:
            return { ...state, dem: state.dem + 1 };
        case Giam:
            return { ...state, dem: state.dem - 1 };
        default:
            return state; // mặc định không có gì thay đổi
    }
};
const store=createStore(demReducer);
export default store;