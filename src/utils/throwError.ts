import { AxiosError } from "axios";
import { toast } from "sonner";

interface Props {
  message: string;
  error: AxiosError | Error | unknown;
}

export const throwError = ({ message, error }: Props) => {
  if (error instanceof AxiosError && error.response?.status === 404) {
    throw new Error("NOT_FOUND");
  }
  const errorMessage =
    error instanceof AxiosError && error.response?.data?.message
      ? error.response.data.message
      : "Error desconocido";
  toast.error(`${errorMessage}. ${message}`);
  throw error;
};
