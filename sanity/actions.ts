import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';
type GetRessourcesParams = {
    query : string,
    category : string,
    page : string
}

export const getResources = async (params : GetRessourcesParams) => {
    const {query, category, page } = params 
    
    try {
        const resources = readClient.fetch(groq`${buildQuery({
            type : 'resource',
            query,
            category,
            page : parseInt(page),
        })}{
            title,
            _id,
            downloadLink,
            "image" : poster.asset->url,
            views,
            slug,
            category
        }`)
        
        return resources
        
    } catch (error) {
        console.log(error);
    }
}