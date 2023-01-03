import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'

const Termsofuse = () => {
    return (
        <Fragment>
            <MetaData title={"Term & Condition"} />
            <div className="term-page">
                <h1>Terms & Conditions</h1>
                <p>Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash and turning them into new products. Recycling can benefit your community, the economy and the environment.
                </p>
                <p>EPA data show that recycling conserves energy and natural resources. For example:</p>
                <ul>
                    <li><p>Recycling one ton of office paper can save the energy equivalent of consuming 322 gallons of gasoline.</p></li>
                    <li><p>Recycling just one ton of aluminum cans conserves more than 152 million Btu, the equivalent of 1,024 gallons of gasoline or 21 barrels of oil consumed.</p></li>
                    <li><p>Plastic bottles are the most recycled plastic product in the United States as of 2018, according to our most recent report. Recycling just 10 plastic bottles saves enough energy to power a laptop for more than 25 hours.</p></li>
                </ul>
                <p>When we make new products out of virgin materials, we expend energy to extract and process those materials. This includes burning fossil fuels. However, if we manufacture products using recycled materials, we reduce the need for virgin materials and save the energy required to extract and process them.</p>
                <p>To estimate how much energy you can save by recycling certain products, EPA has developed a tool called the individual Waste Reduction Model (iWARM). This tool calculates how much energy you save by recycling aluminum cans, glass or plastic bottles, magazines or plastic grocery bags, and shows you how long those savings could power different electrical appliances.</p>
                <p>The most effective way to reduce waste, and the most environmentally preferred strategy, is to not create it in the first place. Source reduction, along with material reuse, are the most functional ways to save natural resources, protect the environment and save money. Making a new product requires a lot of materials and energy, from extracting raw materials to fabricating the product to transporting it to the place of purchase. Check out EPA tips for reducing and reusing, and donation.  </p>
                <p>Please contact your local county or municipality to determine your local recycling options. Additionally, please check out the I Want To Be Recycledwebsite for more information.</p>
                <p>Putting items in the recycling bin that can’t be recycled can contaminate the recycling stream. After these unrecyclable items arrive at recycling centers, they can cause costly damage to the equipment. Additionally, after arriving at recycling centers, they must be sorted out and then sent to landfills, which raises costs for the facility. That is why it is important to check with your local recycling provider to ensure that they will accept certain items before placing them into a bin. Some items may also be accepted at retail locations or other at local recycling centers.
                </p>
                <p>Furthermore, some recycling providers require different types of materials to be collected in separate bins (multi-stream recycling), whereas other providers may accept different types of materials that are put together in the same bin (single-stream recycling).</p>
                <p>Your local recycling facility might not accept all recyclable items. This is especially true with plastics. While plastic bottles are the most commonly recycled plastic products, other plastics may or may not be accepted in your area, so first check what your local recycling provider accepts. It is important to understand that the existence of a plastic resin code on the product does not guarantee that the product is recyclable in your area. Additionally, glass may not be accepted in some areas, so please confirm with your local provider.</p>
            </div>
        </Fragment>
    )
}

export default Termsofuse
