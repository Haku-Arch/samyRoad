import { useMutation, useQuery } from 'react-query'

const getImages = async (search, page) =>{ 
    const searchParam = search ? `&search=${search}` : ""
    const response = await fetch(`http://localhost:3100/images/?page=${page}${searchParam}`)
    const images = await response.json()
    return images
}

const updateLikesByImageId = async (id) => {
    await fetch(`http://localhost:3100/images/${id}/likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
}


export const useImages = (search, page) => {
    const queryFilters = ["imgData",{search,page}]
    return useQuery(queryFilters, () => getImages(search, page))
};

export const useLikes = (imageId) => {
    return useMutation("likesMutation", () => updateLikesByImageId(imageId))
}
