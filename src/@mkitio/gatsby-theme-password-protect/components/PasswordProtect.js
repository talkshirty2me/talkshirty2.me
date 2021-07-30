/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '../utils/utils';
import './styles.css'

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);
  const [isThemeHovered, themeHover] = useState(false);
  const [isSiteHovered, siteHover] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className="password-protect">
     <img src="/images/talkshirty2me-logo.png" className="logo password-protect" alt="Undateable" />
      <h4 className="password-protect">Enter Password</h4>

      <form onSubmit={onSubmit} className="password-protect">
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          className="password-protect"
        />

        <button
          type="submit"
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
          className="password-protect"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
