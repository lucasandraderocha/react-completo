import React from "react";

const SubscriptionUserCardTestContext = ({ data }) => {
  return (
    <>
      <section className="flex flex-column py-16 px-16 full brd-sm rds-sm">
        <h4>Subscription ↴</h4>
        <div>
          <ul>
            <li>
              Plan: <i>{data.subscription.plan}</i>
            </li>
            <li>Renewel Date: {data.subscription.renewal_date}</li>
            <li>
              <div>
                <ul>
                  <li>Storage: {data.subscription.usage.storage_gb}GB</li>
                  <li>Seats: {data.subscription.usage.seats_used}/12</li>
                  <li>Projects: {data.subscription.usage.projects}/∞</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SubscriptionUserCardTestContext;
