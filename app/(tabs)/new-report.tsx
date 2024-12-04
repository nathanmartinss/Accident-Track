import React from "react";
import NewReportScreen from "../../components/NewReportScreen";

const NewReport: React.FC = () => {
  const handlePost = (incident: {
    imageUri: string;
    location: { latitude: number; longitude: number; address: string };
    tags: string[];
  }) => {
    // Handle the post incident logic here
    console.log(incident);
  };

  return <NewReportScreen onPost={handlePost} />;
};

export default NewReport;
