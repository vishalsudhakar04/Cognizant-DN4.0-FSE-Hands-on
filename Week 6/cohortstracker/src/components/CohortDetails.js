import React from 'react';
import styles from './CohortDetails.module.css'; // Import the CSS Module

function CohortDetails(props) {
  // Determine the style for the h3 tag based on the cohort's status
  const headerStyle = {
    color: props.cohort.status === 'Ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headerStyle}>{props.cohort.name}</h3>
      <dl>
        <dt>Started On</dt>
        <dd>{props.cohort.startDate}</dd>

        <dt>Current Status</dt>
        <dd>{props.cohort.status}</dd>

        <dt>Coach</dt>
        <dd>{props.cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{props.cohort.trainer}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;