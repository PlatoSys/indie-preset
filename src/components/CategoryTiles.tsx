import type { CSSProperties } from "react";

interface CategoryTile {
  label: string;
  href?: string;
  mediaBg: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface CategoryTilesProps {
  items: CategoryTile[];
}

export function CategoryTiles({ items }: CategoryTilesProps) {
  return (
    <div className="tiles">
      {items.map((item) => (
        <a key={item.label} href={item.href || "#"} aria-label={item.label}>
          <div
            className="tileMedia"
            style={{ "--media-bg": item.mediaBg } as CSSProperties}
          >
            {item.imageSrc ? (
              <img src={item.imageSrc} alt={item.imageAlt || ""} />
            ) : null}
          </div>
          <p className="tileLabel">{item.label} →</p>
        </a>
      ))}
    </div>
  );
}
