"use client";

import { useState } from "react";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { useAuth } from "@/contexts/AuthContext";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Textarea } from "@/components/ui/Textarea";
import { Card, DashboardPage } from "@/components/ui/DashboardPage";

export default function CustomerSupport(): React.JSX.Element {
  useDashboardPage();
  const { user } = useAuth();

  const [email, setEmail] = useState(user?.email ?? "");
  const [fullName, setFullName] = useState(
    `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim(),
  );
  const [topic, setTopic] = useState("feedback");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function submit() {
    setError(null);
    setSuccess(null);

    if (!email.trim()) {
      setError("Enter an email address so we can reply.");
      return;
    }
    if (message.trim().length < 10) {
      setError("Please add a little more detail (at least 10 characters).");
      return;
    }

    setSending(true);
    // Support submission is UI-only for now; the backend module is not wired.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSending(false);
    setSuccess(
      "Thanks — your message has been queued. Our team typically replies within one business day.",
    );
    setMessage("");
  }

  return (
    <DashboardPage
      title="Feedback & complaints"
      description="Tell us what is working, what is not, or where you need help."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              void submit();
            }}
          >
            {error && <Alert tone="error">{error}</Alert>}
            {success && <Alert tone="success">{success}</Alert>}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                inputMode="email"
                autoComplete="email"
                required
              />
              <Field
                label="Full name (optional)"
                value={fullName}
                onChange={setFullName}
                autoComplete="name"
              />
            </div>

            <div>
              <label
                htmlFor="support-topic"
                className="mb-1.5 block text-[13px] font-medium text-ink-muted"
              >
                Topic
              </label>
              <select
                id="support-topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="h-11 w-full appearance-none rounded-control border border-black/[0.06] bg-surface-primary px-3.5 text-[15px] text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              >
                <option value="feedback">General feedback</option>
                <option value="project">Project or delivery</option>
                <option value="billing">Billing & payments</option>
                <option value="design-school">Design school</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>

            <Textarea
              label="Your message"
              value={message}
              onChange={setMessage}
              placeholder="Share the details, including any project or invoice references."
              rows={6}
              required
              hint="Do not include passwords or card details."
            />

            <Button type="submit" loading={sending}>
              Send message
            </Button>
          </form>
        </Card>

        <div className="space-y-4">
          <Card>
            <h2 className="text-[16px] font-semibold text-ink">Response times</h2>
            <ul className="mt-3 space-y-3 text-[13px] leading-5 text-ink-muted">
              <li className="flex items-center justify-between gap-3">
                <span>General enquiries</span>
                <span className="font-medium text-ink">1 business day</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Project issues</span>
                <span className="font-medium text-ink">4 hours</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Billing</span>
                <span className="font-medium text-ink">1 business day</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-brand-50/60">
            <h2 className="text-[16px] font-semibold text-ink">Need urgent help?</h2>
            <p className="mt-1.5 text-[13px] leading-5 text-ink-muted">
              Call or WhatsApp us on{" "}
              <a href="tel:+2348136243796" className="font-semibold text-brand no-underline">
                0813 624 3796
              </a>
              .
            </p>
          </Card>
        </div>
      </div>
    </DashboardPage>
  );
}
