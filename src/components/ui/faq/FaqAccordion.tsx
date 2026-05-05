"use client";

import { useState } from "react";
import { FaqItem } from "./FaqItem";

interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItemData[];
  allowMultiple?: boolean;
}

export function FaqAccordion({
  items,
  allowMultiple = false,
}: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-card/30">
      {items.map((item, index) => (
        <div key={index} className="px-6 md:px-8">
          <FaqItem
            question={item.question}
            answer={item.answer}
            isOpen={openIndexes.includes(index)}
            onToggle={() => handleToggle(index)}
          />
        </div>
      ))}
    </div>
  );
}
