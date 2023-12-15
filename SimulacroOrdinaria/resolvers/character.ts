import { CharacterAPIRest, EpisodeAPIRest, LocationAPIRest } from "../types.ts";

export const Character = {
  episode: async (parent: CharacterAPIRest): Promise<Array<EpisodeAPIRest>> => {
    const episodes = await Promise.all(
      parent.episode.map(async (episode) => {
        const ep = await fetch(episode);
        return ep.json();
      })
    );
    return episodes;
  },
};
