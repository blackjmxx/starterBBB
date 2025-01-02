import { Button } from '@/components/ui/button';
import { notify } from '@/lib/notifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function NotificationsShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Button
          onClick={() =>
            notify.success('Success!', 'Operation completed successfully.')
          }
        >
          Show Success
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            notify.error('Error!', 'Something went wrong. Please try again.')
          }
        >
          Show Error
        </Button>
        <Button
          variant="warning"
          onClick={() =>
            notify.warning('Warning!', 'Please review your input.')
          }
        >
          Show Warning
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            notify.info('Info', 'This is an informational message.')
          }
        >
          Show Info
        </Button>
      </CardContent>
    </Card>
  );
}