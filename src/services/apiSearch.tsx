import { googlebooksApiKey, googleUrl } from "./googlebooks";

export async function searchVolumes(searchQuery: string) {
    try {
        const response = await fetch(`${googleUrl}/volumes?q=${searchQuery}&key=${googlebooksApiKey}`);

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
        const response = await fetch(`${googleUrl}/volumes/${id}?key=${googlebooksApiKey}`);

        if (!response.ok) throw new Error('Something went wrong with fetching books.');

        // Get json data from api response.
        const data = await response.json();

        return data;
    } catch (e) {
        console.log('Error', e)
    }
}

export async function getBookShelves(userId: string) {
    try {
        const response = await fetch(`${googleUrl}/users/${userId}/bookshelves?key=${googlebooksApiKey}`);

        if (!response.ok) {
            throw Error('Something went wrong with fetching book shelves.');
        }

        // Get json data from api response.
        const data = await response.json();

        return data;
    } catch (error) {
        throw error;
    }
}
