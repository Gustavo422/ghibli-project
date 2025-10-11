"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import SignIn from "@/components/SignIn";

import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative ">
                  <Input
                    id="password"
                    className="pr-8"
                    placaeholder="type your password..."
                    type={showPassword ? "text" : "password"}
                    autoComplete={showPassword ? "on" : "newPassword"}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground bg-slate-950 p-1 rounded-full"
                    type="button"
                  >
                    {!showPassword ? (
                      <Eye className="h-4 w-4 text-white" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-white" />
                    )}
                  </button>
                </div>
                <Link
                  href="/forgot-password"
                  className="mr-auto mt-0 text-sm underline-offset-4 hover:underline hover:text-blue-600"
                >
                  Forgot your password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <SignIn />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
