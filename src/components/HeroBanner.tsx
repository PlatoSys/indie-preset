import { Fragment, type CSSProperties } from "react";

interface HeroBannerProps {
  imageSrc?: string;
  imageAlt?: string;
  titleLines?: string[];
}

export function HeroBanner({
  imageSrc,
  imageAlt,
  titleLines = [],
}: HeroBannerProps) {
  return (
    <div className="container">
      <div
        className="hero"
        style={{ "--media-bg": "#0b0d12" } as CSSProperties}
      >
        {imageSrc ? <img src={imageSrc} alt={imageAlt || ""} /> : null}
        <div className="heroOverlay">
          <h2>
            {titleLines.length ? (
              titleLines.map((line, idx) => (
                <Fragment key={idx}>
                  {line}
                  {idx < titleLines.length - 1 ? <br /> : null}
                </Fragment>
              ))
            ) : (
              <>
                Drinks that taste as
                <br />
                good as they make
                <br />
                you feel.
              </>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
