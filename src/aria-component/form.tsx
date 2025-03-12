import { FormProps, Form as RACForm } from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Composant de formulaire avec styles prédéfinis
 *
 * @example
 * <Form onSubmit={handleSubmit}>
 *   <TextField>
 *     <Label>Email</Label>
 *     <Input />
 *   </TextField>
 *   <Button type="submit">Envoyer</Button>
 * </Form>
 */
export function Form(props: FormProps) {
  return (
    <RACForm
      {...props}
      className={twMerge("max-w-4xl space-y-6", props.className)}
    />
  );
}
