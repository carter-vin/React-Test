import React, { useCallback, useEffect, useState } from "react";
import Searchbox from "../components/Searchbox";
import User, { UserModel } from "../components/User";
import userService from "../network/services/user.service";
import UserResModel from "../network/models/response/UserResModel";

const formatUser = (
  user: UserResModel,
  allUsers: UserResModel[]
): UserModel => {
  const friendNames = [];
  let highestRankingFriend: UserResModel | undefined;
  for (const friendId of user.friends) {
    const friendDetail = allUsers.find((u) => u.id === friendId);
    if (friendDetail) {
      friendNames.push(friendDetail.name);
      if (
        !highestRankingFriend ||
        friendDetail.rank > highestRankingFriend.rank
      )
        highestRankingFriend = friendDetail;
    }
  }
  return {
    ...user,
    highestRankingFriend: highestRankingFriend?.id,
    friendNames,
  };
};

export default function UserListPage(): React.JSX.Element {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<Record<string, boolean>>(
    {}
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [searchQuery]);

  const fetchUsers = async () => {
    try {
      const res = await userService.list({ term: searchQuery });
      if (res.success && Array.isArray(res.data)) {
        const allUsers = res.data;
        setUsers(allUsers.map((user) => formatUser(user, allUsers)));
      }
    } catch (error) {
      //@todo:: log error message
    }
  };

  const onSearchValueChange = (value: string) => {
    setSearchQuery(value);
  };

  const onUserCardClick = (user: UserModel) => {
    setSelectedUsers((prevState) => {
      return { ...prevState, [user.id]: !prevState[user.id] };
    });
  };

  return (
    <div>
      <div className="mt-5"></div>
      <div className="searchbox-container">
        <Searchbox
          placeholder="Search Users..."
          onInputChange={onSearchValueChange}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 50,
          width: "75%",
          margin: "auto",
          marginTop: '50px'
        }}
      >
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            onClick={() => {
              onUserCardClick(user);
            }}
            isSelected={selectedUsers[user.id]}
          />
        ))}
      </div>
    </div>
  );
}
