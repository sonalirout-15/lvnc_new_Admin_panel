import { all } from 'redux-saga/effects';
import adminSaga from './AdminSaga';
import bannerImageSaga from './BannerImageSaga';
import campaignSaga from './CampaningSaga';
import categorySaga from './CategorySaga';
import childSubcategorySaga from './ChildSubcategorySaga';
import latestNewsSaga from './LatestNewsSaga';
import mettersSaga from './MattersSaga';
import postSaga from './PostSaga';
import subcategorySaga from './SubcategorySaga';
import userSaga from './UserSaga';

export default function* rootSaga() {
    yield all([
        adminSaga(),
        categorySaga(),
        subcategorySaga(),
        childSubcategorySaga(),
        mettersSaga(),
        postSaga(),
        campaignSaga(),
        bannerImageSaga(),
        userSaga(),
        latestNewsSaga()
    ])
}