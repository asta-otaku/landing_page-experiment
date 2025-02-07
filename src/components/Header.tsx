import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <nav className="max-w-xs w-full mx-auto sticky top-4 right-0 left-0 z-50 bg-[#F6F6F6] rounded-3xl font-medium text-sm flex items-center justify-evenly p-0.5"
     style={{ backdropFilter: 'blur(22px)', backgroundColor: 'rgba(246, 246, 246, 0.75)' }}>
      {[
        {
          name: "Home",
          page: "/",
        },
        {
          name: "Jobs",
          page: "/jobs",
        },
      ].map(({ page, name }) => (
        <Link
          to={page}
          key={page}
          className={`p-2 min-w-fit decoration-transparent text-center text-primary w-full ${
            location.pathname === page.toLowerCase().replace(" ", "")
              ? "bg-white rounded-3xl"
              : ""
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Header;