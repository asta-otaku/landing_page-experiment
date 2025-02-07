import Header from "../components/Header";
import logo from "../assets/logo.svg";
import back from "../assets/back.svg";
import Waitlist from "../components/Waitlist";
import { useState } from "react";
import { FeatureCard } from "../components/FeatureCard";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="p-0">
      <div
        onClick={() => setOpen(false)}
        className={`pt-8 bg-white ${open && "blur-[2px]"}`}
      >
        <Header />
        {/* Hero */}
        <motion.div
          {...fadeInUp}
          className="h-[85vh] lg:h-[100vh] max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative"
        >
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="logo" />
            <h1 className="text-3xl font-bold text-gradient-blue text-center">
              Send really big files
              <br />
              in your chat.
            </h1>
            <p className="text-lg text-center">
              Typo* is a messenger designed for <br />
              teams who create.
            </p>
            <p className="text-[#7E7E7E]">To learn more, just scroll</p>
            <img src={back} className="-rotate-90" />
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="flex flex-col gap-14 lg:gap-80">
          {[
            {
              title: "Never see one of these screens again",
              caption: "Bubble",
              video:
                "https://d2vp1ucs7irpui.cloudfront.net/Leavetheseerrorsbehind.mp4",
            },
            {
              title: "(File) size matters",
              caption:
                "Send file up to 20GB, seamlessly. Typo* Supports all file types.",
              video:
                "https://d2vp1ucs7irpui.cloudfront.net/Filesizematters.mp4",
            },
            {
              title: "View them immediately",
              caption:
                "Stream your video or download the uncompressed version.",
              video:
                "https://d2vp1ucs7irpui.cloudfront.net/Viewthemimmediately.mp4",
            },
            {
              title: "Comment precisely",
              caption: "Drop timestamped comments on your videos and music.",
              video:
                "https://d2vp1ucs7irpui.cloudfront.net/Commentprecisely.mp4",
            },
            {
              title: "Upload once, share anywhere",
              caption: "Turn any message you send into a sharable URL.",
              video: "https://d2vp1ucs7irpui.cloudfront.net/SharetoURL.mp4",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="flex flex-col items-center justify-center p-4 h-[550px] lg:h-[600px]"
            >
              <FeatureCard
                title={feature.title}
                caption={feature.caption}
                index={index}
              >
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  playsInline
                  autoPlay
                  muted
                  loop
                  src={feature.video}
                  className="w-full rounded-2xl"
                />
              </FeatureCard>
            </motion.div>
          ))}
        </div>

        <Footer />
      </div>
      <Waitlist open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
