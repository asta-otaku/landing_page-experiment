function PreviewBox({
  imageURL,
  logoURL = "https://typowebsitevideo.s3.amazonaws.com/partiful_logo.webp",
  ItemURL = "https://partiful.com/e/DGkuOMJvfQtB63hh9B4w",
  websiteName = "RSVP to Studio.day | Partiful joy to the world",
  description = "What is Typo? <br/> Who is Typo?",
}: {
  imageURL: string;
  logoURL?: string;
  ItemURL?: string;
  websiteName?: string;
  description?: string;
}) {
  return (
    <div className="flex max-w-xs w-full p-3 flex-col gap-3 rounded-[14px] bg-white border border-solid border-[#1919191a]">
      <div className="flex justify-between items-center self-stretch gap-3">
        <div className="flex justify-between items-center self-stretch gap-3 flex-nowrap">
          {/* Logo */}
          <div
            className="w-6 h-6 rounded border border-solid border-[#1919191a] gap-1.5"
            style={{
              backgroundImage: `url(${logoURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Website Name */}
          <div className="inline-block items-center gap-1.5 text-xs font-medium text-primary whitespace-nowrap max-w-[137px] truncate overflow-hidden">
            {" "}
            {websiteName}{" "}
          </div>
        </div>

        {/* Visit Link Button */}
        <a href={ItemURL} target="_blank" rel="noopener noreferrer">
          <button
            className="flex items-center px-[8px] py-[8px] 
     border-[#1919191a] rounded-[37.5px] border-[1px] border-solid
    bg-[#FFFFFF] bg-opacity-20 text-[#191919] text-[12px] 
    font-mono font-normal leading-[6px] text-center transition-all 
    duration-200 ease-in-out hover:bg-opacity-20"
          >
            Visit Link
          </button>
        </a>
      </div>

      <div
        className="inline-block self-stretch text-[#7e7e7e] max-w-xs truncate overflow-hidden"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      {/* Conditionally render image */}
      {imageURL && (
        <a
          href={ItemURL}
          className="max-w-xs max-h-[175px] rounded-lg cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={imageURL}
            alt={`${websiteName} Thumbnail`}
            className="h-[175px] w-[320px] rounded-lg cursor-pointer border border-solid border-[#1919191a]"
          />
        </a>
      )}
    </div>
  );
}

export default PreviewBox;
