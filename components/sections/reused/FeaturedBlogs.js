import { useEffect, useState } from 'react';
import BlogRow from '../../blogs/BlogRow'
import Button from '../../UI/Button';
import { getBlogPreviews } from '../../../lib/notion';

export default function FeaturedBlogs({ blogs }) {
  // const [blogs, setBlogs] = useState([]);

  // async function getBlogs() {
  //   const blogs = await getBlogPreviews();
  //   console.log(blogs);
  //   setBlogs(blogs.slice(0, 3));
  // }

  // useEffect(() => {
  //   getBlogs();
  // }, []);
  


  // return (
  //   <section className="section m-horizontal">
  //     <h1 className="title mt-s6 mb-s4 md:mt-s18 md:mb-s8 md:text-center">
  //       Our Featured <span className="gradient-text gradient-2">Blogs</span>
  //     </h1>
  //      <BlogRow blogs={blogs} isHorizontal ={true}/> 
    
  //   </section>
    
  // );
}




