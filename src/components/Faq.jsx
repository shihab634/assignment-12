import React from "react";

const Faq = () => {
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h2 className="text-3xl text-center text-red-500 mb-10 font-bold">Frequently Asked Questions</h2>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title font-semibold">Why should I become a blood donor?</div>
        <div className="collapse-content text-sm">
          Donating blood saves lives. It helps patients undergoing surgeries, cancer treatments, trauma recovery, and more. Just one donation can save up to three lives.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">Is it safe to donate blood?</div>
        <div className="collapse-content text-sm">
          Yes. Blood donation is a safe and simple process. Sterile equipment is used for each donor, and trained professionals oversee the procedure.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">Who can donate blood?</div>
        <div className="collapse-content text-sm">
          Generally, anyone aged 18–65, weighing at least 50kg, and in good health can donate blood. Donors must not be under any current medication or illness.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">How often can I donate blood?</div>
        <div className="collapse-content text-sm">
          Men can donate every 3 months, and women every 4 months. This allows your body enough time to replenish blood levels.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">Do I get paid for donating?</div>
        <div className="collapse-content text-sm">
          No. Blood donation is a voluntary and noble act. We do not pay donors, but we highly appreciate and honor their contributions.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">Can I search for specific blood groups?</div>
        <div className="collapse-content text-sm">
          Yes. Our platform allows you to search donors by blood group, location, and availability for quick and efficient matching.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">How do I trust the donors?</div>
        <div className="collapse-content text-sm">
          Each donor profile is verified, and user reviews help build trust. We also encourage donors to share their donation history and health details.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">Is the donor information kept private?</div>
        <div className="collapse-content text-sm">
          Yes. We respect your privacy. Personal contact details are only shared when both parties agree to connect for donation purposes.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">How do I become a donor on this site?</div>
        <div className="collapse-content text-sm">
          Simply click “Join as a Donor,” fill in your personal and medical details, and submit the form. Once approved, your profile will appear in donor searches.
        </div>
      </div>

      <div className="collapse bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">Can I remove my profile anytime?</div>
        <div className="collapse-content text-sm">
          Yes. You have full control over your profile. You can deactivate or delete it from your dashboard anytime.
        </div>
      </div>
    </div>
  );
};

export default Faq;
