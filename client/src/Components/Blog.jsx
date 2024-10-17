import React from "react";
import image from "../assets/alex.jpg";
import { FaRegClock, FaLink } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { useLocation } from "react-router-dom";

function getRandomDateFormatted() {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 10));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogPost = () => {
  const { state } = useLocation();
  const { id, name, role, imageUrl } = state;

  const post = {
    title: role,
    subtitle:
      "A comprehensive guide to React, Tailwind, and modern web practices",
    author: name,
    date: getRandomDateFormatted(),
    readTime: `${Math.floor(Math.random() * 10)} min read`,
    image: imageUrl,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    relatedLinks: [{ title: "Getting Started with React", url: "#" }],
  };

  return (
    <article id={id} className="mx-auto max-w-6xl px-4 py-8">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">{post.title}</h1>
        <h2 className="mb-4 text-xl text-gray-600">{post.subtitle}</h2>

        <div className="flex items-center space-x-6 text-gray-600">
          <div className="flex items-center">
            <img
              src={image}
              alt={post.author}
              className="mr-3 h-10 w-10 rounded-full"
            />
            <span>{post.author}</span>
          </div>

          <div className="flex items-center">
            <LuCalendarDays className="mr-2 h-5 w-5" />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center">
            <FaRegClock className="mr-2 h-5 w-5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="prose lg:prose-lg max-w-none">
        {/* Image */}
        {post.image && (
          <div className="mx-auto mb-8 h-[50vh] overflow-hidden rounded-lg bg-red-300">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}

        {/* Content */}
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed text-gray-700">
            {paragraph.trim()}
          </p>
        ))}
      </div>

      {/* Related Links Section */}
      <footer className="mt-12 border-t border-gray-200 pt-8">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">
          Related Articles
        </h3>
        <div className="space-y-3">
          {post.relatedLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex items-center text-blue-600 transition-colors hover:text-blue-800"
            >
              <FaLink className="mr-2 h-4 w-4" />
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default BlogPost;
