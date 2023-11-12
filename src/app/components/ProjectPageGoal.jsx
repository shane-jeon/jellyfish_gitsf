import React from 'react';

export default function ProjectPageGoal() {
  const donationChosenCount = ['3', '15', '140', '2'];
  const donationCost = ['50', '100', '150', 'Other']

  return (
    <section>
      <div>
        <h3>Funding Goal</h3>
        <h1>$1,200</h1>
        <hr />
        <p></p>
      </div>
      <div>
        <div>
          <p>{donationChosenCount[0]} others choice</p>
          <span>${donationCost[0]}</span>
        </div>
        <div>
          <p>{donationChosenCount[1]} others choice</p>
          <span>${donationCost[1]}</span>
        </div>
        <div>
          <p>{donationChosenCount[2]} others choice</p>
          <span>${donationCost[2]}</span>
        </div>
        <div>
          <p>{donationChosenCount[3]} others choice</p>
          <span>${donationCost[3]}</span>
        </div>
      </div>
      <div>

      </div>
    </section>
  );
}
