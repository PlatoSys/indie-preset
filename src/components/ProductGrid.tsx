import type { CSSProperties } from "react";

interface ProductItem {
  id?: string;
  title: string;
  price: string;
  mediaBg: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  underlineTitle?: boolean;
}

interface ProductCardProps {
  item: ProductItem;
}

function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="productCard">
      <div
        className="productMedia"
        style={{ "--media-bg": item.mediaBg } as CSSProperties}
      >
        {item.imageSrc ? (
          <img src={item.imageSrc} alt={item.imageAlt || item.title} />
        ) : (
          <div className="mono muted" aria-hidden="true">
            image
          </div>
        )}
      </div>

      <div className="productTitle">
        <a
          className={item.underlineTitle ? "linkUnderline" : undefined}
          href={item.href || "#"}
        >
          {item.title}
        </a>
      </div>

      <p className="productPrice">{item.price}</p>
    </div>
  );
}

interface ProductGridProps {
  items: ProductItem[];
  className?: string;
}

export function ProductGrid({ items, className }: ProductGridProps) {
  return (
    <div className={className ? `productGrid ${className}` : "productGrid"}>
      {items.map((item) => (
        <ProductCard key={item.id || item.title} item={item} />
      ))}
    </div>
  );
}
