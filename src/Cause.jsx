
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers, faStethoscope, faHome, faBolt,
  faMapMarkerAlt, faCalendarAlt, faToilet, faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const Cause = () => {
  const causesData = [
    {
      icon: faUsers,
      title: 'Multiple Cats',
      percentage: '85%',
      description: 'Competition for resources and territory in multi-cat households.',
      color: '#f44336',
    },
    {
      icon: faStethoscope,
      title: 'Medical Issues',
      percentage: '70%',
      description: 'Urinary tract infections, bladder stones, or other health problems.',
      color: '#ff9800',
    },
    {
      icon: faHome,
      title: 'Environmental Changes',
      percentage: '65%',
      description: 'Moving homes, new furniture, or changes in household routine.',
      color: '#4caf50',
    },
    {
      icon: faBolt,
      title: 'Stress & Anxiety',
      percentage: '75%',
      description: 'Loud noises, new people, or disruption to normal environment.',
      color: '#9c27b0',
    },
    {
      icon: faMapMarkerAlt,
      title: 'Territory Marking',
      percentage: '80%',
      description: 'Natural instinct to mark territory, especially near doors and windows.',
      color: '#8bc34a',
    },
    {
      icon: faCalendarAlt,
      title: 'Mating Behavior',
      percentage: '90%',
      description: 'Unneutered cats spray more frequently as part of reproductive behavior.',
      color: '#e91e63',
    },
    {
      icon: faToilet,
      title: 'Litter Box Issues',
      percentage: '60%',
      description: 'Dirty, wrong location, or type of litter causing avoidance.',
      color: '#2196f3',
    },
    {
      icon: faUserFriends,
      title: 'Social Conflicts',
      percentage: '55%',
      description: 'Conflicts with outdoor cats seen through windows.',
      color: '#ffc107',
    },
  ];

  return (
    <section className="causes-section" id="Causes">
        <div className="causes-container" >
        <h1>Common Causes of Cat Spraying</h1>
        <p className="causes-description">Understanding why your cat is spraying is crucial for finding the right solution. Here are the most common triggers and their frequency in households.</p>
        <div className="causes-grid">
      
        {causesData.map((cause, index) => (
          <div className="cause-card" key={index} >
            <div className="cause-icon" style={{ backgroundColor: cause.color }}>
              <FontAwesomeIcon icon={cause.icon} />
            </div>
              <h2 className="cause-percentage">
                    <CountUp
                      start={0}
                      end={parseFloat(cause.percentage)}
                      separator={'.'}
                      prefix={'%'}
                      duration={2}
                      delay={0.2}
                    />
              </h2>
              <h3 className="cause-title">{cause.title}</h3>
              <p className="cause-description">{cause.description}</p>
              <div
                className="cause-progress"
                style={{  ['--causePercentage']: cause.percentage , 
                          ['--causeColor']: cause.color
                        }}
              >
                <div className="progress-bar"></div>
              </div>
            </div>
        ))}
        </div>
        </div>
    </section>
  );
};

export default Cause;