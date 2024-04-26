import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { blog_data } from '../../data';

const sidebar_contents = {
  widget_contents: [
    { title: 'Web Design', count: '26' },
    { title: 'Development', count: '15' },
    { title: 'Branding', count: '20' },
    { title: 'Motion Design', count: '18' },
    { title: 'UI/UX Design', count: '30' },
    { title: 'Graphic Design', count: '99' },
  ],
  rc_post: blog_data.slice(0, 3),
  tags: ['landing', 'Charity', 'apps', 'Education', 'data', 'Design', 'website', 'landing page']
}

const { widget_contents, rc_post, tags } = sidebar_contents;


const BlogSidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Search Here</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form>
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search your keyword..." />
                <button type="submit"><i className="far fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Categories</h3>
        <div className="sidebar__widget-content">
          <ul>
            {widget_contents.map((widget, i) => (
              <li key={i}>
                <Link href="/blog">
                  <a>{widget.title}<span>{widget.count}</span></a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {rc_post.map((post) => (
              <div key={post.id} className="rc__post mb-20 d-flex align-items-center">
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog-details/${post.id}`}>
                    <a>
                      <Image width={80} height={80} src={post.img} alt="" />
                    </a>
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta">
                    <span>{post.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog-details/${post.id}`}>
                      <a>{post.title.substring(0, 35)}...</a>
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tags.map((tag, i) => <Link key={i} href="/blog">
              <a>{tag}</a>
            </Link>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;