import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "/": "Home",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/jobopenings": "Job Openings",
  "/database": "Database Administrator",
  "/blogpost": "Blog Post",
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((item) => item);

  return (
    <nav
      aria-label="breadcrumb"
      className={`w-max  absolute z-30 ${pathnames.length == 0 && "hidden"}`}
    >
      <ol className="flex w-full flex-wrap items-center   bg-slate-50  px-4 py-2">
        <li className="flex cursor-pointer items-center text-sm text-blue-950 transition-colors duration-300 hover:text-slate-800">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001-1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </Link>
          <h5 className="pointer-events-none mx-2 text-slate-800">/</h5>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const displayName =
            breadcrumbNameMap[to] ||
            value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <li
              key={index}
              className="flex cursor-pointer items-center text-sm text-blue-950 transition-colors duration-300 hover:text-slate-800 "
            >
              <Link to={to}>{displayName}</Link>
              {index !== pathnames.length - 1 && (
                <h5 className="pointer-events-none mx-2 text-slate-800">/</h5>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
