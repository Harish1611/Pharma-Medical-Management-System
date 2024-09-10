import React from 'react';
import TopResourceCards from './TopResourceCards';
import HeadingOne from '../../UiComponents/HeadingOne';
import { dummyResource } from "./dummy-resource"; 
import ClosedCards from './ClosedCards';

const ClosedRequests = () => {
    return (
        <div>
        <HeadingOne headText="Closed Requests" />
        <div className="mx-4 my-10 sm:mx-40 sm:my-20">
            <TopResourceCards />

            
        {dummyResource.map((resource, index) => (
          <ClosedCards
            key={index} 
            resource_name={resource.resource_name}
            quantity={resource.quantity}
            requested_by={resource.requested_by}
            requested_date={resource.requested_date}
          />
        ))}

            </div>
        </div>
    );
}

export default ClosedRequests;
