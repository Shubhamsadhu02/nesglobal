import React from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'

export default function Refund() {
    return (
        <>
            <Header showNav={true} />
            <section>
                <div className="container mt-15 mb-15">
                    <div className="terms-heading">
                        <h1>NES Global Refund Policy</h1>
                    </div>
                    <div className="terms-paragrapgh">
                        <p style={{ color: "#737171" }}>
                            1. All shipments are subject to a cancellation fee of 25% of the invoice with a minimum of $250 in
                            total. Refunds can take up to 30 days from the date the request is received.
                            <br />
                            <br />
                            2. All shipments are subject to a cancellation fee of 25% of the invoice with a minimum of $250 in
                            total. Refunds can take up to 30 days from the date the request is received.
                            <br />
                            <br />
                            3. After a freight carrier has processed a shipment and the shipment cannot be returned to the
                            shipper, i.e. cargo is on the way to the destination: consolidated in the container, entered in an
                            international ocean carrier’s container yard or pier to be loaded aboard a vessel, etc., a refund
                            cannot be provided.
                            <br />
                            <br />
                            4. Missing scheduled cut off (latest delivery)/pickup day: If cargo has not delivered to a ship terminal
                            on the intended delivery day as requested by customer at a time of booking, then we will roll the
                            shipment over to the next available vessel without additional notice. Roll over fee may apply on each
                            roll over: <br/>
                            <br/>
                            <ul style={{marginLeft: "20px"}}>
                                <li style={{listStyle: "initial"}}>LCL shipments: $25 per roll over. Does not apply on the 1st and 2nd roll over. Begins from the 3rd
                                    roll over. Attempt pickup fee (if pickup requested) may apply.
                                </li>
                                <li style={{listStyle: "initial"}}>FCL, Cars, RO-RO and Break Bulk roll over charges will be calculated on case-by-case scenario
                                    depending on carriers roll over charge and circumstances of particular shipment.</li>
                            </ul>
                            <br />
                            5. All credit card refunds are subject to 3.79% or $10 minimum, whichever is greater transaction fee
                            on the refund amount.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
