import { STATUSES } from "../enum/statuses.enum";

export const getStatusColor = (status: STATUSES) => {
  switch (status) {
    case STATUSES.COMPLETED:
      return "bg-green-800 text-green-100";
    case STATUSES.IN_PROGRESS:
      return "bg-blue-800 text-blue-100";
    case STATUSES.PENDING:
      return "bg-yellow-800 text-yellow-100";
    case STATUSES.OVERDUE:
      return "bg-red-800 text-red-100";
  }
};
