"use client";

import { useEffect, useState } from "react";
import { useDash } from "../../contexts/DashContext";
import { useHash } from "@/hooks/useHash";
import { Checkbox } from "@/components/ui/Checkbox";
import { Field } from "@/components/ui/Field";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { widthControlClass } from "@/styles/widthControl";

const groups = {
  "#product-development": {
    title: "Digital product design and development",
    options: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Product Management",
    ],
  },
  "#content-creation": {
    title: "Digital content creation and social media management",
    options: ["Copywriting", "Social Media Management", "Blog Management"],
  },
  "#animations": {
    title: "Animation and story illustration",
    options: ["2D Animations", "Story Illustrations", "Product Ads Video & Animations"],
  },
} as const;

type GroupKey = keyof typeof groups;

export default function QuotationRequest(): React.JSX.Element {
  const { updateDashStatus } = useDash();
  const hash = useHash();

  const [selected, setSelected] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  const group = (hash in groups ? groups[hash as GroupKey] : null) as
    | (typeof groups)[GroupKey]
    | null;

  function toggle(value: string, checked: boolean) {
    setSelected((current) =>
      checked ? [...current, value] : current.filter((item) => item !== value),
    );
  }

  return (
    <main className="bg-white pb-20">
      <div className={widthControlClass}>
        <div className="mx-auto max-w-3xl pt-14">
          <div className="rounded-container border border-slate-200 bg-surface-canvas p-8 text-center shadow-card">
            <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
              Quotation
            </span>
            <h1 className="mt-4 font-quicksand text-[30px] font-semibold tracking-[-0.02em] text-royal-ink sm:text-[38px]">
              Tell us what you need
            </h1>
            {group && <p className="mt-2 text-sm font-medium text-royal">{group.title}</p>}
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-7 text-slate-600">
              Share a few details so we can prepare an accurate quote for your
              project.
            </p>
          </div>

          <form
            className="mt-6 space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted && (
              <Alert tone="success">
                Thanks — your request has been received. Our team will contact you
                with a quote.
              </Alert>
            )}

            {group && (
              <section className="rounded-container border border-slate-200 bg-white p-6 shadow-card">
                <h2 className="text-sm font-semibold text-royal-ink">
                  Pick the services you need
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.options.map((option) => (
                    <Checkbox
                      key={option}
                      value={option}
                      checked={selected.includes(option)}
                      onCheckedChange={toggle}
                      className="rounded-lg border border-slate-100 px-3 py-2.5 hover:bg-slate-50"
                    >
                      {option}
                    </Checkbox>
                  ))}
                </div>
              </section>
            )}

            <section className="space-y-4 rounded-container border border-slate-200 bg-white p-6 shadow-card">
              <Textarea
                label="Project details"
                value={description}
                onChange={setDescription}
                placeholder="Describe what you need the product to do."
                rows={4}
                required
              />
              <Field
                label="How soon do you need it?"
                value={duration}
                onChange={setDuration}
                placeholder="e.g. 4 weeks"
              />
            </section>

            <section className="space-y-4 rounded-container border border-slate-200 bg-white p-6 shadow-card">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={name}
                  onChange={setName}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Phone / WhatsApp"
                  value={phone}
                  onChange={setPhone}
                  placeholder="+234..."
                />
              </div>
              <Field
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="you@company.com"
                required
              />
            </section>

            <Button type="submit" variant="royal" size="lg" fullWidth>
              Request quotation
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
