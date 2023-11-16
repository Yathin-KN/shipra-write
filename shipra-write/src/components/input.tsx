import { useState } from 'react';
import BlogItem from './blogItem';
import { BlogItem as BlogItemProps } from '@/lib/types';
import useBlogStore from '@/store/blog';

export const Inp = ({index}:{index:number}) => {
    const [titleJson, setTitleJson] = useState<BlogItemProps>({
        type: "Title",
        content: ""
    });
    const { updateBlogItem } = useBlogStore();
    const handleChange = (e: any) => {
        setTitleJson(() => {
            updateBlogItem(index, {
                type: "Title",
                content: e.target.innerText
            });
            
            return {
                type: "Title",
                content: e.target.innerText
            };
        });
    };

    return<div className='w-full relative'>
         <span className='absolute top-4 right-4'>
            {index}
         </span>
         <BlogItem item={titleJson} handlers={{
        onChangeHandler: handleChange
    }} />
    </div>;
};
