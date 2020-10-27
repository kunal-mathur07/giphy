import {endpoints} from './apiUrl';


export const getImages =async()=>{

    let images = [];
    try{
        const resp = await fetch(`${endpoints.getImages}`);
        images = await resp.json();
        return images.data;
    } catch(e) {
        console.log('err', e)
        return [];
    }
}