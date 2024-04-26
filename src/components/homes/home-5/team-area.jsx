import React from 'react';
import { team_data } from '../../../data';
import SingleTeam from '../../common/single-team';

const teams = team_data.filter(team => team.home_5);

const contents = {
  subtitle:'Our Team',
  title:<>Meet our <span className="tp-section-highlight"> advisors
    <svg width="201" height="12" viewBox="0 0 201 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
    </svg> </span></>
}
const {subtitle,title} = contents;

const TeamArea = () => {
  return (
    <div className="tp-team-area pt-130 p-relative">
      <div className="bp-team-shape-1 d-none d-lg-block">
        <img src="/assets/img/team/team-shape-5.3.webp" alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-project-section-box text-center">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title-sm pb-60">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {teams.map((team) => <SingleTeam key={team.id} team={team} />)}
        </div>
      </div>
    </div>
  );
};

export default TeamArea;