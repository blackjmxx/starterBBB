import React from "react";
import { twMerge } from "tailwind-merge";
import { getInitials, getInitialsToken } from "./get-initials";
import { useImageLoadingStatus } from "./hooks/use-image-loading-status";

const AvatarContext = React.createContext<{
  badgeId: string;
} | null>(null);

/**
 * Props for the Avatar component
 */
export type AvatarProps = {
  /** URL of the avatar image */
  src?: string;
  /** Alternative text for the avatar image */
  alt: string;
  /** Whether to render the avatar without color */
  colorless?: boolean;
} & React.JSX.IntrinsicElements["div"];

/**
 * Avatar component that displays an image or initials as a fallback
 *
 * @example
 * // Basic usage with image
 * <Avatar src="/path/to/image.jpg" alt="User Name" />
 *
 * @example
 * // With badge
 * <Avatar src="/path/to/image.jpg" alt="User Name">
 *   <AvatarBadge badge={<StatusIcon />} />
 * </Avatar>
 */
export function Avatar({
  colorless = false,
  className,
  children,
  src,
  alt,
}: AvatarProps) {
  const badgeId = React.useId();
  const avatarId = React.useId();
  const ariaLabelledby = [avatarId, children ? badgeId : ""].join(" ");
  const status = useImageLoadingStatus(src);

  return (
    <AvatarContext.Provider value={{ badgeId }}>
      <div
        role="img"
        className={twMerge([
          "group relative flex size-10 shrink-0 items-center justify-center rounded-lg @container",
          "outline outline-1 -outline-offset-1 outline-black/5 ring-background dark:outline-white/20",
          "[&.rounded-full>svg]:rounded-full [&>svg]:size-full [&>svg]:rounded-lg",
          "[&.rounded-full>img]:rounded-full [&>img]:size-full [&>img]:rounded-lg",
          className,
        ])}
        aria-labelledby={ariaLabelledby}
      >
        {status === "error" ? (
          <InitialAvatar alt={alt} id={avatarId} colorless={colorless} />
        ) : (
          <img
            aria-hidden
            id={avatarId}
            src={src}
            alt={alt}
            className="object-cover"
          />
        )}
        {children}
      </div>
    </AvatarContext.Provider>
  );
}

/**
 * Renders initials as a fallback when image fails to load
 * @private
 */
function InitialAvatar({
  alt,
  id,
  colorless,
}: {
  alt: string;
  id: string;
  colorless: boolean;
}) {
  const initials = getInitials(alt);
  const token = getInitialsToken(alt, colorless);

  return (
    <svg
      aria-hidden
      id={id}
      aria-label={alt}
      style={{
        background: `var(--${token})`,
      }}
      fill="currentColor"
      viewBox="0 0 24 24"
      className={twMerge("font-bold text-gray-900 dark:text-gray-100")}
    >
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        dominantBaseline="middle"
        textAnchor="middle"
        dy=".125em"
        fontSize="60%"
        className="font-bold"
      >
        {initials}
      </text>
    </svg>
  );
}

/**
 * Props for the AvatarBadge component
 */
type AvatarBadgeProps = {
  /** Additional CSS classes */
  className?: string;
  /** Content to display in the badge */
  badge: React.ReactNode;
};

/**
 * Badge component to be used within an Avatar
 *
 * @example
 * <Avatar src="/path/to/image.jpg" alt="User Name">
 *   <AvatarBadge badge={<OnlineIcon />} />
 * </Avatar>
 */
export const AvatarBadge = ({ badge, ...props }: AvatarBadgeProps) => {
  const context = React.useContext(AvatarContext);

  if (!context) {
    throw new Error("<AvatarContext.Provider> is required");
  }

  return (
    <span
      aria-hidden
      id={context.badgeId}
      className={twMerge([
        "grid place-items-center",
        "@[32px]:size-2/5 @[40px]:size-1/3 @[64px]:size-1/4 @[128px]:size-1/5",
        "z-1 absolute bottom-0 end-0 z-10 rounded-full border-2 border-background bg-background",
        "translate-x-[15%] translate-y-[20%]",
        "[.rounded-full_&]:translate-x-[35%] [.rounded-full_&]:translate-y-[5%] rtl:[.rounded-full_&]:translate-y-[45%]",
        "@[40px]:[.rounded-full_&]:translate-x-[15%]",
        "@[64px]:[.rounded-full_&]:-translate-x-[5%] @[64px]:[.rounded-full_&]:-translate-y-[10%]",
        "@[128px]:[.rounded-full_&]:translate-x-[-20%]",
        props.className,
      ])}
    >
      {badge}
    </span>
  );
};

/**
 * Props for the AvatarGroup component
 */
type AvatarGroupProps = {
  /** Whether to reverse the overlap direction */
  reverseOverlap?: boolean;
} & React.JSX.IntrinsicElements["div"];

/**
 * Groups multiple avatars with a stacked overlap effect
 *
 * @example
 * <AvatarGroup>
 *   <Avatar src="/user1.jpg" alt="User 1" />
 *   <Avatar src="/user2.jpg" alt="User 2" />
 *   <Avatar src="/user3.jpg" alt="User 3" />
 * </AvatarGroup>
 */
export function AvatarGroup({
  reverseOverlap = false,
  className,
  ...props
}: AvatarGroupProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex items-center -space-x-1 rtl:space-x-reverse",
        "[&>[role=img]:not([class*=ring-4])]:ring-2",
        reverseOverlap &&
          "flex-row-reverse justify-end ps-2 [&>[role=img]:first-of-type]:-ms-1",
        className
      )}
    />
  );
}
