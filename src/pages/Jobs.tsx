import Header from "../components/Header";
import bluechain from "../assets/bluechain.svg";
import PreviewBox from "../components/PreviewBox";
import Waitlist from "../components/Waitlist";
import { useState } from "react";
import { motion } from "framer-motion";

function Jobs() {
  const [open, setOpen] = useState(false);
  const [selectedToken1, setSelectedToken1] = useState("studio");
  const [selectedToken3, setSelectedToken3] = useState("token1");

  const handleTokenClick = (token: string, bubble: number) => {
    if (bubble === 1) {
      setSelectedToken1(token);
    } else if (bubble === 3) {
      setSelectedToken3(token);
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
    viewport: { once: true, amount: 0.2 }, // Trigger when 20% is in view
  };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`pt-8 bg-white ${open && "blur-[2px]"}`}
      >
        <Header />
        <div className="max-w-xs w-full px-3 mx-auto flex flex-col gap-3 pt-8 min-h-[100vh]">
          {/* Section 1 */}
          <motion.p
            {...fadeUp}
            className="bg-gradient-blue text-white p-3 rounded-2xl"
          >
            If you're excited by our vision to reshape communication for
            creation then we want to hear from you.
          </motion.p>

          {/* Section 2 */}
          <motion.article
            {...fadeUp}
            className="bg-gradient-blue pt-3 rounded-2xl"
          >
            <p className="text-white px-3">
              We work together IRL in Soho, NYC. Our office doubles as an art
              studio, film set, and all-round creative space.
            </p>
            <div className="flex gap-1 items-center flex-wrap px-3">
              {["studio", "vibes", "art", "standing", "homies"].map(
                (token1, index) => (
                  <button
                  key={index}
                  onClick={() => handleTokenClick(token1, 1)}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                    selectedToken1 === token1
                      ? "bg-white"
                      : "bg-[#FFFFFF] bg-opacity-20 text-white"
                  }`}
                >
                  <div className="tokenPill flex items-center gap-1">
                    <div className="thumbnail">
                      <img
                        src={`https://typowebsitevideo.s3.amazonaws.com/${
                          token1 === "studio"
                            ? "studio.webp"
                            : token1 === "vibes"
                            ? "vibes.webp"
                            : token1 === "art"
                            ? "art.webp"
                            : token1 === "standing"
                            ? "standing.webp"
                            : "homies.webp"
                        }`}
                        alt={token1}
                        className="thumbnailImg w-6 h-6 object-cover rounded"
                      />
                    </div>
                    {/* Wrap the text in a span that applies the gradient only when selected */}
                    <span className={selectedToken1 === token1 ? "text-gradient-blue" : ""}>
                      {token1}.jpg
                    </span>
                  </div>
                </button>
                
                )
              )}
            </div>
            <div className="bubble-bottom mt-2">
              {selectedToken1 && (
                <img
                  src={`https://typowebsitevideo.s3.amazonaws.com/${
                    selectedToken1 === "studio"
                      ? "studio.webp"
                      : selectedToken1 === "vibes"
                      ? "vibes.webp"
                      : selectedToken1 === "art"
                      ? "art.webp"
                      : selectedToken1 === "standing"
                      ? "standing.webp"
                      : "homies.webp"
                  }`}
                  alt={selectedToken1}
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
            </div>
          </motion.article>

          {/* Section 3 */}
          <motion.article
            {...fadeUp}
            className="bg-gradient-blue pt-3 rounded-2xl"
          >
            <p className="text-white px-3">
              We are not currently hiring, but we always want to hear from the
              best. So, please reach out via this Typeform:
            </p>
            <button
              onClick={() => handleTokenClick("token1", 3)}
              className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ml-3 ${
                selectedToken3 === "token1"
                  ? "bg-white text-primary"
                  : "bg-[#FFFFFF33] text-white"
              }`}
            >
              <div className="tokenPill">
                <img className="tokenimg" src={bluechain} alt="Token" />
                <span className="text-gradient-blue">Typeform.com</span>
              </div>
            </button>
            <div className="bubble-bottom mt-3">
              {selectedToken3 === "token1" && (
                <PreviewBox
                  imageURL=""
                  logoURL="https://cdn.brandfetch.io/idPkJ70vyb/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                  ItemURL="https://uguyhzouvhp.typeform.com/to/b4Vgu7Yb"
                  websiteName="Typo* on Typeform"
                  description="Fill out this Typeform to reach out to us"
                />
              )}
            </div>
          </motion.article>
        </div>
      </div>

      <Waitlist open={open} setOpen={setOpen} />
    </div>
  );
}

export default Jobs;
