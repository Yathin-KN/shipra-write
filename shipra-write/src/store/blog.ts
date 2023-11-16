// blogStore.ts
import {create} from 'zustand';
import { BlogItem } from './../lib/types';

interface BlogStore {
  blogItems: BlogItem[];
  setBlogItems: (newItems: BlogItem[]) => void;
  updateBlogItem: (index: number, newItem: BlogItem) => void;
  removeLastBlogItem: () => void; // New action to remove the last BlogItem
}

const useBlogStore = create<BlogStore>((set) => ({
  blogItems: [],

  setBlogItems: (newItems) => set({ blogItems: newItems }),

  updateBlogItem: (index, newItem) => set((state) => {
    const updatedItems = [...state.blogItems];
    updatedItems[index] = newItem;
    return { blogItems: updatedItems };
  }),

  removeLastBlogItem: () => set((state) => {
    const updatedItems = [...state.blogItems];
    updatedItems.pop(); // Remove the last element
    return { blogItems: updatedItems };
  }),
}));

export default useBlogStore;
