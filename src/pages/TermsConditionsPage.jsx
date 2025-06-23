import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

const TermsConditionsPage = () => {
    const terms = [
        {
            number: 1,
            title: "Acceptance of Terms and Conditions:",
            content: "Seller's acceptance of all purchase orders is expressly conditioned upon Buyer's agreement and consent to these terms and conditions, and Seller will not accept, and expressly rejects, any other terms and conditions (whether written or oral) originating from Buyer that purport to modify, add to, or otherwise vary the terms and conditions stated herein. Buyer's acceptance of, and agreement to, these terms and conditions shall be indicated by any of the foregoing: (a) Buyer's written acknowledgement or other act or expression of acceptance, (b) Buyer's offer to purchase products from Seller, or (c) Buyer's acceptance of shipment from Seller."
        },
        {
            number: 2,
            title: "Shipment/Title/Risk of Loss:",
            content: "Title to the product shall pass to Buyer upon delivery of product to the common carrier or Buyer's representative at Seller's dock. All risk of loss, damage, theft or destruction to the product shall be borne by Buyer at F.O.B. shipping point. No such loss, damage, theft or destruction to the product, in whole or in part, shall impair the obligations of Buyer under this agreement, all of which shall continue in full force and effect. Seller shall not be liable for any shipping delays. Buyer shall bear all applicable federal, state, municipal or other governmental tax, as well as any applicable import of customs duties, license fees and similar charges, however designated or levied on the sale of products (or delivery thereof) or measured by the purchase price paid for the products."
        },
        {
            number: 3,
            title: "Shortages/Rejection of Delivery:",
            content: "All claims for shortages or rejection of delivery must be made by Buyer to Seller in writing within a period of 48 hours from receipt of product and must state in reasonable detail the grounds therefore. Unless such notice is given within the stated period of time, Buyer agrees that it shall be conclusively presumed that Buyer has fully inspected the product and acknowledged that NO shortage or grounds for rejection exists."
        },
        {
            number: 4,
            title: "Security Interest:",
            content: "Buyer grants Seller a security interest in all products sold hereunder and to all products now or hereafter acquired by Buyer from Seller, and to any proceeds due there from, until the purchase price and any other amounts due to Seller have been paid in their entirety. Buyer agrees promptly to execute any financing statement or other documents requested by Seller in order to protect Seller's security interest. Upon any default by Buyer of any of its obligations to Seller, Seller shall have all the rights and remedies of a secured party under the Uniform Commercial Code, which rights and remedies shall be cumulative and not exclusive."
        },
        {
            number: 5,
            title: "Payment:",
            content: "Unless otherwise agreed in writing by Seller, all credit purchases must be paid in accordance with Seller's normal terms of sale, which are 50% with order, 30% during shipment, and 20% upon completion of order. All past due amounts are subject to a 1.5% monthly financing charge or the outstanding balance or the maximum permissible under applicable law. All drafts dishonored for any reason shall be assessed a $25.00 service charge. In the event that Buyer stops payment on any drafts issued to Seller, for any reason, Buyer hereby recognizes that Seller will suffer damage, the exact amount of which cannot be determined with certainty, and Buyer shall pay Seller liquidated damages in the amount of $500 for each such draft in addition to the purchase price. Seller has no continuing obligation to deliver products on credit, and credit approval may be withdrawn by Seller at any time and without prior notice."
        },
        {
            number: 6,
            title: "Returns:",
            content: "All sales are final; any exceptions would have to be approved by MTC President."
        },
        {
            number: 7,
            title: "No Warranties by Seller:",
            content: "Product warranties, if any, are provided by the manufacturer or publisher of the Products. Seller makes no warranties, and shall have no liability related to warranties, whatsoever. In no event shall Seller be liable for any consequential damages or damages of any kind or nature alleged to have resulted from any breach of warranty. Seller does not warrant the merchantability of the products or their fitness for any particular purpose. Seller makes no warranty, express or implied."
        },
        {
            number: 8,
            title: "Events of Default:",
            content: "Buyer shall be in default under this agreement upon the happening of any of the following events or conditions (\"event of default\"): (a) nonpayment by Buyer of payment of any installment, invoice, bill or any other indebtedness or obligation now or hereafter owed by Buyer to Seller, (b) nonperformance of any obligation, covenant or liability contained in this agreement or any other agreement or document between Buyer and Seller, (c) any inaccuracy with respect to any warranty, representation or statement made or furnished by Buyer, and (d) dissolution, termination of existence, insolvency, business failure, or discontinuance of Buyer's business or the appointment of a receiver for any part of the property of or assignment for the benefit of creditors by Buyer or the commencement of any proceedings under any bankruptcy, reorganization or arrangement laws by or against Buyer or the attachment, levy seizure or garnishment of any of Buyer's property, rights, assets (contingent or otherwise) or the product."
        },
        {
            number: 9,
            title: "Software:",
            content: "All software (including firmware) furnished to Buyer is on a licensed basis only. Seller grants to Buyer a non-transferable and non-exclusive license to use such software delivered to Buyer hereunder (\"Licensed Programs\"). Each such license grants Buyer the authority to use the Licensed Program in machine-readable form only, and, in the case of software supplied with hardware, only on the systems supplied by Seller to Buyer under this Agreement. Such license may not be assigned, sublicensed or otherwise transferred by Buyer without the prior written consent of Seller, and in the case of software supplied with hardware, Buyer's software shall be subject to the terms set forth in this Agreement, and Buyer shall provide evidence of such to Seller prior to shipment. Unless otherwise provided by law, title to any Licensed Program is not granted, and Buyer agrees to maintain Seller's copyright notice on the Licensed Programs delivered hereunder, and to include the same on any authorized copies it makes. Buyer agrees that any form of a Licensed Program is Buyer's property, and Buyer shall not modify, merge, or incorporate any form or portion of a Licensed Program with other program material, create a derivative work from a Licensed Program, or use a Licensed Program in any manner not expressly granted."
        },
        {
            number: 10,
            title: "Non-Hire:",
            content: "Buyer agrees that during the period that Seller is providing services to Buyer, and for six (6) months thereafter, Buyer shall refrain from soliciting, hiring or accepting services from any of the employees proposed to, or introduced to, Buyer by Seller or who at any time provided services to Buyer through or on behalf of Seller, except through Seller."
        },
        {
            number: 11,
            title: "Remedies of Seller:",
            content:[
                {
                    number:'a',
                    type:'In General:',
                    description:'Upon the occurrence of any event of default or any time thereafter, Seller may, at its option and without notice to Buyer, exercise one or more of the following remedies as Seller, in its sole discretion, shall elect: (1) demand or, without demand, sue for amounts then due or there-after accruing under any invoice, bill or other documentation evidencing Buyer’s indebtedness, (2) suspend deliveries as to any or all product, (3) take possession of the product wherever found and for this purpose enter upon any premises of Buyer and remove the product, without court order or other process of law, without any liability for damages, suit, action or other proceeding by Buyer as a result of such entry and/or removal, (4) cause Buyer, at its expense, to promptly return the product to Seller in good, like-new condition, (5) sell the goods, or any part thereof at public or private sales (for cash or credit) at such time or times as Seller shall de-termine, free and clear of any rights of Buyer, and if notice thereof is re-quired by law, any notice in writing of any such sale by Seller to Buyer not less than ten days prior to the date thereof shall constitute reasonable notice thereof to Buyer, and (5) exercise any and all rights to which is enti-tled in law or equity.\n',
                },
                {
                    number:'b',
                    type:'Mitigation of Damages:',
                    description:'Should Seller repossess any of the product be-cause of Buyer’s default, Seller may make a commercially reasonable ef-fort to sell such product at a reasonable price to a third party, provided, however, that Seller shall have no obligation to actively seek out and solic-it potential third party buyers for\n'
                },
                {
                    number:'c',
                    type:'Collection Costs:',
                    description:'In the event of default on the part of Buyer hereunder, Buyer shall pay any and all collection costs, and costs of suchef-fort to sell such product at a reasonable price to a third party, provided, however, that Seller shall have no obligation to actively seek out and solic-itright or remedy conferred upon or reserved to Seller by this agreement shall be exclusive of any other right or remedy provided herein or by law. All rights or remedies conferred up-on Seller by this agreement and by law shall be cumulative and in addition to any other right or\n' +
                        'remedy available to Seller.'
                }
        ]
        },

        {
            number: 12,
            title: "Time of the Essence:",
            content: "Time is of the essence of this agreement."
        },
        {
            number: 13,
            title: "Indemnification:",
            content: "Buyer agrees to indemnify and hold Seller and its officers, directors, servants, employees, agents and advisors harmless from and against any and all claims, damages, costs, expenses (including, but not limited to, reasonable attorneys' fees and costs) or liabilities that may result, in whole or in part, from Buyer or any third party using or any manner, or selling the product whether such claim is based upon negligence, strict liability, breach of warranty or any damages and cost arising from any alleged infringement of patent or trademarks or the violation of copyrights by products, or otherwise. Any defense provided hereunder shall be at Seller's choice. Seller shall have no duty to defend against any claim unless Seller has been given prompt written notice of such claim and reasonable opportunity to assume the defense thereof. This provision shall survive any termination of this agreement."
        },
        {
            number: 14,
            title: "Limitation of Liability:",
            content: "In the event that a product's malfunction leads to damage or injuries to the Buyer or to Buyer's business, the end user's business, to any third party, to other equipment, property, or any other cause whatsoever, Buyer acknowledges, understands, and agrees that if Seller shall be found liable for loss or damage caused by failure of Seller to perform any of its obligations, or the failure of the product in any respect whatsoever, Seller's liability shall be limited to the purchase price paid for the product. Buyer acknowledges, understands, and agrees that under no circumstances shall the provisions of this section shall apply if loss or damage, irrespective of cause or origin, results directly or indirectly to persons or property, from performance or non-performance of any obligation, or from any other cause related to or arising from the product, whether based on contract, warranty, tort (including negligence), active or otherwise, of Seller, or its agents, servants, assignees or employees. IN NO EVENT SHALL SELLER BE LIABLE FOR AMOUNTS REPRESENTING LOST PROFITS, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING FROM THE PRODUCT OR SERVICES PROVIDED HEREUNDER."
        },
        {
            number: 15,
            title: "Assignment:",
            content: "This agreement and all rights, obligations and performance hereunder may not be assigned without prior written consent of Seller."
        },
        {
            number: 16,
            title: "Waiver:",
            content: "No delay or omission by Seller to exercise any right or power shall impair any such right or power or be construed to be a waiver thereof. A waiver by Seller of any term, condition or agreements to be performed by Buyer or any breach thereof shall not be construed to be a waiver of any succeeding breach thereof or of any other term, condition or agreement herein contained, or breach thereof, as the case may be. No change, waiver, or discharge hereof shall be valid unless presented in writing to Seller and signed by an authorized representative of Seller."
        },
        {
            number: 17,
            title: "Severability:",
            content: "If any section, term, condition or portion thereof shall be found to be illegal or void as being against public policy, it shall be stricken and the remainder of this agreement shall remain in full force and effect. BUYER ACKNOWLEDGES THAT THE PROVISIONS HEREIN REGARDING LIMITATION OF DAMAGES AND SALES TRANSACTIONS EXCLUDE THE APPLICATION OF THE 1980 UNITED NATIONS CONVENTION ON CONTRACTS FOR THE INTERNATIONAL SALES OF GOODS, IF OTHERWISE APPLICABLE."
        },
        {
            number: 18,
            title: "Governing Law/Venue:",
            content: "This agreement shall be construed and enforced in accordance with the laws of the Kingdom of Saudi Arabia, without regard to choice of law provisions thereof. Any action, suit or other legal proceeding arising under this agreement shall be commenced in a court of competent jurisdiction in suits shall be litigated exclusively in the courts of Florida. Each party specifically consents to service of process by and the jurisdiction of and venue in such courts and Buyer, if not a resident of Florida, hereby appoints the Secretary of State of Florida as its agent for service of process in the United States."
        },
        {
            number: 19,
            title: "Entire Agreement/Modification:",
            content: "The parties intend this agreement to be the complete statement of the terms of their agreement. This agreement replaces and supersedes any prior agreements between the parties on this subject matter. This agreement may not be changed, modified or amended except by an instrument in writing signed by Seller and Buyer. All Products delivered to Buyer pursuant to this agreement are subject to the terms and conditions set forth herein. Seller hereby acknowledges and shall advise its customer that the Products may be controlled for export by the U.S. Department of Commerce and the Products may require authorization for re-export."
        },
        {
            number: 20,
            title: "Force Majeure:",
            content: "Seller shall not be liable for any delay or failure to comply with any agreed upon terms resulting from any circumstances or act beyond Seller's control."
        },
        {
            number: 21,
            title: "Privacy:",
            content: "MTC may collect information regarding system usage and devices used to access our systems. In addition MTC will have e-mail addresses, names, and phone numbers in our records for each user account you create. This information will not be used or sold to third parties for any reason. The information we collect is either directly used to provide services such as text message and e-mail alerts, for billing purposes, or for posting future upgrades to our infrastructure."
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-32 mt-20">
                    <div className="mx-auto">
                        <AnimatedSection animation="fadeInUp" delay={200}>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#2F5572] mb-8">
                                Terms & Conditions
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInUp" delay={400}>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12">
                                Makamat for Technological Contracting Est., hereafter "Seller", makes all sales subject to the following terms
                                and conditions:
                            </p>
                        </AnimatedSection>

                        <div className="space-y-8">
                            {terms.map((term, index) => (
                                <AnimatedSection
                                    key={term.number}
                                    animation="fadeInUp"
                                    delay={300 + index * 50}
                                >
                                    <div className="flex gap-6 items-start">
                                        <div className="flex-1 pt-1">
                                            <p className="text-black leading-relaxed text-justify mb-2">
                                                <strong>{term.number}. {term.title}</strong>
                                            </p>
                                            {Array.isArray(term.content) ? (
                                                <ul className="list-none">
                                                    {term.content.map((item, idx) => (
                                                        <li key={idx} className="text-gray-700 leading-relaxed">
                                                            <strong>{item.number}. {item.type} </strong>{item.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-700 leading-relaxed text-justify">
                                                    {term.content}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default TermsConditionsPage;