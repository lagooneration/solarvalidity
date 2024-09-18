'use client';

import React, { useState, ChangeEvent } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const Hero = () => {
  const [sliderValue, setSliderValue] = useState<number>(2); // Initial solar capacity
  const [cost, setCost] = useState<number>(45000 * 2); // Initial cost for 2kW
  const [monthlyBill, setMonthlyBill] = useState<number>(0); // Initialize monthly bill to 0
  const [savings, setSavings] = useState<number>(0); // Initialize savings to 0

  const unitCost = 7; // Cost per unit in ₹
  const unitsPerYearPerKW = 1400; // Energy units generated per kW per year
  const costPerKW = 40000; // Cost per kW

  // Handle slider value change
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    setCost(newValue * costPerKW); // Update the cost based on the slider value
    calculateSavings(newValue, monthlyBill); // Recalculate savings based on new slider value
  };

  // Handle monthly bill input change
  const handleMonthlyBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newMonthlyBill = Number(e.target.value);
    setMonthlyBill(newMonthlyBill);
    calculateSavings(sliderValue, newMonthlyBill); // Recalculate savings based on new monthly bill
  };

  // Calculate savings based on solar capacity and monthly bill
  const calculateSavings = (kw: number, bill: number) => {
    const yearlySavings = kw * unitsPerYearPerKW * unitCost; // Annual savings based on energy units generated
    setSavings(yearlySavings);
  };

  return (
    <Card className="w-full h-full ml-8 mr-6 shadow-md">
          <CardHeader>
            <p className="text-2xl font-semibold text-center">💸 Cost & Savings Analysis 💸</p>
          </CardHeader>
          <CardContent>
    <div className="w-full h-full ml-8 mr-6 mb-4">
      <div className="p-6 pt-2 mt-4 space-y-4 flex flex-col items-center gap-4">

        {/* Panel Capacity Slider */}
        <div className="w-full flex flex-col items-center">
          <label htmlFor="slider" className="text-lg mb-4">
            Panel Capacity (kW)
          </label>
          <input
            id="slider"
            type="range"
            min="1"
            max="100"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-4 text-xl font-semibold">{sliderValue} kW</div>
        </div>

        <div className="h-[20px]">
            .
        </div>

        {/* Monthly Electricity Bill Input */}
        <div className="mt-4 text-xl w-full flex flex-col items-start gap-2">
          <label htmlFor="monthlyBill" className="block mb-2">
            Monthly Electricity Bill (₹)
          </label>
          <input
            type="number"
            placeholder="Enter your monthly bill"
            value={monthlyBill}
            onChange={handleMonthlyBillChange}
            className="outline outline-offset-1 outline-blue-500 rounded-md p-2 w-full"
          />
        </div>
        <div className="h-[20px]">
            .
        </div>

        {/* Calculated Results */}
        <div className="w-full mt-4 flex flex-col items-start space-y-2 gap-2 mt-2">
          <div className="text-xl">
            <strong>Cost:</strong> ₹{cost.toLocaleString()} {' '}
            <strong>-</strong> ₹{(cost + 400000).toLocaleString()}
          </div>
          <div className="text-xl">
            <strong>Energy Generated:</strong> {sliderValue * unitsPerYearPerKW} units/year
          </div>
          <div className="text-xl">
            <strong>Estimated Savings:</strong> ₹{savings.toLocaleString()} /year
          </div>
        </div>
      </div>
    </div>
    </CardContent>
    </Card>
  );
};
