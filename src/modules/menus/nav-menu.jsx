import { Link } from "react-router-dom";

const listMenu = [
  { id: 1, to: "/", nameMenu: "HOME" },
  // { id: 6, to: "/search", nameMenu: "SEARCH" },
  { id: 2, to: "/filter", nameMenu: "FILTER" },
  { id: 3, to: "/card", nameMenu: "CART" },
  { id: 4, to: "/order", nameMenu: "ORDER" },
  { id: 5, to: "/contact", nameMenu: "CONTACT" },
];

export function NavMenu() {
  return (
    <section className="h-10 bg-gray-900 sticky top-0 z-10">
      <nav className="flex w-2/3 h-10 m-auto ">
        {listMenu.map((menu, index) => (
          <div key={index} className="flex-1 h-10 relative">
            <Link to={menu.to} className="absolute bottom-1.5 left-16">
              <p className="h-10 p-3 text-white text-sm">
                <strong>{menu.nameMenu}</strong>
              </p>
            </Link>
          </div>
        ))}
      </nav>
    </section>
  );
}
