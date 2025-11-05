"use client";

import SignIn from "@/components/SignIn";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

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
                <div className="relative">
                  <Input
                    id="password"
                    className="pr-8"
                    placaeholder="type your password..."
                    type={showPassword ? "text" : "password"}
                    autoComplete={showPassword ? "on" : "newPassword"}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-muted-foreground absolute top-1/2 right-2.5 -translate-y-1/2 rounded-full bg-slate-950 p-1"
                    type="button"
                  >
                    {!showPassword ? (
                      <EyeIcon className="h-4 w-4 text-slate-200" />
                    ) : (
                      <EyeOffIcon className="h-4 w-4 text-slate-200" />
                    )}
                  </button>
                </div>
                <Link
                  href="/forgot-password"
                  className="mt-0 mr-auto text-sm underline-offset-4 hover:text-blue-600 hover:underline"
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
