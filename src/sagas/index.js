/**
 * Created by reza on 2/4/17.
 */
import {fork} from 'redux-saga/effects';
import watchSearchMedia from './watcher';

export default function* startForman() {
    yield fork(watchSearchMedia);
}