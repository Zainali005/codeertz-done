import Link from 'next/link';
import React from 'react';
import { team_data } from '../../../data';

const teams = team_data.filter(t => t.home);

const team_contents = {
  subtitle: 'Our Team',
  title: 'Meet our',
  highlight_text: 'team'
}
const { highlight_text, subtitle, title } = team_contents;

const TeamArea = () => {
  return (
    <React.Fragment>
      <div className="tp-team-area pt-125 pb-100 theme-bg">
        <div className="container">
          <div className="row">
            <div className="team-section-box text-center pb-25">
              <h5 className="tp-subtitle text-white">{subtitle}</h5>
              <h2 className="tp-title text-white">{title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg width="141" height="11" viewBox="0 0 141 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L141 11H0V0Z" fill="#FFDC60" />
                  </svg>
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            {teams.map((team) => {
              const { id, img, name, title } = team;
              return <div key={id} className="col-xl-3 col-md-6">
                <div className="tp-team-item mb-30">
                  <div className="tp-team-item__img">
                    <img className="w-100" src={img} alt="" />
                  </div>
                  <div className="tp-team-item__info d-flex justify-content-between align-items-center">
                    <div className="tp-team-item__text">
                      <h5 className="tp-team-title">
                        <Link href={`/about-me/${id}`}>
                          <a>{name}</a>
                        </Link>
                      </h5>
                      <h6 className="tp-team-subtitle">{title}</h6>
                    </div>
                    <div className="tp-team-item__icon">
                      <Link href={`/about-me/${id}`}>
                        <a><i className="fal fa-long-arrow-up"></i></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            })}
            <div className="col-xl-3 col-md-6">
              <div className="tp-team-overlay p-relative mb-30">
                <div className="tp-team-overlay__img">
                  <img className="w-100" src="/assets/img/team/team-1.webp" alt="" />
                </div>
                <div className="tp-team-overlay__info text-center">
                  <h6 className="team-title">
                    <Link href="/about-me">
                      <a>Join our Team</a>
                    </Link>
                  </h6>
                  <Link href="/about-me">
                    <a><i className="fal fa-long-arrow-up"></i></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamArea;