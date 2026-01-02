import { type CSSProperties } from 'react';
import { CategoryTiles } from '../components/CategoryTiles';
import { Footer } from '../components/Footer';
import { HeroBanner } from '../components/HeroBanner';
import { KeepingItGreen } from '../components/KeepingItGreen';
import { ProductDetail } from '../components/ProductDetail';
import { ProductGrid } from '../components/ProductGrid';
import { SectionTitle } from '../components/SectionTitle';
import { SiteHeader } from '../components/SiteHeader';
import { SplitFrame } from '../components/SplitFrame';
import {
  bundleProducts,
  categoryTiles,
  drinkProducts,
  hero,
  pdp,
  promoBlock,
  quoteBlock,
} from './homeContent';

export function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Take A sip (Big Hero Section) */}
        <section className="section">
          <div className="container">
            <SplitFrame
              left={
                <div className="frameMedia" style={{ '--media-bg': '#dbeaf2' } as CSSProperties}>
                  <img src={promoBlock.imageSrc} alt="" />
                </div>
              }
              right={
                <div>
                  <div className="quote" style={{ fontSize: '56px', marginBottom: 16, marginTop: 0 }}>
                    {promoBlock.title}
                  </div>
                  <div className="mono muted" style={{ letterSpacing: '0.08em', lineHeight: 1.9 }}>
                    {promoBlock.body}
                  </div>
                  <div style={{ marginTop: 26 }}>
                    <button className="btnSecondary" type="button" style={{ width: 260 }}>
                      {promoBlock.cta}
                    </button>
                  </div>
                </div>
              }
              leftPadded={false}
              rightPadded
            />
          </div>
        </section>

        {/* Meet our bestsellers */}
        <section className="section">
          <div className="container">
            <SectionTitle>Meet our bestsellers</SectionTitle>
            <ProductGrid items={drinkProducts} />
          </div>
        </section>

        {/* Another Hero section */}
        <section className="section">
          <HeroBanner imageSrc={hero.imageSrc} titleLines={hero.titleLines} />
        </section>

        {/* Boosters - Kombuchas - Cold-pressed Juices */}
        <section className="section">
          <div className="container">
            <CategoryTiles items={categoryTiles} />
          </div>
        </section>

        {/* Quote Block */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="quoteBlockFrame">
              <SplitFrame
                left={
                  <>
                    <p className="quote">{quoteBlock.quote}</p>
                    <p className="quoteAuthor">{quoteBlock.author}</p>
                  </>
                }
                right={
                  <div className="frameMedia" style={{ '--media-bg': '#f2dcc6' } as CSSProperties}>
                    <img src={quoteBlock.imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                }
                leftPadded
                rightPadded={false}
              />
            </div>
          </div>
        </section>

        {/* Add to cart section */}
        <section className="section">
          <ProductDetail product={pdp} />
        </section>

        {/* Keeping it green section */}
        <section className="section">
          <KeepingItGreen
            title="Keeping it green"
            leftImage={{ src: `${import.meta.env.BASE_URL}img/hero_4.webp`, alt: 'Sustainable practices' }}
            rightImage={{ src: `${import.meta.env.BASE_URL}img/hero_5.webp`, alt: 'Eco-friendly products' }}
          />
        </section>

        {/* Bundle up and save */}
        <section className="section">
          <div className="container">
            <SectionTitle>Bundle up and save</SectionTitle>
            <ProductGrid items={bundleProducts} className="productGrid--bundle" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

