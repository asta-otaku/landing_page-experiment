import Header from "../components/Header";
import bluechain from "../assets/bluechain.svg";
import PreviewBox from "../components/PreviewBox";
import Waitlist from "../components/Waitlist";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import "swiper/css";

function Jobs() {
  // Draggable bubble logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 50 });
  const springY = useSpring(y, { stiffness: 400, damping: 50 });

  const tokens = ["studio", "vibes", "art", "standing", "homies"];

  const [open, setOpen] = useState(false);
  const [selectedToken1, setSelectedToken1] = useState("studio");
  const [selectedToken3, setSelectedToken3] = useState("token1");
  const [dragStartX, setDragStartX] = useState(0);
  const [direction, setDirection] = useState(0);

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

  const imageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
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
            className="bg-gradient-blue pt-3 rounded-2xl cursor-grab active:cursor-grabbing"
            dragMomentum={false}
            style={{ x: springX, y: springY }}
            onDrag={(_, info) => {
              x.set(info.offset.x);
              y.set(info.offset.y);
            }}
            onDragEnd={() => {
              x.set(0);
              y.set(0);
            }}
          >
            <p className="text-white px-3">
              We work together IRL in Soho, NYC. Our office doubles as an art
              studio, film set, and all-round creative space.
            </p>
            <div className="flex gap-1 items-center flex-wrap px-3">
              {tokens.map((token) => (
                <button
                  key={token}
                  onClick={() => {
                    setSelectedToken1(token);
                  }}
                  className={`inline-flex items-center gap-0.5 text-xs py-1 px-2 rounded-3xl ${
                    selectedToken1 === token
                      ? "bg-white text-primary"
                      : "bg-[#FFFFFF33] text-white"
                  }`}
                >
                  <img
                    src={`https://typowebsitevideo.s3.amazonaws.com/${token}.webp`}
                    alt={token}
                    className="w-6 h-6 object-cover rounded"
                  />
                  <span className="max-w-20 truncate">{token}.jpg</span>
                </button>
              ))}
            </div>
            <div className="bubble-bottom mt-2 relative">
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.img
                  key={selectedToken1}
                  src={`https://typowebsitevideo.s3.amazonaws.com/${selectedToken1}.webp`}
                  alt={selectedToken1}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="object-contain rounded-2xl"
                />
              </AnimatePresence>
              {/* Invisible overlay to detect swipe gestures without moving the image */}
              <div
                className="absolute inset-0"
                onPointerDown={(e) => setDragStartX(e.clientX)}
                onPointerUp={(e) => {
                  const offset = e.clientX - dragStartX;
                  const currentIndex = tokens.indexOf(selectedToken1);
                  if (offset > 50 && currentIndex > 0) {
                    // Swipe right → show previous token
                    setDirection(-1);
                    setSelectedToken1(tokens[currentIndex - 1]);
                  } else if (offset < -50 && currentIndex < tokens.length - 1) {
                    // Swipe left → show next token
                    setDirection(1);
                    setSelectedToken1(tokens[currentIndex + 1]);
                  }
                }}
              />
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
