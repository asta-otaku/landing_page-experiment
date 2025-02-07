export const Footer = () => {
    return (
      <div className="flex justify-center items-end self-stretch py-6">
        <div className="flex justify-between items-center w-full max-w-[420px]">
          {/* YouTube Link */}
          <div className="flex w-[100px] justify-center items-center gap-2.5">
            <a
              href="https://www.youtube.com/@tyyyyyyyyyyypo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7E7E7E] hover:text-[#3076FF]  duration-200 text-center font-[Helvetica_Neue] text-[17px] leading-[34px] tracking-[-0.64px] cursor-pointer hover:scale-105 transition-transform"
            >
              YouTube
            </a>
          </div>
  
          {/* 2025 Typo* */}
          <div className="flex w-[100px] justify-center items-center gap-2.5">
            <span 
              className="text-center font-[Helvetica_Neue] text-[17px]  leading-[34px] tracking-[-0.64px]"
              style={{
                background: 'linear-gradient(180deg, #3076FF 0%, #1D49E5 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              © 2025 Typo*
            </span>
          </div>
  
          {/* Instagram Link */}
          <div className="flex w-[100px] justify-center items-center gap-2.5">
            <a
              href="https://www.instagram.com/tyyyyyyyyyyypo/"
              target="_blank"
              rel="noopener noreferrer"
              
              className="text-[#7E7E7E] hover:text-[#3076FF] transition-colors duration-200 text-center font-[Helvetica_Neue] text-[17px] leading-[34px] tracking-[-0.64px] cursor-pointe hover:scale-105 transition-transformr"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    );
  };