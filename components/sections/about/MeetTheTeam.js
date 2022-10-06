import React from 'react';
import { TEAM } from '../../../constants/constants';
import Row4 from '../../layout/Row4';
import Profile from '../../UI/Profile';

const MeetTheTeam = () => {
  return (
    <section
      className="section m-horizontal text-center"
      data-aos="fade-up-right"
    >
      <h2 className="title mb-s4 md:mb-s10">
        <span className="gradient-text gradient-2">Meet The Team</span>
      </h2>
      {TEAM.map((group) => (
        <div className="mb-s5 md:mb-s10" key={group.id}>
          <h3 className="mb-s2 text-3xl font-bold text-white md:mb-s4 md:text-6xl">
            {group.role}
          </h3>
          <Row4>
            {group.members.length === 2 ? (
              <>
                <div className="hidden xl:block"></div>
                {group.members.map((member) => (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    key={member.id}
                    rel="noreferrer"
                  >
                    <Profile
                      name={member.name}
                      icon={member.picture}
                      description={member.description}
                    />
                  </a>
                ))}
                <div className="hidden xl:block"></div>
              </>
            ) : (
              group.members.map((member) => (
                <Profile
                  name={member.name}
                  icon={member.picture}
                  description={member.description}
                  key={member.id}
                />
              ))
            )}
          </Row4>
        </div>
      ))}
    </section>
  );
};

export default MeetTheTeam;
