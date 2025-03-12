import * as React from "react";

/**
 * Props pour le composant Card
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variante visuelle de la carte */
  variant?: "default" | "outline" | "paper";
}

/**
 * Composant Card pour afficher du contenu dans un conteneur stylisé
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Titre</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Contenu principal</CardContent>
 *   <CardFooter>Actions</CardFooter>
 * </Card>
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-card text-card-foreground dark:bg-gray-800 shadow-sm",
      outline: "border border-border dark:border-gray-700",
      paper:
        "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200 dark:shadow-gray-900/30",
    };

    return (
      <div
        ref={ref}
        role="article"
        className={`rounded-lg ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

/**
 * En-tête de la carte contenant généralement le titre et la description
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * Titre principal de la carte
 */
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-2xl font-semibold leading-none tracking-tight text-foreground ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * Description secondaire de la carte
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * Contenu principal de la carte
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

/**
 * Pied de la carte, généralement utilisé pour les actions
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
