import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { notify } from '@/lib/notifications';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

export function FeedbackComponents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Components</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Alerts</h3>
          <div className="space-y-2">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                This is an info alert message.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                This is an error alert message.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Progress</h3>
          <Progress value={60} />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <div className="flex gap-2">
            <Button onClick={() => notify.success({ message: "Success!", description: "Operation completed" })}>
              Success Toast
            </Button>
            <Button variant="destructive" onClick={() => notify.error({ message: "Error!", description: "Something went wrong" })}>
              Error Toast
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}