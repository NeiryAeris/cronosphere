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

import market_banner from "./market_banner.jpg"; // Placeholder image
import item1 from "./i_really_like_this_character.jpg";
import item2 from "./i_really_like_this_character.jpg";
import item3 from "./i_really_like_this_character.jpg";
import item4 from "./i_really_like_this_character.jpg";
import item5 from "./i_really_like_this_character.jpg";
import item6 from "./i_really_like_this_character.jpg";
import item7 from "./this_pic_really_beautifull.jpg";

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
  { tagID: 1, tagName: "3D models", categories: ["Game Assets", "Resources"] },
  { tagID: 2, tagName: "Photography3D", categories: ["Resources"] },
  { tagID: 3, tagName: "Materials", categories: ["Resources"] },
  { tagID: 4, tagName: "Brushes2D", categories: ["Resources"] },
  { tagID: 5, tagName: "Brushes3D", categories: ["Resources"] },
  { tagID: 6, tagName: "3D Game Assets", categories: ["Game Assets", "Resources"] },
  { tagID: 7, tagName: "PhotoshopDigital", categories: ["Tutorials"] },
  { tagID: 8, tagName: "ArtGraphics & Animation", categories: ["Tutorials"] },
  { tagID: 9, tagName: "Environments", categories: ["Game Assets", "Resources"] },
  { tagID: 10, tagName: "Dev Tools", categories: ["Resources"] },
  { tagID: 11, tagName: "Concept Art", categories: ["Artworks"] },
  { tagID: 12, tagName: "Characters", categories: ["Game Assets", "Resources"] },
  { tagID: 13, tagName: "Modeling", categories: ["Tutorials"] },
  { tagID: 14, tagName: "KitBash", categories: ["Game Assets", "Resources"] },
  { tagID: 15, tagName: "Texturing", categories: ["Tutorials"] },
  { tagID: 16, tagName: "Game Art", categories: ["Game Assets", "Resources"] },
  { tagID: 17, tagName: "Painting", categories: ["Tutorials"] },
  { tagID: 18, tagName: "ZBrush", categories: ["Tutorials"] },
  { tagID: 19, tagName: "Illustration2D", categories: ["Artworks"] },
  { tagID: 20, tagName: "Rendering", categories: ["Tutorials"] },
  { tagID: 21, tagName: "Substance Painter", categories: ["Tutorials"] },
  { tagID: 22, tagName: "Sculpting", categories: ["Tutorials"] },
  { tagID: 23, tagName: "Drawing", categories: ["Tutorials"] },
  { tagID: 24, tagName: "Blender", categories: ["Tutorials"] },
  { tagID: 25, tagName: "Props", categories: ["Game Assets", "Resources"] },
  { tagID: 26, tagName: "Marmoset", categories: ["Tutorials"] },
  { tagID: 27, tagName: "Substance Designer", categories: ["Tutorials"] },
  { tagID: 28, tagName: "Hard Surface", categories: ["Tutorials"] },
  { tagID: 29, tagName: "Unreal Engine", categories: ["Tutorials"] },
  { tagID: 30, tagName: "Lighting", categories: ["Tutorials"] },
  { tagID: 31, tagName: "Photoshop CC", categories: ["Tutorials"] },
  { tagID: 32, tagName: "Maya", categories: ["Tutorials"] },
  { tagID: 33, tagName: "Fantasy", categories: ["Artworks"] },
  { tagID: 34, tagName: "Art Tools", categories: ["Resources"] },
  { tagID: 35, tagName: "ShadersOrganic", categories: ["Tutorials"] },
  { tagID: 36, tagName: "Sci-Fi", categories: ["Artworks"] },
  { tagID: 37, tagName: "3ds Max", categories: ["Tutorials"] },
  { tagID: 38, tagName: "Guides", categories: ["Tutorials"] },
  { tagID: 39, tagName: "Compositing", categories: ["Tutorials"] },
  { tagID: 40, tagName: "Tools", categories: ["Resources"] },
  { tagID: 41, tagName: "Animation & Effects", categories: ["Tutorials"] },
  { tagID: 42, tagName: "Other Tutorials", categories: ["Tutorials"] },
  { tagID: 43, tagName: "Speedpaint", categories: ["Tutorials"] },
  { tagID: 44, tagName: "Photoshop CS6+", categories: ["Tutorials"] },
  { tagID: 45, tagName: "Marvelous Designer", categories: ["Tutorials"] },
  { tagID: 46, tagName: "Animation and Effects", categories: ["Tutorials"] },
  { tagID: 47, tagName: "Rigs", categories: ["Resources"] },
  { tagID: 48, tagName: "Templates", categories: ["Resources"] },
  { tagID: 49, tagName: "Procreate", categories: ["Tutorials"] },
  { tagID: 50, tagName: "Keyshot", categories: ["Tutorials"] },
  { tagID: 51, tagName: "Other", categories: ["Resources"] },
  { tagID: 52, tagName: "3D-Coat", categories: ["Tutorials"] },
  { tagID: 53, tagName: "VFX", categories: ["Tutorials"] },
  { tagID: 54, tagName: "Film Art", categories: ["Artworks"] },
  { tagID: 55, tagName: "Photogrammetry", categories: ["Tutorials"] },
  { tagID: 56, tagName: "Animation", categories: ["Tutorials"] },
  { tagID: 57, tagName: "Traditional Art", categories: ["Artworks"] },
  { tagID: 58, tagName: "Cartoon", categories: ["Artworks"] },
  { tagID: 59, tagName: "xNormal", categories: ["Tutorials"] },
  { tagID: 60, tagName: "Krita", categories: ["Tutorials"] },
  { tagID: 61, tagName: "Modo", categories: ["Tutorials"] },
  { tagID: 62, tagName: "Arnold", categories: ["Tutorials"] },
  { tagID: 63, tagName: "Clip Studio Paint", categories: ["Tutorials"] },
  { tagID: 64, tagName: "DAZ Studio", categories: ["Tutorials"] },
  { tagID: 65, tagName: "Houdini", categories: ["Tutorials"] },
  { tagID: 66, tagName: "Sketchbook Pro", categories: ["Tutorials"] },
  { tagID: 67, tagName: "Infinite Painter", categories: ["Tutorials"] },
  { tagID: 68, tagName: "Painter", categories: ["Tutorials"] },
  { tagID: 69, tagName: "Cinema 4D", categories: ["Tutorials"] },
  { tagID: 70, tagName: "Educational", categories: ["Tutorials"] },
  { tagID: 71, tagName: "Affinity Photo", categories: ["Tutorials"] },
  { tagID: 72, tagName: "Quixel Suite", categories: ["Tutorials"] },
  { tagID: 73, tagName: "Artbooks", categories: ["Books & Comics"] },
  { tagID: 74, tagName: "Rigging", categories: ["Tutorials"] },
  { tagID: 75, tagName: "Unity", categories: ["Tutorials"] },
  { tagID: 76, tagName: "PaintTool SAI", categories: ["Tutorials"] },
  { tagID: 77, tagName: "Comic Art", categories: ["Artworks"] },
  { tagID: 78, tagName: "Audio", categories: ["Resources"] },
  { tagID: 79, tagName: "V-Ray", categories: ["Tutorials"] },
  { tagID: 80, tagName: "Comics", categories: ["Books & Comics"] },
  { tagID: 81, tagName: "Illustrator", categories: ["Tutorials"] },
  { tagID: 82, tagName: "ZBrush IMM", categories: ["Resources"] },
  { tagID: 83, tagName: "Nuke", categories: ["Tutorials"] },
  { tagID: 84, tagName: "MoI", categories: ["Tutorials"] },
  { tagID: 85, tagName: "After Effects", categories: ["Tutorials"] },
  { tagID: 86, tagName: "Manga Studio", categories: ["Tutorials"] },
  { tagID: 87, tagName: "UI | Interface", categories: ["Tutorials"] },
  { tagID: 88, tagName: "Mari", categories: ["Tutorials"] },
  { tagID: 89, tagName: "Affinity Designer", categories: ["Tutorials"] },
  { tagID: 90, tagName: "Clarisse iFX", categories: ["Tutorials"] },
  { tagID: 91, tagName: "Mudbox", categories: ["Tutorials"] },
  { tagID: 92, tagName: "Pixel Art", categories: ["Artworks"] },
  { tagID: 93, tagName: "GIMP", categories: ["Tutorials"] },
  { tagID: 94, tagName: "ZBrushCore", categories: ["Tutorials"] },
  { tagID: 95, tagName: "Akeytsu", categories: ["Tutorials"] },
  { tagID: 96, tagName: "Mental Ray", categories: ["Tutorials"] },
  { tagID: 97, tagName: "Terragen", categories: ["Tutorials"] },
];

export const marketItems = Array.from({ length: 100 }, (_, index) => {
  // Randomly select 2-4 tags for this item
  const selectedTags = marketTags
    .sort(() => 0.5 - Math.random()) // Shuffle the tags
    .slice(0, Math.floor(Math.random() * 3) + 2); // Pick 2-4 tags

  const tagNames = selectedTags.map((tag) => tag.tagName); // Extract tag names
  const allCategories = selectedTags.flatMap((tag) => tag.categories); // Extract categories from each tag
  const uniqueCategories = [...new Set(allCategories)]; // Remove duplicates

  return {
    itemID: index + 1,
    itemName: "Mademoiselle Furina art", // Random name from 15 types
    itemPrice: Math.floor(Math.random() * 145) + 5, // Random price between $5-$150
    itemTags: tagNames,
    itemCategory: uniqueCategories.length > 0 ? uniqueCategories[0] : "Miscellaneous", // Assign first category
    itemAuthor: `Artist ${Math.floor(Math.random() * 20) + 1}`, // Assigning up to 20 different authors
    itemAuthorID: Math.floor(Math.random() * 20) + 1,
    itemImage: market_banner, // Placeholder image
    comments: ["Amazing picture!", "I love the details."],
    previewPics: [item1, item2, item3, item4, item5, item6, item7],
  };
});

export const sampleItem = {
  itemID: 1,
  itemName: "Mademoiselle Furina art", // Random name from 15 types
  itemPrice: Math.floor(Math.random() * 145) + 5, // Random price between $5-$150
  itemTags: "Guides",
  itemCategory: "Miscellaneous", // Assign first category
  itemAuthor: `Artist ${Math.floor(Math.random() * 20) + 1}`, // Assigning up to 20 different authors
  itemAuthorID: Math.floor(Math.random() * 20) + 1,
  itemImage: market_banner, // Placeholder image
  comments: ["Amazing picture!", "I love the details."],
  previewPics: [item1, item2, item3, item4, item5, item6, item7],
};
