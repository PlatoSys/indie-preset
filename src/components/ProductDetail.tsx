import { useMemo, useState, type CSSProperties } from "react";
import { ArrowRightIcon } from "./icons";

interface ProductVariant {
  id: string;
  label: string;
  price: string;
}

interface Product {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  mediaBg?: string;
  price?: string;
  variants?: ProductVariant[];
  detailsHref?: string;
}

interface ProductDetailProps {
  product?: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const variants = useMemo(
    () => (product?.variants?.length ? product.variants : []),
    [product],
  );
  const [activeVariant, setActiveVariant] = useState(variants[0]?.id || "v1");
  const [qty, setQty] = useState(1);

  const active = useMemo(
    () => variants.find((v) => v.id === activeVariant) || variants[0],
    [activeVariant, variants],
  );

  return (
    <div className="container">
      <div className="pdp">
        <div
          className="frameMedia"
          style={
            { "--media-bg": product?.mediaBg || "#f3f4f6" } as CSSProperties
          }
        >
          {product?.imageSrc ? (
            <img src={product.imageSrc} alt={product.imageAlt || ""} />
          ) : null}
        </div>

        <div>
          <h1 className="pdpTitle">
            {product?.title || "Fiery Ginger Booster"}
          </h1>
          <p className="pdpPrice">
            {active?.price || product?.price || "$3.95 CAD"}
          </p>

          <div className="mono muted">Size</div>
          <div className="pillRow" role="tablist" aria-label="Variant selector">
            {variants.map((v) => (
              <button
                key={v.id}
                type="button"
                className={`pill ${v.id === activeVariant ? "isActive" : ""}`}
                onClick={() => setActiveVariant(v.id)}
              >
                {v.label}
              </button>
            ))}
          </div>

          <div className="mono muted">Quantity</div>
          <div className="qty" role="group" aria-label="Quantity">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              –
            </button>
            <div aria-label="Selected quantity">{qty}</div>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>

          <button className="btnPrimary" type="button">
            Add to cart
          </button>
          <button className="btnSecondary" type="button">
            Buy it now
          </button>

          <a className="subLink" href={product?.detailsHref || "#"}>
            View full details <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
