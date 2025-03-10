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
    viewport: { once: true, amount: 0.2 }, // Trigger once when 20% is visible
  };

  return (
    <div className="p-0 overflow-x-hidden">
      <div
        onClick={() => setOpen(false)}
        className={`pt-8 bg-white ${open && "blur-[2px]"}`}
      >
        <Header />
        {/* Hero */}
        <motion.div
          {...fadeInUp}
          className="h-[85vh] xl:h-[100vh] max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative"
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

        {/* Pre Features Section */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col items-start gap-[24px] self-stretch px-6 xl:py-[100px] py-[50px] max-w-full"
        >
          {/* Feature Container */}
          <div className="flex flex-col justify-center items-center gap-3 self-stretch h-[60vh] xl:h-[602px]">
            {/* Title */}
            <motion.div
              {...fadeInUp}
              className="self-stretch w-full text-center text-[#191919] font-semibold text-[22px] leading-[28px] tracking-[-0.55px]"
            >
              Messengers suck at media
            </motion.div>

            {/* Video Box */}
            <motion.div
              {...fadeInUp}
              className="w-[80vw] h-[60vh] lg:w-[422px] lg:h-[536px] flex-shrink-0 max-w-full"
            >
              <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                playsInline
                autoPlay
                muted
                loop
                src="https://d2vp1ucs7irpui.cloudfront.net/Leavetheseerrorsbehind.mp4"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Animated Gradient Text Box */}
          <motion.div
            {...fadeInUp}
            className="self-stretch w-full text-center max-w-full"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-[22px] font-semibold leading-[28px] tracking-[-0.55px]"
              style={{
                background: "linear-gradient(180deg, #3076FF 0%, #1D49E5 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              So we built Typo*
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <div className="flex flex-col gap-14 xl:gap-30 max-w-full">
          {[
            // {
            //   title: "Messaging apps suck at media",
            //   caption:
            //     "On Typo*, you will never see one of these screens again.",
            //   video:
            //     "https://d2vp1ucs7irpui.cloudfront.net/Leavetheseerrorsbehind.mp4",
            // },
            {
              title: "(File) size matters",
              caption:
                "Send files up to 20GB, seamlessly. Typo* supports all file types.",
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
              caption: "Turn any message you send into a shareable URL.",
              video: "https://d2vp1ucs7irpui.cloudfront.net/SharetoURL.mp4",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="flex flex-col items-center justify-center p-4 h-[550px] xl:h-[600px] max-w-full"
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
                  className="w-full rounded-2xl max-w-full"
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
