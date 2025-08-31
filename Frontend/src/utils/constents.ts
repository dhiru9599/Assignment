import { Circle, Clock, CheckCircle2 } from "lucide-react";

const rawApiBase = (import.meta as any)?.env?.VITE_API_BASE_URL as string | undefined;
export const API_BASE_URL = rawApiBase
  ? (rawApiBase.endsWith('/api/todos')
      ? rawApiBase
      : `${rawApiBase.replace(/\/$/, '')}/api/todos`)
  : "https://todo-backend-d4rk.onrender.com/api/todos";

export const statusConfig = {
  todo: {
    color: "bg-slate-100 text-slate-800 border-slate-200",
    icon: Circle,
    label: "To Do",
    bgColor: "bg-slate-50",
    textColor: "text-slate-600",
    hoverColor: "hover:bg-slate-100",
  },
  inprogress: {
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: Clock,
    label: "In Progress",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    hoverColor: "hover:bg-blue-100",
  },
  pending: {
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: Clock,
    label: "Pending",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    hoverColor: "hover:bg-yellow-100",
  },
  completed: {
    color: "bg-green-100 text-green-800 border-green-200",
    icon: CheckCircle2,
    label: "Completed",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    hoverColor: "hover:bg-green-100",
  },
} as const;

export const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "todo", label: "To Do" },
  { value: "inprogress", label: "In Progress" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
] as const;
