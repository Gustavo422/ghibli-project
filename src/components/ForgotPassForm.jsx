"use client";

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

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassForm() {
  const [submit, setSubmit] = useState(false);
  return (
    <Card className="border-accent-foreground w-[400px] border">
      <CardHeader>
        <CardTitle>
          {!submit ? <p>Recovery Account</p> : <p>Mail Sent!</p>}
        </CardTitle>
        <CardDescription>
          {!submit ? (
            <p>Enter your email and recovery your account</p>
          ) : (
            <p>The recovery code has been sent to your email</p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div
              className={clsx("grid gap-2", submit ? "sr-only" : "not-sr-only")}
            >
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                className="border-accent-foreground border"
              />
            </div>
            <Button
              type="button"
              variant="default"
              onClick={() => setSubmit(!submit)}
              className={clsx(submit ? "sr-only" : "not-sr-only")}
            >
              Button
            </Button>
            <Button
              variant="secondary"
              className={clsx(
                "border-accent-foreground border",
                submit ? "not-sr-only" : "sr-only",
              )}
            >
              <Link href="/">Back to Home Page</Link>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
