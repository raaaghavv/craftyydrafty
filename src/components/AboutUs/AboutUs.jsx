import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <section id="about-us">
        <div className="introduction">
          <svg
            className="introductionBox-abstract"
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_403_499)">
              <path
                d="M0 24.9957L24.9957 0H49.9914V24.9957L24.9957 49.9914H0V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M49.9914 0H24.9957V24.9957H49.9914V0Z" fill="#262626" />
              <path
                d="M0 75.0043L24.9957 49.9915H49.9914V75.0043L24.9957 100H0V75.0043Z"
                fill="#FFBE99"
              />
              <path
                d="M49.9914 49.9915H24.9957V74.9872H49.9914V49.9915Z"
                fill="#262626"
              />
              <path
                d="M0 124.996L24.9957 100H49.9914V124.996L24.9957 149.991H0V124.996Z"
                fill="#FFBE99"
              />
              <path
                d="M49.9914 100H24.9957V124.996H49.9914V100Z"
                fill="#262626"
              />
              <path
                d="M0 174.987L24.9957 149.991H49.9914V174.987L24.9957 200H0V174.987Z"
                fill="#FFBE99"
              />
              <path
                d="M49.9914 149.991H24.9957V174.987H49.9914V149.991Z"
                fill="#262626"
              />
              <path
                d="M49.9914 24.9957L75.0043 0H100V24.9957L75.0043 49.9914H49.9914V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M100 0H75.0043V24.9957H100V0Z" fill="#262626" />
              <path
                d="M49.9914 75.0043L75.0043 49.9915H100V75.0043L75.0043 100H49.9914V75.0043Z"
                fill="#FFBE99"
              />
              <path
                d="M100 49.9915H75.0043V74.9872H100V49.9915Z"
                fill="#262626"
              />
              <path
                d="M49.9914 124.996L75.0043 100H100V124.996L75.0043 149.991H49.9914V124.996Z"
                fill="#FFBE99"
              />
              <path d="M100 100H75.0043V124.996H100V100Z" fill="#262626" />
              <path
                d="M100 24.9957L124.996 0H149.991V24.9957L124.996 49.9914H100V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M149.991 0H124.996V24.9957H149.991V0Z" fill="#262626" />
              <path
                d="M149.991 24.9957L174.987 0H200V24.9957L174.987 49.9914H149.991V24.9957Z"
                fill="#FFBE99"
              />
              <path d="M199.983 0H174.987V24.9957H199.983V0Z" fill="#262626" />
              <path
                d="M100 75.0043L124.996 49.9915H149.991V75.0043L124.996 100H100V75.0043Z"
                fill="#FFBE99"
              />
              <path
                d="M149.991 49.9915H124.996V74.9872H149.991V49.9915Z"
                fill="#262626"
              />
            </g>
            <defs>
              <clipPath id="clip0_403_499">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="welcome-note">
            <h1>Welcome to CraftyyDrafty</h1>
          </div>
          <div className="company-description">
            <p>
              Your ultimate destination for unleashing creativity and perfecting
              presentation. Born from a founder's personal journey to build her
              own identity through a passion for craft, we are a dedicated space
              committed to providing a nurturing and stimulating environment for
              all who seek to explore the art of making and thoughtful design.
              <br />
              <br />
              Committed to excellence, we believe in sparking imagination and
              fostering a lifelong passion for creation. We achieve this through
              engaging online workshops that empower skill development and
              artistic discovery, alongside expertly designed packing services
              that transform every item into a beautifully presented,
              unforgettable experience. Ultimately, we aim to nurture personal
              fulfillment and the joy of giving, helping you reach your full
              creative potential.
            </p>
          </div>
        </div>
      </section>

      <section className="about-us-image-container">
        <img src="about-us-1.jpg" alt="craftyydrafty's founder image" />
        <img src="about-us-2.jpg" alt="craftyydrafty's founder image" />
      </section>

      <section className="OurMission_Vision-section">
        <div className="section-heading">
          <h2>Our Mission & Vision</h2>
          <p>
            Fostering artistic growth through engaging workshops and elevating
            every gift with our bespoke packaging.
          </p>
        </div>
        <div className="card-wrapper">
          <div id="mission">
            <div className="card-top-heading">
              <h2>Mission</h2>
              <svg
                className="card-abstract"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_164_31902)">
                  <path
                    d="M37.7068 36.4307C40.0637 40.7359 42.3643 44.9325 44.6608 49.1291C46.3636 52.2428 48.0644 55.3586 49.7571 58.4763C50.373 59.6095 50.1456 59.9959 48.8635 59.9959C36.791 59.9999 24.7185 59.9999 12.6461 59.9959C11.4666 59.9959 11.209 59.5954 11.7524 58.5991C15.953 50.8983 20.1617 43.2016 24.3683 35.5068C24.4327 35.3901 24.5233 35.2895 24.6441 35.1224C25.6907 35.7302 26.2925 37.4129 27.7055 36.9701C28.8386 36.6138 29.7806 35.6517 31.0406 34.8024C31.5881 35.3941 32.2905 36.1932 33.0372 36.948C34.6253 38.5541 35.4847 38.5541 37.0808 37.0003C37.2459 36.8393 37.421 36.6903 37.7068 36.4327V36.4307Z"
                    fill="#262626"
                  />
                  <path
                    d="M34.0615 2.08118H51.2464C50.9988 2.4475 50.8639 2.69104 50.6868 2.90036C49.5818 4.20463 48.4587 5.49278 47.3577 6.79906C46.3815 7.9584 46.3956 9.07145 47.3819 10.2348C48.6358 11.7102 49.8978 13.1775 51.3067 14.8199H34.0615V2.08118Z"
                    fill="#FF9E66"
                  />
                  <path
                    d="M9.10552 59.9235H0.56543C4.07767 53.6438 7.49331 47.5411 10.913 41.4264C12.3917 42.5374 14.0173 42.4522 15.7899 41.1708C15.82 41.1849 15.8563 41.1929 15.8804 41.213C17.2169 42.3442 17.4671 43.672 16.6312 45.1963C14.4151 49.2459 12.181 53.2855 10.0052 57.3553C9.59663 58.1201 9.41749 59.0077 9.10552 59.9215V59.9235Z"
                    fill="#262626"
                  />
                  <path
                    d="M45.6051 40.9855C47.442 42.4803 49.1267 42.6246 50.6591 41.4183C54.0787 47.535 57.4903 53.6357 61.0006 59.9134H52.4907C52.1425 58.9594 51.9231 58.0234 51.4823 57.2022C49.0972 52.75 46.6718 48.32 44.2223 43.904C43.8721 43.272 43.8419 42.8735 44.4256 42.3824C44.8785 42.002 45.2045 41.4686 45.6051 40.9835V40.9855Z"
                    fill="#262626"
                  />
                  <path
                    d="M36.6677 34.5226C36.1303 34.9876 35.6251 35.4244 34.9589 36.004C34.1558 35.1526 33.3165 34.2167 32.4269 33.3291C31.3078 32.214 30.229 32.2462 29.1179 33.3653C28.6288 33.8564 28.1317 34.3435 27.4554 35.0158C26.9784 34.4603 26.4893 33.9551 26.0908 33.3875C25.9458 33.1801 25.8915 32.7555 26.0062 32.5421C27.3085 30.0946 28.6369 27.6612 29.9894 25.2399C30.4765 24.3683 31.1206 24.3965 31.6218 25.3063C33.2843 28.3173 34.9267 31.3385 36.6677 34.5247V34.5226Z"
                    fill="#FF9E66"
                  />
                  <path
                    d="M31.813 22.5126H29.7197V21.5082C29.7197 14.9024 29.7197 8.29654 29.7218 1.69271C29.7218 1.3586 29.6473 0.954036 29.8043 0.708481C30.0116 0.388454 30.4242 -0.0140957 30.7301 -6.42508e-06C31.0965 0.0181083 31.4789 0.402543 31.7788 0.704455C31.9056 0.831258 31.8533 1.1533 31.8533 1.38678C31.8573 8.22609 31.8553 15.0674 31.8533 21.9067C31.8533 22.102 31.8271 22.2952 31.811 22.5126H31.813Z"
                    fill="#FF9E66"
                  />
                  <path
                    d="M15.7256 32.8843C16.0818 33.4297 16.2932 33.7155 16.4663 34.0235C17.3398 35.5693 18.1992 37.1211 19.0687 38.6669C19.4968 39.4291 19.4391 40.1718 18.8956 40.895C17.9658 40.2167 17.1224 39.313 16.0858 38.9185C14.8037 38.4334 14.1456 39.8101 13.1311 40.5569C12.8232 40.1543 12.5213 39.7618 12.1328 39.2526C13.2418 37.2862 14.4253 35.1889 15.7256 32.8802V32.8843Z"
                    fill="#262626"
                  />
                  <path
                    d="M49.5057 39.3814C49.1273 39.796 48.7932 40.1604 48.4732 40.5106C46.6577 39.2036 44.7449 39.3593 42.7348 40.9775C42.0505 40.2811 41.9015 39.6008 42.4711 38.691C43.4111 37.1875 44.2222 35.6055 45.0937 34.0597C45.2689 33.7498 45.4721 33.4559 45.8365 32.8802C46.5349 34.1 47.1246 35.1164 47.7023 36.1389C48.294 37.1875 48.8757 38.2442 49.5057 39.3814Z"
                    fill="#262626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_164_31902">
                    <rect
                      width="60.4348"
                      height="60"
                      fill="white"
                      transform="translate(0.56543)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>
              At CraftyyDrafty, our mission is to inspire a passion for creative
              expression and empower individuals to become confident, skillful,
              and imaginative makers. Through our engaging online workshops and
              bespoke packing services, we strive to create a welcoming and
              inclusive space where every idea flourishes and every creation is
              beautifully presented, setting the stage for a fulfilling artistic
              journey.
            </p>
          </div>
          <div id="vision">
            <div className="card-top-heading">
              <h2>Vision</h2>
              <svg
                className="card-abstract"
                width="81"
                height="60"
                viewBox="0 0 81 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_164_31915)">
                  <path
                    d="M73.3778 20.9666C71.0694 20.1899 68.8264 19.1842 66.4798 18.6936C60.5384 17.4536 54.8613 18.4484 49.8548 21.8878C47.9606 23.1906 46.5652 25.2401 45.0035 27.0034C43.6572 28.5242 42.398 30.124 40.989 31.8247C39.52 30.0859 38.1873 28.3825 36.7183 26.8018C34.9358 24.8858 33.3251 22.5992 31.1421 21.3128C24.4348 17.3527 17.376 17.3091 10.2926 20.5224C9.81024 20.7404 9.33875 20.983 8.5293 21.3782C9.40961 19.5413 10.14 18.0123 10.8759 16.4833C11.4646 15.2569 12.1895 14.0795 12.6201 12.8013C13.8738 9.09746 16.9318 7.56033 20.2895 6.88442C24.6201 6.01502 28.9154 6.51377 32.5756 9.3591C33.1834 9.8306 33.6494 10.6782 33.8538 11.4386C34.2763 13.0003 34.478 14.6246 34.835 16.5624C35.8052 16.3089 36.7264 16.2053 37.5223 15.832C39.9479 14.6982 42.3054 14.6192 44.6901 15.9219C45.1425 16.1699 45.6876 16.2789 46.2027 16.3716C47.0885 16.5324 47.5 16.1808 47.5654 15.216C47.6499 13.9542 47.8134 12.6759 48.1432 11.4604C48.3422 10.7245 48.7782 9.93144 49.3451 9.43269C52.8309 6.35842 57.0062 6.29028 61.2933 6.90078C62.1382 7.02069 62.9695 7.29051 63.7844 7.56305C66.1418 8.35342 68.0033 9.62892 69.039 12.0818C70.1455 14.7064 71.5627 17.1974 72.8382 19.7511C73.0508 20.1763 73.2252 20.6178 73.3805 20.9694L73.3778 20.9666Z"
                    fill="#262626"
                  />
                  <path
                    d="M39.1298 41.0202C39.0835 51.6167 30.6265 60.0246 20.041 59.9973C9.4882 59.9701 0.95765 51.4477 0.965826 40.9439C0.974002 30.4211 9.72531 21.7243 20.1827 21.8415C30.7628 21.9587 39.1734 30.4756 39.1298 41.0202ZM20.0683 53.4454C27.1162 53.4454 32.8096 47.7629 32.7987 40.7368C32.7878 33.6725 27.1271 28.0391 20.0465 28.0445C13.0994 28.05 7.43596 33.7216 7.3978 40.7095C7.35965 47.7793 12.9958 53.4427 20.0655 53.4454H20.0683Z"
                    fill="#FF9E66"
                  />
                  <path
                    d="M42.8389 40.9357C42.8443 30.3911 51.3503 21.8578 61.8704 21.8415C72.3388 21.8251 80.9429 30.3938 81.0001 40.8948C81.0601 51.4313 72.4369 60.03 61.8432 60.0027C51.2495 59.9727 42.8334 51.5294 42.8389 40.9384V40.9357ZM74.5681 40.7667C74.5681 33.648 68.9729 28.039 61.8786 28.0472C54.8798 28.0527 49.1482 33.8115 49.1673 40.8185C49.1864 47.7765 54.8634 53.4372 61.8405 53.4481C68.9293 53.4617 74.5654 47.8419 74.5654 40.7667H74.5681Z"
                    fill="#FF9E66"
                  />
                  <path
                    d="M63.3673 3.52401C58.6714 2.34118 54.2889 2.6328 50.0264 4.63053C50.4297 2.66278 52.6373 0.746813 54.9485 0.278042C58.3007 -0.403312 61.4949 0.763165 63.3673 3.52674V3.52401Z"
                    fill="#262626"
                  />
                  <path
                    d="M18.7705 3.107C20.3703 1.05748 22.5343 -0.138972 25.2461 0.0136514C28.2577 0.182627 30.5525 1.6489 32.0133 4.32253C29.8221 3.84831 27.6826 3.17241 25.4996 2.97618C23.2811 2.7745 21.0217 3.04431 18.7705 3.107Z"
                    fill="#262626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_164_31915">
                    <rect
                      width="80.0345"
                      height="60"
                      fill="white"
                      transform="translate(0.96582)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p>
              Our vision is to be the leading hub for artistic innovation,
              empowering creators to explore, refine, and beautifully present
              their unique craftsmanship. Through our immersive workshops and
              exceptional packing services, we aim to cultivate a generation of
              passionate makers, driven by imaginative thinking, meticulous
              execution, and a profound appreciation for beauty in all its
              forms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
