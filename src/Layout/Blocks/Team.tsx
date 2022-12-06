import React, { FC } from 'react';

interface ISocial {
  type: string;
  link: string;
}

interface ITeamCard {
  image: string;
  name: string;
  desc: string;
  social: ISocial[];
}

interface ITeamProps {
  title: string;
  description: string;
  cards: ITeamCard[];
}

const Team: FC<ITeamProps> = (props) => {
  const { title, description } = props;

  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>

        <div>
          <div>card</div>
        </div>
      </div>
    </section>
  );
};

export default Team;
