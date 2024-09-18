'use client';

import * as React from "react"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export function Details() {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [showVideo, setShowVideo] = useState(false);


    const videoMap = {
        'Location 1': '/location1.gif',
        'Location 2': '/videos/location2.mp4',
        'Location 3': '/videos/location3.mp4',
        'Location 4': '/videos/location4.mp4',
      };

      // Handle the location selection from the dropdown
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
    setShowVideo(false); // Reset the video display
  };

  // Handle the "Get Insights" button click
  const handleGetInsights = () => {
    if (selectedLocation) {
      setShowVideo(true); // Show video if a location is selected
    }
  };

  return (
    <div className="container">
      {/* Hero Section - First Card */}
      <Card className="w-full h-full ml-8 mr-6 shadow-md">
          <CardHeader>
            <p className="text-2xl font-semibold text-center">🔆 Solar Potential 🔆</p>
          </CardHeader>

          <CardContent className="space-y-4 flex flex-row items-center">
          <div className="video-container">
          <select className="outline outline-offset-1 outline-blue-500" value={selectedLocation} onChange={handleLocationChange}>
          <option value="" disabled>Select a Location</option>
          <option value="Location 1">Jyoti Steel</option>
          <option value="Location 2">KR Homestay</option>
          <option value="Location 3">Radha Weaving Factory</option>
          <option value="Location 4">348 House</option>
        </select>
          </div>
    
        <Button onClick={handleGetInsights}>Get Insights</Button>
            
          </CardContent>

        
      </Card>


      {/* Video Section - Second Card */}
      {showVideo && (
        <div className="card">
          <h2>Annual Solar Irradiation</h2>
          <Image src={videoMap[selectedLocation as keyof typeof videoMap]} alt={`Insights for ${selectedLocation}`} width="600" height="600" />
        </div>
      )}

      {/* Simple styles */}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        }
        .card {
          background-color: #f5f5f5;
          padding: 20px;
          margin-bottom: 20px;
          margin-top: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h1, h2 {
          margin-bottom: 20px;
          color: #000;
          font-weight: 600;
        }
        select {
          padding: 10px;
          margin-right: 20px;
          border-radius: 4px;
        }
        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
        video {
          margin-top: 90px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}
