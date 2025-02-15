import { marketTags } from "./data"; // Importing existing tags
import market_banner from "./market_banner.jpg"; // Placeholder image


export const marketItems = Array.from({ length: 100 }, (_, index) => {
  // Randomly select 2-4 tags for this item
  const selectedTags = marketTags
    .sort(() => 0.5 - Math.random()) // Shuffle the tags
    .slice(0, Math.floor(Math.random() * 3) + 2); // Pick 2-4 tags

  const tagNames = selectedTags.map(tag => tag.tagName); // Extract tag names
  const allCategories = selectedTags.flatMap(tag => tag.categories); // Extract categories from each tag
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
  };
});