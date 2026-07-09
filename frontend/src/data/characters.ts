// Character data shared between ServicesPage and CharacterPage.
// Video files should be placed in ../assets/characters/

import blossomVideo from "../assets/characters/Blossom.mp4";
import clementineVideo from "../assets/characters/Clementine.mp4";
import hamishVideo from "../assets/characters/Hamish.mp4";
import oscarVideo from "../assets/characters/Oscar.mp4";
import ralphieVideo from "../assets/characters/Ralphie.mp4";

export interface Character {
  name: string;
  desc: string;
  video?: string;
  bg: string;
}

export const characters: Character[] = [
  {
    name: "Blossom",
    desc: "Placeholder description of this character and what they represent.",
    video: blossomVideo,
    bg: "rgba(255, 255, 255, 0)",
  },
  {
    name: "Clementine",
    desc: "Placeholder description of this character and what they represent.",
    video: clementineVideo,
    bg: "rgba(255, 255, 255, 0)",
  },
  {
    name: "Hamish",
    desc: "Placeholder description of this character and what they represent.",
    video: hamishVideo,
    bg: "rgba(255, 255, 255, 0)",
  },
  {
    name: "Oscar",
    desc: "Placeholder description of this character and what they represent.",
    video: oscarVideo,
    bg: "rgba(255, 255, 255, 0)",
  },
  {
    name: "Ralphie",
    desc: "Placeholder description of this character and what they represent.",
    video: ralphieVideo,
    bg: "rgba(255, 255, 255, 0)",
  },
  {
    name: "Placeholder Character 6",
    desc: "Placeholder description of this character and what they represent.",
    bg: "rgba(255, 255, 255, 0)",
  },
];

/** Look up a character by URL-friendly slug (lowercased name). */
export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

/** Convert a character name into a URL slug. */
export function characterSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}