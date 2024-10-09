import React, { useState, useEffect } from "react";
import api from "../../api/api";
import { Role } from "../../types/Role";
import RoleItem from "./RoleItem";
import { Link } from "react-router-dom";

const RoleList: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //A hook that runs side effects after the component renders.
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const data = await api.getRoles();
      setRoles(data);
      console.log(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch roles. Please try again later."); // if there any error to catch.
      setRoles([]);
    } finally {
      setLoading(false);
    }
  };

  // To handle role Delete.
  const handleDelete = async (roleId: number) => {
    try {
      await api.deleteRole(roleId);
      setRoles(roles.filter((role) => role.roleId !== roleId));
    } catch (error) {
      console.error(`Failed to delete role with ID ${roleId}:`, error);
      // If error occur's display a message to the user.
    }
  };

  // if the data still fetching show Loading roles... its like a spinner mechanisms(for user experience).
  if (loading) {
    return <div className="loading">Loading roles...</div>;
  }

  // if there're any errors show them.
  if (error) {
    return <div className="error">{error}</div>;
  }

  // if the loading is null and the loading is false thats mean the data return successfully so show it here.
  return (
    <div className="role-list">
      {roles.length === 0 ? (
        <p>No roles found.</p>
      ) : (
        <RoleItem roles={roles} onDelete={handleDelete} /> // Pass here the roles list.
      )}
    </div>
  );
};

export default RoleList;
