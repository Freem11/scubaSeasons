import { useEffect } from 'react';

export const BrevoSignup = () => {
  useEffect(() => {
    // 1. Manually load the Brevo validation script
    const script = document.createElement('script');
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    script.defer = true;
    document.body.appendChild(script);

    // 2. Set the global window variables Brevo needs for validation messages
    const win = window as any;
    win.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    win.LOCALE = 'en';
    win.EMAIL_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    win.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank.";
    win.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    win.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected',
        selectedOption: '{quantity} selected',
        selectedOptions: '{quantity} selected',
      }
    };

    // 3. Cleanup: Remove the script when the component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Removed all <script> tags and <link> tags from the string
  // and kept only the HTML and CSS for rendering
  const brevoHtml = `
  <style>
    @font-face {
      font-display: block;
      font-family: Roboto;
      src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2");
    }
    
    /* FORCE FULL WIDTH */
    #sib-container {
      width: 100% !important;
      max-width: 100% !important;
    }
    #sib-container .input {
      width: 100% !important;
      box-sizing: border-box !important;
      padding: 12px !important; /* Makes it easier to tap/click */
    }
    #sib-container .entry__field {
      width: 100% !important;
    }

    #sib-container input::placeholder { text-align: left; font-family: roboto; color: #c0ccda; }
    #sib-container a { text-decoration: underline; color: #2BB2FC; }
  </style>
  
  <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">

  <div class="sib-form" style="text-align: center; background-color: transparent;">
    <div id="sib-form-container" class="sib-form-container">
      
      <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:roboto; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949; width:100%;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <span class="sib-form-message-panel__inner-text">Your subscription could not be saved. Please try again.</span>
        </div>
      </div>

      <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:roboto; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66; width:100%;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <span class="sib-form-message-panel__inner-text">Your subscription has been successful.</span>
        </div>
      </div>

      <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:transparent; width:100%; border-radius:3px; border-width:0px; direction:ltr">
        <form id="sib-form" method="POST" action="https://deb5a9c4.sibforms.com/serve/MUIFAK5k3d207_8g1GbnQJQB3sWFVU7FcBs4ut6QDrpu3L-WdxX5o34w4bLiDYJjYmCwhIUbApN8AsrxLzXNSeCmxdDAIuAYd-xFbnVRm24d8_yxdA_m9yqCvk5nvujxnSztA31nex6ECB1tnvPqbyra5amwDDoZ2bdPKN_SLgm4VIAjyUjbk1I7aLU4pzEaLP6feiDnbQOP8tZFIQ==">
          
          <div style="padding: 8px 0;">
            <div class="sib-form-block" style="font-size:29px; text-align:left; font-weight:700; font-family:roboto; color:#1e70fe;">
              <p>Building the Ultimate Seasonal Dive Guide.</p>
            </div>
          </div>

          <div style="padding: 8px 0;">
            <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:roboto; color:#706b6b;">
              <p>Join our mailing list for progress updates and seasonal scuba insights!</p>
            </div>
          </div>
          
          <div style="padding: 8px 0;">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block" style="width: 100%;">
                <div class="entry__field" style="width: 100%;">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email Address" required style="width: 100%;" />
                </div>
                
                <label class="entry__specification" style="font-size:12px; text-align:left; font-family:roboto; color:#8390A4; display: block; margin-top: 5px;">
                  Enter your email address to join. For e.g abc@xyz.com
                </label>

                <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:roboto; color:#661d1d; background-color:#ffeded;"></label>
              </div>
            </div>
          </div>

          <div style="padding: 16px 0;">
            <div class="sib-form-block" style="text-align: right">
              <button class="sib-form-block__button" style="font-size:20px; font-weight:700; font-family:'roboto', monospace; color:#FFFFFF; background-color:#1e70fe; border-radius:10px; padding: 12px 24px; cursor: pointer;" type="submit">
                Join us
              </button>
            </div>
          </div>

          <input type="text" name="email_address_check" value="" style="display:none;">
          <input type="hidden" name="locale" value="en">
        </form>
      </div>
    </div>
  </div>
`;

  return (
    <div 
      className="brevo-form-wrapper"
      dangerouslySetInnerHTML={{ __html: brevoHtml }} 
    />
  );
};