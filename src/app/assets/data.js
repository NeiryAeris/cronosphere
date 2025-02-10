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
  "Digital Art", "Fantasy", "Sci-Fi", "Portrait", "Landscape", 
  "Abstract", "Surreal", "Cyberpunk", "Realism", "Mythology", 
  "Dark", "Anime", "Futuristic", "Classic", "Minimalist"
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
    tags: getRandomTags() // Randomly generated tags
  }))
);

export const artists = [
  { id: 1, img: avatar, name: "Artist 1", artworkImg: artwork_img_1, title: "Concept Artist" },
];
