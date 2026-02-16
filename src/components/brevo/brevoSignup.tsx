import React, { useState } from 'react';

export const BrevoSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // We use the exact endpoint and fields from your Brevo form
    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('locale', 'en');
    formData.append('email_address_check', '');

    try {
      // Direct POST to Brevo's server bypasses their broken main.js script
      await fetch("https://deb5a9c4.sibforms.com/serve/MUIFAK5k3d207_8g1GbnQJQB3sWFVU7FcBs4ut6QDrpu3L-WdxX5o34w4bLiDYJjYmCwhIUbApN8AsrxLzXNSeCmxdDAIuAYd-xFbnVRm24d8_yxdA_m9yqCvk5nvujxnSztA31nex6ECB1tnvPqbyra5amwDDoZ2bdPKN_SLgm4VIAjyUjbk1I7aLU4pzEaLP6feiDnbQOP8tZFIQ==", {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Essential: Brevo doesn't return CORS headers
      });

      // If we are here, the request was dispatched successfully
      setStatus('success');
      setEmail(''); // This officially clears your input field
    } catch (err) {
      console.error("Brevo submission error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="sib-form" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <div id="sib-form-container">
        
        {/* SUCCESS MESSAGE */}
        {status === 'success' && (
          <div 
            style={{ 
              padding: '12px', 
              marginBottom: '15px', 
              backgroundColor: '#e7faf0', 
              color: '#085229', 
              border: '1px solid #13ce66', 
              borderRadius: '4px', 
              fontFamily: 'sans-serif',
              textAlign: 'left'
            }}
          >
            Your subscription has been successful.
          </div>
        )}

        {/* ERROR MESSAGE */}
        {status === 'error' && (
          <div 
            style={{ 
              padding: '12px', 
              marginBottom: '15px', 
              backgroundColor: '#ffeded', 
              color: '#661d1d', 
              border: '1px solid #ff4949', 
              borderRadius: '4px', 
              fontFamily: 'sans-serif',
              textAlign: 'left'
            }}
          >
            Your subscription could not be saved. Please try again.
          </div>
        )}

        <div id="sib-container" style={{ textAlign: 'center', backgroundColor: 'transparent', width: '100%' }}>
          <form onSubmit={handleSubmit}>
            
            <div style={{ padding: '8px 0', textAlign: 'left' }}>
              <h2 style={{ fontSize: '29px', fontWeight: 700, color: '#1e70fe', margin: 0, fontFamily: 'sans-serif' }}>
                Building the Ultimate Seasonal Dive Guide.
              </h2>
            </div>
            
            <div style={{ padding: '8px 0', textAlign: 'left', color: '#706b6b', fontFamily: 'sans-serif' }}>
              Join our mailing list for progress updates and seasonal scuba insights!
            </div>

            <div style={{ padding: '8px 0' }}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" 
                required 
                disabled={status === 'loading'}
                style={{ 
                  width: '100%', 
                  boxSizing: 'border-box', 
                  padding: '12px', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px',
                  fontSize: '16px'
                }} 
              />
            </div>

            <div style={{ padding: '16px 0', textAlign: 'right' }}>
              <button 
                type="submit"
                disabled={status === 'loading'}
                style={{ 
                  fontSize: '20px', 
                  fontWeight: 700, 
                  color: '#FFFFFF', 
                  backgroundColor: status === 'loading' ? '#ccc' : '#1e70fe', 
                  borderRadius: '10px', 
                  padding: '12px 24px', 
                  cursor: status === 'loading' ? 'default' : 'pointer', 
                  border: 'none' 
                }}
              >
                {status === 'loading' ? 'Joining...' : 'Join us'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};