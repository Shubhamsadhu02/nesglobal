import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Partials/Header'

export default function VisibilityTnc() {
    return (
        <>
            <Header />

            <section>
                <div className="container mb-15 mt-15" >
                    {/* <div className="termsdate mb-3">
                        <h3 style={{ color: "#737171" }}>Revised: 4-04-2022</h3>
                    </div> */}
                    <div className="terms-heading">
                        <h1>NES Global Software and Visibility Terms &amp; Conditions</h1>
                    </div>
                    <div className="terms-paragrapgh">
                        <p style={{ color: "#737171" }}>
                            By requesting or accepting goods or services or accessing or using software, or related applications or APIs available through <Link to={"/"}>www.nesglobal.in</Link> from NES Global Solutions, and/or its subsidiaries and affiliates (collectively, “NES Global”), the Customer agrees to the following terms and conditions of service (“Terms and Conditions”).
                            <br />
                            <br />
                            NES Global may from time to time change these Terms and Conditions. Any changes are effective immediately upon publication on our website at <Link to='/terms'><span style={{ color: "#0060BE", fontWeight: "500" }}>www.nesglobal.in/terms</span></Link>.
                            <br />
                            <br />
                            NES Global Privacy Policy is incorporated by reference: <Link to='/Privacy'><span style={{ color: "#0060BE", fontWeight: "500" }}>www.nesglobal.in/privacy</span></Link>
                            <br />
                            <br />
                            These Terms and Conditions govern the use of NES Global's Logistics Software and applications.
                            <br />
                            <br />
                            1. DEFINITIONS
                            <br />
                            <br />
                            1.1 Company: shall mean NES Global Solutions., its subsidiaries, successors or assigns, related companies, including, without limitation, other authorized agents and/or representatives.
                            <br />
                            <br />
                            1.2 Customer: shall mean the person for which the Company is rendering service or accessing the Services (defined below) at www.nesglobal.in as well as its agents, representatives, and/or transactional counterparties, including, but not limited to, suppliers, vendors, shippers, customers, importers, exporters, carriers, secured parties, warehousemen, buyers and/or sellers, shipper's agents, insurers and underwriters, break-bulk agents, consignees, etc. It is the responsibility of the Customer to provide notice and copy(s) of these terms and conditions of service to all such agents or representatives.
                            <br />
                            <br />
                            1.3 Application Data: shall mean any data associated with or related to the Services provided by Company to Customer (excluding any User Content or any other data managed by Company on behalf of other customers or with other services or offerings not included in the Services) including but not limited to ports, carriers, tariffs, cargo manifests, invoices, price quotes to customers and the metadata surrounding the price quotes (weight, volume, geolocations, ports etc.). Notwithstanding anything to the contrary herein, all Application Data shall be considered Confidential Information of Company.
                            <br />
                            <br />
                            1.4 Services: shall mean the services included in, but not limited to the Company's Freight Client Platform, including but not limited to the Company's Freight Forwarding App, Visibility App, Chat App, Client apps including reports and analytics, Origin App, Destination App, Carbon Program offerings including services that provide for carbon emission analytics or carbon offsets enabling Customer to view the carbon impact of its shipments and offset such impacts, and services offered by Company at <Link to={"/"}>www.nesglobal.in</Link> , including but not limited to services that provide necessary document, data and structured work formats to enable Customer and Company service providers or partners to operate Company shipments, enable customers to track goods in a container freight station, warehouse or third party logistics provider, track in-transit shipments, enable Customer and Company service providers or partners to upload and view documents associated with a shipment, enable Customer's internal teams to message about shipments in-app, enable Customer to view its shipment locations on a map, enable Customer to view and filter its shipments on a dashboard based on criteria such as forwarder, carrier, route, mode, delivery date, enable Customer to view its shipments approach their last free day in a calendar in order to enable planning, enable Customers, Company service providers or partners and authorized third parties to communicate and view relevant data concerning Customer shipments (the "NES Global Visibility Services"), that may be made available to Customer or Company service providers or partners via the Internet and Company websites <Link to={"/"}>www.nesglobal.in</Link> (referred to as “the Website”), or other electronic means, including APIs, and any software and Application Data provided by Company in connection with such services. As part of the Services provided, Customer may receive access to Company's Freight Client Platform (the “Platform”) to communicate with Company regarding ongoing shipments, retrieve all data associated with these shipments and book freight services. The Platform may not be available to Customers using only a portion of the Company's services including, for example, those customers solely using NES Global Visibility Services.
                            <br />
                            <br />
                            1.5 User Content: shall mean all content, data and materials selected and provided by Customer and its Users to Company in electronic or hard copy formats and entered by Customer into the Services or software. Notwithstanding anything to the contrary herein, all specific User Content shall be considered Confidential Information of Customer.
                            <br />
                            <br />
                            1.6 Confidential Information: shall mean, with respect to a party hereto, (a) the terms and conditions or any other agreement executed between the parties, (b) all nonpublic information concerning the busiNESs, technology, products, services, internal structure and strategies of the disclosing party, specifically including, without limitation, software, documentation, end-user materials, Intellectual Property Rights, proposals, designs, concepts, methodologies, inventions, source or object code, developments, research, programs, databases, referral sources, customers, prospective customers, inventions, developments, "know-how," procedures, financial information or licensing policies, and (c) any other information clearly labeled by the disclosing Party in writing as "confidential" prior to its disclosure, otherwise deemed as Confidential Information under these Terms and Conditions, or which should be known or understood to be confidential or proprietary by an individual exercising reasonable commercial judgment under the circumstances. The following information will not be considered Confidential Information: (i) information which was in the public domain prior to its disclosure; (ii) information which becomes part of the public domain by any means other than through violation of these Terms and Condition; (iii) information independently developed by the receiving party without reference to the disclosing party's Confidential Information, or (iv) information received from a third party not under any obligations of confidentiality.
                            <br />
                            <br />
                            1.7 User Proposals / Feedback: shall mean any suggestions, comments, or other feedback that Customer provides to Company with respect to the Website, the Services, or any other Company product or service.
                            <br />
                            <br />
                            2. SOFTWARE USAGE
                            <br />
                            <br />
                            2.1 Terms and Conditions: By accessing and using the Services, Customer agrees to be bound by these Terms and Conditions. These Terms and Conditions come into effect on the first day that Customer uses any of the Services.
                            <br />
                            <br />
                            2.2 Registration: In order to use many aspects of the Services, Customer must first complete a registration process via the Website. Customer agrees: (a) to provide accurate, current and complete information about their company and Customer's position within that company, including but not limited to a valid email address, and their full legal name, as part of the registration process ("Registration Data"); (b) to maintain the security of Customer's password(s); (c) to maintain and promptly update the Registration Data, and any other information provided to Company, and to keep it accurate, current and complete; (d) that Customer is responsible for maintaining the security of Customer’s account and safeguarding password(s); and (e) that Customer will be fully responsible for any activities or transactions that take place using their account(s) or password(s), even if they were not aware of them. Customer must notify Company immediately of any breach of security or unauthorized use of Customer's account. Although Company will not be liable for Customer’s losses caused by any unauthorized use of Customer’s account, Customer may be liable for the losses of Company or others due to such unauthorized use.
                            <br />
                            <br />
                            2.3 Access to the Services: Subject to these Terms and Conditions and registration criteria, Company hereby grants to Customer a limited non-exclusive, non-transferable, non-sublicensable, revocable right to: (i) access and use the Services, including but not limited to the Platform, the Website, APIs and associated documentation and software, solely in conjunction with Customer's own internal activities to which the Services relate or apply; and (ii) access and use any data or reports that Company provides or make available to you as part of your access and use of the Services solely in conjunction with your use of the Services.
                            <br />
                            <br />
                            2.4 Duration: For NES Global Visibility Services, Customer will be able to access www.nesglobal.in pursuant to the Service/proposal Plan (defined below) for which it has subscribed. For all other Services, Customers will be able to access such Services for the period such Services are utilized or as otherwise communicated by Company.
                            <br />
                            <br />
                            2.5 Users: Each User account is valid for one User only and may not be shared concurrently or otherwise by or among multiple Users. Customer may harvest and/or reassign User accounts to new Users within its organization. Users of the Services are limited solely to Customer's employees or their suppliers.
                            <br />
                            <br />
                            2.6 Use Limitations: Modification, reverse engineering, reverse compiling, disassembly of or creation of derivative works incorporating the Services, or any portion or component thereof is expressly prohibited. Except as expressly authorized by these Terms and Conditions, Customer and its Users shall not unbundle, sublicense, assign, transfer, display, distribute, rent, resell or lease the Services or any portion or component thereof to any third party. Furthermore, Customer may not (a) use the Services to store or transmit any viruses, software routiNES, or other code designed to permit anyone to access in an unauthorized manner, disable, erase or otherwise harm software, hardware, or data, or to perform any other harmful actions; (b) build a competitive product or service, or copy any features or functions of the Services (including, without limitation, the look-and-feel of the Services); (c) interfere with or disrupt the integrity or performance of the Services; (d) disclose to any third-party any performance information or analysis relating to the Services; (e) remove, alter or obscure any proprietary notices in or on the Services, including copyright notices; (f) use the Services or any product thereof for any illegal or unauthorized purpose, or in a manner which violates any laws or regulations in Customer's jurisdiction; (g) reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, object code, or underlying structure, ideas, or algorithms that make up the Services or any software, documentation, or data relating to the Services, except to the limited extent that applicable law prohibits such a restriction; (h) to monitor the Services’ availability, performance or functionality, or for any other benchmarking or competitive purposes; or (i) cause or permit any third party to do any of the foregoing.
                            <br />
                            <br />
                            2.7 Right to terminate usage: Company reserves the right to deny or revoke access to the Services, or any part thereof, or to otherwise terminate a Customer’s access to the Services, at any time at our sole discretion, with or without cause and without notice to Customer subject to these Terms and Conditions.
                            <br />
                            <br />
                            2.8 Access after termination of the Services: For Customers of Company’s freight services, Customer will be granted access to the Platform for at least one year after the last shipment has been completed in the event Customer chooses to cease using Company's freight services. 
                            <br />
                            <br />
                            2.9 Third-party vendors: Customer understands that Company uses third-party vendors and hosting service providers or partners to provide the necessary hardware, software, networking, storage, and related technology required to provide the Services, and customer agrees that Company is not and will not be liable or responsible for the acts or omissions of such third-party vendors or hosting service providers or partners.
                            <br />
                            <br />
                            2.10 Electronic communication: By using the Services, Customer consents to receive electronic communication from Company for all purposes, including but not limited to logistical and marketing purposes.
                            <br />
                            <br />
                            3. NES GLOBAL VISIBILITY SERVICES
                            <br />
                            <br />
                            3.1 NES GLOBAL Visibility Services. If Customer subscribes to NES Global Visibility Services, such services will be made available by Company in its sole discretion or based on the usage level specified in Customer's specific subscription plan, if any. Customer agrees to pay the amount due for each payment or subscription period. Current pricing will be communicated by Company, as set forth at www.nesglobal.in or in other agreements that Company enters into with Customer (“Service Plan”). By using or subscribing to the NES Global Visibility Services, Customer is responsible for all fees due for the entire subscription period, even if Customer cancels the subscription prior to the end of the subscription period. Payment is due at the commencement of the subscription period.
                            <br />
                            <br />
                            3.2 During the subscription period and subject to Customer’s compliance with these Terms, Customer will have a limited right to access and use the NES Global Visibility Services consistent with the Service Plan(s) subscribed to, together with any and all other applicable services offered thereunder for Customer’s internal busiNESs purposes only.
                            <br />
                            <br />
                            4. USER CONTENT AND OWNERSHIP
                            <br />
                            <br />
                            4.1 Customer retains ownership rights to their registration data, user logs, configuration settings and any other data contributed by Customer in connection with the Services ("User Content"). By making available any User Content through the Services, Customer hereby grants to Company a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license, with the right to use, copy, adapt, modify, and otherwise process User Content for the purposes of providing and improving the Services for all Company users. Company does not generally view or disclose Customer's User Content. Occasionally Company may need to view User Content in connection with servicing the Website. Company may also perform statistical analyses on User Content in connection with developing or optimizing our Services. The use thereof is further explained in our privacy policy.
                            <br />
                            <br />
                            4.2 Company will only disclose User Content to its employees, contractors, and affiliated organizations that (i) need to know that information in order to process it on Company's behalf or to provide the Services, and (ii) that have agreed not to disclose it to others and with whom we have contracts in place governing our relationship. Other than to its employees, contractors, and affiliated organizations, as described above, Company discloses User Content only when required to do so by law, or when Company believes in good faith that disclosure is reasonably necessary to protect the property or rights of Company, third parties, or the public at large.
                            <br />
                            <br />
                            4.3 Company does not claim any ownership rights in any such User Content and nothing in these Terms and Conditions will be deemed to restrict any rights that Customer may have to use and exploit Customer's User Content. Customer is aware that Customer is solely responsible for all User Content that Customer makes available through the Services, and that that data abides by all applicable laws. Company does not have any obligation to review or scan any User Content for any purpose, including without limitation for measuring quality, filtering content, or detecting the presence of malware. Company makes no representations regarding the compliance of any User Content with any applicable laws or regulations.
                            <br />
                            <br />
                            4.4 By submitting or uploading User Content to the Services, Customer grants Company a worldwide, royalty-free, and non-exclusive license (i) to use, reproduce, modify, adapt and publish that User Content for the purpose of providing the Services to Customer; and (ii) to create aggregations and summaries of the User Content or portions thereof and to use, disclose, and distribute such aggregations for any purpose (both during the period that these Terms and Conditions are in effect, and thereafter), provided that such aggregations and summaries do not directly or indirectly identify Customer.
                            <br />
                            <br />
                            4.5 Notwithstanding the foregoing, Customer may also disclose to Company certain User Content, including without limitation feedback and comments, via Company's Services ("User Proposals"). By submitting User Proposals to Company, Customer hereby grants to Company a royalty-free, irrevocable, perpetual, non-exclusive, unrestricted, worldwide license to use, copy, adapt, modify, sublicense, transmit, distribute, display, sell, transfer, incorporate into Company's products or services, create derivative works from, or otherwise exploit any such User Proposals without any compensation to Customer. Further, Customer warrants that any User Proposals are not subject to any license terms that would purport to require Company to comply with any additional obligations with respect to any Company current or future products, technologies, or services that incorporate any User Proposals.
                            <br />
                            <br />
                            4.6 Customer acknowledges that by submitting or uploading User Content to the Services, such as by filing an exception or posting a comment in a message thread relating to a shipment, Customer is making such User Content to be visible to authorized third parties having access to such data.
                            <br />
                            <br />
                            4.7 In the event Customer requests from Company to remove their User Content, Company will do so taking into account its administrative obligations under law. The retention period for custom information and associated documentation in IND is respectively seven (7) years.
                            NES GLOBAL5. INTELLECTUAL PROPERTY & TRADEMARKS
                            <br />
                            <br />
                            5.1 Company owns all rights, title and interest in and to the Services, and all Intellectual Property Rights therein. The look and feel of the Services, including but not limited to any custom graphics, button icons, and scripts are also the property of Company, and Customer may not copy, imitate, or use them, in whole or in part, without Company's prior written consent. Company reserves all rights not expressly granted to Customer in these Terms and Conditions, and Company does not grant any licenses to Customer or to any other party under these Terms and Conditions, whether by implication, estoppel or otherwise, except as expressly set forth herein.
                            <br />
                            <br />
                            5.2 Customer acknowledges and agrees that any Company names, trademarks, service marks, logos, trade dress, or other branding included on the Website or as part of the Services are owned by Company, unless otherwise noted, and may not be copied, imitated, or used (in whole or in part) without Company's prior written consent. All other trademarks, names, or logos referenced on the Website or the Services as "Third-Party Trademarks" are the property of their respective owners, and the use of such Third-Party Trademarks inures to the benefit of their respective owners.
                            <br />
                            <br />
                            6. SERVICE GUARANTEES
                            <br />
                            <br />
                            6.1 Availability: Company will use commercially reasonable efforts to make the Services available 24 hours a day, 7 days a week, except for planned downtime and unforeseen circumstances as mentioned in 7.2.
                            <br />
                            <br />
                            6.2 Defects: Company represents and warrants that, to its knowledge, the Services are free from any material defects. In the event of discovery of any defect, Customer agrees to provide Company with sufficient detail to allow Company to verify and reproduce the error, and Company shall use commercially reasonable diligence to endeavor to correct such defect.
                            <br />
                            <br />
                            6.3 Prevention: With the use of multiple data centers Company ensures to minimize the risk of full server outage. Furthermore, regular backups are made to prevent data loss.
                            <br />
                            <br />
                            6.4 Continuity of Freight Services: In the event of a software system failure, Company will ensure that the freight services offered will be executed by the operational team regardless of any limitations this may entail. Continuity of the freight services will be safeguarded as usage of the Platform is not mandatory to fulfill Company's logistical obligations.
                            <br />
                            <br />
                            6.5 Security: Company will implement and maintain appropriate technical and organizational measures to protect User Content against accidental or unlawful destruction, loss, alteration, unauthorized disclosure or access ("Security Measures"). These Security Measures will have regard to the state of the art, the costs of implementation and nature, scope, context and purposes of the processing of data, as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons.
                            <br />
                            <br />
                            7. LIMITATIONS ON SERVICES
                            <br />
                            <br />
                            7.1 Condition of Software: The Services are offered "as is". As such, Company will not enter into quantified key performance indicators on uptime, availability, security, and the like. Company is open to improvement suggestions but will make improvements as it deems fit.
                            <br />
                            <br />
                            7.2 Accessibility: Customer understands and agrees that from time to time the Services may be inaccessible or inoperable during normal busiNESs hours in the event of periodic maintenance procedures or repairs. Company will not be liable for failure to provide access to the Services during periodic maintenance procedures or repairs, due to any emergency maintenance, any catastrophic system failure, any failures of Customer's equipment or systems, or due to any other actions or inactions outside the control of Company.
                            <br />
                            <br />
                            8. EXPORT COMPLIANCE
                            <br />
                            <br />
                            The Services, Company Software, and Documentation may be subject to export laws and regulations of the Republic of India and other jurisdictions, and any use or transfer of the Services, Company Software, and Documentation must be permitted under these laws and regulations. Each party represents that it is not named on any U.S. government or EU denied-party list. Customer shall not enable use of the Services in a U.S. or EU-embargoed country (currently Cuba, Iran, North Korea, Sudan, Crimea -- Region of Ukraine, Libya or Syria) or in violation of any U.S. and EU export law or regulation.
                            <br />
                            <br />
                            9. DISCLAIMER
                            <br />
                            <br />
                            CUSTOMER ACKNOWLEDGES THAT THE WEBSITE AND THE SERVICES ARE PROVIDED ON AN "AS IS", "AS AVAILABLE" BASIS, WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AND THAT YOUR USE OF THE WEBSITE AND THE SERVICES IS AT YOUR SOLE RISK. COMPANY DOES NOT WARRANT: (I) THAT THE WEBSITE OR THE SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS, (II) THAT THE WEBSITE OR THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE, (IV) THAT THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL THAT CUSTOMER OBTAINS THROUGH THE WEBSITE OR THE SERVICES WILL MEET CUSTOMER'S EXPECTATIONS, OR (V) THAT ANY ERRORS IN THE WEBSITE OR THE SERVICES WILL BE CORRECTED. COMPANY SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                            <br />
                            <br />
                            10. WARRANTIES
                            <br />
                            <br />
                            Non-Infringement: Company warrants that Company owns the Software and any software included in the Services, including all associated Intellectual Property Rights, or otherwise has the right to grant Customer the rights for usage. Company warrants that, to its knowledge, the Services do not infringe any valid and issued patent, copyright, trademarks, trade secret, or other proprietary rights of any third parties.
                            <br />
                            <br />
                            11. INDEMNIFICATION OF INTELLECTUAL PROPERTY
                            <br />
                            <br />
                            11.1 Indemnification by Company: Company shall defend, indemnify and hold harmless Customer and its officers, directors, employees, agents, and representatives from and against any action, cause, claim, damage, debt, demand, or liability, including reasonable costs and attorney's fees, asserted by any third party alleging infringement by the Services of any valid and issued patent, copyright, trademark or trade secret of such third-party.
                            <br />
                            <br />
                            11.2 Indemnification by Customer: To the fullest extent possible by applicable laws Customer shall defend, indemnify and hold harmless Company and its subsidiaries, officers, employees, agents, and representatives from and against any action, cause, claim, damage, debt, demand, or liability, including reasonable costs and attorney's fees, asserted by any third party arising out of or relating to: (a) these Terms and Conditions or Customer's representations, warranties or obligations hereunder; (b) Customer's and its Users' use of the Services, including any User Content or data; (c) any unacceptable use of the Services by Customer or its Users or through its Users' accounts, including, without limitation, any User Content or any statement, data or content made, transmitted or republished by Customer or its Users which is prohibited under applicable law or by these Terms and Conditions; (d) any intentional or negligent act or omission of Customer or its Users; or (e) Customer's or its Users' violation of any third-party rights, including, without limitation, any intellectual property or privacy right.
                            <br />
                            <br />
                            12. LIMITATION OF LIABILITY
                            <br />
                            <br />
                            12.1 In no event will Company be liable to Customer or to any third party for any loss of profits (whether considered direct or indirect), loss of use, loss of revenue, loss of goodwill, interruption of busiNESs, loss of data, or any indirect, special, incidental, exemplary, punitive, or consequential damages of any kind arising out of, or in connection with these Terms and Conditions or Customer's use (or inability to use) any part of the Website or Services, whether in contract, tort, strict liability or otherwise, even if Customer has been advised or is otherwise aware of the possibility of such damages.
                            <br />
                            <br />
                            12.2 In the event that a claim arises from activities relating to the Services including the NES Global Visibility Services, and to the extent that Section 9 above, Section 12.1 above, and/or any other applicable limitation of liability in the Company’s Terms and Conditions is, for any reason, determined to be unenforceable or inapplicable, the Company’s liability shall be limited to either the lesser of the fees Customer paid to Company for such services and INR 1000 per occurrence, with an absolute per annum cap of  INR10,000 (regardless of the number of occurrences) if the Customer was receiving such services on a paying subscription basis; or INR1000.00 maximum per annum, regardless of the number of occurrences, if the Customer was not receiving such services on a paying subscription basis.
                            <br />
                            <br />
                            13. LINKS TO THIRD-PARTY WEBSITES OR RESOURCES
                            <br />
                            <br />
                            The Services may contain links to third-party websites or resources. Company provides these links only as a convenience and is not responsible for the content, products or services on or available from those websites or resources or links displayed on such websites. Customer acknowledges sole responsibility for, and assumes all risk arising from, Customer’s use of any third-party websites or resources.
                            <br />
                            <br />
                            14. CHANGES TO TERMS AND CONDITIONS
                            <br />
                            <br />
                            14.1 Company reserves the right to change or modify these Terms and Conditions, or any of our other policies or guideliNES, at any time. Company will provide notice by posting the updated Terms and Conditions on Company’s Website and revising the date at the bottom of these Terms and Conditions. Any changes or modifications will be effective from the day these Terms and Conditions have been published at www.nesglobal.in/terms. Customer acknowledges that Customer's continued use of the Services following such notice constitutes acceptance of the modified Terms and Conditions.
                            <br />
                            <br />
                            14.2 Company reserves the right at any time, and without notice or liability to Customer to modify the Services, or any part of them, temporarily or permanently. Company may modify the Services for a variety of reasons, including, without limitation, for the purpose of providing new features, implementing new protocols, maintaining compatibility with emerging standards, or complying with regulatory requirements.
                            <br />
                            <br />
                            15. PRIVACY POLICY
                            <br />
                            <br />
                            Company will process all personal information in accordance with its privacy policy available at <Link to={"/Privacy"}>https://www.nesglobal.in/privacy/</Link>. By using the Services, Customer consents to Company's collection, use, and disclosure of information as set forth in Company's privacy policy. Company may update that policy from time to time.
                            <br />
                            <br />
                            16. GOVERNING LAW
                            <br />
                            <br />
                            These Terms and Conditions shall be governed by and construed in accordance with the controlling laws of India, if Customer is domiciled anywhere else, in each case excluding rules governing conflict of law and choice of law. The courts in India, shall have exclusive jurisdiction to adjudicate any dispute arising out of these Terms and Conditions then the state courts within Mumbai, Maharashtra shall have exclusive jurisdiction to adjudicate any dispute arising out of these Terms and Conditions. Each party hereto expressly consents to the personal jurisdiction of, and venue in, such courts and service of process being effected upon it by registered mail sent to the address provided by such party under these Terms and Conditions.  The parties agree that the UN Convention on Contracts for the International Sale of Goods (Vienna, 1980) and the Uniform Computer Information Transaction Act or similar federal or state laws or regulations shall not apply to these Terms and Conditions nor to any dispute or transaction arising out of these Terms and Conditions.
                            <br />
                            <br />
                            17. LIMITATIONS ON SERVICES AND THIRD-PARTY RELATIONSHIPS.
                            <br />
                            <br />
                            Company is not a party to any relationships or agreements between Customer and any third parties for the performance of any duties between the Customer and such third parties, and does not have control over and disclaims all liability for the quality, timing, legality, failure to provide, or any other aspect whatsoever of any professional duties performed or promised by Customer or such third parties.
                            <br />
                            <br />
                            18. GENERAL
                            <br />
                            <br />
                            18.1 No Waiver. The failure of Company to exercise or enforce any right or provision of these Terms and Conditions shall not constitute a waiver of such right or provision and shall not guarantee that Company will repeat any such actions in the future.
                            <br />
                            <br />
                            18.2 Severability. If any provision of these Terms and Conditions is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give appropriately valid effect to the intention of these Terms and Conditions as reflected in the provision, and the other provisions of these Terms and Conditions shall remain in full force and effect.
                            <br />
                            <br />
                            18.3 Assignment. This Agreement and any rights granted to Customer under these Terms and Conditions may not be transferred or assigned by Customer, in whole or in part, whether voluntarily, by operation of law, or otherwise, without our prior written consent and any such attempted assignment or transfer shall be null and void. Subject to the foregoing, these Terms and Conditions will ensure to the benefit of and be binding upon the respective successors and permitted assigns of Customer and Company. These Terms and Conditions may be assigned or novated by Company at Company’s sole discretion.

                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
