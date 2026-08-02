import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {

    return (

        <form className="space-y-6">
            <div>
                <h2 className="text-3xl font-semibold">
                    Welcome Back
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                    Sign in to continue
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Cutie@example.com"
                />

            </div>
            <div className="space-y-2">
                <Label htmlFor="password">
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                />
            </div>

            <Button
                className="w-full"
            >
                Sign In
            </Button>

        </form>

    );

}