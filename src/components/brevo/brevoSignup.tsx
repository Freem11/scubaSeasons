import React, { useState } from 'react';

export const BrevoSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('locale', 'en');
    formData.append('email_address_check', '');

    try {
      await fetch("https://deb5a9c4.sibforms.com/serve/MUIFAK5k3d207_8g1GbnQJQB3sWFVU7FcBs4ut6QDrpu3L-WdxX5o34w4bLiDYJjYmCwhIUbApN8AsrxLzXNSeCmxdDAIuAYd-xFbnVRm24d8_yxdA_m9yqCvk5nvujxnSztA31nex6ECB1tnvPqbyra5amwDDoZ2bdPKN_SLgm4VIAjyUjbk1I7aLU4pzEaLP6feiDnbQOP8tZFIQ==", {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="brevo-wrapper" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* Dynamic Style Tag for Media Queries */}
      <style>{`
        .brevo-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          box-sizing: border-box;
        }
        .brevo-input {
          width: 100% !important;
          box-sizing: border-box !important;
          padding: 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }
        .brevo-button {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          border: none;
          background-color: #1e70fe;
          color: white;
          font-weight: 700;
          cursor: pointer;
        }
        /* Mobile adjustment for screens under 700px */
        @media (min-width: 700px) {
          .brevo-button {
            width: auto;
            min-width: 180px;
          }
        }
      `}</style>

      <div className="brevo-container">
        {/* Status Messages */}
        {status === 'success' && <div style={{...msgStyle, backgroundColor: '#e7faf0', color: '#085229'}}>Success! Check your email.</div>}
        {status === 'error' && <div style={{...msgStyle, backgroundColor: '#ffeded', color: '#661d1d'}}>Error. Please try again.</div>}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(20px, 6vw, 28px)', color: '#1e70fe', marginBottom: '10px', fontFamily: 'sans-serif' }}>
            Building the Ultimate Seasonal Dive Guide.
          </h2>
          
          <p style={{ color: '#706b6b', marginBottom: '20px', fontFamily: 'sans-serif' }}>
            Join our mailing list for progress updates!
          </p>

          <div style={{ marginBottom: '15px', width: '100%' }}>
            <input 
              className="brevo-input"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address" 
              required 
            />
          </div>

          <div style={{ textAlign: 'right' }}>
            <button 
              type="submit"
              className="brevo-button"
              disabled={status === 'loading'}
              style={{ backgroundColor: status === 'loading' ? '#ccc' : '#1e70fe' }}
            >
              {status === 'loading' ? 'Joining...' : 'Join us'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const msgStyle = {
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '8px',
  fontFamily: 'sans-serif',
  fontSize: '14px'
};