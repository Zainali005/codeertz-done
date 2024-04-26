import Link from 'next/link';
import React from 'react';

function PrivacyPolicyContent({ title, subtitle, color }) {
  return (
    <section className='container pt-50 pb-50 terms-content'>
        <div className='row'>
            <div className='col-md-12'>
                <p>This Privacy Policy explains how Codeertz (Private) Ltd ("the Company," "we," "us," or "our") collects, uses, and discloses personal information that we receive from our customers and users ("you" or "your") in connection with our subscription-based software development services. By using our services, you agree to the terms of this Privacy Policy.</p>
                <h5>Information We Collect</h5>
                <p>We collect personal information from you when you subscribe to our services, communicate with us, or use our website. The types of personal information we collect may include:</p>
                <p> <b>Contact Information:</b> such as name, email address, phone number, and billing address.</p>
                <p> <b>Payment Information:</b> such as credit card or bank account information.</p>
                <p> <b>Technical Information:</b> such as IP address, browser type, operating system, and device information.</p>
                <p> <b>Usage Information:</b> such as information about how you use our services and website.</p>
                <h5>How We Use Your Information</h5>
                <p>We use your personal information to provide and improve our services, communicate with you, and comply with legal obligations. Specifically, we may use your personal information to:</p>
                <p>Provide and manage our services to you, including processing payments and providing support.</p>
                <p>Communicate with you about your subscription and our services, such as sending you important updates and notifications.</p>
                <p>Improve our services, such as by analyzing usage data and identifying areas for improvement.</p>
                <p>Comply with legal obligations, such as responding to legal process or government requests.</p>
                <h5>How We Share Your Information</h5>
                <p>We may share your personal information with third parties in the following circumstances:</p>
                <p> <b>Service Providers:</b> We may share your personal information with third-party service providers who perform services on our behalf, such as payment processing, customer support, and analytics.</p>
                <p> <b>Business Transactions:</b> We may disclose your personal information in connection with a business transaction, such as a merger, acquisition, or sale of assets.</p>
                <p> <b>Legal Obligations:</b> We may disclose your personal information to comply with legal obligations, such as responding to legal process or government requests.</p>
                <p> <b>Your Consent:</b> We may disclose your personal information with your consent.</p>
                <h5>Your Rights and Choices</h5>
                <p>You have certain rights and choices with respect to your personal information, including the right to access, correct, delete, and restrict the processing of your personal information. You may also choose to opt-out of certain types of communications from us, such as marketing emails. To exercise your rights and choices, please contact us at the address provided below.</p>
                <h5>Data Retention</h5>
                <p>We will retain your personal information for as long as necessary to provide you with our services and to comply with legal obligations. We may also retain certain personal information for a longer period of time to the extent necessary to resolve disputes or enforce our agreements.</p>
                <h5>Security</h5>
                <p>We take reasonable measures to protect the security and confidentiality of your personal information, including using appropriate technical and organizational measures to safeguard against unauthorized access, disclosure, and use.</p>
                <h5>Changes to this Policy</h5>
                <p>We may update this Privacy Policy from time to time in response to changing legal, technical, or business developments. If we make material changes to this Privacy Policy, we will notify you by email or through our website. Your continued use of our services after any changes to this Privacy Policy will constitute your consent to such changes.</p>
                <h5>Contact Us</h5>
                <p>If you have any questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact us at <a href="#">inquiry@Codeertz.com.</a> </p>
            </div>
        </div>
    </section>
  )
}
export default PrivacyPolicyContent;