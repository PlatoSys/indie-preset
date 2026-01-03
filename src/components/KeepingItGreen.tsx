import type { CSSProperties } from 'react';
import { ArrowRightIcon } from './icons';

interface ImageProps {
  src?: string;
  alt?: string;
  href?: string;
}

interface KeepingItGreenProps {
  title: string;
  leftImage?: ImageProps;
  rightImage?: ImageProps;
}

export function KeepingItGreen({ title, leftImage, rightImage }: KeepingItGreenProps) {
  return (
    <div className="container">
      <h2 className="sectionTitle">{title}</h2>
      <div className="threeUp">
        <div className="frameMedia" style={{ '--media-bg': '#cfe7c7' } as CSSProperties}>
          {leftImage?.src ? <img src={leftImage.src} alt={leftImage.alt || ''} /> : null}
        </div>

        <div className="card">
          <h3>We strive for sustainability in every facet of our business.</h3>
          <p>
            From our plant-based recipes to our glass bottles, it's central to who we are.
          </p>
          <a className="inlineLink" href={leftImage?.href || '#'}>
            Learn more <ArrowRightIcon size={18} />
          </a>
        </div>

        <div className="frameMedia" style={{ '--media-bg': '#e8edf5' } as CSSProperties}>
          {rightImage?.src ? <img src={rightImage.src} alt={rightImage.alt || ''} /> : null}
        </div>
      </div>
    </div>
  );
}

