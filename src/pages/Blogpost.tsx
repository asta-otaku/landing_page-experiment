import { useLocation, useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import blueback from "../assets/blueback.svg";
import { useState } from "react";

function Blogpost() {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="pt-8 bg-white max-w-5xl w-full mx-auto min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4">
      <span className="font-mono text-xs invisible md:visible flex items-center justify-end text-[#7E7E7E]">
        {post.author}
      </span>

      <div className="max-w-sm p-4 w-full">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => navigate("/blog")}
          className={`flex items-center gap-2 font-medium ${
            hovered ? "text-secondary" : "text-[#7E7E7E]"
          }`}
        >
          <img src={hovered ? blueback : back} alt="back" />
          Back
        </button>
        <div className="mt-4">
          <h1 className="text-xl text-secondary font-bold">{post?.title}</h1>
          <div className="flex justify-between items-center w-full md:hidden">
            <span className="font-mono text-xs text-[#7E7E7E] mt-1">
              {post.author}
            </span>
            <span className="font-mono text-xs text-[#7E7E7E] mt-1">
              {post.date}
            </span>
          </div>
        </div>
        {post?.content.map((cnt: string, index: number) => (
          <p key={index} className="text-sm text-primary font-mono mt-4">
            {cnt}
          </p>
        ))}
      </div>

      <span className="font-mono text-xs invisible md:visible flex items-center text-[#7E7E7E] mt-1">
        {post.date}
      </span>
    </div>
  );
}

export default Blogpost;
