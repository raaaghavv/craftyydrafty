import React from "react";
import "./Footer.css";
function Footer() {
  const textmsg = "hello!";
  return (
    <>
      <footer id="footer" className="footer">
        <div class="footer-content">
          <div class="footer-content-grid">
            <section class="company-info" aria-labelledby="company-heading">
              <div class="company-branding">
                <a href="#" class="company-logo-link" aria-label="Home page">
                  <img
                    class="company-logo"
                    src="./craftyydrafty_logo.png"
                    alt="Company Logo"
                    width="100"
                    height="100"
                    loading="lazy"
                  />
                  <h2 class="company-name">CraftyyDrafty</h2>
                </a>
              </div>

              <address class="contact-info" aria-labelledby="contact-heading">
                <h3 id="contact-heading" class="visually-hidden">
                  Contact Information
                </h3>
                <ul class="contact-list">
                  <li>
                    <a href="mailto:info@company.com" class="email-contact">
                      <svg
                        width="20"
                        height="15"
                        viewBox="-0.5 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.25 4.22425V11.375C0.25 12.7557 1.36929 13.875 2.75 13.875H15.25C16.6307 13.875 17.75 12.7557 17.75 11.375V4.22425L10.3102 8.80256C9.50673 9.29703 8.49327 9.29703 7.68976 8.80256L0.25 4.22425Z"
                          fill="#000000"
                        />
                        <path
                          d="M17.75 2.75652V2.625C17.75 1.24429 16.6307 0.125 15.25 0.125H2.75C1.36929 0.125 0.25 1.24429 0.25 2.625V2.75652L8.34488 7.73799C8.74664 7.98522 9.25336 7.98522 9.65512 7.73799L17.75 2.75652Z"
                          fill="#000000"
                        />
                      </svg>
                      <span class="contact-text">info@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/+918920799458?text=${textmsg}`}
                      class="whatsapp-contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="1 1 22 22"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>whatsapp_line</title>{" "}
                          <g
                            id="页面-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            {" "}
                            <g
                              id="Brand"
                              transform="translate(-864.000000, -0.000000)"
                              fill-rule="nonzero"
                            >
                              {" "}
                              <g
                                id="whatsapp_line"
                                transform="translate(864.000000, 0.000000)"
                              >
                                {" "}
                                <path
                                  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                  id="MingCute"
                                  fill-rule="nonzero"
                                >
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C10.2363733,22 8.57708836,21.5426667 7.13692151,20.7397113 L6.83171,20.5624 L3.79975,21.4542 C3.06935952,21.6690571 2.38822075,21.0329392 2.51987109,20.3093059 L2.54581,20.2002 L3.43756,17.1683 C2.52505,15.6594 2,13.8896 2,12 C2,6.47715 6.47715,2 12,2 Z M12,4 C7.58172,4 4,7.58172 4,12 C4,13.5769 4.4552,15.0444 5.24098,16.2818 C5.43935125,16.5942625 5.52373625,16.9780813 5.45651889,17.3588949 L5.41832,17.5217 L4.97667,19.0233 L6.47827,18.5817 C6.91075,18.4545 7.36114,18.5323 7.71817,18.759 C8.95564,19.5448 10.4231,20 12,20 C16.4183,20 20,16.4183 20,12 C20,7.58172 16.4183,4 12,4 Z M9.10162,7.18408 C9.31746,7.09158 9.57889,7.1085 9.78556,7.25926 C10.2899867,7.62722 10.6904844,8.12075778 11.0344133,8.6034437 L11.36124,9.0774594 C11.4131531,9.15417481 11.4639333,9.22932556 11.5138,9.30228 C11.69632,9.569211 11.675287,9.9238974 11.4684886,10.165959 L11.3927,10.2422 L10.4693,10.928 C10.3778,10.996 10.3473,11.1195 10.4022,11.2195 C10.6112,11.5998 10.9834,12.1657 11.4093,12.5916 C11.8357,13.018 12.4284,13.4143 12.8348,13.6467 C12.9226333,13.69695 13.0293556,13.6810889 13.1010315,13.6156676 L13.1394,13.5706 L13.7402,12.6555 C13.9705,12.349 14.4007,12.282 14.7134,12.4984 L15.2562641,12.876825 C15.7957063,13.2618187 16.315025,13.675725 16.7255,14.2014 C16.8872,14.4085 16.9112,14.6792 16.8148,14.9042 C16.4188,15.8283 15.4165,16.6153 14.374,16.5769 L14.2154519,16.5677643 L14.2154519,16.5677643 L14.0235335,16.5487562 C13.9888929,16.5445999 13.9529568,16.5399081 13.9157727,16.5346187 L13.6780718,16.4952138 C12.7543753,16.3207908 11.2726031,15.7970103 9.73827,14.2627 C8.20396724,12.7283897 7.68016555,11.2465654 7.50573193,10.3228642 L7.46632442,10.0851634 L7.46632442,10.0851634 L7.44126064,9.87741745 L7.44126064,9.87741745 L7.42756026,9.70190572 C7.42605824,9.67546659 7.42490552,9.65046552 7.42404,9.62695 C7.38562,8.58294 8.17688,7.5804 9.10162,7.18408 Z"
                                  id="形状"
                                  fill="#000000"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                      <span class="contact-text">WhatsApp</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/craftyydrafty?igsh=MzBqeTJvcmhpMGdx"
                      class="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="5 3.5 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <rect
                            x="15.5"
                            y="9"
                            width="2"
                            height="2"
                            rx="1"
                            transform="rotate(-90 15.5 9)"
                            fill="#000000"
                          ></rect>{" "}
                          <rect
                            x="16"
                            y="8.5"
                            width="1"
                            height="1"
                            rx="0.5"
                            transform="rotate(-90 16 8.5)"
                            stroke="#000000"
                            stroke-linecap="round"
                          ></rect>{" "}
                        </g>
                      </svg>
                      <span class="contact-text">Instagram</span>
                    </a>
                  </li>
                  <li class="physical-address">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.61646 17.6259C6.64163 17.6405 6.66141 17.6517 6.67542 17.6596L6.69869 17.6726C6.88441 17.7745 7.1148 17.7738 7.3007 17.6729L7.32458 17.6596C7.33859 17.6517 7.35837 17.6405 7.38354 17.6259C7.43388 17.5967 7.50581 17.5542 7.59625 17.4985C7.77705 17.3872 8.03229 17.223 8.33718 17.0076C8.94591 16.5776 9.75812 15.9395 10.5721 15.1061C12.1922 13.4474 13.875 10.9551 13.875 7.75C13.875 3.95304 10.797 0.875 7 0.875C3.20304 0.875 0.125 3.95304 0.125 7.75C0.125 10.9551 1.80777 13.4474 3.42788 15.1061C4.24188 15.9395 5.05409 16.5776 5.66282 17.0076C5.96771 17.223 6.22295 17.3872 6.40375 17.4985C6.49419 17.5542 6.56612 17.5967 6.61646 17.6259ZM7 10.25C8.38071 10.25 9.5 9.13071 9.5 7.75C9.5 6.36929 8.38071 5.25 7 5.25C5.61929 5.25 4.5 6.36929 4.5 7.75C4.5 9.13071 5.61929 10.25 7 10.25Z"
                        fill="#000000"
                      />
                    </svg>
                    <p class="address-text">
                      Ghaziabad
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </li>
                </ul>
              </address>
            </section>

            <nav class="footer-nav-1" aria-labelledby="services-heading">
              <h2 id="services-heading" class="nav-heading">
                Our Services
              </h2>
              <ul class="nav-list">
                <li class="nav-item">
                  <a href="/service1" class="nav-link">
                    Service One
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/service2" class="nav-link">
                    Service Two
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/service3" class="nav-link">
                    Service Three
                  </a>
                </li>
              </ul>
            </nav>

            <nav class="footer-nav-2" aria-labelledby="resources-heading">
              <h2 id="resources-heading" class="nav-heading">
                Resources
              </h2>
              <ul class="nav-list">
                <li class="nav-item">
                  <a href="/blog" class="nav-link">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/faq" class="nav-link">
                    FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/support" class="nav-link">
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="copyright-notice" role="contentinfo">
            <p>
              &copy; <time datetime="2025">2025</time> CraftyyDrafty. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
      <div className="company-name-typography">
        <h2>CRAFTYYDRAFTY</h2>
      </div>
    </>
  );
}

export default Footer;
