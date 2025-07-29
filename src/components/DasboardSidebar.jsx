import { NavLink } from "react-router";
// import useRole from "../hooks/useRole";
import useRoleByEmail from "../hooks/useRoleByEmail";

export default function DashboardSidebar() {
  const NavItem = ({ to, icon, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg font-medium ${
          isActive
            ? "bg-blue-100 text-blue-600"
            : "text-gray-700 hover:bg-gray-200"
        }`
      }
    >
      {icon} {label}
    </NavLink>
  );

  const { role, loading } = useRoleByEmail();

  if (loading) return <h1>Loading...</h1>;

  if (role === "admin")
    return (
      <nav className="flex flex-col gap-4">
        <NavItem
          to="/dashboard"
          // icon={<Home size={20} />}
          label="Admin Dashboard Home"
        />
        <NavItem
          to="/dashboard/all-users"
          // icon={<Plus size={20} />}
          label="All Users"
        />
        <NavItem
          to="/dashboard/all-blood-donation-request"
          // icon={<List size={20} />}
          label="All Blood Donation Request Page"
        />
        <NavItem
          to="/dashboard/content-management"
          // icon={<BookOpen size={20} />}
          label="Content Management Page 📝
"
        />
      </nav>
    );
  if (role === "volunteer")
    return (
      <nav className="flex flex-col gap-4">
        <NavItem
          to="/dashboard"
          // icon={<Home size={20} />}
          label="Moderator Home"
        />
        <NavItem
          to="/dashboard/all-blood-donation-request"
          // icon={<Home size={20} />}
          label="All Blood Donation Request Page"
        />
        <NavItem
          to="/dashboard/content-management"
          // icon={<Home size={20} />}
          label="Content Management Page"
        />
      </nav>
    );

  // user sidebar
  return (
    <nav className="flex flex-col gap-4">
      <NavItem
        to="/dashboard"
        // icon={<Home size={20} />}
        label="Home Page"
      />

      <NavItem
        to="my-donation-requests"
        // icon={<Plus size={20} />}
        label="My donation requests"
      />
      <NavItem
        to="create-donation-request"
        // icon={<List size={20} />}
        label="Create donation request"
      />
      <NavItem
        to="profile"
        // icon={<BookOpen size={20} />}
        label="Profile"
      />
    </nav>
  );
}
