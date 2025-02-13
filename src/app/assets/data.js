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
  { tagID: 1, tags: "3D models", categories: ["Game Assets", "Resources"] },
  { tagID: 2, tags: "Photography3D", categories: ["Resources"] },
  { tagID: 3, tags: "Materials", categories: ["Resources"] },
  { tagID: 4, tags: "Brushes2D", categories: ["Resources"] },
  { tagID: 5, tags: "Brushes3D", categories: ["Resources"] },
  { tagID: 6, tags: "3D Game Assets", categories: ["Game Assets", "Resources"] },
  { tagID: 7, tags: "PhotoshopDigital", categories: ["Tutorials"] },
  { tagID: 8, tags: "ArtGraphics & Animation", categories: ["Tutorials"] },
  { tagID: 9, tags: "Environments", categories: ["Game Assets", "Resources"] },
  { tagID: 10, tags: "Dev Tools", categories: ["Resources"] },
  { tagID: 11, tags: "Concept Art", categories: ["Artworks"] },
  { tagID: 12, tags: "Characters", categories: ["Game Assets", "Resources"] },
  { tagID: 13, tags: "Modeling", categories: ["Tutorials"] },
  { tagID: 14, tags: "KitBash", categories: ["Game Assets", "Resources"] },
  { tagID: 15, tags: "Texturing", categories: ["Tutorials"] },
  { tagID: 16, tags: "Game Art", categories: ["Game Assets", "Resources"] },
  { tagID: 17, tags: "Painting", categories: ["Tutorials"] },
  { tagID: 18, tags: "ZBrush", categories: ["Tutorials"] },
  { tagID: 19, tags: "Illustration2D", categories: ["Artworks"] },
  { tagID: 20, tags: "Rendering", categories: ["Tutorials"] },
  { tagID: 21, tags: "Substance Painter", categories: ["Tutorials"] },
  { tagID: 22, tags: "Sculpting", categories: ["Tutorials"] },
  { tagID: 23, tags: "Drawing", categories: ["Tutorials"] },
  { tagID: 24, tags: "Blender", categories: ["Tutorials"] },
  { tagID: 25, tags: "Props", categories: ["Game Assets", "Resources"] },
  { tagID: 26, tags: "Marmoset", categories: ["Tutorials"] },
  { tagID: 27, tags: "Substance Designer", categories: ["Tutorials"] },
  { tagID: 28, tags: "Hard Surface", categories: ["Tutorials"] },
  { tagID: 29, tags: "Unreal Engine", categories: ["Tutorials"] },
  { tagID: 30, tags: "Lighting", categories: ["Tutorials"] },
  { tagID: 31, tags: "Photoshop CC", categories: ["Tutorials"] },
  { tagID: 32, tags: "Maya", categories: ["Tutorials"] },
  { tagID: 33, tags: "Fantasy", categories: ["Artworks"] },
  { tagID: 34, tags: "Art Tools", categories: ["Resources"] },
  { tagID: 35, tags: "ShadersOrganic", categories: ["Tutorials"] },
  { tagID: 36, tags: "Sci-Fi", categories: ["Artworks"] },
  { tagID: 37, tags: "3ds Max", categories: ["Tutorials"] },
  { tagID: 38, tags: "Guides", categories: ["Tutorials"] },
  { tagID: 39, tags: "Compositing", categories: ["Tutorials"] },
  { tagID: 40, tags: "Tools", categories: ["Resources"] },
  { tagID: 41, tags: "Animation & Effects", categories: ["Tutorials"] },
  { tagID: 42, tags: "Other Tutorials", categories: ["Tutorials"] },
  { tagID: 43, tags: "Speedpaint", categories: ["Tutorials"] },
  { tagID: 44, tags: "Photoshop CS6+", categories: ["Tutorials"] },
  { tagID: 45, tags: "Marvelous Designer", categories: ["Tutorials"] },
  { tagID: 46, tags: "Animation and Effects", categories: ["Tutorials"] },
  { tagID: 47, tags: "Rigs", categories: ["Resources"] },
  { tagID: 48, tags: "Templates", categories: ["Resources"] },
  { tagID: 49, tags: "Procreate", categories: ["Tutorials"] },
  { tagID: 50, tags: "Keyshot", categories: ["Tutorials"] },
  { tagID: 51, tags: "Other", categories: ["Resources"] },
  { tagID: 52, tags: "3D-Coat", categories: ["Tutorials"] },
  { tagID: 53, tags: "VFX", categories: ["Tutorials"] },
  { tagID: 54, tags: "Film Art", categories: ["Artworks"] },
  { tagID: 55, tags: "Photogrammetry", categories: ["Tutorials"] },
  { tagID: 56, tags: "Animation", categories: ["Tutorials"] },
  { tagID: 57, tags: "Traditional Art", categories: ["Artworks"] },
  { tagID: 58, tags: "Cartoon", categories: ["Artworks"] },
  { tagID: 59, tags: "xNormal", categories: ["Tutorials"] },
  { tagID: 60, tags: "Krita", categories: ["Tutorials"] },
  { tagID: 61, tags: "Modo", categories: ["Tutorials"] },
  { tagID: 62, tags: "Arnold", categories: ["Tutorials"] },
  { tagID: 63, tags: "Clip Studio Paint", categories: ["Tutorials"] },
  { tagID: 64, tags: "DAZ Studio", categories: ["Tutorials"] },
  { tagID: 65, tags: "Houdini", categories: ["Tutorials"] },
  { tagID: 66, tags: "Sketchbook Pro", categories: ["Tutorials"] },
  { tagID: 67, tags: "Infinite Painter", categories: ["Tutorials"] },
  { tagID: 68, tags: "Painter", categories: ["Tutorials"] },
  { tagID: 69, tags: "Cinema 4D", categories: ["Tutorials"] },
  { tagID: 70, tags: "Educational", categories: ["Tutorials"] },
  { tagID: 71, tags: "Affinity Photo", categories: ["Tutorials"] },
  { tagID: 72, tags: "Quixel Suite", categories: ["Tutorials"] },
  { tagID: 73, tags: "Artbooks", categories: ["Books & Comics"] },
  { tagID: 74, tags: "Rigging", categories: ["Tutorials"] },
  { tagID: 75, tags: "Unity", categories: ["Tutorials"] },
  { tagID: 76, tags: "PaintTool SAI", categories: ["Tutorials"] },
  { tagID: 77, tags: "Comic Art", categories: ["Artworks"] },
  { tagID: 78, tags: "Audio", categories: ["Resources"] },
  { tagID: 79, tags: "V-Ray", categories: ["Tutorials"] },
  { tagID: 80, tags: "Comics", categories: ["Books & Comics"] },
  { tagID: 81, tags: "Illustrator", categories: ["Tutorials"] },
  { tagID: 82, tags: "ZBrush IMM", categories: ["Resources"] },
  { tagID: 83, tags: "Nuke", categories: ["Tutorials"] },
  { tagID: 84, tags: "MoI", categories: ["Tutorials"] },
  { tagID: 85, tags: "After Effects", categories: ["Tutorials"] },
  { tagID: 86, tags: "Manga Studio", categories: ["Tutorials"] },
  { tagID: 87, tags: "UI | Interface", categories: ["Tutorials"] },
  { tagID: 88, tags: "Mari", categories: ["Tutorials"] },
  { tagID: 89, tags: "Affinity Designer", categories: ["Tutorials"] },
  { tagID: 90, tags: "Clarisse iFX", categories: ["Tutorials"] },
  { tagID: 91, tags: "Mudbox", categories: ["Tutorials"] },
  { tagID: 92, tags: "Pixel Art", categories: ["Artworks"] },
  { tagID: 93, tags: "GIMP", categories: ["Tutorials"] },
  { tagID: 94, tags: "ZBrushCore", categories: ["Tutorials"] },
  { tagID: 95, tags: "Akeytsu", categories: ["Tutorials"] },
  { tagID: 96, tags: "Mental Ray", categories: ["Tutorials"] },
  { tagID: 97, tags: "Terragen", categories: ["Tutorials"] },
];
