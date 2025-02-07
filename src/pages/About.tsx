import Header from "../components/Header";
import bluechain from "../assets/bluechain.svg";
import chain from "../assets/chain.svg";
import PreviewBox from "../components/PreviewBox";
import Waitlist from "../components/Waitlist";
import { useEffect, useLayoutEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  const [open, setOpen] = useState(false);

  const [selectedToken1, setSelectedToken1] = useState("token1");
  const [selectedToken3, setSelectedToken3] = useState("token1");
  const [selectedToken4, setSelectedToken4] = useState("token1");

  const handleTokenClick = (token: string, bubble: number) => {
    if (bubble === 1) {
      setSelectedToken1(token);
    } else if (bubble === 3) {
      setSelectedToken3(token);
    } else if (bubble === 4) {
      setSelectedToken4(token);
    }
  };

  useEffect(() => {
    // This function sets a CSS variable with the window height
    function setWindowHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    // Initialize AOS
    Aos.init({
      duration: 800, // or your desired configuration
    });

    // Run the function on load and resize
    setWindowHeight();
    window.addEventListener("resize", setWindowHeight);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", setWindowHeight);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useLayoutEffect(() => {}, []);

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`pt-8 bg-white ${open && "blur-[2px]"}`}
      >
        <Header />
        <div className="max-w-xs w-full px-3 mx-auto flex flex-col gap-3 pt-8 min-h-[100vh]">
          <article className="bg-secondary pt-3 rounded-2xl">
            <p className="text-white px-3">
              We're a small team of crafts people who believe art and technology
              must mix. We're motivated by mission, craft, and people
            </p>
            <div
              data-aos-once="false"
              data-aos="fade-up"
              className="flex gap-1 items-center flex-wrap px-3"
            >
              <button
                onClick={() => handleTokenClick("token1", 1)}
                className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token1"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>whiteboarding.jpg</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token2", 1)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token2"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src="https://typowebsitevideo.s3.amazonaws.com/lockedin.webp"
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>locked in.jpg</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token3", 1)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token3"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src="https://typowebsitevideo.s3.amazonaws.com/offsite.webp"
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>offsite.jpg</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token4", 1)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken1 === "token4"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <div className="thumbnail">
                    <img
                      src="https://typowebsitevideo.s3.amazonaws.com/candid.webp"
                      alt="Token Thumbnail"
                      className="thumbnailImg"
                    ></img>
                  </div>

                  <span>candid.jpg</span>
                </div>
              </button>
            </div>
            <div className="bubble-bottom mt-2">
              {selectedToken1 === "token1" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/whiteboarding.webp "
                  alt="Whiteboarding"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
              {selectedToken1 === "token2" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/lockedin.webp"
                  alt="Locked in"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
              {selectedToken1 === "token3" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/offsite.webp"
                  alt="Offsite"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
              {selectedToken1 === "token4" && (
                <img
                  src="https://typowebsitevideo.s3.amazonaws.com/candid.webp"
                  alt="Candid"
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                  }}
                />
              )}
            </div>
          </article>

          <article className="bg-secondary pt-3 rounded-2xl">
            <p className="text-white px-3">Where to find us:</p>
            <div
              data-aos-once="false"
              data-aos="fade-up"
              className="flex flex-wrap items-center gap-1 px-3"
            >
              <button
                onClick={() => handleTokenClick("token1", 3)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken3 === "token1"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <img
                    className="tokenimg"
                    src={selectedToken3 === "token1" ? bluechain : chain}
                    alt="Token"
                  />

                  <span>Instagram.com</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token2", 3)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken3 === "token2"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <img
                    className="tokenimg"
                    src={selectedToken3 === "token2" ? bluechain : chain}
                    alt="Token"
                  />

                  <span>X.com</span>
                </div>
              </button>
              <button
                onClick={() => handleTokenClick("token3", 3)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken3 === "token3"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <img
                    className="tokenimg"
                    src={selectedToken3 === "token3" ? bluechain : chain}
                    alt="Token"
                  />

                  <span>Youtube.com</span>
                </div>
              </button>
            </div>
            <div className="bubble-bottom mt-2">
              {selectedToken3 === "token1" && (
                <PreviewBox
                  imageURL=""
                  logoURL="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
                  ItemURL="https://www.instagram.com/tyyyyyyyyyyypo/"
                  websiteName="Typo* on Instagram"
                  description="A more ~editorial~ pov"
                />
              )}

              {selectedToken3 === "token2" && (
                <PreviewBox
                  imageURL=""
                  logoURL="https://abs.twimg.com/responsive-web/client-web/icon-svg.ea5ff4aa.svg"
                  ItemURL="https://twitter.com/tyyyyyyyyyyypo"
                  websiteName="Typo on x.com"
                  description="Sometimes we create moodboards, sometimes we'll have product updates here."
                />
              )}

              {selectedToken3 === "token3" && (
                <PreviewBox
                  imageURL=""
                  logoURL="https://www.youtube.com/s/desktop/28b0985e/img/favicon_144x144.png"
                  ItemURL="https://www.youtube.com/@tyyyyyyyyyyypo/videos"
                  websiteName="Typo* on Youtube"
                  description="Checkout our vlogs for a bts look at how we're building the company."
                />
              )}
            </div>
          </article>

          <article className="bg-secondary pt-3 rounded-2xl">
            <p className="text-white px-3">Obligatory legal stuff:</p>
            <div
              data-aos-once="false"
              data-aos="fade-up"
              className="flex gap-1 items-center flex-wrap px-3"
            >
              <button
                onClick={() => handleTokenClick("token1", 4)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken4 === "token1"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <img
                    className="tokenimg"
                    src={selectedToken4 === "token1" ? bluechain : chain}
                    alt="Token"
                  />

                  <span>Terms of Service</span>
                </div>
              </button>

              <button
                onClick={() => handleTokenClick("token2", 4)}
                className={`flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl w-fit cursor-pointer ${
                  selectedToken4 === "token2"
                    ? "bg-white text-primary"
                    : "bg-[#FFFFFF33] text-white"
                }`}
              >
                <div className="tokenPill">
                  <img
                    className="tokenimg"
                    src={selectedToken4 === "token2" ? bluechain : chain}
                    alt="Token"
                  />

                  <span>Privacy Policy</span>
                </div>
              </button>
            </div>
            <div className="bubble-bottom mt-2">
              {selectedToken4 === "token1" && (
                <PreviewBox
                  imageURL=""
                  logoURL="https://typowebsitevideo.s3.amazonaws.com/blue+logo.svg"
                  ItemURL="https://typo-public-documents.s3.amazonaws.com/TermsOfUse.html"
                  websiteName="Terms of Service"
                  description="Visit the link to read more."
                />
              )}

              {selectedToken4 === "token2" && (
                <PreviewBox
                  imageURL=""
                  logoURL="https://typowebsitevideo.s3.amazonaws.com/blue+logo.svg"
                  ItemURL="https://typo-public-documents.s3.amazonaws.com/PrivacyPolicy.html"
                  websiteName="Privacy Policy"
                  description="Visit the link to read more."
                />
              )}
            </div>
          </article>
        </div>
      </div>

      <Waitlist open={open} setOpen={setOpen} />
    </div>
  );
}

export default About;
