<order_v3 translate="title" module="api2">
                <group>sales</group>
                <sort_order>100</sort_order>
                <model>sales/api2_order</model>
                <title>Orders V3 (Async/Sync)</title>
                <privileges>
                    <admin>
                        <retrieve>1</retrieve>
                    </admin>
                    <guest>
                        <create>1</create>
                        <retrieve>1</retrieve>
                    </guest>
                    <customer>
                        <create>1</create>
                        <delete>1</delete>
                        <retrieve>1</retrieve>
                    </customer>
                    <admin>
                        <retrieve>1</retrieve>
                    </admin>
                </privileges>
                <routes>
                    <route_entity>
                        <route>/order/:id</route>
                        <action_type>entity</action_type>
                    </route_entity>
                    <route_entity_orders>
                        <route>/orders/:id</route>
                        <action_type>entity</action_type>
                    </route_entity_orders>
                    <route_collection>
                        <route>/order</route>
                        <action_type>collection</action_type>
                    </route_collection>
                    <route_collection_orders>
                        <route>/orders</route>
                        <action_type>collection</action_type>
                    </route_collection_orders>
                </routes>
<attributes translate="" module="api2">
                    <increment_id>Order no</increment_id>
                    <payment.po_number>Purchase Order Number</payment.po_number>
                    <created_at>Order Create At</created_at>
                    <address>Address(shipping)</address>
                    <billing>Billing</billing>
                    <refno>Refno</refno>
                    <scheduleOn>Schedule On</scheduleOn>
                    <remarks>Remarks</remarks>
                    <payments>Payments</payments>
                    <products>Products</products>
                    <couponCode>Coupon Code</couponCode>
                    <syncOnly>Sync Only</syncOnly>
<deliveryMode>Delivery Mode</deliveryMode>
                    <egvDeliveryType>Multiple EGV Delivery Type</egvDeliveryType>
                    <orderType>Order Type</orderType>
                    <Id>Order Id</Id>
                    <status>Order Status</status>
                    <date>Order Date</date>
                    <scheduledDate>Scheduled Date</scheduledDate>
                    <extCustomerId>External Customer ID</extCustomerId>
                    <grandTotal>Grand Total</grandTotal>
                    <subTotal>Sub Total</subTotal>
                    <discount>Discount</discount>
                    <totalQty>Total Quantity</totalQty>
                    <shippingCharges>Shipping Charges</shippingCharges>
                    <handlingCharges>Handling Charges</handlingCharges>
                    <products>Products</products>
                    <etaMessage>ETA Message</etaMessage>
                    <successUrl>Success Url</successUrl>
                    <failureUrl>Failure Url</failureUrl>
                    <pendingUrl>Pending Url</pendingUrl>
                    <externallogin_id>External Login Id</externallogin_id>
                    <isConsolidated>Consolidated Order</isConsolidated>
                    <shipment>Shipment Details</shipment>
                    <otp>OTP</otp>
                    <currency>Currency</currency>
                    <payment.cardnumber>Card Number</payment.cardnumber>
                    <state>Order State</state>
                    <ip>Client Ip Address</ip>
                    <store_id>Store Id</store_id>
                    <corporate_id>Corporate Id</corporate_id>
                    <biz.status>Biz Status</biz.status>
                    <orderId>Order Id</orderId>
                    <otpToken>1</otpToken>
                    <cardTypes>Card Types</cardTypes>
                    <createdBy>Created By</createdBy>
                    <corporateDiscount>Corporate Discount</corporateDiscount>
                    <shipments>Shipment</shipments>
                    <tax>Tax</tax>
                    <fullFilledBySeller>Full Filled By Seller</fullFilledBySeller>
                    <consolidatedEmailStatus>Consolidated Email Status</consolidatedEmailStatus>
                    <isMreOrder>Is Mre Order</isMreOrder>
                    <bizApprove>Biz Approve</bizApprove>
                    <order_create_type>Order Create Type</order_create_type>
                    <additionalParams>Additional Parameters</additionalParams>
                    <statusLabel>Status Label</statusLabel>
                    <shipping>Shipping</shipping>
                    <customer_id>Customer ID</customer_id>
<outletName>Outlet Name</outletName>
                    <packaging>Packaging</packaging>
                    <code>Code</code>
                    <extensionParams>Additional Order Params</extensionParams>
                    <payout>Payout</payout>
                    <orderTypeCode>Order Type Code</orderTypeCode>
                    <revalidationToken>Revalidation Token</revalidationToken>
                    <baseCurrency>Base Currency</baseCurrency>
                    <networkCards>Network Cards</networkCards>
                    <orderMode>Order Mode</orderMode>
                    <statusImage>Status Image</statusImage>
                    <statusLevel>Status Level</statusLevel>
                    <customerTimezone>Customer Timezone</customerTimezone>
                    <order_mode>Order Mode</order_mode>
                    <shipping.email>Shipping Email</shipping.email>
                    <shipping.telephone>Shipping Telephone</shipping.telephone>
                </attributes>
                <validators>
                    <fields>
                        <address>
                            <address translate="message" module="api2">
                                <type>JSON_Object</type>
                                <options>
                                    <fields>
                                        <salutation>
                                            <salutation translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>salutation</validationType>
                                                </options>
                                                <message>This is not valid salutation</message>
                                            </salutation>
</salutation>
                                        <firstname>
                                            <required>1</required>
                                            <firstname translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>name</validationType>
                                                </options>
                                                <message>This is not valid firstname</message>
                                            </firstname>
                                        </firstname>
                                        <lastname>
                                            <lastname translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>name</validationType>
                                                </options>
                                                <message>This is not valid lastname</message>
                                            </lastname>
                                        </lastname>
                                        <email>
                                            <email translate="message" module="api2">
                                                <type>WhEmailAddress</type>
                                                <message>This is not valid EmailAddress</message>
                                            </email>
                                        </email>
                                        <telephone>
                                            <telephone translate="message" module="api2">
                                                <type>LibPhoneNumber</type>
                                                <message>This is not a valid telephone number</message>
                                            </telephone>
                                        </telephone>
                                        <line1>
                                            <line1 translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>100</length>
                                                    <validationType>street</validationType>
                                                </options>
                                                <message>This is not valid Street Address</message>
                                            </line1>
                                        </line1>
<line2>
                                            <line2 translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>100</length>
                                                    <validationType>street</validationType>
                                                </options>
                                                <message>This is not valid Street Address</message>
                                            </line2>
                                        </line2>
                                        <city>
                                            <city translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>region</validationType>
                                                </options>
                                                <message>This is not valid city</message>
                                            </city>
                                        </city>
                                        <region>
                                            <region translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>region</validationType>
                                                </options>
                                                <message>This is not valid region</message>
                                            </region>
                                        </region>
                                        <country>
                                            <required>1</required>
                                            <country translate="message" module="api2">
                                                <type>Db_RecordExists</type>
                                                <options>
                                                    <table>directory_country</table>
                                                    <field>country_id</field>
                                                </options>
                                            </country>
</country>
                                        <postcode>
                                            <postcode translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>20</length>
                                                    <validationType>pincode</validationType>
                                                </options>
                                                <message>This is not valid Postcode</message>
                                            </postcode>
                                        </postcode>
                                        <company>
                                            <company translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>200</length>
                                                    <validationType>company</validationType>
                                                </options>
                                                <message>This is not valid company name</message>
                                            </company>
                                        </company>
                                        <billToThis>
                                            <billToThis translate="message" module="api2">
                                               <type>Boolean</type>
                                                <message>This is not valid Boolean value</message>
                                            </billToThis>
                                        </billToThis>
                                        <company_name/>
                                        <gstn>
                                            <gstn translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>85</length>
                                                    <validationType>gstn</validationType>
                                                </options>
                                                <message>This is not a valid Shipping GSTN</message>
                                            </gstn>
                                        </gstn>
<code>
                                            <code translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>100</length>
                                                    <validationType>code</validationType>
                                                </options>
                                                <message>This is not valid Code</message>
                                            </code>
                                        </code>
                                    </fields>
                                </options>
                            </address>
                        </address>
                        <billing>
                            <billing translate="message" module="api2">
                                <type>JSON_Object</type>
                                <options>
                                    <fields>
                                        <salutation>
                                            <salutation translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>salutation</validationType>
                                                </options>
                                                <message>This is not valid salutation</message>
                                            </salutation>
                                        </salutation>
                                        <firstname>
                                            <required>1</required>
                                            <firstname translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>name</validationType>
                                                </options>
                                                <message>This is not valid name</message>
                                            </firstname>
                                        </firstname>
<lastname>
                                            <lastname translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>name</validationType>
                                                </options>
                                                <message>This is not valid name</message>
                                            </lastname>
                                        </lastname>
                                        <email>
                                            <email translate="message" module="api2">
                                                <type>WhEmailAddress</type>
                                                <message>This is not valid EmailAddress</message>
                                            </email>
                                        </email>
                                        <telephone>
                                            <telephone translate="message" module="api2">
                                                <type>LibPhoneNumber</type>
                                                <message>This is not a valid telephone number</message>
                                            </telephone>
                                        </telephone>
                                        <line1>
                                            <line1 translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>100</length>
                                                    <validationType>street</validationType>
                                                </options>
                                                <message>This is not valid Street Address</message>
                                            </line1>
                                        </line1>
                                        <line2>
                                            <line2 translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>100</length>
                                                    <validationType>street</validationType>
                                                </options>
                                                <message>This is not valid Street Address</message>
                                            </line2>
                                        </line2>
<city>
                                            <city translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>region</validationType>
                                                </options>
                                                <message>This is not valid city</message>
                                            </city>
                                        </city>
                                        <region>
                                            <region translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>50</length>
                                                    <validationType>region</validationType>
                                                </options>
                                                <message>This is not valid region</message>
                                            </region>
                                        </region>
                                        <country>
                                            <required>1</required>
                                            <country translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>2</length>
                                                    <validationType>country_code</validationType>
                                                </options>
                                                <message>This is not valid country</message>
                                            </country>
                                        </country>
                                        <postcode>
                                            <postcode translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>20</length>
                                                    <validationType>pincode</validationType>
                                                </options>
                                                <message>This is not valid Pin Code</message>
                                            </postcode>
                                        </postcode>
<company>
                                            <company translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>200</length>
                                                    <validationType>company</validationType>
                                                </options>
                                                <message>This is not valid company name</message>
                                            </company>
                                        </company>
                                        <gstn>
                                            <gstn translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>85</length>
                                                    <validationType>gstn</validationType>
                                                </options>
                                                <message>This is not a valid Billing GSTN</message>
                                            </gstn>
                                        </gstn>
                                        <code>
                                            <code translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>100</length>
                                                    <validationType>code</validationType>
                                                </options>
                                                <message>This is not valid Code</message>
                                            </code>
                                        </code>
                                    </fields>
                                </options>
                            </billing>
                        </billing>
                        <refno>
                            <required>1</required>
                            <refno translate="message" module="api2">
                                <type>ConfigRegex</type>
                                <options>
                                    <length>55</length>
                                    <validationType>refno</validationType>
                                </options>
                                <message>This is not valid refno</message>
                            </refno>
                        </refno>
<remarks>
                            <remarks translate="message" module="api2">
                                <type>ConfigRegex</type>
                                <options>
                                    <length>250</length>
                                    <validationType>street</validationType>
                                </options>
                                <message>This is not valid Remarks</message>
                            </remarks>
                        </remarks>
                        <payments>
                            <required>1</required>
                            <payments translate="message" module="api2">
                                <type>JSON_Array</type>
                                <options>
                                    <fields>
                                        <code>
                                            <required>1</required>
                                        </code>
                                        <amount>
                                            <required>1</required>
                                            <amount translate="message" module="api2">
                                                <type>Float</type>
                                                <message>This is not valid payment amount</message>
                                            </amount>
                                        </amount>
                                        <poNumber>
                                            <poNumber translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>55</length>
                                                    <validationType>po_number</validationType>
                                                </options>
                                                <message>This is not valid PO number</message>
                                            </poNumber>
                                        </poNumber>
<poDate>
                                            <poDate translate="message" module="api2">
                                                <type>DateTime</type>
                                                <options>
                                                    <min>-365</min>
                                                    <factor>days</factor>
                                                </options>
                                                <message>This is not valid Date</message>
                                            </poDate>
                                        </poDate>
                                        <mode>
                                            <mode translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>140</length>
                                                    <validationType>name</validationType>
                                                </options>
                                                <message>This is not valid Mode</message>
                                            </mode>
                                        </mode>
                                    </fields>
                                </options>
                            </payments>
                        </payments>
                        <deliveryMode>
                            <deliveryMode translate="message" module="api2">
                               <type>Alpha</type>
                                <message>This is not valid delivery mode</message>
                            </deliveryMode>
                        </deliveryMode>
<egvDeliveryType>
                            <egvDeliveryType translate="message" module="api2">
                                <type>Alpha</type>
                                <message>This is not valid EGV Delivery Type</message>
                            </egvDeliveryType>
                        </egvDeliveryType>
                        <ip>
                            <ip translate="message" module="api2">
                                <type>JSON_Object</type>
                                <options>
                                    <fields>
                                        <remote></remote>
                                        <xForwardedFor></xForwardedFor>
                                    </fields>
                                </options>
                            </ip>
                        </ip>
                        <products>
                            <required>1</required>
                             <products translate="message" module="api2">
                                <type>JSON_Array</type>
                                <options>
                                    <fields>
                                        <sku>
                                            <required>1</required>
                                            <sku translate="message" module="api2">
                                                <type>Alnum</type>
                                            </sku>
                                        </sku>
                                        <price>
                                            <price translate="message" module="api2">
                                                <type>Float</type>
                                                <message>This is not valid product price</message>
                                            </price>
                                        </price>
<qty>
                                            <required>1</required>
                                            <qty translate="message" module="api2">
                                               <type>Digits</type>
                                               <message>This is not valid product qty</message>
                                            </qty>
                                        </qty>
                                        <giftMessage>
                                            <giftMessage translate="message" module="api2">
                                                <type>GiftMessage</type>
                                                <options>
                                                    <validationType>gift_message</validationType>
                                                </options>
                                                <message>This is not valid gift message.</message>
                                            </giftMessage>
                                        </giftMessage>
                                        <coBrandImageId>
                                            <coBrandImageId translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>200</length>
                                                    <validationType>co_brand_image_id</validationType>
                                                </options>
                                                <message>This is not a valid Co-Brand Image ID.</message>
                                            </coBrandImageId>
                                        </coBrandImageId>
                                        <cardNumber>
                                            <cardNumber>
                                                <type>Digits</type>
                                                <message>Card Number should be numeric</message>
                                            </cardNumber>
                                        </cardNumber>
<payout>
                                            <payout translate="message" module="api2">
                                                <type>JSON_Object</type>
                                                <options>
                                                    <fields>
                                                        <accountNumber>
                                                            <accountNumber translate="message" module="api2">
                                                                <type>ConfigRegex</type>
                                                                <options>
                                                                    <length>35</length>
                                                                    <validationType>accountNumber</validationType>
                                                                </options>
                                                                <message>This is not a valid account number.</message>
                                                            </accountNumber>
                                                        </accountNumber>
                                                        <ifscCode>
                                                            <ifscCode translate="message" module="api2">
                                                                <type>ConfigRegex</type>
                                                                <options>
                                                                    <length>11</length>
                                                                    <validationType>ifscCode</validationType>
                                                                </options>
                                                                <message>This is not a valid ifsc code.</message>
                                                            </ifscCode>
                                                        </ifscCode>
                                                        <name>
                                                            <name translate="message" module="api2">
                                                                <type>ConfigRegex</type>
                                                                <options>
                                                                    <length>100</length>
                                                                    <validationType>accountHolderName</validationType>
                                                                </options>
                                                                <message>This is not a valid name.</message>
                                                            </name>
                                                        </name>
<telephone>
                                                            <telephone translate="message" module="api2">
                                                                <type>LibPhoneNumber</type>
                                                                <message>This is not a valid telephone number</message>
                                                            </telephone>
                                                        </telephone>
                                                        <email>
                                                            <email translate="message" module="api2">
                                                                <type>WhEmailAddress</type>
                                                                <message>This is not valid EmailAddress</message>
                                                            </email>
                                                        </email>
                                                        <transactionType>
                                                            <transactionType>
                                                                <type>Alpha</type>
                                                                <message>This is not valid transaction type</message>
                                                            </transactionType>
                                                        </transactionType>
                                                        <type>
                                                            <type translate="message" module="api2">
                                                                <type>ConfigRegex</type>
                                                                <options>
                                                                    <length>20</length>
                                                                    <validationType>type</validationType>
                                                                </options>
                                                                <message>This is not valid type</message>
                                                            </type>
                                                        </type>
                                                        <vpa>
                                                            <vpa translate="message" module="api2">
                                                                <type>ConfigRegex</type>
                                                                <options>
                                                                    <length>100</length>
                                                                    <validationType>vpa</validationType>
                                                                </options>
                                                                <message>This is not valid upi id</message>
                                                            </vpa>
                                                        </vpa>
                                                    </fields>
                                                </options>
                                            </payout>
                                        </payout>
<sequenceNumber>
                                            <sequenceNumber translate="message" module="api2">
                                                <type>ConfigRegex</type>
                                                <options>
                                                    <length>55</length>
                                                    <validationType>sequenceNumber</validationType>
                                                </options>
                                                <message>This is not valid sequence number</message>
                                            </sequenceNumber>
                                        </sequenceNumber>
                                    </fields>
                                </options>
                            </products>
                        </products>
                        <baseCurrency>
                            <baseCurrency translate="message" module="api2">
                                <type>JSON_Object</type>
                                <message>Base currency should be an JSON object</message>
                            </baseCurrency>
                        </baseCurrency>
                        <networkCards>
                            <networkCards translate="message" module="api2">
                                <type>JSON_Object</type>
                                <message>Network Cards should be an JSON object</message>
                                <options>
                                    <fields>
                                        <telephone>
                                            <telephone translate="message" module="api2">
                                                <type>LibPhoneNumber</type>
                                                <message>This is not a valid telephone number</message>
                                            </telephone>
                                        </telephone>
                                    </fields>
                                </options>
                            </networkCards>
                        </networkCards>
<syncOnly>
                            <syncOnly translate="message" module="api2">
                                <type>Boolean</type>
                                <message>This is not valid Boolean value</message>
                            </syncOnly>
                        </syncOnly>
                         <scheduleOn>
                            <scheduleOn translate="message" module="api2">
                                <type>DateTime</type>
                                <!-- Only ISO8601 format is supported. i.e YYYY-MM-DDThh:mm:ss.sTZD -->
                                    <options>
                                        <min>1</min>
                                        <max>4320</max> <!-- 180 days in hours (4320)-->
                                        <!-- supported factors seconds, minutes, hours and days.-->
                                        <factor>hours</factor>
                                    </options>
                                <message>This is not valid Date</message>
                            </scheduleOn>
                        </scheduleOn>
                        <otp>
                            <otp translate="message" module="api2">
                                <type>Digits</type>
                                <message>OTP should be numeric</message>
                            </otp>
                        </otp>
                        <cardnumber>
                            <cardnumber>
                                <type>Digits</type>
                                <message>Card Number should be numeric</message>
                            </cardnumber>
                        </cardnumber>
<shipping>
                            <shipping translate="message" module="api2">
                                <type>JSON_Object</type>
                                <options>
                                    <fields>
                                        <method>
                                            <method translate="message" module="api2">
                                                <type>regex</type>
                                                <options>
                                                    <pattern>/^[a-zA-Z0-9-_]+$/</pattern>
                                                </options>
                                                <message>This is not valid shipping method</message>
                                            </method>
                                        </method>
                                    </fields>
                                </options>
                            </shipping>
                        </shipping>
                        <packaging>
                            <packaging translate="message" module="api2">
                                <type>JSON_Object</type>
                                <options>
                                    <fields>
                                        <method>
                                            <method translate="message" module="api2">
                                                <type>regex</type>
                                                <options>
                                                    <pattern>/^[a-zA-Z0-9-_]+$/</pattern>
                                                </options>
                                                <message>This is not valid packaging method</message>
                                            </method>
                                        </method>
                                    </fields>
                                </options>
                            </packaging>
                        </packaging>
                        <outletName>
                            <outletName translate="message" module="api2">
                                <type>ConfigRegex</type>
                                <options>
                                    <length>50</length>
                                    <validationType>outletName</validationType>
                                </options>
                                <message>This is not valid outletName</message>
                            </outletName>
                        </outletName>
<orderMode>
                            <orderMode translate="message" module="api2">
                                <type>Alpha</type>
                                <message>This is not valid order mode</message>
                            </orderMode>
                        </orderMode>
                    </fields>
                </validators>
                <versions>3</versions>
            </order_v3>
src\app\code\local\GBCustom\Sales\etc\api2.xml
This is some data under api2.xml.see if you can figure out
