
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

export default function ContactForm({ buttonName }: { buttonName: string }) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">{buttonName}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                        <DialogTitle>Send us Message</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="email-1">Email</Label>
                            <Input id="email-1" name="email" type='email' defaultValue="pedroduarte123@gmail.com" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Message</Label>
                            <Textarea cols={10} placeholder="Type your message here." />
                        </div>
                    </div>
                    <DialogFooter>
                            <Button type="submit">Send Message</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
