import { useState, useEffect } from 'react';
import { User } from '../types/User';
import usersData from '../data/users.json';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUsers(usersData as User[]);
    setIsLoading(false);
  };

  const refreshUsers = async () => {
    setIsLoading(true);
    
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setUsers([...usersData as User[]]);
    setIsLoading(false);
  };

  return {
    users,
    isLoading,
    refreshUsers,
    userCount: users.length
  };
};