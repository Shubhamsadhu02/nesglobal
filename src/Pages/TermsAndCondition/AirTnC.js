import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Partials/Header'

export default function AirTnC() {
    return (
        <>

            <Header />

            <section>
                <div className="container mt-15 mb-15" >
                    {/* <div className="termsdate mb-3">
                        <h3 style={{ color: "#737171" }}>Revised: 4-04-2022</h3>
                    </div> */}
                    <div className="terms-heading">
                        <h1>NES Global International Air Waybill Terms &amp; Conditions</h1>
                    </div>
                    <div className="terms-paragrapgh">
                        <p style={{ color: "#737171" }}>
                            By requesting or accepting goods or services from NES Global Solutions., and/or its subsidiaries and affiliates (collectively, “NES Global”), the Customer agrees to the following terms and conditions of service (“Terms and Conditions”).
                            <br />
                            <br />
                            NES Global may from time to time change these Terms and Conditions. Any changes are effective immediately upon publication on our website at <Link to='/terms'><span style={{ color: "#0060BE", fontWeight: "500" }}>www.nesglobal.in/terms</span></Link>.
                            <br />
                            <br />
                            NES Global Privacy Policy: <Link to='/Privacy'><span style={{ color: "#0060BE", fontWeight: "500" }}>www.nesglobal.in/privacy</span></Link>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="terms-subheading mt-3">
                                <h3 style={{ color: "#403F3E" }}>NOTICE CONCERNING CARRIER’S LIMITATION OF LIABILITY</h3>
                            </div>
                            <br />
                            <br />
                            If the carriage involves an ultimate destination or stops in a country other than the country of departure, the Montreal Convention or the Warsaw Convention may be applicable to the liability of the Carrier in respect of loss of, damage or delay to cargo. Carrier's limitation of liability in accordance with those Conventions shall be as set forth in subparagraph 4 unless a higher value is declared.
                            <br />
                            <br />
                            <div className="terms-subheading mt-3">
                                <h3 style={{ color: "#403F3E" }}>CONDITIONS OF CONTRACT</h3>
                            </div>
                            <br />
                            <br />
                            1. In this contract and the Notices appearing hereon:
                            <br />
                            <br />
                            CARRIER includes the air carrier issuing this air waybill and all carriers that carry or undertake to carry the cargo or perform any other services related to such carriage.
                            <br />
                            <br />
                            SPECIAL DRAWING RIGHT (SDR) is a Special Drawing Right as defined by the International Monetary Fund.
                            <br />
                            <br />
                            WARSAW CONVENTION means whichever of the following instruments is applicable to the contract of carriage:
                            <br />
                            <br />
                            the Convention for the Unification of Certain Rules Relating to International Carriage by Air, signed at Warsaw, 12 October 1929;
                            <br />
                            <br />
                            that Convention as amended at The Hague on 28 September 1955;
                            <br />
                            <br />
                            that Convention as amended at The Hague 1955 and by Montreal Protocol No. 1, 2, or 4 (1975) as the case may be.
                            <br />
                            <br />
                            MONTREAL CONVENTION means the Convention for the Unification of Certain Rules for International Carriage by Air, done at Montreal on 28 May 1999.
                            <br />
                            <br />
                            2./2.1 Carriage is subject to the rules relating to liability established by the Warsaw Convention or the Montreal Convention unless such carriage is not “international carriage” as defined by the applicable Conventions.
                            <br />
                            <br />
                            2.2 To the extent not in conflict with the foregoing, carriage and other related services performed by each Carrier are subject to:
                            <br />
                            <br />
                            2.2.1 applicable laws and government regulations;
                            <br />
                            <br />
                            2.2.2 provisions contained in the air waybill, Carrier’s conditions of carriage and related rules, regulations, and timetables (but not the times of departure and arrival stated therein) and applicable tariffs of such Carrier, which are made part hereof, and which may be inspected at any airports or other cargo sales offices from which it operates regular services. When carriage is to/from the USA, the shipper and the consignee are entitled, upon request, to receive a free copy of the Carrier’s conditions of carriage. The Carrier’s conditions of carriage include, but are not limited to:
                            <br />
                            <br />
                            2.2.2.1 limits on the Carrier’s liability for loss, damage or delay of goods, including fragile or perishable goods;
                            <br />
                            <br />
                            2.2.2.2 claims restrictions, including time periods within which shippers or consignees must file a claim or bring an action against the Carrier for its acts or omissions, or those of its agents;
                            <br />
                            <br />
                            2.2.2.3 rights, if any, of the Carrier to change the terms of the contract;
                            <br />
                            <br />
                            2.2.2.4 rules about Carrier’s right to refuse to carry;
                            <br />
                            <br />
                            2.2.2.5 rights of the Carrier and limitations concerning delay or failure to perform service, including schedule changes, substitution of alternate Carrier or aircraft and rerouting.
                            <br />
                            <br />
                            3. The agreed to stop places (which may be altered by Carrier in case of necessity) are those places, except the place of departure and place of destination, set forth on the face hereof or shown in Carrier’s timetables as scheduled stopping places for the route. Carriage to be performed hereunder by several successive Carriers is regarded as a single operation.
                            <br />
                            <br />
                            4. For carriage to which the Montreal Convention does not apply, Carrier’s liability limitation for cargo lost, damaged or delayed shall be 22 SDRs per kilogram unless a greater per kilogram monetary limit is provided in any applicable Convention or in Carrier’s tariffs or general conditions of carriage.
                            <br />
                            <br />
                            5./5.1 Except when the Carrier has extended credit to the consignee without the written consent of the shipper, the shipper guarantees payment of all charges for the carriage due in accordance with Carrier’s tariff, conditions of carriage and related regulations, applicable laws (including national laws implementing the Warsaw Convention and the Montreal Convention), government regulations, orders and requirements.
                            <br />
                            <br />
                            5.2 When no part of the consignment is delivered, a claim with respect to such consignment will be considered even though transportation charges thereon are unpaid.
                            <br />
                            <br />
                            6./6.1 For cargo accepted for carriage, the Warsaw Convention and the Montreal Convention permit shipper to increase the limitation of liability by declaring a higher value for carriage and paying a supplemental charge if required.
                            <br />
                            <br />
                            6.2 In carriage to which neither the Warsaw Convention nor the Montreal Convention applies Carrier shall, in accordance with the procedures set forth in its general conditions of carriage and applicable tariffs, permit shipper to increase the limitation of liability by declaring a higher value for carriage and paying a supplemental charge if so required.
                            <br />
                            <br />
                            7./7.1 In cases of loss of, damage or delay to part of the cargo, the weight to be taken into account in determining Carrier’s limit of liability shall be only the weight of the package or packages concerned.
                            <br />
                            <br />
                            7.2 Notwithstanding any other provisions, for “foreign air transportation” as defined by the U.S. Transportation Code:
                            <br />
                            <br />
                            7.2.1 in the case of loss of, damage or delay to a shipment, the weight to be used in determining Carrier’s limit of liability shall be the weight which is used to determine the charge for carriage of such shipment; and
                            <br />
                            <br />
                            7.2.2 in the case of loss of, damage or delay to a part of a shipment, the shipment weight in
                            <br />
                            <br />
                            7.2.1 shall be prorated to the packages covered by the same air waybill whose value is affected by the loss, damage or delay. The weight applicable in the case of loss or damage to one or more articles in a package shall be the weight of the entire package.
                            <br />
                            <br />
                            8. Any exclusion or limitation of liability applicable to Carrier shall apply to Carrier’s agents, employees, and representatives and to any person whose aircraft or equipment is used by Carrier for carriage and such person’s agents, employees and representatives.
                            <br />
                            <br />
                            9. Carrier undertakes to complete the carriage with reasonable dispatch. Where permitted by applicable laws, tariffs and government regulations, Carrier may use alternative carriers, aircraft or modes of transport without notice but with due regard to the interests of the shipper. Carrier is authorized by the shipper to select the routing and all intermediate stopping places that it deems appropriate or to change or deviate from the routing shown on the face hereof.
                            <br />
                            <br />
                            10. Receipt by the person entitled to delivery of the cargo without complaint shall be prima facie evidence that the cargo has been delivered in good condition and in accordance with the contract of carriage.
                            <br />
                            <br />
                            10.1 In the case of loss of, damage or delay to cargo a written complaint must be made to Carrier by the person entitled to delivery. Such complaint must be made:
                            <br />
                            <br />
                            10.1.1 in the case of damage to the cargo, immediately after discovery of the damage and at the latest within 14 days from the date of receipt of the cargo;
                            <br />
                            <br />
                            10.1.2 in the case of delay, within 21 days from the date on which the cargo was placed at the disposal of the person entitled to delivery.
                            <br />
                            <br />
                            10.1.3 in the case of non-delivery of the cargo, within 120 days from the date of issue of the air waybill, or if an air waybill has not been issued, within 120 days from the date of receipt of the cargo for transportation by the Carrier.
                            <br />
                            <br />
                            10.2 Such complaint may be made to the Carrier whose air waybill was used, or to the first Carrier or to the last Carrier or to the Carrier, which performed the carriage during which the loss, damage or delay took place.
                            <br />
                            <br />
                            10.3 Unless a written complaint is made within the time limits specified in 10.1 no action may be brought against Carrier.
                            <br />
                            <br />
                            10.4 Any rights to damages against Carrier shall be extinguished unless an action is brought within two years from the date of arrival at the destination, or from the date on which the aircraft ought to have arrived, or from the date on which the carriage stopped.
                            <br />
                            <br />
                            11. Shipper shall comply with all applicable laws and government regulations of any country to or from which the cargo may be carried, including those relating to the packing, carriage or delivery of the cargo, and shall furnish such information and attach such documents to the air waybill as may be necessary to comply with such laws and regulations. Carrier is not liable to shipper and shipper shall indemnify Carrier for loss or expense due to shipper’s failure to comply with this provision.
                            <br />
                            <br />
                            12. No agent, employee or representative of Carrier has authority to alter, modify or waive any provisions of this contract.

                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}
