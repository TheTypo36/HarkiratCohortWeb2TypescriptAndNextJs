import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}
function getEmbedLink(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    const videoId = u.searchParams.get("v");
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url; // fallback to original
  } catch {
    return url;
  }
}
function Card(props: CardProps) {
  let { title, link, type } = props;
  if (type === "youtube") {
    link = getEmbedLink(link);
  }
  console.log(link);
  return (
    <div className="bg-white max-w-72 p-3 rounded-md shadow-md border-slate-200 border min-h-48 min-w-72">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="text-gray-500 pr-2">
            <ShareIcon size={"lg"} />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <ShareIcon size={"lg"} />
          </div>
          <div className="text-gray-500">
            <ShareIcon size={"lg"} />
          </div>
        </div>
      </div>

      <div className="pt-2 object-contain">
        {type === "twitter" ? (
          <blockquote className="twitter-tweet w-36 h-36">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        ) : (
          <iframe
            className="w-full"
            src={link}
            // src="https://www.youtube.com/embed/VQRLujxTm3c?si=Dkq2u_cPbXnZN2sH".
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Card;
