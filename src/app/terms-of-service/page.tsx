import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Terms of Service | Islamic Society of Central Jersey",
  description: "The terms that govern your use of the Islamic Society of Central Jersey website.",
};

export default function Page() {
  return (
    <LegalPage
      title={<>Terms of <em>Service</em></>}
      lastUpdated={LAST_UPDATED}
      other={{ href: "/privacy-policy", label: "Privacy Policy" }}
    >
      <LegalIntro>
        Welcome to the website of Islamic Society of Central Jersey (“ISCJ,” “we,” or “us”). These Terms of
        Service (“Terms”) govern your access to, and use of, our website located at www.iscj.org (the
        “Site”). By accessing or using the Site, you agree to be bound by these Terms and by our{" "}
        <Link href="/privacy-policy" style={{ color: "var(--navy)", textDecoration: "underline" }}>
          Privacy Policy
        </Link>
        , which is incorporated herein by reference.
      </LegalIntro>

      <LegalSection id="intellectual-property-rights" number={1} title="Intellectual Property Rights">
        <LegalP>
          Unless otherwise indicated, the Site and all content, including but not limited to source code,
          databases, functionality, software, website designs, audio, video, text, photographs, and graphics
          on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained
          therein (the “Marks”) are owned or controlled by us, and are protected by copyright and trademark
          laws.
        </LegalP>
        <LegalP>
          The Content and Marks are provided on the Site “AS IS” for your information and personal use only.
          Except as expressly provided in these Terms, no part of the Site and no Content or Marks may be
          copied, reproduced, aggregated, republished, posted, publicly displayed, encoded, translated,
          transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
        </LegalP>
      </LegalSection>

      <LegalSection id="prohibited-activities" number={2} title="Prohibited Activities">
        <LegalP>
          You may not access or use the Site for any purpose other than that for which we make the Site
          available. As a user of the Site, you agree not to:
        </LegalP>
        <LegalList>
          <LegalItem>
            Systematically retrieve data or other content from the Site to create or compile, directly or
            indirectly, a collection, compilation, database, or directory without written permission from us.
          </LegalItem>
          <LegalItem>
            Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive
            account information such as user passwords.
          </LegalItem>
          <LegalItem>Circumvent, disable, or otherwise interfere with security-related features of the Site.</LegalItem>
          <LegalItem>Use the Site in a manner inconsistent with any applicable laws or regulations.</LegalItem>
        </LegalList>
      </LegalSection>

      <LegalSection id="donations-and-purchases" number={3} title="Donations and Purchases">
        <LegalP>
          If you make a donation or purchase on our Site, you agree to provide current, complete, and accurate
          purchase and account information. You agree to promptly update your account and other information,
          including email address and payment method details, so that we can complete your transactions and
          contact you as needed. We reserve the right to refuse or cancel any donation or order if fraud or an
          unauthorized or illegal transaction is suspected.
        </LegalP>
      </LegalSection>

      <LegalSection id="third-party-websites-and-content" number={4} title="Third-Party Websites and Content">
        <LegalP>
          The Site may contain links to other websites (“Third-Party Websites”) as well as articles,
          photographs, text, graphics, pictures, designs, music, sound, video, information, applications,
          software, and other content or items belonging to or originating from third parties (“Third-Party
          Content”). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or
          checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any
          Third-Party Websites accessed through the Site.
        </LegalP>
      </LegalSection>

      <LegalSection id="limitation-of-liability" number={5} title="Limitation of Liability">
        <LegalP>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE”
          WITHOUT WARRANTIES OF ANY KIND, AND IN NO EVENT WILL WE, OUR TRUSTEES, DIRECTORS, OFFICERS,
          EMPLOYEES, VOLUNTEERS, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
          CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST
          REVENUE, LOSS OF DATA, UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA, OR OTHER
          DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing-law" number={6} title="Governing Law">
        <LegalP>
          These Terms and your use of the Site are governed by and construed in accordance with the laws of
          the State of New Jersey, without regard to its conflict of law principles. You agree that any action
          arising out of or relating to these Terms or the Site shall be brought exclusively in the state or
          federal courts located in the State of New Jersey, and you consent to the personal jurisdiction of
          such courts.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes-to-these-terms" number={7} title="Changes to These Terms">
        <LegalP>
          We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any
          time and for any reason. We will alert you about any changes by updating the “Last Updated” date of
          these Terms. Your continued use of the Site after any changes are posted constitutes your acceptance
          of the revised Terms. It is your responsibility to periodically review these Terms to stay informed
          of updates.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact-us" number={8} title="Contact Us">
        <LegalP>
          To resolve a complaint regarding the Site or to receive further information regarding use of the
          Site, please contact us at:
        </LegalP>
        <LegalP>Islamic Society of Central Jersey</LegalP>
        <LegalContact />
      </LegalSection>
    </LegalPage>
  );
}
