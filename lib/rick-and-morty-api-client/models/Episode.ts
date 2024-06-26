/* tslint:disable */
/* eslint-disable */
/**
 * Rick and Morty API
 * Access information about episodes from Rick and Morty.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Episode
 */
export interface Episode {
    /**
     * The id of the episode.
     * @type {number}
     * @memberof Episode
     */
    id?: number;
    /**
     * The name of the episode.
     * @type {string}
     * @memberof Episode
     */
    name?: string;
    /**
     * The air date of the episode.
     * @type {string}
     * @memberof Episode
     */
    airDate?: string;
    /**
     * List of characters who have been seen in the episode.
     * @type {Array<string>}
     * @memberof Episode
     */
    characters?: Array<string>;
    /**
     * The code of the episode. S = Season, E = Episode. For example, S03E07.
     * @type {string}
     * @memberof Episode
     */
    episode?: string;
    /**
     * Link to the episodes's own URL endpoint.
     * @type {string}
     * @memberof Episode
     */
    url?: string;
    /**
     * Time at which the episode was created in the database.
     * @type {Date}
     * @memberof Episode
     */
    created?: Date;
}

/**
 * Check if a given object implements the Episode interface.
 */
export function instanceOfEpisode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EpisodeFromJSON(json: any): Episode {
    return EpisodeFromJSONTyped(json, false);
}

export function EpisodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Episode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'airDate': !exists(json, 'air_date') ? undefined : json['air_date'],
        'characters': !exists(json, 'characters') ? undefined : json['characters'],
        'episode': !exists(json, 'episode') ? undefined : json['episode'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
    };
}

export function EpisodeToJSON(value?: Episode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'air_date': value.airDate,
        'characters': value.characters,
        'episode': value.episode,
        'url': value.url,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
    };
}

