"use client";

import { useMemo, useState } from "react";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { Button } from "@/components/ui/Button";
import { Badge, Card, DashboardPage } from "@/components/ui/DashboardPage";
import { cn } from "@/lib/cn";

type Status = "Paid" | "Pending" | "Failed";

interface Transaction {
  id: string;
  description: string;
  amount: string;
  status: Status;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: "INV-2041",
    description: "Premium Branding Identity & Design Plan",
    amount: "₦230,000",
    status: "Pending",
    date: "23 Oct 2026 · 13:23",
  },
  {
    id: "INV-2038",
    description: "Corporate Website — Milestone 2",
    amount: "₦450,000",
    status: "Paid",
    date: "18 Oct 2026 · 09:12",
  },
  {
    id: "INV-2033",
    description: "Product Design Bootcamp — Cohort 04",
    amount: "₦150,000",
    status: "Paid",
    date: "02 Oct 2026 · 16:40",
  },
  {
    id: "INV-2029",
    description: "UI/UX Design Retainer — September",
    amount: "₦320,000",
    status: "Failed",
    date: "28 Sep 2026 · 11:05",
  },
];

const toneFor = (status: Status) =>
  status === "Paid" ? "success" : status === "Pending" ? "warning" : "danger";

export default function Transactions(): React.JSX.Element {
  useDashboardPage();
  const [filter, setFilter] = useState<"all" | Status>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? transactions
        : transactions.filter((transaction) => transaction.status === filter),
    [filter],
  );

  const outstanding = transactions
    .filter((transaction) => transaction.status === "Pending")
    .length;

  return (
    <DashboardPage
      title="Transactions"
      description="Invoices, payments and outstanding balances for your account."
      actions={<Button variant="outline">Download statement</Button>}
    >
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="py-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-subdued">
            Outstanding
          </p>
          <p className="mt-1.5 text-[24px] font-semibold text-ink">₦230,000</p>
          <p className="mt-1 text-[12px] text-ink-muted">{outstanding} invoice awaiting payment</p>
        </Card>
        <Card className="py-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink-subdued">
            Paid this quarter
          </p>
          <p className="mt-1.5 text-[24px] font-semibold text-ink">₦920,000</p>
          <p className="mt-1 text-[12px] text-ink-muted">Across 3 invoices</p>
        </Card>
        <Card className="border-transparent bg-gradient-to-br from-brand to-brand-secondary py-5 text-white shadow-floating">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/70">
            Account credit
          </p>
          <p className="mt-1.5 text-[24px] font-semibold">₦0.00</p>
          <p className="mt-1 text-[12px] text-white/75">No credit on this account</p>
        </Card>
      </div>

      <Card className="p-0">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] px-6 py-4">
          <h2 className="text-[16px] font-semibold text-ink">Invoice history</h2>
          <div className="flex flex-wrap items-center gap-2">
            {(["all", "Pending", "Paid", "Failed"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={cn(
                  "inline-flex h-8 items-center rounded-full px-3 text-[12px] font-medium transition-colors",
                  filter === value
                    ? "bg-brand text-white"
                    : "bg-surface-secondary text-ink-muted hover:text-ink",
                )}
              >
                {value === "all" ? "All" : value}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="text-[11px] uppercase tracking-[0.1em] text-ink-subdued">
                <th className="px-6 py-3 font-medium">Invoice</th>
                <th className="px-6 py-3 font-medium">Description</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {visible.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-t border-black/[0.04] text-[13px] text-ink"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 text-ink-muted">{transaction.description}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-semibold">
                    {transaction.amount}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Badge tone={toneFor(transaction.status) as "success" | "warning" | "danger"}>
                      {transaction.status}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-ink-muted">
                    {transaction.date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    {transaction.status === "Pending" ? (
                      <button
                        type="button"
                        className="inline-flex h-8 items-center rounded-control bg-brand px-3 text-[12px] font-medium text-white transition-colors hover:bg-brand-600"
                      >
                        Pay now
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex h-8 items-center rounded-control border border-black/[0.06] px-3 text-[12px] font-medium text-ink-muted transition-colors hover:text-ink"
                      >
                        Receipt
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {visible.length === 0 && (
          <p className="px-6 py-10 text-center text-[13px] text-ink-muted">
            No invoices match this filter.
          </p>
        )}
      </Card>
    </DashboardPage>
  );
}
