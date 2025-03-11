export const getRoleStyles = (role: "admin" | "user") => {
  switch (role) {
    case "admin":
      return {
        icon: (
          <i className="icon-[tabler--star]" role="img" aria-hidden="true" />
        ),
        bg: "bg-purple-100",
        text: "text-purple-700",
        border: "border-purple-200",
      };
    default:
      return {
        icon: (
          <i
            className="icon-[iconamoon--shield]"
            role="img"
            aria-hidden="true"
          />
        ),
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-200",
      };
  }
};
