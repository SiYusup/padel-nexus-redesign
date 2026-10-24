import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Armchair,
  CalendarHeart,
  Check,
  ChevronDown,
  Clock,
  Focus,
  HeartPulse,
  LogIn,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Pause,
  Phone,
  Play,
  Repeat,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

const icons = {
  Activity,
  ArrowLeft,
  ArrowRight,
  Armchair,
  CalendarHeart,
  Check,
  ChevronDown,
  Clock,
  Focus,
  HeartPulse,
  LogIn,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Pause,
  Phone,
  Play,
  Repeat,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  Trophy,
  Users,
  X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  size = 22,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Cmp = (icons as Record<string, LucideIcon>)[name] ?? Sparkles;
  return (
    <Cmp
      size={size}
      strokeWidth={1.75}
      aria-hidden="true"
      className={className}
    />
  );
}
