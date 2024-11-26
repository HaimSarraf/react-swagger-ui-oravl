// src/components/PetDetails.tsx
import React from "react";
import { useGetPetById } from "../api/generated.ts"; // Import the generated hook

const PetDetails = ({ petId }) => {
  const { data, isLoading, error } = useGetPetById(petId); // Call the Orval-generated hook

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Pet Details</h2>
      <p>Name: {data?.data?.name}</p>
    </div>
  );
};

export default PetDetails;
