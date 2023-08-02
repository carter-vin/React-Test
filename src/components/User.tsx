import React from "react";

export type UserModel = {
  id: string;
  rank: number;
  name: string;
  email: string;
  image: string;
  friends: string[];
  friendNames: string[];
  highestRankingFriend?: string;
};

export type UserProps = {
  user: UserModel;
  isSelected?: boolean;
  onClick: () => void;
};

const User = React.memo((props: UserProps): React.JSX.Element => {
  const { user } = props;
  return (
    <div
      className={`card ${props.isSelected ? "selected" : ""}`}
      onClick={props.onClick}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <img className="avatar" src={user.image} alt={user.name} />
        <div className="w-full" style={{marginLeft: '12px'}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 className="no-margin">{user.name}</h3>
            <h3 className="no-margin" style={{width: '20%', textAlign: 'left'}}>Rank:{user.rank}</h3>
          </div>
          <p className="no-margin">{user.email}</p>
        </div>
      </div>
      <h4 className="no-margin" style={{marginTop: '12px'}}>{user.friendNames.join(", ")}</h4>
    </div>
  );
});

export default User;
