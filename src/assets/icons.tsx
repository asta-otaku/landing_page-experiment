import { SVGAttributes } from "react";
import back from "../assets/back.svg";
import wtnew from "../assets/wtnew.svg";
export function ChatBubbleBottomCenterIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="#191919"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  );
}

export function LeftIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="44"
      height="25"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.882812 9.7439C0.882812 9.47534 0.979492 9.22827 1.18359 9.03491L9.70215 0.698975C9.88477 0.516357 10.1211 0.419678 10.4004 0.419678C10.959 0.419678 11.3887 0.838623 11.3887 1.39722C11.3887 1.66577 11.2705 1.91284 11.0986 2.09546L3.27832 9.7439L11.0986 17.3923C11.2705 17.575 11.3887 17.8113 11.3887 18.0906C11.3887 18.6492 10.959 19.0681 10.4004 19.0681C10.1211 19.0681 9.88477 18.9714 9.70215 18.7781L1.18359 10.4529C0.979492 10.2488 0.882812 10.0125 0.882812 9.7439Z"
        fill="#7E7E7E"
      />
    </svg>
  );
}

export function RightIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="44"
      height="25"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.1279 9.7439C11.1279 10.0125 11.0205 10.2488 10.8164 10.4529L2.30859 18.7781C2.11523 18.9714 1.87891 19.0681 1.59961 19.0681C1.05176 19.0681 0.62207 18.6492 0.62207 18.0906C0.62207 17.8113 0.729492 17.575 0.901367 17.3923L8.72168 9.7439L0.901367 2.09546C0.729492 1.91284 0.62207 1.66577 0.62207 1.39722C0.62207 0.838623 1.05176 0.419678 1.59961 0.419678C1.87891 0.419678 2.11523 0.516357 2.30859 0.698975L10.8164 9.03491C11.0205 9.22827 11.1279 9.47534 11.1279 9.7439Z"
        fill="#7E7E7E"
      />
    </svg>
  );
}


export function WaitlistTab({
  open,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { open: boolean }) {
  return (
    <div
      style={{
        position: "relative",
        width: "220px",
        height: "46px",
        display: "inline-block",
        cursor: "pointer",
      }}
      {...props} // Spread props to allow event handlers like onClick
    >
      <img
        src={wtnew} // The base image for the Waitlist Tab
        alt="Waitlist Tab"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      {open ? (
        <img
          src={back} // The rotated image
          alt="Arrow"
          className="-rotate-90 mx-auto"
          style={{
            position: "relative",
            top: "-50%", // Adjust alignment as needed
            left: "3%",
            transform: "translate(-50%, -50%) rotate(270deg)", // Rotates the image
          }}
        />
      ) : (
        <span className="text-gradient-blue text-[16px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "16px",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          Join Waitlist
        </span>
      )}
    </div>
  );
}
