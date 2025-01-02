import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InfoIcon } from 'lucide-react';

export function ComponentsShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Components</h2>
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Buttons */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Input Fields */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Input Fields</h3>
                <div className="grid gap-4 max-w-sm">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Password" />
                  </div>
                </div>
              </div>

              {/* Checkbox and Switch */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Toggle Controls</h3>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Notifications</Label>
                  </div>
                </div>
              </div>

              {/* Select */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Select</h3>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Slider */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Slider</h3>
                <Slider defaultValue={[50]} max={100} step={1} className="w-[200px]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Complex Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Accordion */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Accordion</h3>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Alert */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Alert</h3>
                <Alert>
                  <InfoIcon className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an example alert message.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Avatar */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Avatar</h3>
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Badge */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Badge</h3>
                <div className="flex gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              {/* Dialog */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Dialog</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Example Dialog</DialogTitle>
                      <DialogDescription>
                        This is a dialog example. Click outside to close.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Tabs */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Tabs</h3>
                <Tabs defaultValue="account">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">Account settings</TabsContent>
                  <TabsContent value="password">Password settings</TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}