import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export function UtilityComponents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Utility Components</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Calendar</h3>
          <Calendar mode="single" />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Command Menu</h3>
          <Command>
            <CommandInput placeholder="Type a command..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Resizable Panels</h3>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>Panel 1</ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>Panel 2</ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </CardContent>
    </Card>
  );
}