type TaskStatus = "completed" | "in-progress" | "pending" | "overdue";

// Define the Task interface
interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: Date;
  assignee?: {
    name: string;
    initials: string;
  };
}

// Props for the TaskCard component
interface TaskCardProps {
  task: Task;
  onStatusChange?: (id: string, status: TaskStatus) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

// Helper function to get status badge styling
const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case "completed":
      return "bg-green-800 text-green-100";
    case "in-progress":
      return "bg-blue-800 text-blue-100";
    case "pending":
      return "bg-yellow-800 text-yellow-100";
    case "overdue":
      return "bg-red-800 text-red-100";
  }
};

// Helper function to format date
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export function TaskCard({
  task,
  onStatusChange,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const statusColor = getStatusColor(task.status);
  const statusText =
    task.status.charAt(0).toUpperCase() +
    task.status.slice(1).replace("-", " ");

  return (
    <div className="w-full  max-w-md rounded-lg bg-black border border-gray-800 shadow-md overflow-hidden">
      {/* Card Header */}
      <div className="p-4 flex justify-between items-start border-b border-gray-800">
        <div>
          <h3 className="font-medium text-lg text-white">{task.title}</h3>
          <span
            className={`inline-flex items-center px-2 py-1 mt-1 rounded-full text-xs ${statusColor}`}
          >
            {task.status === "completed" && (
              <i
                className="icon-[material-symbols--check-circle-rounded] mr-1 h-3 w-3"
                role="img"
                aria-hidden="true"
              />
            )}
            {task.status === "in-progress" && (
              <i
                className="icon-[tabler--clock] mr-1 h-3 w-3"
                role="img"
                aria-hidden="true"
              />
            )}
            {statusText}
          </span>
        </div>

        {/* Dropdown Menu (simplified) */}
        <div className="relative">
          <button
            onClick={() => {
              const menu = document.getElementById(`dropdown-${task.id}`);
              if (menu) menu.classList.toggle("hidden");
            }}
            className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white"
          >
            ...
            <span className="sr-only">Open menu</span>
          </button>

          {/* Dropdown Content */}
          <div
            id={`dropdown-${task.id}`}
            className="hidden absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10 border border-gray-700"
          >
            <div className="py-1 px-2 text-sm text-gray-300 border-b border-gray-700">
              Actions
            </div>
            <div className="py-1">
              <button
                onClick={() => onEdit?.(task.id)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Edit
              </button>
              <button
                onClick={() => onStatusChange?.(task.id, "completed")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Mark as Completed
              </button>
              <button
                onClick={() => onStatusChange?.(task.id, "in-progress")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Mark as In Progress
              </button>
              <button
                onClick={() => onStatusChange?.(task.id, "pending")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Mark as Pending
              </button>
            </div>
            <div className="border-t border-gray-700 py-1">
              <button
                onClick={() => onDelete?.(task.id)}
                className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 text-gray-300">
        <p>{task.description}</p>
      </div>

      {/* Card Footer */}
      <div className="px-4 py-3 bg-gray-900 flex justify-between items-center">
        <div className="flex items-center text-xs text-gray-400">
          <i
            className="icon-[tabler--calendar] mr-1 h-3 w-3"
            role="img"
            aria-hidden="true"
          />
          <span>Due {formatDate(task.dueDate)}</span>
        </div>

        {task.assignee && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Assigned to</span>
            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">
              {task.assignee.initials}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
