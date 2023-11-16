
export interface PodcastData {
  category: string;
  description: string;
  image: string;
  link: string;
  userId:string;
  podcastId?:string;
  
};
export interface Event  {
  title: string;
  desc: string;
  photo?: string;
  username: string;
  categories?:string[];
  eventDate: Date;
  eventTime: string;
  startDate:string;
  endDate:string;
  eventLocation: string;
  eventDescription: string;
  eventId?:string;
}

export interface Post {
  postImage: string | undefined;
  postDate: string;
  postTime:string;
  postDetails: PostDetails;
  _id: string;
  user_id: string;
  content: Content[];
  post_id: string;
  __v: number;
  user_info:{
    username:string;
    email:string;
    profilePic:any;
  }
}

interface PostDetails {
  postTitle: string;
  postDescription: string;
  categories: string[];
}

interface Content {
  type: string;
  content: string | ContentImage;
  _id: string;
}

interface ContentImage {
  imageUrl: string;
  imageCaption: string;
}


export type BlogItem = 
  | { type: 'Title'; content: string }
  | { type: 'Subtitle'; content: string }
  | { type: 'Description'; content: string }
  | { type: 'Bullet'; content: string }
  | {
      // author: string; 
      type: 'Blog Info'; 
      content: {
        date: string;
        time: string;
        // categories: string[];
        author: {
          name: string;
          avatarUrl: string;
        };
        // imageUrl: string;
      }
    }
    | {
      // author: string; 
      type: 'Event_Info'; 
      content: {
        date: string;
        time: string;
        // categories: string[];
        author: {
          name: string;
          avatarUrl: string;
        };
        // imageUrl: string;
      }
    }
  | { 
      type: 'Image'; 
      content: {
        imageUrl: string;
        imageCaption: string;
      }
    }
  | { 
      type: 'Video'; 
      content: {
        videoUrl: string;
        videoCaption: string;
    }
 };


export interface BlogItemProps {
  item: BlogItem;
  handlers?: {
    onChangeHandler: (e: any) => void;
    onChangeImageUrl?:(imgUrl:string) =>void;
    onChangeVideoUrl?:(videoUrl:string)=>void;
    onFileUpload?:(e:any)=>void;
  };
}
export interface UserStore {
    user_id: string;
    email: string;
    access_token: string;
    setUser: (user_id: string, email: string, access_token: string) => void;
    getUserInfo: () => { user_id: string; email: string; };
    getAccessToken: () => string;
}
export interface deletePostProps {
    user_id: string;
    post_id: string;
}
export interface EventData {
    title: string;
    desc: string;
    photo: string;
    username: string | null;
    startDate: Date;
    endDate: Date | null;
    eventTime: string;
    eventLocation: string;
    eventDescription: string;
    eventId: string;
    user_id: string;
}
export interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: Category[];
  onCategoryToggle: (category: Category) => void;
}
export interface Category {
  categoryId: string;
  categoryName: string;
  postCount: number;
}


