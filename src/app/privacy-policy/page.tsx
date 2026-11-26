import type { Metadata } from "next";
import {
  LegalContact,
  LegalIntro,
  LegalItem,
  LegalList,
  LegalP,
  LegalPage,
  LegalSection,
} from "@/components/legal/LegalPage";

/* Text is verbatim from "ISCJ Privacy and Terms of Service Policy
   2026-11-25.docx" (legal review by Mohamed Asker). Update it only from a
   revised document, and change LAST_UPDATED with it. */
const LAST_UPDATED = "November 25, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Islamic Society of Central Jersey",
  description: "How the Islamic Society of Central Jersey collects, uses, and protects your information.",
};

const contactLink = (
  <a href="#contact-us" style={{ color: "var(--navy)", textDecoration: "underline" }}>
    Section 8 (Contact Us)
  </a>
);

export default function Page() {
  return (
    <LegalPage
      title={<>Privacy <em>Policy</em></>}
      lastUpdated={LAST_UPDATED}
      other={{ href: "/terms-of-service", label: "Terms of Service" }}
    >
      <LegalIntro>
        Islamic Society of Central Jersey is committed to protecting your privacy. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information when you visit or make a
        donation through www.iscj.org (the “Site”).
      </LegalIntro>
      <LegalIntro>
        Please read this Privacy Policy carefully. By accessing or using the Site, or by providing
        information to us, you acknowledge that you have read and understood this Privacy Policy and
        consent to the collection, use, and disclosure of your information as described herein. If you do
        not agree with the terms of this Privacy Policy, please do not access the Site.
      </LegalIntro>

      <LegalSection id="information-we-collect" number={1} title="Information We Collect">
        <LegalP>
          We may collect information about you in a variety of ways. The information we may collect on the
          Site includes:
        </LegalP>
        <LegalList>
          <LegalItem lead="Personal Data:">
            Personally identifiable information, such as your name, mailing address, email address, and
            telephone number, and demographic information that you voluntarily give to us when you choose to
            participate in various activities related to the Site, such as subscribing to newsletters,
            filling out contact forms, registering for programs or events, or donating. Because ISCJ is a
            religious organization, your interaction with us may itself indicate your religious affiliation;
            we treat such information as sensitive and handle it with heightened care.
          </LegalItem>
          <LegalItem lead="Financial Data:">
            Financial information, such as data related to your payment method (e.g., valid credit card
            number, card brand, expiration date) that we may collect when you make a donation or purchase. We
            do not store complete payment card numbers on our systems; payments are processed by our
            third-party payment processors (e.g., PayPal, Forte, Stripe), whose collection and use of your
            information is governed by their own privacy policies and security practices.
          </LegalItem>
          <LegalItem lead="Derivative Data:">
            Information our servers, cookies, and similar technologies automatically collect when you access
            the Site, such as your IP address, your browser type, your operating system, your access times,
            and the pages you have viewed directly before and after accessing the Site. You may be able to
            disable cookies through your browser settings, although certain features of the Site may not
            function properly as a result.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection id="how-we-use-your-information" number={2} title="How We Use Your Information">
        <LegalP>
          Having accurate information about you permits us to provide you with a smooth, efficient, and
          customized experience. Specifically, we may use information collected about you via the Site to:
        </LegalP>
        <LegalList>
          <LegalItem>Process and acknowledge your donations or purchases.</LegalItem>
          <LegalItem>
            Send you newsletters, updates, marketing communications, or information regarding our mission
            and events.
          </LegalItem>
          <LegalItem>Respond to donor, volunteer, or general user inquiries.</LegalItem>
          <LegalItem>Compile aggregated or de-identified statistical data and analysis for use internally.</LegalItem>
          <LegalItem>
            Verify identity, prevent fraud and unauthorized transactions, or contact you for the purpose of
            raising money for ISCJ.
          </LegalItem>
          <LegalItem>
            Determine the effectiveness of fundraising campaigns and mission activities. Send you a receipt or
            a thank you for your donation.
          </LegalItem>
          <LegalItem>
            Comply with applicable laws, regulations, and legal obligations, including tax and recordkeeping
            requirements, and to establish, exercise, or defend legal claims.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection id="disclosure-of-your-information" number={3} title="Disclosure of Your Information">
        <LegalP>
          We do not sell, rent, or trade your personal data to third parties. We may share information we
          have collected about you in the following situations:
        </LegalP>
        <LegalList>
          <LegalItem lead="By Law or to Protect Rights:">
            If we believe in good faith that the release of information about you is necessary or appropriate
            to comply with applicable law, to respond to subpoenas, court orders, or other legal process, to
            investigate or remedy potential violations of our policies, or to protect the rights, property,
            and safety of ISCJ, our members, or others.
          </LegalItem>
          <LegalItem lead="Third-Party Service Providers:">
            We may share your information with third parties that perform services for us or on our behalf,
            including payment processing, data analysis, email delivery, hosting services, and customer
            service. We require such service providers to use your information only as necessary to perform
            services for us and to protect it in accordance with applicable law.
          </LegalItem>
          <LegalItem lead="With Your Consent:">
            We may share your information for any other purpose disclosed to you at the time we collect it or
            with your consent.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection id="security-of-your-information" number={4} title="Security of Your Information">
        <LegalP>
          We use administrative, technical, and physical security measures designed to help protect your
          personal information. While we have taken reasonable steps to secure the personal information you
          provide to us, please be aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed against any interception or
          other type of misuse. Any transmission of information to the Site is at your own risk. In the event
          of a security incident affecting your personal information, we will provide notice as required by
          applicable law. We retain personal information for as long as reasonably necessary to fulfill the
          purposes described in this Privacy Policy, including to satisfy legal, tax, accounting, and
          reporting requirements.
        </LegalP>
      </LegalSection>

      <LegalSection id="childrens-privacy" number={5} title="Children’s Privacy">
        <LegalList>
          <LegalItem>
            We do not knowingly collect personal data from children under 13. ISCJ does not intend to solicit
            information of any kind from children under 13, or from a person under whatever higher age
            defines a minor in your jurisdiction. Where youth programs require information about a minor, we
            collect it only from, and with the consent of, a parent or legal guardian.
          </LegalItem>
          <LegalItem>
            It is possible that by fraud or deception we may receive information pertaining to minors. If we
            are notified of this, as soon as we verify the notification, we will take reasonable steps to
            delete the information from our servers or, where appropriate, obtain parental consent. To notify
            us that we have received information from a minor, please contact us using the details in{" "}
            {contactLink} below.
          </LegalItem>
          <LegalItem>
            A parent or legal guardian may, upon reasonable verification of identity, request to review the
            personal information we maintain about his or her child, direct us to delete such information,
            and refuse to permit its further collection or use. Such requests may be submitted using the
            details in {contactLink} below.
          </LegalItem>
          <LegalItem>
            ISCJ does not sell personal data of minors, and does not process personal data of any individual
            we know to be under 17 years of age for purposes of targeted advertising, sale, or profiling.
            Personal data collected from a known child is treated as sensitive data and is processed only in
            accordance with the federal Children’s Online Privacy Protection Act and applicable New Jersey
            law.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection id="your-choices" number={6} title="Your Choices Regarding Your Information">
        <LegalP>
          You may at any time request to review or correct the personal information we maintain about you,
          or opt out of receiving future email communications from us, by:
        </LegalP>
        <LegalList>
          <LegalItem>Clicking the “unsubscribe” link at the bottom of our emails.</LegalItem>
          <LegalItem>Contacting us directly using the contact information provided below.</LegalItem>
          <LegalItem>
            Replying STOP to unsubscribe from SMS messages. Message and data rates may apply, and we do not
            share your mobile number or SMS opt-in consent with third parties for their marketing purposes.
            Please note that even if you opt out of promotional communications, we may still send you
            transactional or administrative messages, such as donation receipts.
          </LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection id="changes-to-this-privacy-policy" number={7} title="Changes to This Privacy Policy">
        <LegalP>
          We may update this Privacy Policy from time to time. When we do, we will revise the “Last Updated”
          date at the top of this page. Your continued use of the Site after any changes are posted
          constitutes your acceptance of the updated Privacy Policy. We encourage you to review this policy
          periodically to stay informed about how we protect your information.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact-us" number={8} title="Contact Us">
        <LegalP>If you have questions or comments about this Privacy Policy, please contact us at:</LegalP>
        <LegalP>Islamic Society of Central Jersey</LegalP>
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
