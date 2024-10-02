import { googlebooksApiKey, googleUrl } from "./googlebooks";

export async function searchVolumes(searchQuery: string) {
    try {
        const response = await fetch(`${googleUrl}?q=${searchQuery}&key=${googlebooksApiKey}`);

        if (!response.ok) throw new Error('Something went wrong with fetching books.');

        // Get json data from api response.
        const data = await response.json();

        return data;
    } catch (e) {
        console.log('Error', e)
    }
}

export async function getVolume(id: string) {
    try {
        const response = await fetch(`${googleUrl}/${id}?key=${googlebooksApiKey}`);

        if (!response.ok) throw new Error('Something went wrong with fetching books.');

        // Get json data from api response.
        const data = await response.json();

        return data;
    } catch (e) {
        console.log('Error', e)
    }
}