// src/components/ResetPassword.jsx
import  { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1);

    const handleInitiateReset = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/resetPassword/initiate', { email });
            console.log(response.data);
            setStep(2);
        } catch (error) {
            console.error('Error initiating password reset:', error);
        }
    };

    const handleCompleteReset = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/resetPassword/complete', { email, otp, newPassword });
            console.log(response.data);
            setStep(1);
        } catch (error) {
            console.error('Error completing password reset:', error);
        }
    };

    return (
        <div>
            {step === 1 && (
                <form onSubmit={handleInitiateReset}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit">Send OTP</button>
                </form>
            )}
            {step === 2 && (
                <form onSubmit={handleCompleteReset}>
                    <div>
                        <label>OTP:</label>
                        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <div>
                        <label>New Password:</label>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
            )}
        </div>
    );
}

export default ResetPassword;
