"use client";

import { useEffect, useState } from "react";
import { useDash } from "../../contexts/DashContext";
import { Field } from "@/components/ui/Field";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { widthControlClass } from "@/styles/widthControl";

export default function BootCampApplication(): React.JSX.Element {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { updateDashStatus } = useDash();

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  return (
    <main className="bg-white pb-20">
      <div className={widthControlClass}>
        <div className="mx-auto max-w-2xl pt-14">
          <div className="text-center">
            <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
              Bootcamp
            </span>
            <h1 className="mt-4 font-quicksand text-[30px] font-semibold tracking-[-0.02em] text-royal-ink sm:text-[38px]">
              Register for the bootcamp
            </h1>
            <p className="mt-2 text-[15px] text-slate-600">
              UI/UX Design · Beginner to Advanced
            </p>
          </div>

          <div className="mt-8 rounded-container border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              {submitted && (
                <Alert tone="success">
                  You are on the list. We will email you with payment and cohort
                  details.
                </Alert>
              )}

              <Field
                label="Full name"
                value={fullName}
                onChange={setFullName}
                placeholder="Your full name"
                required
              />
              <Field
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="you@example.com"
                required
              />
              <Field
                label="Design experience"
                value={experience}
                onChange={setExperience}
                placeholder="Beginner, intermediate, etc."
              />
              <Textarea
                label="Anything else we should know?"
                value={message}
                onChange={setMessage}
                placeholder="Share your goals for the bootcamp."
                rows={5}
              />

              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-ink-muted">
                  Upload portfolio or resume (optional)
                </label>
                <input
                  type="file"
                  className="block w-full rounded-control border border-black/[0.06] bg-surface-primary px-3.5 py-2.5 text-sm text-ink-muted file:mr-3 file:rounded-md file:border-0 file:bg-royal/5 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-royal hover:file:bg-royal/10"
                />
              </div>

              <Button type="submit" variant="royal" fullWidth>
                Submit registration
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
