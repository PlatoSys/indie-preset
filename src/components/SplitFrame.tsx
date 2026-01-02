
import { ReactNode } from 'react';

interface SplitFrameProps {
  left: ReactNode;
  right: ReactNode;
  leftPadded?: boolean;
  rightPadded?: boolean;
}

export function SplitFrame({ left, right, leftPadded = true, rightPadded = false }: SplitFrameProps) {
  return (
    <div className="frame">
      <div className="frameGrid">
        <div className={`frameCol ${leftPadded ? 'isPadded' : ''}`}>{left}</div>
        <div className={`frameCol isDivider ${rightPadded ? 'isPadded' : ''}`}>{right}</div>
      </div>
    </div>
  );
}

