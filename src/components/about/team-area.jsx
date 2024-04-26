import React from 'react';
import { team_data } from '../../data';
import SingleTeam from '../common/single-team';

const teams = team_data.filter(team => team.about_p);

const TeamArea = () => {
  return (
    <>
      <div className="ac-team-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ac-team-title-section text-center mb-60">
                <h3 className="ac-team-title">People are the key to success</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {teams.map((team) => <SingleTeam key={team.id} team={team} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;