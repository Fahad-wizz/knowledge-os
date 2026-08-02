import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import authService from "@/features/auth/services/authService";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    async function onSubmit(data) {

        try {

            const response =
                await authService.login(data);

            login(response);

            toast.success("Welcome back!");

            navigate("/dashboard");

        } catch (error) {

            toast.error(

                error.response?.data?.message ??

                "Invalid email or password."

            );

        }

    }

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

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
                    placeholder="cutie@example.com"
                    {...register("email", {
                        required: "Email is required"
                    })}
                />

                {errors.email && (

                    <p className="text-sm text-red-500">

                        {errors.email.message}

                    </p>

                )}

            </div>

            <div className="space-y-2">

                <Label htmlFor="password">

                    Password

                </Label>

                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password", {
                        required: "Password is required"
                    })}
                />

                {errors.password && (

                    <p className="text-sm text-red-500">

                        {errors.password.message}

                    </p>

                )}

            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
            >

                {isSubmitting ? (

                    <>

                        <LoaderCircle
                            className="mr-2 h-4 w-4 animate-spin"
                        />

                        Signing In...

                    </>

                ) : (

                    "Sign In"

                )}

            </Button>

        </form>

    );

}