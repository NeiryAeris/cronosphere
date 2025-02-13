import channel_img_1 from "./channel.jpg";
import channel_img_2 from "./channel.jpg";
import channel_img_3 from "./channel.jpg";
import channel_img_4 from "./channel.jpg";
import channel_img_5 from "./channel.jpg";
import channel_img_6 from "./channel.jpg";
import channel_img_7 from "./channel.jpg";
import channel_img_8 from "./channel.jpg";
import channel_img_9 from "./channel.jpg";
import channel_img_10 from "./channel.jpg";

import artwork_img_1 from "./artwork_1.jpg";
import artwork_img_2 from "./artwork_2.jpg";
import artwork_img_3 from "./artwork_3.jpg";
import artwork_img_4 from "./artwork_4.jpg";
import artwork_img_5 from "./artwork_5.jpg";
import artwork_img_6 from "./artwork_6.jpg";
import artwork_img_7 from "./artwork_7.jpg";
import artwork_img_8 from "./artwork_8.jpg";
import artwork_img_9 from "./artwork_9.jpg";
import artwork_img_10 from "./artwork_10.jpg";

import avatar from "./avatar.jpg";

// Define channels with unique images
export const channels = [
  { id: 1, img: channel_img_1, title: "Channel 1", artworkImg: artwork_img_1 },
  { id: 2, img: channel_img_2, title: "Channel 2", artworkImg: artwork_img_2 },
  { id: 3, img: channel_img_3, title: "Channel 3", artworkImg: artwork_img_3 },
  { id: 4, img: channel_img_4, title: "Channel 4", artworkImg: artwork_img_4 },
  { id: 5, img: channel_img_5, title: "Channel 5", artworkImg: artwork_img_5 },
  { id: 6, img: channel_img_6, title: "Channel 6", artworkImg: artwork_img_6 },
  { id: 7, img: channel_img_7, title: "Channel 7", artworkImg: artwork_img_7 },
  { id: 8, img: channel_img_8, title: "Channel 8", artworkImg: artwork_img_8 },
  { id: 9, img: channel_img_9, title: "Channel 9", artworkImg: artwork_img_9 },
  { id: 10, img: channel_img_10, title: "Channel 10", artworkImg: artwork_img_10 },
];

// Define possible tags
const possibleTags = [
  "Digital Art",
  "Fantasy",
  "Sci-Fi",
  "Portrait",
  "Landscape",
  "Abstract",
  "Surreal",
  "Cyberpunk",
  "Realism",
  "Mythology",
  "Dark",
  "Anime",
  "Futuristic",
  "Classic",
  "Minimalist",
];

// Function to generate random tags for each artwork
const getRandomTags = () => {
  const shuffled = possibleTags.sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 2); // Pick 2-4 tags
};

// Generate 21 artworks per channel with unique IDs and more details
export const artworks = channels.flatMap((channel) =>
  Array.from({ length: 21 }, (_, i) => ({
    id: `${channel.id}-${i + 1}`, // Unique ID format: "channelId-artworkNumber"
    title: `Artwork ${i + 1} - ${channel.title}`, // Unique artwork title
    img: channel.artworkImg, // Image related to the channel
    artist: `Artist ${i + 1}`, // Simulated artist name
    channelId: channel.id, // Store reference to the channel
    channelTitle: channel.title, // Store reference to the channel name
    description: `This is a detailed description of Artwork ${i + 1} from ${channel.title}.`, // Placeholder description
    tags: getRandomTags(), // Randomly generated tags
  }))
);

export const artists = [{ id: 1, img: avatar, name: "Artist 1", artworkImg: artwork_img_1, title: "Concept Artist" }];

export const marketTags = [
  { tagsID: 1, tags: "3D models", type: "resources" },
  { tagsID: 2, tags: "Photography3D", type: "" },
  { tagsID: 3, tags: "Materials", type: "" },
  { tagsID: 4, tags: "Brushes2D", type: "" },
  { tagsID: 5, tags: "Brushes3D", type: "" },
  { tagsID: 6, tags: "Game Assets", type: "" },
  { tagsID: 7, tags: "PhotoshopDigital", type: "" },
  { tagsID: 8, tags: "ArtGraphics & Animation", type: "" },
  { tagsID: 9, tags: "Environments", type: "" },
  { tagsID: 10, tags: "Dev Tools", type: "" },
  { tagsID: 11, tags: "Concept Art", type: "" },
  { tagsID: 12, tags: "Characters", type: "" },
  { tagsID: 13, tags: "Modeling", type: "" },
  { tagsID: 14, tags: "KitBash", type: "" },
  { tagsID: 15, tags: "Texturing", type: "" },
  { tagsID: 16, tags: "Game Art", type: "" },
  { tagsID: 17, tags: "Painting", type: "" },
  { tagsID: 18, tags: "ZBrush", type: "" },
  { tagsID: 19, tags: "Illustration2D", type: "" },
  { tagsID: 20, tags: "Game Assets", type: "" },
  { tagsID: 21, tags: "Rendering", type: "" },
  { tagsID: 22, tags: "Substance Painter", type: "" },
  { tagsID: 23, tags: "Sculpting", type: "" },
  { tagsID: 24, tags: "Drawing", type: "" },
  { tagsID: 25, tags: "Blender", type: "" },
  { tagsID: 26, tags: "Props", type: "" },
  { tagsID: 27, tags: "Marmoset", type: "" },
  { tagsID: 28, tags: "Substance Designer", type: "" },
  { tagsID: 29, tags: "Hard Surface", type: "" },
  { tagsID: 30, tags: "Unreal Engine", type: "" },
  { tagsID: 31, tags: "Lighting", type: "" },
  { tagsID: 32, tags: "Photoshop CC", type: "" },
  { tagsID: 33, tags: "Maya", type: "" },
  { tagsID: 34, tags: "Fantasy", type: "" },
  { tagsID: 35, tags: "Art Tools", type: "" },
  { tagsID: 36, tags: "ShadersOrganic", type: "" },
  { tagsID: 37, tags: "Sci-Fi", type: "" },
  { tagsID: 38, tags: "3ds Max", type: "" },
  { tagsID: 39, tags: "Guides", type: "" },
  { tagsID: 40, tags: "Compositing", type: "" },
  { tagsID: 41, tags: "Tools", type: "" },
  { tagsID: 42, tags: "Animation & Effects", type: "" },
  { tagsID: 43, tags: "Other Tutorials", type: "" },
  { tagsID: 44, tags: "Speedpaint", type: "" },
  { tagsID: 45, tags: "Photoshop CS6+", type: "" },
  { tagsID: 46, tags: "Marvelous Designer", type: "" },
  { tagsID: 47, tags: "Animation and Effects", type: "" },
  { tagsID: 48, tags: "Rigs", type: "" },
  { tagsID: 49, tags: "Templates", type: "" },
  { tagsID: 50, tags: "Procreate", type: "" },
  { tagsID: 51, tags: "Keyshot", type: "" },
  { tagsID: 52, tags: "Other", type: "" },
  { tagsID: 53, tags: "3D-Coat", type: "" },
  { tagsID: 54, tags: "VFX", type: "" },
  { tagsID: 55, tags: "Film Art", type: "" },
  { tagsID: 56, tags: "Photogrammetry", type: "" },
  { tagsID: 57, tags: "Animation", type: "" },
  { tagsID: 58, tags: "Traditional Art", type: "" },
  { tagsID: 59, tags: "Cartoon", type: "" },
  { tagsID: 60, tags: "xNormal", type: "" },
  { tagsID: 61, tags: "Krita", type: "" },
  { tagsID: 62, tags: "Modo", type: "" },
  { tagsID: 63, tags: "Arnold", type: "" },
  { tagsID: 64, tags: "Clip Studio Paint", type: "" },
  { tagsID: 65, tags: "DAZ Studio", type: "" },
  { tagsID: 66, tags: "Houdini", type: "" },
  { tagsID: 67, tags: "Sketchbook Pro", type: "" },
  { tagsID: 68, tags: "Infinite Painter", type: "" },
  { tagsID: 69, tags: "Painter", type: "" },
  { tagsID: 70, tags: "Cinema 4D", type: "" },
  { tagsID: 71, tags: "Educational", type: "" },
  { tagsID: 72, tags: "Affinity Photo", type: "" },
  { tagsID: 73, tags: "Quixel Suite", type: "" },
  { tagsID: 74, tags: "Artbooks", type: "" },
  { tagsID: 75, tags: "Rigging", type: "" },
  { tagsID: 76, tags: "Unity", type: "" },
  { tagsID: 77, tags: "PaintTool SAI", type: "" },
  { tagsID: 78, tags: "Comic Art", type: "" },
  { tagsID: 79, tags: "Audio", type: "" },
  { tagsID: 80, tags: "Other", type: "" },
  { tagsID: 81, tags: "V-Ray", type: "" },
  { tagsID: 82, tags: "Comics", type: "" },
  { tagsID: 83, tags: "Illustrator", type: "" },
  { tagsID: 84, tags: "ZBrush IMM", type: "" },
  { tagsID: 85, tags: "Nuke", type: "" },
  { tagsID: 86, tags: "MoI", type: "" },
  { tagsID: 87, tags: "After Effects", type: "" },
  { tagsID: 88, tags: "Manga Studio", type: "" },
  { tagsID: 89, tags: "UI | Interface", type: "" },
  { tagsID: 90, tags: "Mari", type: "" },
  { tagsID: 91, tags: "Affinity Designer", type: "" },
  { tagsID: 92, tags: "Clarisse iFX", type: "" },
  { tagsID: 93, tags: "Mudbox", type: "" },
  { tagsID: 94, tags: "Pixel Art", type: "" },
  { tagsID: 95, tags: "GIMP", type: "" },
  { tagsID: 96, tags: "ZBrushCore", type: "" },
  { tagsID: 97, tags: "Akeytsu", type: "" },
  { tagsID: 98, tags: "Mental Ray", type: "" },
  { tagsID: 99, tags: "Terragen", type: "" },
];
