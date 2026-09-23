import Image from "next/image";
import type { SiteImage } from "@/data/images";

// Renders real photography when `image.src` is populated in /data/images.ts.
// Until then, renders a technical-pattern placeholder so nothing on the site
// misrepresents stock or generated imagery as an actual iSPACE facility or project.
export default function PlaceholderPanel({
  image,
  tag,
  className = "",
  style
}: {
  image: SiteImage;
  tag?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (image.src) {
    return (
      <div className={className} style={{ position: "relative", overflow: "hidden", ...style }}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div className={`placeholder-panel ${className}`} style={style} role="img" aria-label={image.alt}>
      {tag && <span className="ph-tag">{tag}</span>}
    </div>
  );
}
