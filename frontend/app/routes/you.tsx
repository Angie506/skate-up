// @ts-nocheck
import React from "react";
import { NavLink } from "react-router";
import FigmaFrame from "../components/FigmaFrame.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BottomNav from "../components/BottomNav.jsx";

export default function You() {
  return (
    <main className="chat-container">
      <div className="device-frame">
        <div className="device-inner">
          <Header />

          <div className="you-header">
            <div style={{ maxWidth: 360, margin: "0 auto", padding: "24px 16px 0" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>You</h1>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="icon-btn notification-btn" aria-label="notifications">
                    <span style={{ fontSize: '20px' }}>🔔</span>
                  </button>
                  <button className="icon-btn settings-btn" aria-label="settings">
                    <span style={{ fontSize: '20px' }}>⚙️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="you-content">
            <div style={{ maxWidth: 360, margin: "0 auto", padding: "0 12px 120px" }}>
              
              {/* Profile Card */}
              <article className="profile-card-new">
                <div className="profile-top">
                  <div className="profile-avatar-large">
                    <img src="/figma-components/avatar.jpg" alt="Sofia Alvarez" onError={(e)=>{e.currentTarget.src='/figma-components/welcome.svg'}} />
                  </div>
                  <div className="profile-details">
                    <div className="profile-name-large">Sofia Alvarez</div>
                    <div className="profile-streak-large">🔥 21 days streak</div>
                  </div>
                </div>

                {/* Badges Section */}
                <div className="badges-section">
                  <div className="badges-header-new">
                    <span>Your badges</span>
                    <a className="badges-link">Details ›</a>
                  </div>
                  <div className="badges-grid">
                    <div className="badge-diamond gold">
                      <div className="badge-icon">🏅</div>
                    </div>
                    <div className="badge-diamond silver">
                      <div className="badge-icon">🏅</div>
                    </div>
                    <div className="badge-diamond bronze">
                      <div className="badge-icon">🏅</div>
                    </div>
                  </div>
                  <div className="badges-labels">
                    <div className="badge-label-item">
                      <div>Gold</div>
                      <div>x3</div>
                    </div>
                    <div className="badge-label-item">
                      <div>Silver</div>
                      <div>x7</div>
                    </div>
                    <div className="badge-label-item">
                      <div>Bronze</div>
                      <div>x2</div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Community Section */}
              <h2 className="section-heading">Community</h2>
              <div className="menu-list">
                <div className="menu-item">
                  <div className="menu-icon" style={{ background: '#5C5C8A' }}>👨‍🏫</div>
                  <span className="menu-text">Lessons</span>
                  <span className="menu-arrow">›</span>
                </div>
                <div className="menu-item">
                  <div className="menu-icon" style={{ background: '#3D5A80' }}>🎉</div>
                  <span className="menu-text">Events</span>
                  <span className="menu-arrow">›</span>
                </div>
                <div className="menu-item premium-item">
                  <div className="menu-icon" style={{ background: '#4A6FA5' }}>🤖</div>
                  <span className="menu-text">AR/VR/AI</span>
                  <span className="premium-badge">Premium</span>
                  <span className="menu-arrow">›</span>
                </div>
              </div>

              {/* Have Fun Section */}
              <h2 className="section-heading">Have fun!</h2>
              <div className="fun-grid">
                <div className="fun-card">
                  <div className="fun-card-image">
                    <div className="fun-icon">🎨</div>
                  </div>
                  <div className="fun-card-title">Style your Gear</div>
                  <div className="fun-card-subtitle">Find inspiration on Pinterest</div>
                </div>
                <div className="fun-card">
                  <div className="fun-card-image">
                    <div className="fun-icon">🔧</div>
                  </div>
                  <div className="fun-card-title">Repairs Tips</div>
                  <div className="fun-card-subtitle">Keep skates in top shape</div>
                </div>
              </div>

              {/* Sell/Buy Section */}
              <div className="menu-item sell-item">
                <div className="menu-icon" style={{ background: '#E85D75' }}>💰</div>
                <span className="menu-text">Sell/ Buy/ Second hand</span>
                <span className="menu-arrow">›</span>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a href="#" className="social-icon facebook" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/>
                  </svg>
                </a>
                <a href="#" className="social-icon instagram" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.6187 2.31562 19.6219 2.64375 20.2781 2.91562C21.1594 3.26719 21.8063 3.6875 22.4813 4.36562C23.1594 5.04375 23.5781 5.6875 23.9313 6.57187C24.2031 7.22812 24.5313 8.23437 24.6156 10.0031C24.6719 11.2656 24.6859 11.6453 24.6859 14.8516C24.6859 18.0578 24.6719 18.4375 24.6156 19.6984C24.5313 21.4703 24.2031 22.4734 23.9313 23.1297C23.5797 24.0109 23.1594 24.6578 22.4813 25.3328C21.8031 26.0109 21.1594 26.4297 20.2781 26.7828C19.6219 27.0547 18.6156 27.3828 16.8469 27.4672C15.5844 27.5234 15.2047 27.5375 12 27.5375C8.79375 27.5375 8.41406 27.5234 7.15313 27.4672C5.38125 27.3828 4.37813 27.0547 3.72188 26.7828C2.84063 26.4312 2.19375 26.0109 1.51875 25.3328C0.840625 24.6547 0.421875 24.0109 0.0687499 23.1297C-0.203125 22.4734 -0.53125 21.4672 -0.615625 19.6984C-0.671875 18.4359 -0.685938 18.0562 -0.685938 14.85C-0.685938 11.6437 -0.671875 11.2641 -0.615625 10.0031C-0.53125 8.23125 -0.203125 7.22812 0.0687499 6.57187C0.421875 5.6875 0.840625 5.04375 1.51875 4.36562C2.19688 3.6875 2.84063 3.26719 3.72188 2.91562C4.37813 2.64375 5.38438 2.31562 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140626 7.05469 0.0703126C5.77969 0.126563 4.90313 0.46875 4.14375 0.898438C3.35156 1.34531 2.68125 1.90156 2.01562 2.56719C1.35 3.23281 0.79375 3.90313 0.346875 4.69531C-0.0828125 5.45469 -0.425 6.32812 -0.48125 7.60312C-0.5375 8.88594 -0.551563 9.29375 -0.551563 12.5516C-0.551563 15.8094 -0.5375 16.2172 -0.48125 17.4969C-0.425 18.7719 -0.0828125 19.6484 0.346875 20.4078C0.79375 21.2 1.35 21.8703 2.01562 22.5359C2.68125 23.2016 3.35156 23.7609 4.14375 24.2047C4.90313 24.6344 5.77656 24.9766 7.05156 25.0328C8.33125 25.0891 8.73906 25.1031 11.9969 25.1031C15.2547 25.1031 15.6625 25.0891 16.9422 25.0328C18.2172 24.9766 19.0938 24.6344 19.8531 24.2047C20.6453 23.7578 21.3156 23.2016 21.9813 22.5359C22.6469 21.8703 23.2063 21.2 23.65 20.4078C24.0797 19.6484 24.4219 18.775 24.4781 17.5C24.5344 16.2203 24.5484 15.8125 24.5484 12.5547C24.5484 9.29687 24.5344 8.88906 24.4781 7.60938C24.4219 6.33437 24.0797 5.45781 23.65 4.69844C23.2156 3.90313 22.6594 3.23281 21.9938 2.56719C21.3281 1.90156 20.6578 1.34219 19.8656 0.898438C19.1063 0.46875 18.2328 0.126563 16.9578 0.0703126C15.675 0.0140626 15.2672 0 12.0094 0H12Z" fill="url(#paint0_linear_instagram)"/>
                    <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="url(#paint1_linear_instagram)"/>
                    <path d="M18.4078 7.59375C19.2006 7.59375 19.8438 6.95058 19.8438 6.15781C19.8438 5.36504 19.2006 4.72188 18.4078 4.72188C17.615 4.72188 16.9719 5.36504 16.9719 6.15781C16.9719 6.95058 17.615 7.59375 18.4078 7.59375Z" fill="url(#paint2_linear_instagram)"/>
                    <defs>
                      <linearGradient id="paint0_linear_instagram" x1="11.9766" y1="23.3484" x2="11.9766" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E09B3D"/>
                        <stop offset="0.3" stopColor="#C74C4D"/>
                        <stop offset="0.6" stopColor="#C21975"/>
                        <stop offset="1" stopColor="#7024C4"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_instagram" x1="12" y1="18.1641" x2="12" y2="5.83594" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E09B3D"/>
                        <stop offset="0.3" stopColor="#C74C4D"/>
                        <stop offset="0.6" stopColor="#C21975"/>
                        <stop offset="1" stopColor="#7024C4"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_instagram" x1="18.4078" y1="7.59375" x2="18.4078" y2="4.72188" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E09B3D"/>
                        <stop offset="0.3" stopColor="#C74C4D"/>
                        <stop offset="0.6" stopColor="#C21975"/>
                        <stop offset="1" stopColor="#7024C4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="social-icon tiktok" aria-label="TikTok">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69C18.5511 5.88143 17.8517 4.69913 17.64 3.38H14.83V15.43C14.7806 16.2832 14.4101 17.0851 13.7952 17.6734C13.1803 18.2618 12.3674 18.5909 11.5133 18.5909C10.6593 18.5909 9.84634 18.2618 9.23146 17.6734C8.61658 17.0851 8.24603 16.2832 8.19667 15.43C8.14732 14.5768 8.42356 13.7357 8.96669 13.0707C9.50982 12.4057 10.2825 11.963 11.1267 11.83V9C9.59218 9.15117 8.16947 9.8994 7.1388 11.1C6.10814 12.3006 5.5524 13.8669 5.5824 15.48C5.61241 17.0931 6.23423 18.6344 7.31667 19.8C8.39911 20.9657 9.86477 21.7 11.44 21.87C13.0153 22.04 14.6039 21.6491 15.9048 20.7724C17.2057 19.8956 18.1363 18.5897 18.54 17.09C18.7167 16.47 18.83 15.82 18.83 15.15V7.92C20.0567 8.79667 21.5167 9.26 23.01 9.25V6.5C21.7722 6.49484 20.5815 6.01084 19.67 5.15L19.59 6.69Z" fill="#000000"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
        <BottomNav />
      </div>
    </main>
  );
}
