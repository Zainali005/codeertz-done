import Link from 'next/link';
import React from 'react';

function TermsCondtionContent({ title, subtitle, color }) {
  return (
    <section className='container pt-50 pb-50 terms-content'>
        <div className='row'>
            <div className='col-md-12'>
                
                <h5>Subscription Terms</h5>
                <p> <b>Duration:</b> The subscription will be valid for a period of 12 months from the date of sign-up, unless otherwise agreed upon by the parties.</p>
                <p> <b>Price:</b> The price for the subscription will be as agreed between the parties and will be payable in full at the beginning of each subscription period.</p>
                <p> <b>Payment:</b> Payment can be made by any of the payment methods offered by the Company, including credit card, PayPal, bank transfer or any other payment method made available by the Company from time to time.</p>
                <p> <b>Renewal:</b> The subscription will automatically renew for additional 12-month periods unless the customer cancels the subscription at least 30 days prior to the end of the subscription period.</p>

                <h5>Service Level Agreement (SLA)</h5>
                <p> <b>Response Time:</b> The Company will respond to customer queries and support requests within 24 hours of receipt.</p>
                <p> <b>Support Availability:</b> The Company will make its support services available to customers from Monday to Friday, between 9:00 AM and 5:00 PM local time.</p>
                <p> <b>Service Uptime:</b> The Company will use commercially reasonable efforts to ensure that the service is available 99% of the time during a given month.</p>
                <h5>Intellectual Property Rights</h5>
                <p> <b>Ownership:</b> All intellectual property rights in the software, website, and any other materials used or created during the development process shall be owned by the Company unless otherwise agreed upon by the parties.</p>
                <p> <b>License:</b> The Company grants the customer a non-exclusive, non-transferable license to use the software and website for the purposes of the subscription.</p>
                <h5>Confidentiality</h5>
                <p> <b>Protection:</b> The Company and the customer will take all reasonable measures to protect the confidential information of each other.</p>
                <p> <b>Non-Disclosure:</b> Neither party shall disclose any confidential information to any third party without the other party's prior written consent.</p>
                <h5>Limitations of Liability</h5>
                <p> <b>Indirect Losses:</b> The Company shall not be liable for any indirect, special, or consequential losses or damages arising from or in connection with the services provided.</p>
                <p> <b>Maximum Liability:</b> The Company's total liability for damages or losses arising from or in connection with the services provided shall not exceed the total amount paid by the customer under the subscription.</p>
                <h5>Data Protection and Privacy</h5>
                <p> <b>Collection and Use:</b> The Company will collect and use personal data in accordance with applicable data protection laws.</p>
                <p> <b>Third Parties:</b> The Company may share personal data with third parties only for the purposes of providing the services under the subscription.</p>
                <h5>Termination</h5>
                <p> <b>Termination by Customer:</b> The customer may terminate the subscription by providing written notice to the Company at least 30 days prior to the end of the subscription period.</p>
                <p> <b>Termination by Company:</b> The Company may terminate the subscription immediately if the customer breaches any of the terms of the subscription.</p>
                <h5>Governing Law</h5>
                <p>This agreement shall be governed by and construed in accordance with the laws of the jurisdiction where the Company is located, and any disputes arising from or in connection with this agreement shall be subject to the exclusive jurisdiction of the courts of that jurisdiction.</p>
                <p>I hope this sample is helpful to you, but again, it's important to consult with a qualified attorney to review and tailor your terms and conditions to meet your specific needs and requirements.</p>
            </div>
        </div>
    </section>
  )
}
export default TermsCondtionContent;