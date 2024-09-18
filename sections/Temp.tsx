'use client';

// import styles from '../styles';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useState, ChangeEvent } from "react";

export const Hero = () => {

    const [sliderValue, setSliderValue] = useState<number>(2); // Assuming the cost for slider value 2 is 60000
    const [cost, setCost] = useState<number>(60000); // Assuming the cost for slider value 2 is 60000
    const [monthlyBill, setMonthlyBill] = useState<number>(0); // Initialize monthly bill to 0
    const [savings, setSavings] = useState<number>(0); // Initialize savings to 0

  // Handle slider value change with type-safe event
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value); // Convert the string value to number
    setSliderValue(newValue);
    setCost(newValue * 40000); // Update the cost based on the new slider value
    calculateSavings(); // Recalculate savings based on new slider value and monthly bill
  };

  // Handle monthly bill input change
  const handleMonthlyBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMonthlyBill = Number(e.target.value); // Convert the string value to number
    setMonthlyBill(newMonthlyBill);
    calculateSavings(); // Recalculate savings based on new monthly bill and slider value
  };

  // Calculate savings based on solar capacity and monthly bill
  const calculateSavings = () => {
    // Assuming 1 kW of solar capacity saves ₹300 per month
    const savingsPerMonth = sliderValue * 240;
    // Calculate total savings based on monthly bill
    const totalSavings = savingsPerMonth * 12; // Assuming 12 months in a year
    setSavings(totalSavings);
  };

    return (
    <Card className="w-full h-full  ml-8 mr-6 mb-4">
          <CardHeader>
            <p className="text-2xl font-semibold text-center">₹ Cost Analysis ₹</p>
          </CardHeader>

          <CardContent className="space-y-4 flex flex-row items-center">

    
          <div className="p-6 pt-2 mt-4 space-y-4 flex flex-col items-center gap-4">
      <label htmlFor="slider" className="text-lg mb-4">Panel Capacity</label>

      {/* Slider */}
      <input
        id="slider"
        type="range"
        min="2"
        max="100"
        step="2"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-128 h-12 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />

<div className="mt-4 text-xl font-semibold">
        {sliderValue} kW
      </div>

      {/* Slider thumb styling */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #4f46e5; /* Tailwind indigo-600 */
          border-radius: 50%;
          cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #4f46e5; /* Tailwind indigo-600 */
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>


    <div className="mt-4 mr-4 text-xl">
        <label htmlFor="monthlyBill" className="block mb-2">Monthly Electricity Bill</label>
        <input type="text" placeholder="Monthly Electricity Bill" value={monthlyBill} onChange={handleMonthlyBillChange} className="outline outline-offset-1 outline-blue-500 rounded-md p-2" />
      </div>


        <div className='p-6 pt-2 mt-4 space-y-4 flex flex-col items-start gap-4 w-full'>
        
        

        <div className="mt-4 mr-4 text-xl">
            Cost: ₹{cost.toLocaleString()}
        </div>

        <div className="mt-4 mr-4  text-xl">
            Energy: {sliderValue * 1400} units/year
        </div>

        <div className="mt-4 mr-4  text-xl">
            Savings: ₹{savings.toLocaleString()} /year
        </div>
      
      </div>

      

    </CardContent>
    </Card>
    );
}