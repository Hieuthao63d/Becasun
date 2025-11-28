import React, { useState } from 'react';
import { FaCalculator, FaCreditCard, FaDollarSign, FaCalendarAlt, FaArrowRight, FaQuestionCircle, FaTimes, FaChartLine } from 'react-icons/fa';

interface CalculationState {
    numOfCredits: number;
    amountBuy: number;
    dateOfPurchase: string;
    reducedMonthly: number;
}

interface ResultState {
    paybackPeriodMonths: number | null;
    profitableDate: string | null;
}

const AMOUNT_PER_CREDIT = 3000000;
const CONSTANT_764 = 764;
const CONSTANT_2000 = 2000;

export default function ProfitCalculator() {
    const [input, setInput] = useState<CalculationState>({
        numOfCredits: 0,
        amountBuy: 0,
        dateOfPurchase: '',
        reducedMonthly: 0,
    });

    const [result, setResult] = useState<ResultState>({
        paybackPeriodMonths: null,
        profitableDate: null,
    });

    const [showHelp, setShowHelp] = useState(false);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'numOfCredits') {
            const numValue = Number(value);
            const amountB = numValue * AMOUNT_PER_CREDIT;
            setInput(prev => ({
                ...prev,
                numOfCredits: numValue,
                amountBuy: amountB,
            }));
        } else if (name === 'dateOfPurchase') {
            setInput(prev => ({
                ...prev,
                dateOfPurchase: value,
            }));
        }
    };

    const onCalculate = () => {
        const { numOfCredits, amountBuy, dateOfPurchase } = input;

        if (numOfCredits <= 0 || amountBuy <= 0 || !dateOfPurchase || !/^\d{2}\/\d{2}\/\d{4}$/.test(dateOfPurchase)) {
            alert("Invalid Input. Please ensure 'Number of credit' is > 0 and 'Date of purchase' is in dd/mm/yyyy format.");
            setResult({ paybackPeriodMonths: null, profitableDate: null });
            return;
        }

        const A = numOfCredits;
        const B = amountBuy;
        const reducedD = ((CONSTANT_764 * CONSTANT_2000) / 12) * A;
        const paybackPeriodYears = B / (CONSTANT_764 * CONSTANT_2000);
        const paybackPeriodMonths = Math.ceil(paybackPeriodYears * 12);

        const [day, month, year] = dateOfPurchase.split('/').map(Number);
        const purchaseDate = new Date(year, month - 1, day);
        const totalYearsToAdd = Math.ceil(paybackPeriodYears);
        const profitableDateObj = new Date(purchaseDate);
        profitableDateObj.setFullYear(purchaseDate.getFullYear() + totalYearsToAdd);

        const profitableDay = String(profitableDateObj.getDate()).padStart(2, '0');
        const profitableMonth = String(profitableDateObj.getMonth() + 1).padStart(2, '0');
        const profitableYear = String(profitableDateObj.getFullYear());
        const profitableDateFormatted = `${profitableDay}/${profitableMonth}/${profitableYear}`;

        setInput(prev => ({
            ...prev,
            reducedMonthly: Math.round(reducedD),
        }));

        setResult({
            paybackPeriodMonths,
            profitableDate: profitableDateFormatted,
        });
    };

    return (
        <div className="min-h-screen  p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 relative">
                    <h1 className="text-3xl font-bold mb-2" style={{ color: '#2E7D32' }}>
                        Investment Profit Calculator
                    </h1>
                    <p className="text-sm" style={{ color: '#868E96' }}>Calculate your credit investment returns and payback period</p>
                    
                    {/* Help Button */}
                    <button
                        onClick={() => setShowHelp(true)}
                        className="cursor-pointer absolute top-0 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                        style={{ backgroundColor: '#E8F5E9' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C8E6C9'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E8F5E9'}
                        aria-label="Help"
                    >
                        <FaQuestionCircle className="w-5 h-5" style={{ color: '#2E7D32' }} />
                    </button>
                </div>

                {/* Main Calculator */}
                <div className="flex flex-col lg:flex-row items-stretch gap-4">
                    {/* Input Section */}
                    <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 border" style={{ borderColor: '#E9ECEF' }}>
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E8F5E9' }}>
                                <FaDollarSign className="w-4 h-4" style={{ color: '#2E7D32' }} />
                            </div>
                            <h2 className="text-xl font-bold" style={{ color: '#2E3A47' }}>Input Details</h2>
                        </div>

                        <div className="space-y-4">
                            {/* Number of Credits */}
                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#2E3A47' }}>
                                    <FaCreditCard className="w-4 h-4" style={{ color: '#4CAF50' }} />
                                    Number of Credits
                                </label>
                                <div className="relative">
                                    <input
                                        id="numOfCredits"
                                        name="numOfCredits"
                                        type="number"
                                        min="0"
                                        value={input.numOfCredits > 0 ? input.numOfCredits : ''}
                                        onChange={onInputChange}
                                        className="w-full px-3 py-2.5 rounded-lg text-base border-2 transition-all duration-200 focus:outline-none"
                                        style={{ 
                                            backgroundColor: '#F8F9FA', 
                                            borderColor: '#E9ECEF',
                                            color: '#2E3A47'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#2E7D32';
                                            e.target.style.backgroundColor = '#FFFFFF';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = '#E9ECEF';
                                            e.target.style.backgroundColor = '#F8F9FA';
                                        }}
                                        placeholder="Enter credits"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium" style={{ color: '#868E96' }}>
                                        credit(s)
                                    </span>
                                </div>
                            </div>

                            {/* Amount to Buy */}
                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#2E3A47' }}>
                                    <FaDollarSign className="w-4 h-4" style={{ color: '#4CAF50' }} />
                                    Amount to Buy
                                </label>
                                <div className="relative">
                                    <input
                                        id="amountBuy"
                                        name="amountBuy"
                                        type="text"
                                        value={input.amountBuy.toLocaleString('vi-VN')}
                                        readOnly
                                        className="w-full px-3 py-2.5 rounded-lg text-base font-semibold border-2"
                                        style={{ 
                                            backgroundColor: '#E8F5E9', 
                                            borderColor: '#C8E6C9',
                                            color: '#1B5E20'
                                        }}
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: '#2E7D32' }}>
                                        VND
                                    </span>
                                </div>
                            </div>

                            {/* Date of Purchase */}
                            <div className="group">
                                <label className="flex items-center gap-2 text-sm font-semibold mb-2" style={{ color: '#2E3A47' }}>
                                    <FaCalendarAlt className="w-4 h-4" style={{ color: '#4CAF50' }} />
                                    Date of Purchase
                                </label>
                                <div className="relative">
                                    <input
                                        id="dateOfPurchase"
                                        name="dateOfPurchase"
                                        type="text"
                                        value={input.dateOfPurchase}
                                        onChange={onInputChange}
                                        placeholder="dd/mm/yyyy"
                                        className="w-full px-3 py-2.5 rounded-lg text-base border-2 transition-all duration-200 focus:outline-none"
                                        style={{ 
                                            backgroundColor: '#F8F9FA', 
                                            borderColor: '#E9ECEF',
                                            color: '#2E3A47'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#2E7D32';
                                            e.target.style.backgroundColor = '#FFFFFF';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = '#E9ECEF';
                                            e.target.style.backgroundColor = '#F8F9FA';
                                        }}
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium" style={{ color: '#868E96' }}>
                                        dd/mm/yyyy
                                    </span>
                                </div>
                            </div>

                            {/* Calculate Button */}
                            <button
                                onClick={onCalculate}
                                className="cursor-pointer w-full py-3 text-white font-bold text-base rounded-lg focus:outline-none focus:ring-4 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                style={{ 
                                    background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
                                    boxShadow: '0 4px 6px rgba(46, 125, 50, 0.15)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)';
                                }}
                            >
                                <FaCalculator className="w-4 h-4" />
                                Calculate Results
                            </button>
                        </div>
                    </div>

                    {/* Arrow Separator */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)' }}>
                            <FaArrowRight className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="flex-1 rounded-2xl shadow-xl p-6 border" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 100%)', borderColor: '#C8E6C9' }}>
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#C8E6C9' }}>
                                <FaChartLine className="w-4 h-4" style={{ color: '#1B5E20' }} />
                            </div>
                            <h2 className="text-xl font-bold" style={{ color: '#2E3A47' }}>Results</h2>
                        </div>

                        <div className="space-y-4">
                            {/* Amount Reduced Monthly */}
                            <div className="bg-white rounded-xl p-4 shadow-md border" style={{ borderColor: '#C8E6C9' }}>
                                <label className="flex items-center gap-2 text-xs font-semibold mb-2" style={{ color: '#2E3A47' }}>
                                    <FaDollarSign className="w-3.5 h-3.5" style={{ color: '#2E7D32' }} />
                                    Amount Reduced Monthly
                                </label>
                                <div className="relative">
                                    <div className="text-2xl font-bold" style={{ color: '#1B5E20' }}>
                                        {input.reducedMonthly > 0 ? input.reducedMonthly.toLocaleString('vi-VN') : '—'}
                                    </div>
                                    <span className="text-sm font-semibold mt-1 inline-block" style={{ color: '#2E7D32' }}>
                                        VND
                                    </span>
                                </div>
                            </div>

                            {/* Payback Period */}
                            <div className="bg-white rounded-xl p-4 shadow-md border" style={{ borderColor: '#C8E6C9' }}>
                                <label className="flex items-center gap-2 text-xs font-semibold mb-2" style={{ color: '#2E3A47' }}>
                                    <FaCalendarAlt className="w-3.5 h-3.5" style={{ color: '#2E7D32' }} />
                                    Payback Period
                                </label>
                                <div className="relative">
                                    <div className="text-2xl font-bold" style={{ color: '#1B5E20' }}>
                                        {result.paybackPeriodMonths !== null ? result.paybackPeriodMonths.toLocaleString('vi-VN') : '—'}
                                    </div>
                                    <span className="text-sm font-semibold mt-1 inline-block" style={{ color: '#2E7D32' }}>
                                        month(s)
                                    </span>
                                </div>
                            </div>

                            {/* Profitable Date */}
                            <div className="bg-white rounded-xl p-4 shadow-md border" style={{ borderColor: '#C8E6C9' }}>
                                <label className="flex items-center gap-2 text-xs font-semibold mb-2" style={{ color: '#2E3A47' }}>
                                    <FaChartLine className="w-3.5 h-3.5" style={{ color: '#2E7D32' }} />
                                    Profitable Date
                                </label>
                                <div className="relative">
                                    <div className="text-2xl font-bold" style={{ color: '#1B5E20' }}>
                                        {result.profitableDate || '—'}
                                    </div>
                                    <span className="text-xs font-semibold mt-1 inline-block" style={{ color: '#2E7D32' }}>
                                        dd/mm/yyyy
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-6 text-center text-xs" style={{ color: '#868E96' }}>
                    <p>Based on constants: 764 × 2000 VND per credit annually | 3,000,000 VND per credit</p>
                </div>

                {/* Help Modal */}
                {showHelp && (
                    <div className="fixed inset-0 overlay flex items-center justify-center p-4 z-50" onClick={() => setShowHelp(false)}>
                        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setShowHelp(false)}
                                className="cursor-pointer absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                                style={{ backgroundColor: '#F8F9FA' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E9ECEF'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F8F9FA'}
                            >
                                <FaTimes className="w-4 h-4" style={{ color: '#6C757D' }} />
                            </button>
                            
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E8F5E9' }}>
                                    <FaQuestionCircle className="w-5 h-5" style={{ color: '#2E7D32' }} />
                                </div>
                                <h3 className="text-2xl font-bold" style={{ color: '#2E3A47' }}>How to Use</h3>
                            </div>

                            <div className="space-y-4 text-sm" style={{ color: '#2E3A47' }}>
                                <div>
                                    <h4 className="font-semibold mb-1" style={{ color: '#2E7D32' }}>📝 Instructions:</h4>
                                    <ol className="list-decimal list-inside space-y-1 ml-2">
                                        <li>Enter the <strong>Number of Credits</strong> you plan to purchase</li>
                                        <li>The <strong>Amount to Buy</strong> will be calculated automatically (3,000,000 VND per credit)</li>
                                        <li>Enter the <strong>Date of Purchase</strong> in dd/mm/yyyy format</li>
                                        <li>Click <strong>Calculate Results</strong> to see your investment analysis</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1" style={{ color: '#2E7D32' }}>📊 Results Explained:</h4>
                                    <ul className="space-y-1 ml-2">
                                        <li><strong>Amount Reduced Monthly:</strong> Your monthly savings based on the formula [(764 × 2000) / 12] × credits</li>
                                        <li><strong>Payback Period:</strong> Number of months until your investment breaks even</li>
                                        <li><strong>Profitable Date:</strong> The date when your investment starts generating positive returns</li>
                                    </ul>
                                </div>

                                <div className="rounded-lg p-3 border" style={{ backgroundColor: '#E8F5E9', borderColor: '#C8E6C9' }}>
                                    <p className="text-xs" style={{ color: '#1B5E20' }}>
                                        <strong>💡 Tip:</strong> The profitable date indicates when your investment will have fully paid for itself and begins generating net profit based on the monthly reduction amount.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}