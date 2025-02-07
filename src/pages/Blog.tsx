import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Waitlist from "../components/Waitlist";

const blogPosts: {
  id: string;
  title: string;
  content: string[];
  author: string;
  date: string;
}[] = [
  {
    id: "1",
    title: "Why we created Typo*",
    content: [
      "We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
    ],
    author: "Sahil Handa, CEO",
    date: "05.03.24",
  },
  {
    id: "2",
    title: "On Craft",
    content: [
      "We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
    ],
    author: "Sahil",
    date: "05.03.24",
  },
  {
    id: "3",
    title: "Meet our team",
    content: [
      "We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
    ],
    author: "Handa, CEO",
    date: "05.03.24",
  },
  {
    id: "4",
    title: "Things we've been thinking about",
    content: [
      "We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
    ],
    author: "Sahil Handa, COO",
    date: "05.03.24",
  },
  {
    id: "5",
    title: "Another day, another blog",
    content: [
      "We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
      "I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.We first began Typo* when we thought we wanted to write a blog post about how and why we created Typo. This is what a blog post could look like. I'm running out of energy to write so the rest of this will be a copy pasta.",
    ],
    author: "S. Handal, CTO",
    date: "05.03.24",
  },
];

function Blog() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<{ [key: string]: boolean }>({});

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`pt-8 bg-white ${open && "blur-[2px]"}`}
      >
        <Header />
        <div className="px-3 mx-auto flex flex-col gap-3 pt-8 min-h-[100vh]">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`grid ${
                hovered[post.id] ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
              } gap-2 max-w-fit mx-auto`}
              onMouseEnter={() =>
                setHovered((prev) => ({ ...prev, [post.id]: true }))
              }
              onMouseLeave={() =>
                setHovered((prev) => ({ ...prev, [post.id]: false }))
              }
            >
              <span
                className={`text-[#7E7E7E] font-mono text-xs ${
                  hovered[post.id]
                    ? "invisible md:visible flex items-center justify-end"
                    : "hidden"
                }`}
              >
                {post.author}
              </span>
              <div
                onClick={() =>
                  navigate(`/blog/${post.id}`, { state: { post } })
                }
                className="max-w-xs w-full flex flex-col gap-3 p-3 rounded-2xl border border-solid border-[#F3F3F3] hover:bg-[#F3F3F3] cursor-pointer"
              >
                <h1 className="font-medium text-secondary">{post.title}</h1>
                <p className="font-mono text-[#7E7E7E] text-xs line-clamp-1">
                  {post.content[0]}
                </p>
              </div>
              <span
                className={`text-[#7E7E7E] font-mono text-xs ${
                  hovered[post.id]
                    ? "invisible md:visible flex items-center"
                    : "hidden"
                }`}
              >
                {post.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Waitlist open={open} setOpen={setOpen} />
    </div>
  );
}

export default Blog;
