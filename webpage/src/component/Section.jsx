import React from 'react';
import './Section.css';



const Section = () => {
    const servicesData = [
        {
          title: 'Safe & Reliable Cargo Solutions',
          services: [
            {
              name: 'Sea Transport Services',
              description:
                'Following the quality of our service thus having gained trust of our many clients.'
            },
            {
              name: 'Air Fright Services',
              description:
                'Following the quality of our service thus having gained trust of our many clients.'
            }
          ]
        },
        {
          title: 'Warehousing Services',
          services: [
            {
              name: 'Warehousing Services',
              description:
                'Following the quality of our service thus having gained trust of our many clients.'
            }
          ]
        },
        {
          title: 'Local Shipping Services',
          services: [
            {
              name: 'Local Shipping Services',
              description:
                'Following the quality of our service thus having gained trust of our many clients.'
            }
          ]
        }
      ];
      
  return (
    <div className="main-section ">
      {servicesData.map(({ title, services }, index) => (
        <Section key={index} title={title}>
          {services.map(({ name, description }, index) => (
            <div key={index} className="service">
              <h3 className="service-name">{name}</h3>
              <p className="service-description">{description}</p>
            </div>
          ))}
        </Section>
      ))}
    </div>
  );
};

export default Section;