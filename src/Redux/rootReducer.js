import { combineReducers } from "redux";
import adminReducer from "./Reducers/AdminReducer";
import bannerImageReducer from "./Reducers/BannerImageReducer";
import campaignReducer from "./Reducers/CampaignReducer";
import categoryReducer from "./Reducers/CategoryReducer";
import childSubcategoryReducer from "./Reducers/ChildSubcategoryReducer";
import latestNewsReducer from "./Reducers/LatestNewsReducer";
import mattersReducer from "./Reducers/MattersReducer";
import postReducer from "./Reducers/PostReducer";
import subcategoryReducer from "./Reducers/SubcategoryReducer";
import userReducer from "./Reducers/UserReducer";

const rootReducer = combineReducers({
    admin: adminReducer,
    categoryData: categoryReducer,
    subcategory: subcategoryReducer,
    childSubcatgory : childSubcategoryReducer,
    metters: mattersReducer,
    post: postReducer,
    campaning: campaignReducer,
    banner : bannerImageReducer,
    user : userReducer,
    latestnewsData : latestNewsReducer

})

export default rootReducer;