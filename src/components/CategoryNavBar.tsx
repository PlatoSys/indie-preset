interface CategoryNavItem {
  label: string;
  href?: string;
}

interface CategoryNavBarProps {
  items: CategoryNavItem[];
}

export function CategoryNavBar({ items }: CategoryNavBarProps) {
  return (
    <div className="container">
      <div className="categoryNav" aria-label="Category navigation">
        {items.map((item) => (
          <a key={item.label} href={item.href || "#"}>
            {item.label} →
          </a>
        ))}
      </div>
    </div>
  );
}
