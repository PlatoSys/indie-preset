import React from 'react';
import { BagIcon, ChevronDownIcon, SearchIcon } from './icons';

interface NavItem {
  label: string;
  hasDropdown: boolean;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Drinks', hasDropdown: true, href: '#' },
  { label: 'Bundles', hasDropdown: false, href: '#' },
  { label: 'Recipes', hasDropdown: false, href: '#' },
  { label: 'About', hasDropdown: true, href: '#' },
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="/" aria-label="Home">
          taste
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} className="navItem" href={item.href}>
              <span>{item.label}</span>
              {item.hasDropdown ? <ChevronDownIcon size={16} /> : null}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <button className="iconBtn" type="button" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="iconBtn" type="button" aria-label="Cart">
            <BagIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

