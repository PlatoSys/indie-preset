
interface SocialIconProps {
  label: string;
}

function SocialIcon({ label }: SocialIconProps) {
  return (
    <span className="mono" aria-label={label} title={label}>
      {label[0]}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <h4>Quick links</h4>
            <div className="footerLinks">
              <a href="#">Drinks</a>
              <a href="#">Bundles</a>
              <a href="#">Recipes</a>
              <a href="#">About</a>
            </div>
          </div>

          <div>
            <h4>Our mission</h4>
            <div className="mono" style={{ lineHeight: 1.9, letterSpacing: '0.08em' }}>
              We offer sustainable access to delicious
              <br />
              plant-based nutrition.
            </div>

            <div style={{ marginTop: 44 }}>
              <h4 style={{ marginBottom: 16 }}>We send delicious emails.</h4>
              <form className="footerForm">
                <input aria-label="Email" placeholder="Email" />
                <button type="button" aria-label="Submit email">
                  →
                </button>
              </form>
            </div>
          </div>

          <div style={{ display: 'grid', justifyItems: 'end', alignContent: 'start', gap: 12 }}>
            <div className="brand" style={{ borderColor: 'rgba(255,255,255,0.8)', color: 'white' }}>
              taste
            </div>
            <div className="socialRow" aria-label="Social links">
              <SocialIcon label="twitter" />
              <SocialIcon label="facebook" />
              <SocialIcon label="pinterest" />
              <SocialIcon label="instagram" />
              <SocialIcon label="tiktok" />
            </div>
          </div>
        </div>

        <div className="footerBottom">© {new Date().getFullYear()}, indie-preset</div>
      </div>
    </footer>
  );
}

