'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function FooterCTA() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#111111] text-white z-50">
      <div
        className="
          w-full
          flex flex-col gap-3
          md:flex-row md:items-center md:justify-between
          px-4 py-4
        "
      >
        {/* LEFT TEXT */}
        <p className="text-base md:text-lg font-semibold text-center md:text-left">
          Ready to launch your Future Minds: Advanced AI Skills?
        </p>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          {/* PRICE */}
          <p className="text-[#8AB4F8] font-bold text-lg">₹4,999</p>

          {/* CTA BUTTON */}
          <a
            href="#"
            className="
              bg-[#2563EB] hover:bg-blue-700
              text-white text-sm font-semibold
              px-6 py-2 rounded-lg shadow
              whitespace-nowrap
            "
          >
            Enroll Now
          </a>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 hover:text-white"
            aria-label="Close CTA"
          >
            <X size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
