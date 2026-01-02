import React, { useState, useRef, useEffect } from 'react';
import { BagIcon, ChevronDownIcon, ChevronUpIcon, SearchIcon } from './icons';

interface NavItem {
  label: string;
  hasDropdown: boolean;
  href: string;
  dropdownItems?: string[];
}

const drinksDropdownItems = [
  'Shop all',
  'Cold-pressed Juices',
  'Boosters',
  'Kombuchas',
  'Plant Milks',
  'Shakes',
  'Lemonades',
];

const navItems: NavItem[] = [
  { label: 'Drinks', hasDropdown: true, href: '#', dropdownItems: drinksDropdownItems },
  { label: 'Bundles', hasDropdown: false, href: '#' },
  { label: 'Recipes', hasDropdown: false, href: '#' },
  { label: 'About', hasDropdown: true, href: '#' },
];

export function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.hasDropdown) {
      e.preventDefault();
      setOpenDropdown(openDropdown === item.label ? null : item.label);
    }
  };

  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="/" aria-label="Home">
          taste
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <div key={item.label} className="navItemWrapper" ref={item.label === 'Drinks' ? dropdownRef : null}>
              <a
                className={`navItem ${openDropdown === item.label ? 'isActive' : ''}`}
                href={item.href}
                onClick={(e) => handleNavItemClick(e, item)}
              >
                <span>{item.label}</span>
                {item.hasDropdown ? (
                  openDropdown === item.label ? (
                    <ChevronUpIcon size={16} />
                  ) : (
                    <ChevronDownIcon size={16} />
                  )
                ) : null}
              </a>
              {item.hasDropdown && openDropdown === item.label && item.dropdownItems && (
                <div className="dropdownMenu">
                  {item.dropdownItems.map((dropdownItem) => (
                    <a key={dropdownItem} href="#" className="dropdownItem">
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
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

